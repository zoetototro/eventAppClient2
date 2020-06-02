import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Image,
  Modal,
  TouchableHighlight,
} from "react-native";
import {
  Button,
  Text,
  Card,
  CardItem,
  Form,
  Item,
  Picker,
  Icon,
  Textarea,
  Left,
} from "native-base";
import { FlatGrid } from "react-native-super-grid";
import { ScrollView } from "react-native-gesture-handler";
import { vw, vh } from "react-native-expo-viewport-units";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  button: {
    marginHorizontal: 20,
    borderRadius: 5,
    justifyContent: "center",
  },
  item: {
    marginBottom: 8,
  },
  gridView: {
    height: 300,
  },
  card: {
    height: 120,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  margin: { marginTop: 16, marginHorizontal: 16, marginBottom: 8 },
  marginH: { marginHorizontal: 8 },
  eventsWrap: { height: 120, marginVertical: 16 },
  textarea: { backgroundColor: "#ffffff" },
  listText: { marginLeft: 16 },
  //modal
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  modalView: {
    backgroundColor: "#ececec",
    borderRadius: 20,
    paddingVertical: 60,
    alignItems: "center",
    shadowColor: "#000",
    width: vw(100),
    height: vh(100),
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
  textarea: {
    backgroundColor: "#ffffff",
    width: "100%",
  },
  about: {
    width: vw(100),
    marginLeft: 16,
    marginTop: 16,
    marginBottom: 8,
  },
});

const ScreenContainer = ({ children }) => (
  <View style={styles.container}>{children}</View>
);

