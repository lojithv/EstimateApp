import React, { useState } from 'react';
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
  const [flooring_price, setFlooringPrice] = useState("0");
  const [installation_cost, setInstallationCost] = useState("0");
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const [installation, setInstallation] = useState(0);
  const [flooring, setFlooring] = useState(0);
  const [tax, setTax] = useState(0);

  const getEstimate = () => {
    if (parseFloat(size)) {
      const updatedInstallationCost =
        parseFloat(size) * parseFloat(installation_cost);
      setInstallation(updatedInstallationCost);

      const updatedFlooringCost = parseFloat(size) * parseFloat(flooring_price);
      setFlooring(updatedFlooringCost);

      const taxAmount = (updatedFlooringCost + updatedInstallationCost) * 0.13;
      setTax(taxAmount);
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
          <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
            <Text
              style={{
                //   height: 40,
                color: 'black',
              }}>
              Size of a room
            </Text>
            <View style={{display:'flex',flexDirection:'row'}}>
            <Text
              style={{
                //   height: 40,
                color: 'black',
              }}>
              {isEnabled? 'sq ft': 'sq mt'}
            </Text>
            <Switch
              trackColor={{ false: "gray", true: "blue" }}
              thumbColor={"white"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
            </View>
     
          </View>

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
            onChangeText={newCost => setFlooringPrice(newCost)}
            defaultValue={flooring_price}
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
            placeholder="0"
            onChangeText={newCost => setInstallationCost(newCost)}
            defaultValue={installation_cost}
          />
        </View>

        <View style={{ marginTop: 10, marginBottom: 10 }}>
          <Text
            style={{
              //   height: 40,
              color: 'black',
            }}>
            Installation cost:{installation}
          </Text>
          <Text
            style={{
              //   height: 40,
              color: 'black',
            }}>
            Flooring cost:{flooring}
          </Text>
          <Text
            style={{
              //   height: 40,
              color: 'black',
            }}>
            Total cost (installation + flooring):
            {(parseFloat(installation) + parseFloat(flooring)).toString()}
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
              getEstimate();
            }}
            title={'GET ESTIMATE'}
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
