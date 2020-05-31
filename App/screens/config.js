import React, { useState } from "react";
import { View, TextInput, StyleSheet, Button } from "react-native";
import { AuthContext } from "./../context";
import { Container, Header, Content, List, ListItem, Text } from "native-base";
import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  items: {
    width: vw(100),
    backgroundColor: "#fff",
  },
  item: {
    backgroundColor: "#fff",
    width: vw(100),
  },
});

const ScreenContainer = ({ children }) => (
  <View style={styles.container}>{children}</View>
);

export const Config = ({ navigation }) => {
  const { signIn } = React.useContext(AuthContext);

  return (
    <ScreenContainer>
      <Content>
        <List style={styles.items}>
          <ListItem itemDivider>
            <Text>アカウント設定</Text>
          </ListItem>
          <ListItem style={styles.item}>
            <Text>電話番号</Text>
          </ListItem>
          <ListItem>
            <Text>メールアドレス</Text>
          </ListItem>
          <ListItem itemDivider>
            <Text>コミュニティー/法的事項</Text>
          </ListItem>
          <ListItem>
            <Text>年齢確認</Text>
          </ListItem>
          <ListItem>
            <Text>利用規約</Text>
          </ListItem>
          <ListItem itemDivider></ListItem>
          <ListItem>
            <Text>ログアウト</Text>
          </ListItem>
        </List>
      </Content>
    </ScreenContainer>
  );
};
