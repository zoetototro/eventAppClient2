import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  View,
  TextInput,
  StyleSheet,
  Image,
  TouchableHighlight,
} from "react-native";
import { AuthContext } from "./../context";
import { Input, Text, Item, Button, Form } from "native-base";
import { vw } from "react-native-expo-viewport-units";

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
    backgroundColor: "#fff",
  },
  logoWrap: {
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 240,
    height: 240,
  },
  item: {
    width: vw(100),
    fontSize: 14,
  },
  itemWrap: {
    marginVertical: 16,
  },
  register: {
    fontSize: 14,
    color: "#0179fe",
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

export const SignIn = ({ navigation, login }) => {
  const { signIn } = React.useContext(AuthContext);
  const [email, setEmail] = useState("frfr");
  const [password, setPassword] = useState("");

  useEffect(() => {
    fetch("https://example.com").then((r) => console.log(r));
  });

  function handleSubmit() {
    console.log(email);
    if (email && password) {
      this.props.login(email, password);
    }
  }

  function handleEmailChange(e) {
    const { name, value } = e.target;
    setEmail({ [name]: value });
  }

  handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPassword({ [name]: value });
  };

  return (
    <ScreenContainer>
      <View style={styles.logoWrap}>
        <Image
          style={styles.logo}
          resizeMode="contain"
          source={require("../../assets/images/logo.png")}
        />
      </View>
      <Form>
        <Item regular>
          <Input
            type="text"
            name="email"
            style={styles.item}
            onChange={handleEmailChange}
            placeholder="メールアドレス"
          />
        </Item>
        <Item regular style={styles.itemWrap}>
          <Input
            type="password"
            name="password"
            style={styles.item}
            onChange={handlePasswordChange}
            placeholder="パスワード"
          />
        </Item>
        <View>
          <Button
            style={styles.login}
            onPress={() => {
              handleSubmit();
              //signIn();
            }}
          >
            <Text>ログイン</Text>
          </Button>
          <TouchableHighlight onPress={() => navigation.push("CreateAccount")}>
            <Text style={styles.register}>新規会員登録</Text>
          </TouchableHighlight>
        </View>
      </Form>
    </ScreenContainer>
  );
};

mapStateToProps = (state) => {
  return {
    email: state.email,
    password: state.password,
  };
};

const mapDispatchToProps = (dispatch) => ({
  login(email, password) {
    dispatch(login(email, password));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
