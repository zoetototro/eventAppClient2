import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { AuthContext } from "./context";
import { Search, Details, Search2, Splash } from "./Screens";

import { Home } from "./screens/home";
import { Message } from "./screens/message";
import { Notification } from "./screens/notification";
import { Profile } from "./screens/profile";
import { Timeline } from "./screens/timeline";
import { CreateAccount } from "./screens/createAccount";
import { EditProfile } from "./screens/editProfile";
import { SignIn } from "./screens/signIn";
import { Icon, View } from "native-base";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";

const AuthStack = createStackNavigator();
const Tabs = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const MessageStack = createStackNavigator();
const NotificationStack = createStackNavigator();
const SearchStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const TimelineStack = createStackNavigator();

const AuthStackScreen = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen
      name="SignIn"
      component={SignIn}
      options={{ title: "Match" }}
    />
    <AuthStack.Screen
      name="CreateAccount"
      component={CreateAccount}
      options={{ title: "Match" }}
    />
  </AuthStack.Navigator>
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
    <TimelineStack.Screen name="Timeline" component={Timeline} />
  </TimelineStack.Navigator>
);

const MessageStackScreen = () => (
  <MessageStack.Navigator>
    <MessageStack.Screen name="Message" component={Message} />
    <MessageStack.Screen
      name="Details"
      component={Details}
      options={({ route }) => ({
        title: route.params.name,
      })}
    />
  </MessageStack.Navigator>
);

const NotificationStackScreen = () => (
  <NotificationStack.Navigator>
    <NotificationStack.Screen name="Notification" component={Notification} />
    <NotificationStack.Screen
      name="Details"
      component={Details}
      options={({ route }) => ({
        title: route.params.name,
      })}
    />
  </NotificationStack.Navigator>
);

const SearchStackScreen = () => (
  <SearchStack.Navigator>
    <SearchStack.Screen name="Search" component={Search} />
    <SearchStack.Screen name="Search2" component={Search2} />
  </SearchStack.Navigator>
);

const ProfileStackScreen = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen name="あなたのプロフィール" component={Profile} />
  </ProfileStack.Navigator>
);

const TabsScreen = () => (
  <Tabs.Navigator>
    <Tabs.Screen
      name="ホーム"
      component={HomeStackScreen}
      options={{
        tabBarLabel: "ホーム",
        tabBarIcon: ({ color, size }) => <Icon name="menu" />,
      }}
    />
    <Tabs.Screen
      name="イベント"
      component={TimelineStackScreen}
      options={{
        tabBarLabel: "イベント",
        tabBarIcon: ({ color, size }) => <Icon name="keypad" />,
      }}
    />
    <Tabs.Screen
      name="メッセージ"
      component={MessageStackScreen}
      options={{
        tabBarLabel: "メッセージ",
        tabBarIcon: ({ color, size }) => <Icon name="chatboxes" />,
      }}
    />
    <Tabs.Screen
      name="通知"
      component={NotificationStackScreen}
      options={{
        tabBarLabel: "メッセージ",
        tabBarIcon: ({ color, size }) => <Icon name="chatboxes" />,
      }}
    />
    <Tabs.Screen
      name="プロフィール"
      component={ProfileStackScreen}
      options={{
        tabBarLabel: "メッセージ",
        tabBarIcon: ({ color, size }) => <Icon name="person" />,
      }}
    />
  </Tabs.Navigator>
);

const Drawer = createDrawerNavigator();
const DrawerScreen = () => (
  <Drawer.Navigator initialRouteName="Profile">
    <Drawer.Screen name="Home" component={TabsScreen} />
    <Drawer.Screen name="Profile" component={ProfileStackScreen} />
  </Drawer.Navigator>
);

const RootStack = createStackNavigator();
const RootStackScreen = ({ userToken }) => (
  <RootStack.Navigator headerMode="none">
    {userToken ? (
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
    }
    fetchData();
  }, []);

  const [isLoading, setIsLoading] = React.useState(false);
  const [userToken, setUserToken] = React.useState(null);

  const authContext = React.useMemo(() => {
    return {
      signIn: () => {
        setIsLoading(false);
        setUserToken("asdf");
      },
      signUp: () => {
        setIsLoading(false);
        setUserToken("asdf");
      },
      signOut: () => {
        setIsLoading(false);
        setUserToken(null);
      },
    };
  }, []);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return <Splash />;
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <RootStackScreen userToken={userToken} />
      </NavigationContainer>
    </AuthContext.Provider>
  );
};
