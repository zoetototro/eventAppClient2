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
    backgroundColor: "#000000",
    borderRadius: 20,
    opacity: 0.8,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    width: vw(100),
    height: vh(100),
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  colorWhite: {
    color: "#ffffff",
  },
  thumbnailWrap: {
    opacity: 1,
    flexDirection: "row",
    marginVertical: 48,
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
              <Text style={styles.colorWhite}>Matchi!!!</Text>
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
              <Text style={styles.colorWhite}>おめでとうございます。</Text>
              <Text style={styles.colorWhite}>
                キャサリンさんとマッチしました
              </Text>
              <Text style={styles.colorWhite}>
                早速メッセージを送りましょう
              </Text>
              <Button bordered block sytle={styles.matchButton}>
                <Text>メッセージを送信する</Text>
              </Button>
              <Button bordered block sytle={styles.matchButton}>
                <TouchableHighlight
                  style={{ ...styles.openButton }}
                  onPress={() => {
                    setModalVisible(!modalVisible);
                  }}
                >
                  <Text style={styles.textStyle}>閉じる</Text>
                </TouchableHighlight>
              </Button>
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
