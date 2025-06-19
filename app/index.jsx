import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
// import lightCat from "../assets/img/4.jpg";
import darkCat from "../assets/img/2.jpg";
import { Link } from "expo-router";
// import darkCat from "../assets/icon.png";

const Home = () => {
  return (
    <View style={styles.container}>
      <Image source={darkCat} style={styles.img} />
      <Text style={styles.title}>The catto</Text>
      <Text style={{ marginTop: 10, marginBottom: 10 }}>is here</Text>
      <Text style={styles.card}>Beware</Text>

      <Link href="/about" style={styles.link}>
        {" "}
        About Meow{" "}
      </Link>
      <Link href="/contact" style={styles.link}>
        {" "}
        Contact Meow{" "}
      </Link>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
  },
  card: {
    backgroundColor: "#eee",
    padding: 15,
    borderRadius: 5,
    boxShadow: "4px 4px rgba(0, 0, 0, 0.1)",
  },
  img: {
    marginVertical: 20,
    boxSizing: "border-box",
    width: 150,
    height: 150,
    borderRadius: 100,
    borderWidth: 2,
  },
  link: {
    // marginTop: 20,
    marginVertical: 10,
    borderBottomWidth: 1,
  },
});
