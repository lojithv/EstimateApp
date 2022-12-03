import React from "react";
import {
  Text,
  Button,
  View,
} from "react-native";

function AboutScreen() {
  return (
    <View style={{ padding: 50, height: 200, flex: 1, flexDirection: "column", justifyContent: 'space-around' }}>
      <View>
        <Text
          style={{
            color: 'black',
            marginTop: 10,
          }}>
          Name : Mohsen Yahya
        </Text>
        <Text
          style={{
            color: 'black',
          }}>
          ID : 101241827
        </Text>
      </View>
    </View>
  );
}

export default AboutScreen;
