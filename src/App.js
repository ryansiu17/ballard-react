import React, { Component } from "react";
import "./App.scss";
import Page from "./Page";
import ImagePage from "./ImagePage";
import ballardLocks from "./img/ballardLocks.jpg";
import ballardStreet from "./img/ballardStreet.jpg";
import ballardLumber from "./img/ballardLumber.jpg";
import ballardNordicMuseum from "./img/ballardNordicMuseum.jpg";
import ballardBuildings from "./img/ballardBuildings.jpg";
import ballardBell from "./img/ballardBell.jpg";
import ballardOld from "./img/ballardOld.jpg";
import us from "./img/us.jpg";
import { Parallax } from "react-spring/dist/addons";

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
        pages={6}
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
            "We went to Ballard during the Sunday farmers market. What surprised us the most was how many Scandinavian references downtown had, such as Nordic flags next to the market, the Nordic Museum, and a mural depicting Vikings. This However, made sense because Ballard has had a large population of Scandinavians immigrating to the area around the turn of the 20th century. "
          }
        />
        <ImagePage
          backgroundImage={ballardBuildings}
          image={us}
          offset={2}
          header={"The Farmers Market"}
          onClick={() => this.scroll(3)}
        />
        <Page
          image={ballardLumber}
          offset={3}
          header={"Industry"}
          subHeader={" - Group Topic"}
          onClick={() => this.scroll(4)}
          bodyText={
            "Ballard’s main industry was initially lumber. As time went on, the maritime industry grew and became a major part of Ballard. Since the 1930s, Ballard has made a focus on growing small businesses around downtown. In the present, Ballard’s lumber industry has become very small while both the maritime industry, small stores, restaurants, and other small business have flourished. "
          }
        />
        <Page
          image={ballardOld}
          offset={4}
          header={"Local"}
          subHeader={" History"}
          onClick={() => this.scroll(5)}
          bodyText={
            'Though people often emphasize the Scandinavian accent of Ballard, the city was built and named before those North immigrants arrived. In 1852, Ira Utter filed the first homestead claim of the future Ballard. Before that, the place was populated by Native Americans. The city’s name was the surname of William Ballard, who took possession of this "worthless" land and managed to make it flourish.'
          }
        />
        <Page
          image={ballardBell}
          offset={5}
          header={""}
          subHeader={" "}
          onClick={() => this.scroll(0)}
          bodyText={
            "Meanwhile, tensions between states and the fear of Bismarck Germany, famine and unrest in Norway made people migration to the United States. Since then Ballard has a strong relation with Scandinavian countries. There are a new Nordic Heritage Museum and flags of Nordic countries in the center of the city. It also has Bergen Park honoring her sister city, Bergen, Norway, dedicated by King Olav V of Norway. Another royal personage is King Carl XVI Gustav of Sweden, who dedicated the city bell."
          }
        />
      </Parallax>
    );
  }
}

export default App;
