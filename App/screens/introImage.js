import React, { useState, useEffect } from "react";
import { View, StyleSheet, Image, TouchableHighlight } from "react-native";
import { Input, Text, Item, Button, Form } from "native-base";
import axios from "axios";
import * as ImagePicker from "expo-image-picker";
import Constants from "expo-constants";
import * as Permissions from "expo-permissions";
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
  uploadArea: {
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: "#61dafb",
    marginBottom: 24,
  },
  logo: {
    width: 160,
    height: 160,
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
  const [image, setImage] = useState(null);
  useEffect(() => {
    getPermissionAsync();
  });
  const uploadImage = async () => {
    const apiHost = "http://localhost:8000/api";
    try {
      const res = await axios.post(`${apiHost}/auth/post`, {});
    } catch (e) {
      console.log(e);
    }
  };

  const getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
      }
    }
  };

  const pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      if (!result.cancelled) {
        setImage({ image: result.uri });
      }

      console.log(image.image);
    } catch (E) {
      console.log(E);
    }
  };

  return (
    <ScreenContainer>
      <View style={styles.logoWrap}>
        <Text style={styles.introHead}>最後に画像をアップしましょう</Text>
        <Text style={styles.introHead}>デートへのお誘いが格段に増えます</Text>
        <Button style={styles.uploadArea} onPress={pickImage}></Button>
        {image ? (
          <Image source={{ uri: image.image }} style={styles.logo} />
        ) : (
          <View />
        )}
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
