import React, { useState, useEffect } from "react";
import { View, StyleSheet, Image, TouchableHighlight } from "react-native";
import { Input, Text, Item, Button, Form } from "native-base";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../module/auth/index";
import { vw } from "react-native-expo-viewport-units";
import axios from "axios";

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
  uploadArea: {
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: "#61dafb",
    marginBottom: 24,
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
  introHead: {
    width: vw(100),
    fontSize: 14,
    textAlign: "center",
    marginVertical: 16,
  },
});

const ScreenContainer = ({ children }) => (
  <View style={styles.container}>{children}</View>
);

export const IntroImage = ({ navigation }) => {
  return (
    <ScreenContainer>
      <View style={styles.logoWrap}>
        <Text style={styles.introHead}>最後に画像をアップしましょう</Text>
        <Text style={styles.introHead}>デートへのお誘いが格段に増えます</Text>
        <Item style={styles.uploadArea}></Item>
        <Button
          style={styles.login}
          onPress={() => navigation.push("DrawerScreen")}
        >
          <Text>次へ</Text>
        </Button>
      </View>
    </ScreenContainer>
  );
};
