import React from "react";
import { ParallaxLayer } from "react-spring/dist/addons";

const ImagePage = ({ backgroundImage, image, header, offset, onClick }) => {
  return (
    <React.Fragment>
      <ParallaxLayer
        onClick={onClick}
        offset={offset}
        className="imagePageBackground"
        style={{ backgroundImage: "url(" + backgroundImage + ")" }}
      />
      <ParallaxLayer
        onClick={onClick}
        speed={0.8}
        offset={offset}
        className="imagePageHeader"
      >
        {header}
      </ParallaxLayer>
      <ParallaxLayer
        speed={0.3}
        className={"imagePageHolder"}
        onClick={onClick}
        offset={offset}
      >
        <img className="imagePageImage" alt="us at the market" src={image} />
      </ParallaxLayer>
    </React.Fragment>
  );
};

export default ImagePage;
