import React, { Component, useState } from "react";
import {
  StyleSheet,
  Button,
  Image,
  Modal,
  TouchableHighlight,
  DeckSwiper,
} from "react-native";
import { View, Card, CardItem, Text, Icon } from "native-base";
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
  accrodion: {
    position: "absolute",
    bottom: 0,
  },
  imageText: {
    color: "#ffffff",
    marginBottom: 8,
  },
  cardWrap: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    textAlign: "center",
    flexDirection: "row",
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
  actionCard: {
    width: 64,
    height: 64,
  },
});

const ScreenContainer = ({ children }) => (
  <View style={styles.container}>{children}</View>
);

const dataArray = [
  { title: "First Element", content: "Lorem ipsum dolor sit amet" },
];

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
                uri: "https://source.unsplash.com/user/chrisjoelcampbell",
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
      <View style={styles.cardWrap}>
        <Card
          style={{
            borderRadius: 32,
            width: 64,
            height: 64,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Icon name="close" style={{ color: "#0466d6" }} />
        </Card>
        <TouchableHighlight
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
              <Text style={styles.miniText}>恵比寿 kintan</Text>
            </CardItem>
          </Card>
        </TouchableHighlight>
        <Card
          style={{
            borderRadius: 32,
            width: 64,
            height: 64,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Icon primary name="heart" style={{ color: "#ff3834" }} />
        </Card>
      </View>
    </ScreenContainer>
  );
};
