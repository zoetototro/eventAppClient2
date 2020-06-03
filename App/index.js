import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { Search, Details, Search2, Splash } from "./Screens";

import { Home } from "./screens/home";
import { Message } from "./screens/message";
import { ChatDetail } from "./screens/chatDetail";
import { Notification } from "./screens/notification";
import { Profile } from "./screens/profile";
import { Timeline } from "./screens/timeline";
import { CreateAccount } from "./screens/createAccount";
import { Config } from "./screens/config";
import { Invitation } from "./screens/invitation";
import { AgeCheck } from "./screens/ageCheck";
import { EditProfile } from "./screens/editProfile";
import { SignIn } from "./screens/signIn";
import { Intro } from "./screens/intro";
import { IntroPlan } from "./screens/introPlan";
import { ProfileRegister } from "./screens/profileRegister";
import { Icon, View, Button, Text } from "native-base";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import thunk from "redux-thunk";
import logger from "redux-logger";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import authReducer from "./module/auth/index";

const store = createStore(authReducer, applyMiddleware(thunk, logger));

const AuthStack = createStackNavigator();
const Tabs = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const MessageStack = createStackNavigator();
const NotificationStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const TimelineStack = createStackNavigator();
const InvitationStack = createStackNavigator();
const AgeCheckStack = createStackNavigator();
const ConfigStack = createStackNavigator();
const ProfileRegisterStack = createStackNavigator();
const IntroStack = createStackNavigator();
const IntroPlanStack = createStackNavigator();

const AuthStackScreen = () => (
  <AuthStack.Navigator headerMode="none">
    <AuthStack.Screen
      name="SignIn"
      component={SignIn}
      options={{ title: "Match" }}
    />
    <AuthStack.Screen
      name="DrawerScreen"
      component={DrawerScreen}
      options={{
        title: "Match",
        animationEnabled: false,
      }}
    />
    <AuthStack.Screen
      name="CreateAccount"
      component={CreateAccountStackScreen}
      options={{ title: "Match" }}
    />
  </AuthStack.Navigator>
);
//intro
const CreateAccountStackScreen = () => (
  <CreateAccountStack.Navigator>
    <CreateAccountStack.Screen name="intro1" component={IntroStackScreen} />
    <CreateAccountStack.Screen name="CreateAccount" component={CreateAccount} />
    <CreateAccountStack.Screen
      name="ProfileRegisterStackScreen"
      component={ProfileRegisterStackScreen}
    />
  </CreateAccountStack.Navigator>
);

const IntroStackScreen = () => (
  <IntroStack.Navigator headerMode="none">
    <IntroStack.Screen name="Intro" component={Intro}></IntroStack.Screen>
    <IntroStack.Screen
      name="ProfileRegisterStackScreen"
      component={ProfileRegisterStackScreen}
    ></IntroStack.Screen>
  </IntroStack.Navigator>
);

const ProfileRegisterStackScreen = () => (
  <ProfileRegisterStack.Navigator headerMode="none">
    <ProfileRegisterStack.Screen
      name="ProfileRegister"
      component={ProfileRegister}
    ></ProfileRegisterStack.Screen>
    <ProfileRegisterStack.Screen
      name="IntroPlanStackScreen"
      component={IntroPlanStackScreen}
    ></ProfileRegisterStack.Screen>
  </ProfileRegisterStack.Navigator>
);

const IntroPlanStackScreen = () => (
  <IntroPlanStack.Navigator headerMode="none">
    <IntroPlanStack.Screen
      name="IntroPlan"
      component={IntroPlan}
    ></IntroPlanStack.Screen>
    <IntroPlanStack.Screen></IntroPlanStack.Screen>
  </IntroPlanStack.Navigator>
);

const InvitationStackScreen = () => (
  <InvitationStack.Navigator>
    <InvitationStack.Screen name="友達招待" component={Invitation} />
  </InvitationStack.Navigator>
);

const AgeCheckStackScreen = () => (
  <AgeCheckStack.Navigator>
    <AgeCheckStack.Screen name="年齢確認" component={AgeCheck} />
  </AgeCheckStack.Navigator>
);

const ConfigStackScreen = () => (
  <ConfigStack.Navigator>
    <ConfigStack.Screen name="設定" component={Config}></ConfigStack.Screen>
  </ConfigStack.Navigator>
);

const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="Match" component={Home} />
    <HomeStack.Screen
      name="Details"
      component={Details}
      options={({ route }) => ({
        title: route.params.name,
      })}
    />
  </HomeStack.Navigator>
);

