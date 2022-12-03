import React from "react";
import {
  Text,
  Button,
  View,
} from "react-native";

function AboutScreen({ navigation }) {
  return (
    <View style={{ padding: 50, height: 200, flex: 1, flexDirection: "column", justifyContent: 'space-around' }}>
      <View>
        <Text
          style={{
            //   height: 40,
            color: 'black',
          }}>
          Student ID : 101243840
        </Text>
        <Text
          style={{
            //   height: 40,
            color: 'black',
            marginTop: 10,
          }}>
          Full Name : Wissam Hamed
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

export default AboutScreen;
