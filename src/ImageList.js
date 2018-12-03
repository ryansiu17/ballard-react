import React from "react";
import { ParallaxLayer } from "react-spring/dist/addons";
import { Spring } from "react-spring";
import ImageCard from "./ImageCard";
import artifact1 from "./img/artifact1.jpg";
import artifact2 from "./img/artifact2.jpg";
import artifact3 from "./img/artifact3.JPG";
import artifact4 from "./img/artifact4.jpg";
import artifact5 from "./img/artifact5.jpg";
import artifact6 from "./img/artifact6.jpg";
import artifact7 from "./img/artifact7.jpg";
import artifact8 from "./img/artifact8.jpg";

const ImageList = ({ header, subHeader, offset, onClick, reload }) => {
  return (
    <React.Fragment>
      <ParallaxLayer
        onClick={onClick}
        offset={offset}
        speed={0.6}
        className="listHeader"
      >
        <Spring
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
        className="listBody"
        offset={offset}
        style={{ backgroundColor: "rgb(29, 29, 36)", zIndex: 600 }}
      >
        <ImageCard
          image={artifact1}
          alt={"artifact1"}
          delay={300}
          reload={reload}
        />
        <ImageCard
          image={artifact2}
          alt={"artifact2"}
          delay={250}
          reload={reload}
        />
        <ImageCard
          image={artifact3}
          alt={"artifact3"}
          delay={400}
          reload={reload}
        />
        <ImageCard
          image={artifact4}
          alt={"artifact4"}
          delay={150}
          reload={reload}
        />
        <ImageCard
          image={artifact5}
          alt={"artifact5"}
          delay={300}
          reload={reload}
        />
        <ImageCard
          image={artifact6}
          alt={"artifact6"}
          delay={200}
          reload={reload}
        />
        <ImageCard
          image={artifact7}
          alt={"artifact7"}
          delay={100}
          reload={reload}
        />
        <ImageCard
          image={artifact8}
          alt={"artifact8"}
          delay={250}
          reload={reload}
        />
      </ParallaxLayer>
    </React.Fragment>
  );
};

export default ImageList;
