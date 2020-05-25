import React, { Component, useState } from "react";
import {
  StyleSheet,
  Image,
  Modal,
  TouchableHighlight,
  DeckSwiper,
} from "react-native";
import {
  View,
  Card,
  CardItem,
  Text,
  Icon,
  List,
  ListItem,
  Left,
  Right,
  Button,
} from "native-base";
import { FlatGrid } from "react-native-super-grid";
import { ceil } from "react-native-reanimated";
import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";
import { ScrollView } from "react-native-gesture-handler";

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
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  actionCard: {
    width: 64,
    height: 64,
  },
  flex: {
    flexDirection: "row",
    marginVertical: 32,
    alignItems: "baseline",
    justifyContent: "center",
  },
  mediumText: {
    fontSize: 14,
  },
  largeText: {
    fontSize: 28,
    marginRight: 8,
  },
  sectionContainer: {
    padding: 8,
  },
  //modal
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  modalView: {
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
    position: "relative",
  },
  eventHideButton: {
    flex: 1,
    position: "absolute",
    top: 16,
    left: 16,
    backgroundColor: "#000",
    opacity: 0.4,
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    elevation: 2,
  },
  requestButton: {
    position: "absolute",
    bottom: 16,
  },
  modalHead: {
    fontSize: 16,
    fontWeight: "bold",
  },
  //profileModal
  profileModalView: {
    backgroundColor: "white",
    marginTop: 48,
    shadowColor: "#000",
    width: vw(100),
    height: vh(108),
    elevation: 10,
    overflow: "scroll",
  },
  profileImageWrap: {
    position: "relative",
  },
  profileHideButton: {
    flex: 1,
    position: "absolute",
    top: 48,
    left: 16,
    backgroundColor: "#000",
    opacity: 0.4,
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    elevation: 2,
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
  const [profileModalVisible, setProfileModalVisible] = useState(false);

  return (
    <ScreenContainer>
      <Modal
        animationType="fade"
        transparent={true}
        visible={profileModalVisible}
        style={styles.modal}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.profileModalView}>
            <ScrollView>
              <View>
                <Image
                  source={{
                    uri: "https://source.unsplash.com/user/chrisjoelcampbell",
                  }}
                  style={{ height: vh(60), width: null, flex: 1 }}
                />
                <TouchableHighlight
                  style={{
                    ...styles.profileHideButton,
                    backgroundColor: "#000",
                  }}
                  onPress={() => {
                    setProfileModalVisible(!profileModalVisible);
                  }}
                >
                  <Icon
                    name="close"
                    style={{
                      color: "#fff",
                    }}
                  />
                </TouchableHighlight>
              </View>
              <View style={styles.sectionContainer}>
                <View style={styles.flex}>
                  <Text style={styles.largeText}>キャサリン</Text>
                  <Text style={styles.mediumText}>25歳</Text>
                </View>
                <Text style={styles.mediumText}>
                  都内で客室乗務員をやっています。あまりこういうアプリは慣れていないですが、よろしくお願いします。
                </Text>
                <Text style={styles.mediumText}>
                  都内で客室乗務員をやっています。あまりこういうアプリは慣れていないですが、よろしくお願いします。
                </Text>
                <Text style={styles.mediumText}>
                  都内で客室乗務員をやっています。あまりこういうアプリは慣れていないですが、よろしくお願いします。
                </Text>
              </View>
              <View style={styles.sectionContainer}>
                <Text>基本プロフィール</Text>
              </View>
              <List>
                <ListItem>
                  <Left>
                    <Text style={styles.mediumText}>身長</Text>
                  </Left>
                  <Right>
                    <Text style={styles.mediumText}>173cm</Text>
                  </Right>
                </ListItem>
                <ListItem>
                  <Left>
                    <Text style={styles.mediumText}>居住地</Text>
                  </Left>
                  <Right>
                    <Text style={styles.mediumText}>ロサンゼルス</Text>
                  </Right>
                </ListItem>
                <ListItem>
                  <Left>
                    <Text style={styles.mediumText}>年収</Text>
                  </Left>
                  <Right>
                    <Text style={styles.mediumText}>800~1000万</Text>
                  </Right>
                </ListItem>
              </List>
            </ScrollView>
          </View>
        </View>
      </Modal>
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
            <Text style={styles.modalHead}>新宿/叙々苑</Text>
            <Image
              source={{
                uri: "https://source.unsplash.com/user/chrisjoelcampbell",
              }}
              style={{ height: vh(20), width: vw(80), marginVertical: 24 }}
              resizeMode="cover"
            />
            <Text style={styles.modalText}>
              叙々苑でご飯でも食べながら、仲良くなれると嬉しいです。
            </Text>
            <TouchableHighlight
              style={{ ...styles.eventHideButton, backgroundColor: "#000" }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Icon
                name="close"
                style={{
                  color: "#fff",
                }}
              />
            </TouchableHighlight>
            <List>
              <ListItem
                style={{
                  width: vw(80),
                }}
              >
                <Left>
                  <Text style={styles.mediumText}>初回デート費用</Text>
                </Left>
                <Right>
                  <Text style={styles.mediumText}>おごります</Text>
                </Right>
              </ListItem>
              <ListItem>
                <Left>
                  <Text style={styles.mediumText}>お相手に求めること</Text>
                </Left>
                <Right>
                  <Text style={styles.mediumText}>年収800~1000万</Text>
                </Right>
              </ListItem>
            </List>
            <Button style={styles.requestButton}>
              <Text>お誘いする</Text>
            </Button>
          </View>
        </View>
      </Modal>
      <TouchableHighlight
        onPress={() => {
          setProfileModalVisible(true);
        }}
      >
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
      </TouchableHighlight>
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
