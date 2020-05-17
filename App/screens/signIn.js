import React, { useState } from "react";
import { View, TextInput, StyleSheet, Button } from "react-native";
import { AuthContext } from "./../context";
import { Input, Text, Item } from "native-base";

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
    justifyContent: "center",
  },
});

const ScreenContainer = ({ children }) => (
  <View style={styles.container}>{children}</View>
);

export const SignIn = ({ navigation }) => {
  const { signIn } = React.useContext(AuthContext);

  return (
    <ScreenContainer>
      <Item style={styles.item} regular>
        <Input placeholder="メールアドレス" />
      </Item>
      <Item style={styles.item} regular>
        <Input placeholder="パスワード" />
      </Item>
      <Button title="ログイン" onPress={() => signIn()} />
      <Button
        title="新規会員登録"
        onPress={() => navigation.push("CreateAccount")}
      />
    </ScreenContainer>
  );
};