const TimelineStackScreen = () => (
  <TimelineStack.Navigator>
    <TimelineStack.Screen name="Today's Picks" component={Timeline} />
  </TimelineStack.Navigator>
);

const MessageStackScreen = () => (
  <MessageStack.Navigator initialRouteName="Message">
    <MessageStack.Screen name="メッセージ" component={Message} />
    <MessageStack.Screen name="ChatDetail" component={ChatDetail} />
  </MessageStack.Navigator>
);

const NotificationStackScreen = () => (
  <NotificationStack.Navigator>
    <NotificationStack.Screen name="いいね" component={Notification} />
    <NotificationStack.Screen
      name="Details"
      component={Details}
      options={({ route }) => ({
        title: route.params.name,
      })}
    />
  </NotificationStack.Navigator>
);

const ProfileStackScreen = (navigation) => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen
      name="あなたのプロフィール"
      component={Profile}
      options={{
        headerRight: (navigation) => (
          <Icon
            onPress={() => navigation.push("EditProfile")}
            name="menu"
          ></Icon>
        ),
      }}
    />
    <ProfileStack.Screen name="EditProfile" component={EditProfile} />
  </ProfileStack.Navigator>
);

const TabsScreen = () => (
  <Tabs.Navigator>
    <Tabs.Screen
      name="ホーム"
      component={HomeStackScreen}
      options={{
        tabBarLabel: "探す",
        tabBarIcon: ({ color, size }) => (
          <Icon name="search" style={{ fontSize: 20, color: "#dadfe7" }} />
        ),
      }}
    />
    <Tabs.Screen
      name="イベント"
      component={TimelineStackScreen}
      options={{
        tabBarLabel: "イベント",
        tabBarIcon: ({ color, size }) => (
          <Icon name="keypad" style={{ fontSize: 20, color: "#fe5269" }} />
        ),
      }}
    />
    <Tabs.Screen
      name="メッセージ"
      component={MessageStackScreen}
      options={{
        tabBarLabel: "メッセージ",
        tabBarIcon: ({ color, size }) => (
          <Icon name="chatboxes" style={{ fontSize: 20, color: "#2abcff" }} />
        ),
      }}
    />
    <Tabs.Screen
      name="通知"
      component={NotificationStackScreen}
      options={{
        tabBarLabel: "いいね",
        tabBarIcon: ({ color, size }) => (
          <Icon name="heart" style={{ fontSize: 20, color: "#57ebc6" }} />
        ),
      }}
    />
    <Tabs.Screen
      name="プロフィール"
      component={ProfileStackScreen}
      options={{
        tabBarLabel: "プロフィール",
        tabBarIcon: ({ color, size }) => (
          <Icon name="person" style={{ fontSize: 20, color: "#a04fdd" }} />
        ),
      }}
    />
  </Tabs.Navigator>
);

const Drawer = createDrawerNavigator();
const DrawerScreen = () => (
  <Drawer.Navigator initialRouteName="Home">
    <Drawer.Screen name="Home" component={TabsScreen} />
    <Drawer.Screen name="Today's　Picks" component={TimelineStackScreen} />
    <Drawer.Screen name="友達招待" component={InvitationStackScreen} />
    <Drawer.Screen name="年齢確認" component={AgeCheckStackScreen} />
    <Drawer.Screen name="設定" component={ConfigStackScreen} />
  </Drawer.Navigator>
);

const CreateAccountStack = createStackNavigator();

const RootStack = createStackNavigator();
const RootStackScreen = ({ store }) => (
  <RootStack.Navigator headerMode="none">
    {store ? (
      <RootStack.Screen
        name="App"
        component={DrawerScreen}
        options={{
          animationEnabled: false,
        }}
      />
    ) : (
      <RootStack.Screen
        name="Auth"
        component={AuthStackScreen}
        options={{
          animationEnabled: false,
        }}
      />
    )}
  </RootStack.Navigator>
);

export default () => {
  React.useEffect(() => {
    async function fetchData() {
      await Font.loadAsync({
        Roboto: require("../node_modules/native-base/Fonts/Roboto.ttf"),
        Roboto_medium: require("../node_modules/native-base/Fonts/Roboto_medium.ttf"),
        ...Ionicons.font,
      });
      store.subscribe(() => console.log("store", store.getState()));
    }
    fetchData();
  }, []);
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootStackScreen />
      </NavigationContainer>
    </Provider>
  );
};
