import React from "react";
import { ParallaxLayer } from "react-spring/dist/addons";
import { Spring } from "react-spring";

const Page = ({ bodyText, offset, onClick, image, header, subHeader }) => (
  <React.Fragment>
    <ParallaxLayer
      onClick={onClick}
      offset={offset}
      speed={0.6}
      className="pageHeader"
    >
      <Spring
        reset={true}
        delay={300}
        config={{ tension: 120, friction: 12 }}
        from={{ transform: "translate3d(0,-40px,0)", opacity: 0 }}
        to={{ transform: "translate3d(0,0,0)", opacity: 1 }}
      >
        {props => (
          <div style={props}>
            {header}
            <span style={{ fontWeight: 100 }}>{subHeader}</span>
          </div>
        )}
      </Spring>
    </ParallaxLayer>
    <ParallaxLayer
      offset={offset}
      speed={0}
      onClick={onClick}
      className="pageBackground"
      style={{ backgroundImage: "url(" + image + ")" }}
    />
    <ParallaxLayer
      offset={offset}
      speed={0}
      onClick={onClick}
      className="pageBody"
    >
      <Spring
        reset={true}
        delay={400}
        config={{ tension: 120, friction: 32 }}
        from={{ transform: "translate3d(0,-40px,0)", opacity: 0 }}
        to={{ transform: "translate3d(0,0,0)", opacity: 1 }}
      >
        {props => (
          <div className="bodyText" style={props}>
            {bodyText}
          </div>
        )}
      </Spring>
    </ParallaxLayer>
  </React.Fragment>
);

export default Page;
