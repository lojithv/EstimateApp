import React, { useState, useEffect } from 'react';
import {
  ScrollView,
  TextInput,
  Text,
  Button,
  View,
} from 'react-native';

function MainScreen({ navigation }) {
  const [roomSize, setRoomSize] = useState("0");
  const [flooringPricePerUnit, setFlooringPricePerUnit] = useState("0");
  const [installationCostPerUnit, setInstallationCostPerUnit] = useState("0");

  const [totalInstallationCost, setTotalInstallationCost] = useState(0);
  const [totalFlooringCost, setTotalFlooringCost] = useState(0);
  const [tax, setTax] = useState(0);

  const calculateEstimate = () => {
    if (parseFloat(roomSize)) {
      const updatedInstallationCost =
        parseFloat(roomSize) * parseFloat(installationCostPerUnit);
      setTotalInstallationCost(updatedInstallationCost);

      const updatedFlooringCost = parseFloat(roomSize) * parseFloat(flooringPricePerUnit);
      setTotalFlooringCost(updatedFlooringCost);

      const updatedTax = (updatedFlooringCost + updatedInstallationCost) * 0.13;
      setTax(updatedTax);
    }
  };

  return (
    <ScrollView
      contentContainerStyle={{
        padding: 50,
        height: 200,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}>
      <View>
        <View>
          <Text
            style={{
              //   height: 40,
              color: 'black',
            }}>
            Size of a room
          </Text>
          <TextInput
            style={{
              height: 40,
              borderColor: 'gray',
              borderWidth: 1,
              color: "black",
              marginTop: 10,
            }}
            placeholder="0"
            onChangeText={newSize => setRoomSize(newSize)}
            defaultValue={roomSize}
          />
        </View>
        <View>
          <Text
            style={{
              //   height: 40,
              color: 'black',
            }}>
            Price per unit of flooring
          </Text>
          <TextInput
            style={{
              height: 40,
              borderColor: 'gray',
              borderWidth: 1,
              color: "black",
              marginTop: 10,
            }}
            placeholder="0"
            onChangeText={newCost => setFlooringPricePerUnit(newCost)}
            defaultValue={flooringPricePerUnit}
          />
        </View>
        <View>
          <Text
            style={{
              //   height: 40,
              color: 'black',
            }}>
            Price per unit of flooring installation
          </Text>
          <TextInput
            style={{
              height: 40,
              borderColor: 'gray',
              borderWidth: 1,
              color: "black",
              marginTop: 10,
            }}
            placeholder="Type here to translate!"
            onChangeText={newCost => setInstallationCostPerUnit(newCost)}
            defaultValue={installationCostPerUnit}
          />
        </View>

        <View style={{ marginTop: 10, marginBottom: 10 }}>
          <Text
            style={{
              //   height: 40,
              color: 'black',
            }}>
            Installation cost before tax:{totalInstallationCost}
          </Text>
          <Text
            style={{
              //   height: 40,
              color: 'black',
            }}>
            Flooring cost before tax:{totalFlooringCost}
          </Text>
          <Text
            style={{
              //   height: 40,
              color: 'black',
            }}>
            Total cost (installation + flooring) before tax:
            {(parseFloat(totalInstallationCost) + parseFloat(totalFlooringCost)).toString()}
          </Text>
          <Text
            style={{
              //   height: 40,
              color: 'black',
            }}>
            Tax:{tax}
          </Text>
        </View>
        <View style={{ marginTop: 10, marginBottom: 10 }}>
        <Button
          onPress={() => {
            calculateEstimate();
          }}
          title={'Calculate'}
        />
      </View>
      </View>


      <View style={{ marginTop: 10, marginBottom: 10 }}>
        <Button
          onPress={() => {
            navigation.navigate("About");
          }}
          title={'About Me'}
        />
      </View>
    </ScrollView>
  );
}

export default MainScreen;
