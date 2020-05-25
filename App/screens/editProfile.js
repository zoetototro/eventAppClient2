import React, { useState } from "react";
import { View, TextInput, StyleSheet, Image } from "react-native";
import { AuthContext } from "./../context";
import {
  Button,
  Input,
  Text,
  Card,
  CardItem,
  Form,
  Item,
  Picker,
  Icon,
  Textarea,
} from "native-base";
import { FlatGrid } from "react-native-super-grid";
import { ScrollView } from "react-native-gesture-handler";

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
  },
  item: {
    marginBottom: 8,
  },
  gridView: {
    height: 300,
  },
  card: {
    height: 120,
  },
  margin: { marginVertical: 8 },
  marginH: { marginHorizontal: 8 },
  eventsWrap: { height: 120, marginVertical: 16 },
  textarea: { backgroundColor: "#ffffff" },
});

const ScreenContainer = ({ children }) => (
  <View style={styles.container}>{children}</View>
);

export const EditProfile = (navigation) => {
  const { signUp } = React.useContext(AuthContext);
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
              <CardItem cardBody style={styles.image}></CardItem>
              <Icon name="add"></Icon>
            </Card>
          )}
        />
        <Button style={styles.button}>
          <Text>イベントを追加する</Text>
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
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="arrow-down" />}
              style={{ width: undefined }}
              placeholder="職種"
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
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="arrow-down" />}
              style={{ width: undefined }}
              placeholder="職場"
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
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="arrow-down" />}
              style={{ width: undefined }}
              placeholder="年齢"
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
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="arrow-down" />}
              style={{ width: undefined }}
              placeholder="身長"
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
