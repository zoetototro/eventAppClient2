import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Modal,
  Image,
  TouchableHighlight,
} from "react-native";
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Left,
  Body,
  Right,
  Button,
  Thumbnail,
  Text,
  Icon,
} from "native-base";
import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  button: {
    width: 100,
    height: 30,
  },
  miniText: {
    fontSize: 14,
  },
  list: {
    height: "100%",
  },
  listItem: {},
  modalView: {
    backgroundColor: "#ffffff",
    padding: 35,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    width: vw(100),
    height: vh(100),
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  matchHead: {
    fontSize: 36,
    fontWeight: "bold",
  },
  thumbnailWrap: {
    opacity: 1,
    flexDirection: "row",
    marginVertical: 36,
  },
  openButton: {
    flex: 1,
    position: "absolute",
    top: 32,
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

export const Notification = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <ScreenContainer>
      <Content>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          style={styles.modal}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.matchHead}>Matchi!!!</Text>
              <View style={styles.thumbnailWrap}>
                <Thumbnail
                  source={{
                    uri: "https://source.unsplash.com/user/chrisjoelcampbell",
                  }}
                />
                <Thumbnail
                  source={{
                    uri: "https://source.unsplash.com/user/chrisjoelcampbell",
                  }}
                />
              </View>
              <Text>おめでとうございます。</Text>
              <Text>キャサリンさんとマッチしました</Text>
              <Text style={{ marginBottom: 36 }}>
                早速メッセージを送りましょう
              </Text>
              <Button block sytle={styles.matchButton}>
                <Text>メッセージを送信する</Text>
              </Button>
              <TouchableHighlight
                style={{ ...styles.openButton }}
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
            </View>
          </View>
        </Modal>
        <List style={styles.list}>
          {[0, 1, 2, 3, 4, 5].map((v) => {
            return (
              <ListItem style={styles.listItem} avatar>
                <Left>
                  <Thumbnail
                    source={{
                      uri: "https://source.unsplash.com/user/chrisjoelcampbell",
                    }}
                  />
                </Left>
                <Body>
                  <Text>Kumar Pratik</Text>
                  <Text note>
                    Doing what you like will always keep you happy
                  </Text>
                </Body>
                <Right>
                  <Text note>3:43 pm</Text>
                  <Button style={styles.button}>
                    <Text
                      style={styles.miniText}
                      onPress={() => {
                        setModalVisible(true);
                      }}
                    >
                      マッチする
                    </Text>
                  </Button>
                </Right>
              </ListItem>
            );
          })}
        </List>
      </Content>
    </ScreenContainer>
  );
};
