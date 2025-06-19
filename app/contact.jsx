import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

const Contact = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact Meow</Text>

      <Link href="/" style={styles.link}>
        Home Page
      </Link>
    </View>
  );
};

export default Contact;

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
  link: {
    marginVertical: 18,
    borderBottomWidth: 1,
  },
});
