import React from "react";

export default function Image(props) {
  const {imageUrl, alt, width, height} = props


  return (
    // <div className=" pt-6" style={{border:"2px solid red"}}>
      <img src={imageUrl} alt={alt} width={width? width: "300"} height={height}/>
    // </div>
  );
}
