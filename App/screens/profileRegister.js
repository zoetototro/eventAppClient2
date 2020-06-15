import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import {
  Button,
  Text,
  Form,
  Item,
  Picker,
  Icon,
  Input,
  Left,
  DatePicker,
} from "native-base";
import { vw } from "react-native-expo-viewport-units";
import axios from "axios";
import moment from "moment";

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
  item: {
    width: vw(100),
    fontSize: 14,
    margin: 0,
    padding: 0,
  },
  itemWrap: {
    marginVertical: 16,
  },
  register: {
    fontSize: 14,
    color: "#0179fe",
  },
  introHead: {
    width: vw(100),
    fontSize: 14,
    textAlign: "center",
    marginVertical: 16,
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

export const ProfileRegister = ({ navigation }) => {
  const [sex, setSex] = useState("male");
  const [income, setIncome] = useState("300");
  const [date, setDate] = useState("");
  const [prefecture, setPrefecture] = useState("");

  return (
    <ScreenContainer>
      <Form>
        <Text style={styles.introHead}>まずはあなたについて教えてください</Text>
        <Item>
          <Input style={styles.item} placeholder="ニックネーム" />
        </Item>
        <Item picker>
          <Left>
            <Text>性別</Text>
          </Left>
          <Picker
            selectedValue={sex}
            style={{ width: 120 }}
            onValueChange={(itemValue) => setSex(itemValue)}
          >
            <Picker.Item label="男性" value="male" />
            <Picker.Item label="女性" value="female" />
          </Picker>
        </Item>

        <Item picker>
          <Left>
            <Text style={styles.listText}>年収</Text>
          </Left>
          <Picker
            mode="dropdown"
            style={{ width: 120 }}
            selectedValue={income}
            onValueChange={(itemValue) => setIncome(itemValue)}
          >
            <Picker.Item label="〜300万円" value="300" />
            <Picker.Item label="300万円〜" value="500" />
          </Picker>
        </Item>
        <Item picker>
          <Left style={styles.listText}>
            <Text>居住地</Text>
          </Left>
          <Picker
            mode="dropdown"
            iosIcon={<Icon name="arrow-down" />}
            style={{ width: undefined }}
            selectedValue={prefecture}
            onValueChange={(itemValue) => setPrefecture(itemValue)}
          >
            <Picker.Item label="東京都" value="tokyo" />
            <Picker.Item label="大阪" value="oosaka" />
          </Picker>
        </Item>
        <Item picker>
          <Left>
            <Text>生年月日</Text>
          </Left>
          <DatePicker
            defaultDate={new Date(1990, 4, 4)}
            minimumDate={new Date(1940, 1, 1)}
            maximumDate={new Date(2010, 12, 31)}
            locale={"ja"}
            timeZoneOffsetInMinutes={undefined}
            modalTransparent={false}
            animationType={"fade"}
            androidMode={"default"}
            placeHolderText="Select date"
            textStyle={{ color: "green" }}
            placeHolderTextStyle={{ color: "#d3d3d3" }}
            onDateChange={setDate}
            disabled={false}
          />
        </Item>
        <Item>
          <Input style={styles.item} placeholder="メールアドレス" />
        </Item>
        <Item>
          <Input style={styles.item} placeholder="パスワード" />
        </Item>
      </Form>
      <Button
        style={styles.login}
        onPress={() => navigation.push("IntroPlanStackScreen")}
      >
        <Text>次へ</Text>
      </Button>
    </ScreenContainer>
  );
};
