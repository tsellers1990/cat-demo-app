import React, { useState, useEffect } from "react";
import { View, Text, Image, Dimensions } from "react-native";
// import errCat from '../../assets/err

const RenderCat = ({ catId }) => {
  const [imageHeight, setImageHeight] = useState(0);
  const imageURI = "https://cataas.com/cat/" + catId;
  const WIDTH = Dimensions.get("window").width / 2 - 10;

  Image.getSize(imageURI, (width, height) => {
    console.log((WIDTH / width) * height);
    setImageHeight((WIDTH / width) * height);
  });

  //   useEffect(() => {
  //       fetch("https://cataas.com/cat/" + catId).then(data => {
  //           const typeOfData = typeof data
  //           const stringData = JSON.stringify(data)
  //         //   console.log({catId, typeOfData, stringData})

  //       })
  //   }, []);

  return (
    <Image
      source={{ uri: imageURI }}
      style={{
        height: imageHeight,
        width: WIDTH,
        margin: 5,
      }}
      resizeMode="contain"
    />
  );
};

export default RenderCat;
