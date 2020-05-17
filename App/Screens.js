import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import { AuthContext } from "./context";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
});

const ScreenContainer = ({ children }) => (
  <View style={styles.container}>{children}</View>
);

export const Details = ({ route }) => (
  <ScreenContainer>
    <Text>Details Screen</Text>
    {route.params.name && <Text>{route.params.name}</Text>}
  </ScreenContainer>
);

export const Search = ({ navigation }) => (
  <ScreenContainer>
    <Text>Search Screen</Text>
    <Button title="Search 2" onPress={() => navigation.push("Search2")} />
    <Button
      title="React Native School"
      onPress={() => {
        navigation.navigate("Home", {
          screen: "Details",
          params: { name: "React Native School" },
        });
      }}
    />
  </ScreenContainer>
);

export const Search2 = () => (
  <ScreenContainer>
    <Text>Search2 Screen</Text>
  </ScreenContainer>
);

export const Profile = ({ navigation }) => {
  const { signOut } = React.useContext(AuthContext);

  return (
    <ScreenContainer>
      <Button title="メニュー" onPress={() => navigation.toggleDrawer()} />
      <Button title="ログアウト" onPress={() => signOut()} />
    </ScreenContainer>
  );
};

export const Splash = () => (
  <ScreenContainer>
    <Text>Loading...</Text>
  </ScreenContainer>
);

export const SignIn = ({ navigation }) => {
  const { signIn } = React.useContext(AuthContext);

  return (
    <ScreenContainer>
      <Button title="ログイン" onPress={() => signIn()} />
      <Button
        title="新規会員登録"
        onPress={() => navigation.push("CreateAccount")}
      />
    </ScreenContainer>
  );
};
