import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { Card, CardItem, Text, Body, Button } from "native-base";
import { FlatGrid } from "react-native-super-grid";

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

export const Home = ({ navigation }) => (
  <ScreenContainer>
    <FlatGrid
      itemDimension={130}
      items={items}
      style={styles.gridView}
      // staticDimension={300}
      // fixed
      // spacing={20}
      renderItem={({ item, index }) => (
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
              {item.age}歳 {item.place}
            </Text>
          </CardItem>
        </Card>
      )}
    />
  </ScreenContainer>
);
