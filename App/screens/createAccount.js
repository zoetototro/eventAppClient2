import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableHighlight,
  Image,
} from "react-native";
import { AuthContext } from "./../context";
import { Button, Input, Text, Item } from "native-base";
import { vw } from "react-native-expo-viewport-units";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
  item: {
    marginBottom: 8,
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

export const CreateAccount = () => {
  const { signUp } = React.useContext(AuthContext);
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
          <Text>新規会員登録</Text>
        </Button>
        <TouchableHighlight onPress={() => navigation.push("CreateAccount")}>
          <Text style={styles.register}>ログイン</Text>
        </TouchableHighlight>
      </View>
    </ScreenContainer>
  );
};
