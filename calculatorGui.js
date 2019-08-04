import * as React from 'react';
import { Text, View, StyleSheet ,TouchableOpacity} from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <View style={{flex:1}}></View>
        <View style={styles.result}></View>
        <View style={styles.button}>
          <View style={styles.ac}>
            <View style={styles.numac}>
              <TouchableOpacity style={styles.btn3}><Text>btn3</Text></TouchableOpacity>
              <TouchableOpacity style={styles.btn3}><Text>btn3</Text></TouchableOpacity>
              <TouchableOpacity style={styles.btn3}><Text>btn3</Text></TouchableOpacity>
            </View>

            <View style={styles.number}>
              <View style={{flex:1,flexDirection:'row'}}>
                <TouchableOpacity style={styles.btn3}><Text>btn3</Text></TouchableOpacity>
                <TouchableOpacity style={styles.btn3}><Text>btn3</Text></TouchableOpacity>
                <TouchableOpacity style={styles.btn3}><Text>btn3</Text></TouchableOpacity>
              </View>
              <View style={{flex:1,flexDirection:'row'}}>
                <TouchableOpacity style={styles.btn3}><Text>btn3</Text></TouchableOpacity>
                <TouchableOpacity style={styles.btn3}><Text>btn3</Text></TouchableOpacity>
                <TouchableOpacity style={styles.btn3}><Text>btn3</Text></TouchableOpacity>
              </View>
              <View style={{flex:1,flexDirection:'row'}}>
                <TouchableOpacity style={styles.btn3}><Text>btn3</Text></TouchableOpacity>
                <TouchableOpacity style={styles.btn3}><Text>btn3</Text></TouchableOpacity>
                <TouchableOpacity style={styles.btn3}><Text>btn3</Text></TouchableOpacity>
              </View>
            </View>
            
            <View style={styles.num}>
              <View style={styles.num0}>
                <TouchableOpacity style={styles.btn3}><Text>btn3</Text></TouchableOpacity>
              </View>
              <View style={styles.num1}>
                <TouchableOpacity style={styles.btn3}><Text>btn3</Text></TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.op}>
            <TouchableOpacity style={styles.btn3}><Text>btn3</Text></TouchableOpacity>
            <TouchableOpacity style={styles.btn3}><Text>btn3</Text></TouchableOpacity>
            <TouchableOpacity style={styles.btn3}><Text>btn3</Text></TouchableOpacity>
            <TouchableOpacity style={styles.btn3}><Text>btn3</Text></TouchableOpacity>
            <TouchableOpacity style={styles.btn3}><Text>btn3</Text></TouchableOpacity>
          </View>
        </View>
      </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  result: {
    flex:3,
    backgroundColor:'red',
    justifyContent:'center',
    alignItems:'flex-end'
  },
  button :{
    flex:7,
    flexDirection:'row'
  },
  ac:{
    flex: 3,
  },
  op : {
    flex:1,
    backgroundColor :'green'
  },
  numac:{
    flex:1,
    backgroundColor :'yellow',
    flexDirection:'row'
  },
  number:{
    flex:3,
    backgroundColor:'blue'
  },
  num:{
    flex:1,
    flexDirection:'row'
  },
  num0:{
    flex:2,
    backgroundColor:'red'
  },
  num1:{
    flex:1
  },
  btn3:{
      flex:1,
      alignItems: 'center',
      height:50,
      backgroundColor: '#3b5998',
      padding:15,
      margin:12,
      borderRadius: 100
  },
  
});