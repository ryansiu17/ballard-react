import React from "react";
import { ParallaxLayer } from "react-spring/dist/addons";
import { Spring } from "react-spring";

class Page extends React.Component {
  render() {
    return (
      <React.Fragment>
        <ParallaxLayer
          onClick={this.props.onClick}
          offset={this.props.offset}
          speed={0.6}
          className="pageHeader"
        >
          <Spring
            reset={this.props.reload}
            delay={300}
            config={{ tension: 120, friction: 12 }}
            from={{ transform: "translate3d(0,-40px,0)", opacity: 0 }}
            to={{ transform: "translate3d(0,0,0)", opacity: 1 }}
          >
            {props => (
              <div style={props}>
                {this.props.header}
                <span style={{ fontWeight: 100 }}>{this.props.subHeader}</span>
              </div>
            )}
          </Spring>
        </ParallaxLayer>
        <ParallaxLayer
          offset={this.props.offset}
          speed={0.8}
          onClick={this.props.onClick}
          className="pageBackground"
          style={{ backgroundImage: "url(" + this.props.image + ")" }}
        />
        <ParallaxLayer
          offset={this.props.offset}
          speed={0}
          onClick={this.props.onClick}
          className="pageBody"
        >
          <Spring
            reset={true}
            delay={400}
            config={{ tension: 140, friction: 32 }}
            from={{ transform: "translate3d(0,-40px,0)", opacity: 0 }}
            to={{ transform: "translate3d(0,0,0)", opacity: 1 }}
          >
            {props => (
              <div className="bodyText" style={props}>
                {this.props.bodyText}
              </div>
            )}
          </Spring>
        </ParallaxLayer>
      </React.Fragment>
    );
  }
}
export default Page;
