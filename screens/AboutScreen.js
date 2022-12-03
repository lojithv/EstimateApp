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
    <View style={{ padding: 50, height: 200, flex: 1, flexDirection: "column", justifyContent: 'space-around' }}>
      <View>
        <Text
          style={{
            //   height: 40,
            color: 'black',
          }}>
          Student ID
        </Text>
        <Text
          style={{
            //   height: 40,
            color: 'black',
            marginTop: 10,
          }}>
          Full Name
        </Text>
      </View>

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
