import React, { useState, useEffect } from "react";
import { View, StyleSheet, Image } from "react-native";
import { Card, CardItem, Text } from "native-base";
import { FlatGrid } from "react-native-super-grid";
import axios from "axios";
import { AsyncStorage } from "react-native";

const styles = StyleSheet.create({
  container: {},
  card: {
    height: 200,
    backgroundColor: "#ffffff",
  },
  miniText: {
    fontSize: 14,
  },
});

const ScreenContainer = ({ children }) => (
  <View style={styles.container}>{children}</View>
);

const items = [
  { age: 24, description: "初めまして", place: "東京都" },
  { age: 24, description: "初めまして", place: "東京都" },
  { age: 24, description: "初めまして", place: "東京都" },
  { age: 24, description: "初めまして", place: "東京都" },
  { age: 24, description: "初めまして", place: "東京都" },
  { age: 24, description: "初めまして", place: "東京都" },
  { age: 24, description: "初めまして", place: "東京都" },
  { age: 24, description: "初めまして", place: "東京都" },
];

export const Home = ({ navigation }) => {
  const [data, setData] = useState({ hits: [] });
  useEffect(() => {
    getProfile();
  }, []);
  const getProfile = async () => {
    const value = await AsyncStorage.getItem("token");
    console.log("storage", value);
    const apiHost = "http://localhost:8000/api";
    try {
      const res = await axios.get(`${apiHost}/auth/message`, {
        headers: { Authorization: `Bearer ${value}` },
      });
      console.log(res);
      setData(res.data);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <ScreenContainer>
      <FlatGrid
        itemDimension={130}
        items={data}
        style={styles.gridView}
        // staticDimension={300}
        // fixed
        // spacing={20}
        renderItem={({ item }) => (
          <Card style={styles.card}>
            <CardItem cardBody style={styles.image}>
              <Image
                source={{
                  uri: "https://source.unsplash.com/user/chrisjoelcampbell",
                }}
                style={{ height: 180, width: null, flex: 1 }}
              />
            </CardItem>
            <CardItem
              button
              style={styles.itemName}
              onPress={() =>
                navigation.push("Details", { name: item.description })
              }
            >
              <Text style={styles.miniText}>
                {item.name}　{item.prefecture}
              </Text>
            </CardItem>
          </Card>
        )}
      />
    </ScreenContainer>
  );
};
