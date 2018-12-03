import React from "react";
import { Spring } from "react-spring";

const ImageCard = ({ image, alt, delay, reload }) => {
  return (
    <Spring
      reset={true}
      delay={delay}
      from={{ transform: "translate3d(0,-40px,0)", opacity: 0 }}
      to={{ transform: "translate3d(0,0,0)", opacity: 1 }}
    >
      {props => <img style={props} className="listImg" src={image} alt={alt} />}
    </Spring>
  );
};

export default ImageCard;
