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

function AboutScreen({ navigation }) {
  const [isHungry, setIsHungry] = useState(true);
  return (
    <View>
      <Text
        style={{
          //   height: 40,
          color: 'black',
        }}
      >
        About screen
      </Text>
      <TextInput
        style={{
          height: 40,
          color: 'black',
          borderColor: "gray",
          borderWidth: 1,
        }}
        defaultValue="Name me!"
      />
      <Button
        onPress={() => {
          navigation.navigate("Main");
        }}
        title={"Go to Main"}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  baseText: {
    fontWeight: "bold",
  },
  innerText: {
    color: "black",
  },
});

export default AboutScreen;
