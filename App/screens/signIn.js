import React, { useState, useEffect } from "react";
import { View, StyleSheet, Image, TouchableHighlight } from "react-native";
import { Input, Text, Item, Button, Form } from "native-base";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../module/auth/index";
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
  const [email, setEmail] = useState("frfr");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  function handleSubmit() {
    console.log("submit", email);
    if (email && password) {
      dispatch(login(email, password));
    }
  }

  return (
    <ScreenContainer>
      <View style={styles.logoWrap}>
        <Image
          style={styles.logo}
          resizeMode="contain"
          source={require("../../assets/images/logo.png")}
        />
      </View>
      <Form>
        <Item regular>
          <Input
            type="text"
            name="email"
            style={styles.item}
            onChangeText={(value) => setEmail(value)}
            placeholder="メールアドレス"
          />
        </Item>
        <Item regular style={styles.itemWrap}>
          <Input
            type="text"
            name="password"
            style={styles.item}
            onChangeText={(value) => setPassword(value)}
            placeholder="パスワード"
          />
        </Item>
        <View>
          <Button
            style={styles.login}
            onPress={() => {
              handleSubmit();
            }}
          >
            <Text>ログイン</Text>
          </Button>
          <TouchableHighlight onPress={() => navigation.push("CreateAccount")}>
            <Text style={styles.register}>新規会員登録</Text>
          </TouchableHighlight>
        </View>
      </Form>
    </ScreenContainer>
  );
};