export const EditProfile = (navigation) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selected2, setSelected2] = useState("undefined");
  function onValueChange2() {
    setSelected2({
      selected2: value,
    });
  }
  const items = [
    { age: 24, description: "初めまして", place: "東京都" },
    { age: 24, description: "初めまして", place: "東京都" },
    { age: 24, description: "初めまして", place: "東京都" },
    { age: 24, description: "初めまして", place: "東京都" },
    { age: 24, description: "初めまして", place: "東京都" },
    { age: 24, description: "初めまして", place: "東京都" },
  ];

  const events = [
    { age: 24, description: "初めまして", place: "東京都" },
    { age: 24, description: "初めまして", place: "東京都" },
    { age: 24, description: "初めまして", place: "東京都" },
  ];
  return (
    <ScreenContainer>
      <ScrollView>
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
                style={{ height: vh(40), width: vw(100), marginTop: 24 }}
                resizeMode="cover"
              />
              <View style={styles.about}>
                <Text>概要</Text>
              </View>
              <Textarea
                style={styles.textarea}
                rowSpan={3}
                bordered
                placeholder=""
              />
              <Text style={styles.about}>初回デートで求めるもの</Text>
              <Textarea
                style={styles.textarea}
                rowSpan={3}
                bordered
                placeholder=""
              />
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
              <Item picker>
                <Left style={styles.listText}>
                  <Text>初回デート費用</Text>
                </Left>
                <Picker
                  mode="dropdown"
                  iosIcon={<Icon name="arrow-down" />}
                  style={{ width: undefined }}
                  placeholder="おごります"
                  placeholderStyle={{ color: "#bfc6ea" }}
                  placeholderIconColor="#007aff"
                  selectedValue={selected2}
                  onValueChange={onValueChange2.bind(this)}
                >
                  <Picker.Item label="Wallet" value="key0" />
                  <Picker.Item label="ATM Card" value="key1" />
                  <Picker.Item label="Debit Card" value="key2" />
                  <Picker.Item label="Credit Card" value="key3" />
                  <Picker.Item label="Net Banking" value="key4" />
                </Picker>
              </Item>
            </View>
          </View>
        </Modal>
        <FlatGrid
          itemDimension={100}
          items={items}
          style={styles.gridView}
          // staticDimension={300}
          // fixed
          // spacing={20}
          renderItem={({ item, index }) => (
            <Card style={styles.card}>
              <CardItem cardBody style={styles.image}>
                <Image
                  source={{
                    uri: "https://source.unsplash.com/user/chrisjoelcampbell",
                  }}
                  style={{ height: 120, width: null, flex: 1 }}
                />
              </CardItem>
            </Card>
          )}
        />
        <Button style={styles.button}>
          <Text>メディアを追加する</Text>
        </Button>
        <FlatGrid
          itemDimension={100}
          items={events}
          style={styles.eventsWrap}
          // staticDimension={300}
          // fixed
          // spacing={20}
          renderItem={({ event, index }) => (
            <Card style={styles.card}>
              <Icon name="add"></Icon>
              <Text>AddEvent</Text>
            </Card>
          )}
        />
        <Button
          style={styles.button}
          onPress={() => {
            setModalVisible(true);
          }}
        >
          <Text>行きたい場所</Text>
        </Button>
        <Text style={styles.margin}>自己紹介</Text>
        <Form>
          <Textarea
            style={styles.textarea}
            rowSpan={5}
            bordered
            placeholder=""
          />
          <Item picker>
            <Left style={styles.listText}>
              <Text>職種</Text>
            </Left>
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="arrow-down" />}
              style={{ width: undefined }}
              placeholder="自営業"
              placeholderStyle={{ color: "#bfc6ea" }}
              placeholderIconColor="#007aff"
              selectedValue={selected2}
              onValueChange={onValueChange2.bind(this)}
            >
              <Picker.Item label="Wallet" value="key0" />
              <Picker.Item label="ATM Card" value="key1" />
              <Picker.Item label="Debit Card" value="key2" />
              <Picker.Item label="Credit Card" value="key3" />
              <Picker.Item label="Net Banking" value="key4" />
            </Picker>
          </Item>
          <Item picker>
            <Left style={styles.listText}>
              <Text>職場</Text>
            </Left>
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="arrow-down" />}
              style={{ width: undefined }}
              placeholder="WINDII"
              placeholderStyle={{ color: "#bfc6ea" }}
              placeholderIconColor="#007aff"
              selectedValue={selected2}
              onValueChange={onValueChange2.bind(this)}
            >
              <Picker.Item label="Wallet" value="key0" />
              <Picker.Item label="ATM Card" value="key1" />
              <Picker.Item label="Debit Card" value="key2" />
              <Picker.Item label="Credit Card" value="key3" />
              <Picker.Item label="Net Banking" value="key4" />
            </Picker>
          </Item>
          <Item picker>
            <Left style={styles.listText}>
              <Text>年齢</Text>
            </Left>
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="arrow-down" />}
              style={{ width: undefined }}
              placeholder="28"
              placeholderStyle={{ color: "#bfc6ea" }}
              placeholderIconColor="#007aff"
              selectedValue={selected2}
              onValueChange={onValueChange2.bind(this)}
            >
              <Picker.Item label="Wallet" value="key0" />
              <Picker.Item label="ATM Card" value="key1" />
              <Picker.Item label="Debit Card" value="key2" />
              <Picker.Item label="Credit Card" value="key3" />
              <Picker.Item label="Net Banking" value="key4" />
            </Picker>
          </Item>
          <Item picker>
            <Left style={styles.listText}>
              <Text>身長</Text>
            </Left>
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="arrow-down" />}
              style={{ width: undefined }}
              placeholder="170"
              placeholderStyle={{ color: "#bfc6ea" }}
              placeholderIconColor="#007aff"
              selectedValue={selected2}
              onValueChange={onValueChange2.bind(this)}
            >
              <Picker.Item label="Wallet" value="key0" />
              <Picker.Item label="ATM Card" value="key1" />
              <Picker.Item label="Debit Card" value="key2" />
              <Picker.Item label="Credit Card" value="key3" />
              <Picker.Item label="Net Banking" value="key4" />
            </Picker>
          </Item>
        </Form>
      </ScrollView>
    </ScreenContainer>
  );
};
