import React, { Component } from "react";
import "./App.scss";
import Page from "./Page";
import ballardLocks from "./img/ballardLocks.jpg";
import ballardStreet from "./img/ballardStreet.jpg";
import ballardNordicMuseum from "./img/ballardNordicMuseum.jpg";
import us from "./img/us.jpg";
import { Spring } from "react-spring";
import { Parallax, ParallaxLayer } from "react-spring/dist/addons";

class App extends Component {
  state = {
    springs: [false, false, false]
  };
  scroll = to => {
    this.refs.parallax.scrollTo(to);
  };
  render() {
    return (
      <Parallax
        vertical
        pages={4}
        ref="parallax"
        scrolling={false}
        className="page"
      >
        <Page
          image={ballardLocks}
          offset={0}
          header={"Ballard"}
          subHeader={", Seattle"}
          reload={this.state.springs[0]}
          onClick={() => this.scroll(1)}
          bodyText={
            "Ballard was first settled in the 1850s and was early on known as the Northern Railroad. Because of the fishing and timber industry, the city grew quickly and attracted a large number of immigrants from Scandinavian. Because of debt issues, Ballard was annexed by Seattle in 1905. As time went on Ballard kept growing and became more urban. "
          }
        />
        <Page
          image={ballardStreet}
          offset={1}
          header={"Our"}
          subHeader={" Observations"}
          reload={this.state.springs[1]}
          onClick={() => this.scroll(2)}
          bodyText={
            "We went to Ballard during the farmers market. What surprised us the most was how many Scandinavian references downtown had such as Nordic flags next to the market, the Nordic Museum, and a mural depicting Vikings. This However, made sense because Ballard has had a large population of Scandinavian immigrating to the area around the turn of the 20th century. "
          }
        />
        <Page
          image={ballardNordicMuseum}
          offset={2}
          header={"Population"}
          subHeader={" Health"}
          reload={this.state.springs[2]}
          onClick={() => this.scroll(3)}
        />
        <Page
          image={us}
          offset={3}
          header={"Population"}
          subHeader={" Health"}
          reload={this.state.springs[2]}
          onClick={() => this.scroll(0)}
        />
      </Parallax>
    );
  }
}

export default App;
