import React from "react";
import {
  Text,
  View,
} from "react-native";

function AboutScreen() {
  return (
    <View style={{ padding: 50 }}>
      <View>
      <Text
          style={{
            color: 'black',
          }}>
          ID : 101377804
        </Text>
        <Text
          style={{
            color: 'black',
            marginTop: 10,
          }}>
          Name : Gunjan Sharma
        </Text>
      </View>
    </View>
  );
}

export default AboutScreen;
