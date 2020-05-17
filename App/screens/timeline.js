import React, { Component, useState } from "react";
import {
  StyleSheet,
  Button,
  Image,
  Modal,
  TouchableHighlight,
} from "react-native";
import { View, Card, CardItem, Text } from "native-base";
import { FlatGrid } from "react-native-super-grid";
import { ceil } from "react-native-reanimated";
import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainImage: {
    height: vh(60),
  },
  imageWrap: {
    position: "relative",
  },
  textWrap: {
    position: "absolute",
    top: 24,
    color: "#ffffff",
    width: vw(100),
    alignItems: "center",
  },
  imageText: {
    color: "#ffffff",
    marginBottom: 8,
  },
  cardWrap: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  card: {
    width: 120,
    height: 120,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    borderRadius: 16,
  },
  image: {
    width: 120,
    height: 90,
  },
  miniText: {
    fontSize: 14,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    width: vw(80),
    height: vh(80),
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

const ScreenContainer = ({ children }) => (
  <View style={styles.container}>{children}</View>
);

export const Timeline = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <ScreenContainer>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        style={styles.modal}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>新宿/叙々苑</Text>
            <Image
              source={{
                uri: "https://source.unsplash.com/random",
              }}
              style={styles.eventImage}
            />
            <Text style={styles.modalText}>
              叙々苑でご飯でも食べながら、仲良くなれると嬉しいです。
            </Text>
            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
      <View style={styles.imageWrap}>
        <Image
          source={{
            uri: "https://source.unsplash.com/random",
          }}
          style={styles.mainImage}
        />
        <View style={styles.textWrap}>
          <Text style={styles.imageText}>エミリー 27歳</Text>
          <Text style={styles.imageText}>広告代理店</Text>
        </View>
      </View>
      <TouchableHighlight
        style={styles.cardWrap}
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <Card style={styles.card}>
          <CardItem cardBody>
            <Image
              source={{ uri: "https://source.unsplash.com/random" }}
              style={styles.image}
            />
          </CardItem>
          <CardItem footer>
            <Text style={styles.miniText}>叙々苑・新宿</Text>
          </CardItem>
        </Card>
      </TouchableHighlight>
    </ScreenContainer>
  );
};
