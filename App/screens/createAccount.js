import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { AuthContext } from "./../context";
import { Button, Input, Text, Item } from "native-base";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding: 16,
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
  item: {
    marginBottom: 8,
  },
});

const ScreenContainer = ({ children }) => (
  <View style={styles.container}>{children}</View>
);

export const CreateAccount = () => {
  const { signUp } = React.useContext(AuthContext);
  const [text, setText] = useState("");
  return (
    <ScreenContainer>
      <Item style={styles.item} regular>
        <Input placeholder="メールアドレス" />
      </Item>
      <Item style={styles.item} regular>
        <Input placeholder="パスワード" />
      </Item>
      <Button>
        <Text>送信</Text>
      </Button>
      <Button title="Sign Up" onPress={() => signUp()} />
    </ScreenContainer>
  );
};
