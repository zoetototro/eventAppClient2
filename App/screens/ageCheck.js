import React, { useState } from "react";
import { View, TextInput, StyleSheet, Image } from "react-native";
import { AuthContext } from "./../context";
import { Input, Text, Item, Icon, Button } from "native-base";
import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";
const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
    alignItems: "center",
    textAlign: "center",
    position: "relative",
    height: vh(100),
  },
  head: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 16,
  },
  subHead: {
    marginBottom: 16,
  },
  imagesWrap: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  ageCheckImage: {
    width: 100,
    height: 120,
  },
  stepWrap: {
    marginBottom: 32,
  },
  ageCheckButton: {
    position: "absolute",
    bottom: 24,
  },
  margin: {
    marginBottom: 16,
  },
});

const ScreenContainer = ({ children }) => (
  <View style={styles.container}>{children}</View>
);

export const AgeCheck = ({ navigation }) => {
  const { signIn } = React.useContext(AuthContext);

  return (
    <ScreenContainer>
      <Text>
        Matchiではトラブル防止の為、日程提案の事前段階で18歳以上であることの確認をしています。
      </Text>
      <Text style={styles.head}>年齢確認で必要な物</Text>
      <Text style={styles.subHead}>以下のいずれか一点のみ</Text>
      <View style={styles.imagesWrap}>
        <View>
          <Text>運転免許証</Text>
          <Image
            style={styles.ageCheckImage}
            resizeMode="contain"
            source={require("../../assets/images/passport.png")}
          />
        </View>
        <View>
          <Text>パスポート</Text>
          <Image
            style={styles.ageCheckImage}
            resizeMode="contain"
            source={require("../../assets/images/passport.png")}
          />
        </View>
        <View>
          <Text>健康保険証</Text>
          <Image
            style={styles.ageCheckImage}
            resizeMode="contain"
            source={require("../../assets/images/passport.png")}
          />
        </View>
      </View>
      <Text style={styles.head}>簡単2step</Text>
      <View style={styles.stepWrap}>
        <View>
          <Text>撮影</Text>
          <Icon name="camera" />
        </View>
        <View>
          <Text>審査</Text>
          <Icon name="camera" />
        </View>
      </View>
      <Text style={styles.margin}>
        撮影は、生年月日・書類名称・発行元がハッキリと見えるように撮影してください
      </Text>
      <Text style={styles.margin}>審査は順次、迅速に対応いたします。</Text>
      <Button>
        <Text>年齢確認を始める</Text>
      </Button>
    </ScreenContainer>
  );
};
