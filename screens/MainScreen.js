import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  TextInput,
  Text,
  Button,
  useColorScheme,
  View,
} from "react-native";
import Section from "../components/Section";
import {
    Colors,
  } from "react-native/Libraries/NewAppScreen";

function MainScreen({ navigation }) {
  const [isHungry, setIsHungry] = useState(true);

  return (
    <View>
      <Text style={{
        //   height: 40,
          color: "black",
        }}>Main screen</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          color:'black'
        }}
        defaultValue="Name me!"
      />
      <Button
        onPress={() => {
            onPress={() => navigation.navigate('Details')}
        }}
        title={"Go to About"}
      />
    </View>
  );
}

export default MainScreen;
