import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import RenderCat from "../components/common/RenderCat";

const Home = () => {
  const [screenTitle, setScreenTitle] = useState("Cats List");
  const [catsJson, setCatJson] = useState([]);

  useEffect(() => {
    fetch("https://cataas.com/api/cats?limit=20")
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setCatJson(json)
      });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{screenTitle}</Text>
      </View>

      <FlatList
        data={catsJson}
        renderItem={(cat) => <RenderCat catId={cat?.item?.id} />}
        // contentContainerStyle={styles.listContainer}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    paddingTop: 50,
    paddingBottom: 10,
    borderWidth: 1,
    borderBottomColor: "#9a9a9a",
  },
  title: {
    textAlign: "center",
  },
  listContainer: {
    flex: 1,
  },
});

export default Home;
