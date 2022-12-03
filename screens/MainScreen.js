import React, { useState, useEffect } from 'react';
import {
  ScrollView,
  TextInput,
  Text,
  Button,
  Switch,
  View,
} from 'react-native';

function MainScreen({ navigation }) {
  const [size, setSize] = useState("0");
  const [flooringPricePerUnit, setFlooringPricePerUnit] = useState("0");
  const [installationCostPerUnit, setInstallationCostPerUnit] = useState("0");

  const [installationCost, setInstallationCost] = useState(0);
  const [flooringCost, setFlooringCost] = useState(0);
  const [tax, setTax] = useState(0);

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  useEffect(() => {
    handleCalculation();
  }, [size, flooringPricePerUnit, installationCostPerUnit]);

  const handleCalculation = () => {
    if (parseFloat(size)) {
      const updatedInstallationCost =
        parseFloat(size) * parseFloat(installationCostPerUnit);
      setInstallationCost(updatedInstallationCost);

      const updatedFlooringCost = parseFloat(size) * parseFloat(flooringPricePerUnit);
      setFlooringCost(updatedFlooringCost);

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
          onChangeText={newSize => setSize(newSize)}
          defaultValue={size}
        />
      </View>
      <View style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
            <Text
          style={{
            //   height: 40,
            color: 'black',
          }}>
          {isEnabled? 'square feet':'square meters'}
        </Text>
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
          Installation cost:{installationCost}
        </Text>
        <Text
          style={{
            //   height: 40,
            color: 'black',
          }}>
          Flooring cost:{flooringCost}
        </Text>
        <Text
          style={{
            //   height: 40,
            color: 'black',
          }}>
          Total cost (installation + flooring):
          {(parseFloat(installationCost) + parseFloat(flooringCost)).toString()}
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
            navigation.navigate("About");
          }}
          title={'Go to About'}
        />
      </View>
    </ScrollView>
  );
}

export default MainScreen;
