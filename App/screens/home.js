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
});

const ScreenContainer = ({ children }) => (
  <View style={styles.container}>{children}</View>
);

const items = [
  { name: "あゆみ" },
  { name: "リリー" },
  { name: "まさひろ" },
  { name: "文彦" },
  { name: "ひでき" },
  { name: "たける" },
  { name: "池内" },
  { name: "加藤" },
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
            onPress={() => navigation.push("Details", { name: item.name })}
          >
            <Text>{item.name}</Text>
          </CardItem>
        </Card>
      )}
    />
  </ScreenContainer>
);
