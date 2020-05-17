import React from "react";
import { StyleSheet, Button, Image } from "react-native";
import { View, Card, CardItem, Text } from "native-base";
import { FlatGrid } from "react-native-super-grid";
import { ceil } from "react-native-reanimated";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardWrap: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: 150,
    height: 150,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  image: {
    width: 150,
    height: 120,
  },
});

const ScreenContainer = ({ children }) => (
  <View style={styles.container}>{children}</View>
);

export const Timeline = ({ navigation }) => (
  <ScreenContainer>
    <Image
      source={{
        uri: "https://source.unsplash.com/user/chrisjoelcampbell",
      }}
      style={{ maxHeight: 400, width: null, flex: 1 }}
    />
    <Text>27歳　エミリー　年収800万円</Text>
    <View style={styles.cardWrap}>
      <Card style={styles.card}>
        <CardItem cardBody>
          <Image
            source={{ uri: "https://source.unsplash.com/random" }}
            style={styles.image}
          />
        </CardItem>
        <CardItem footer>
          <Text>叙々苑・新宿</Text>
        </CardItem>
      </Card>
    </View>
  </ScreenContainer>
);
