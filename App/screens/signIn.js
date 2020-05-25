import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Image,
  TouchableHighlight,
} from "react-native";
import { AuthContext } from "./../context";
import { Input, Text, Item, Button } from "native-base";
import { vw } from "react-native-expo-viewport-units";

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
    backgroundColor: "#fff",
  },
  logoWrap: {
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 240,
    height: 240,
  },
  item: {
    width: vw(100),
    fontSize: 14,
  },
  itemWrap: {
    marginVertical: 16,
  },
  register: {
    fontSize: 14,
    color: "#0179fe",
  },
  login: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
  },
});

const ScreenContainer = ({ children }) => (
  <View style={styles.container}>{children}</View>
);

export const SignIn = ({ navigation }) => {
  const { signIn } = React.useContext(AuthContext);

  return (
    <ScreenContainer>
      <View style={styles.logoWrap}>
        <Image
          style={styles.logo}
          resizeMode="contain"
          source={require("../../assets/images/logo.png")}
        />
      </View>
      <Item regular>
        <Input style={styles.item} placeholder="メールアドレス" />
      </Item>
      <Item regular style={styles.itemWrap}>
        <Input style={styles.item} placeholder="パスワード" />
      </Item>
      <View>
        <Button style={styles.login} onPress={() => signIn()}>
          <Text>ログイン</Text>
        </Button>
        <TouchableHighlight onPress={() => navigation.push("CreateAccount")}>
          <Text style={styles.register}>新規会員登録</Text>
        </TouchableHighlight>
      </View>
    </ScreenContainer>
  );
};
