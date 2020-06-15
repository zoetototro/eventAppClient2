import React, { useState, useEffect } from "react";
import { View, StyleSheet, Image, TouchableHighlight } from "react-native";
import { Input, Text, Item, Button, Form } from "native-base";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../module/auth/index";
import { vw } from "react-native-expo-viewport-units";
import axios from "axios";

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log(error.response.status);
    // TODO: アラート
  }
);

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

export const Intro = ({ navigation }) => {
  const [email, setEmail] = useState("frfr");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const signIn = async (email, password) => {
    const apiHost = "http://localhost:8000/api";
    try {
      const res = await axios.post(`${apiHost}/auth/login`, {
        email,
        password,
      });
      const accessToken = res.data.access_token;
      login(accessToken);
      navigation.push("DrawerScreen");
    } catch (e) {
      console.log(e);
    }
  };

  function handleSubmit() {
    if (email && password) {
      signIn(email, password);
    }
  }

  return (
    <ScreenContainer>
      <View style={styles.logoWrap}>
        <Text>Macchiはプランベースのマッチングアプリです。</Text>
        <Image
          style={styles.logo}
          resizeMode="contain"
          source={require("../../assets/images/logo.png")}
        />
      </View>
      <Form>
        <View>
          <Button
            style={styles.login}
            onPress={() => navigation.push("ProfileRegisterStackScreen")}
          >
            <Text>簡単登録</Text>
          </Button>
          <TouchableHighlight
            onPress={() => navigation.push("ProfileRegisterStackScreen")}
          >
            <Text style={styles.register}>
              既にアカウントをお持ちのかたはこちら
            </Text>
          </TouchableHighlight>
        </View>
      </Form>
    </ScreenContainer>
  );
};
