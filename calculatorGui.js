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
      <View style={{flex: 1}}>
        <View style={{flex:4,backgroundColor:'black',justifyContent:'center',
        alignItems:'flex-end'}}>
        <Text style={{fontSize:100,color:'white'}}>0 </Text>
        </View>
        <View style={{flex:7,flexDirection:'row'}}>
          <View style={{flex: 3}}>
            <View style={{flex:1,backgroundColor :'black',flexDirection:'row'}}>
              <TouchableOpacity style={styles.btn1}>
                <Text style={{fontSize:20,color:'black'}}>AC</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btn1}>
                <Text style={{fontSize:20,color:'black'}}>+/-</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btn1}>
                <Text style={{fontSize:20,color:'black'}}>%</Text>
              </TouchableOpacity>
            </View>

            <View style={{flex:3,backgroundColor:'black'}}>
              <View style={{flex:1,flexDirection:'row'}}>
                <TouchableOpacity style={styles.btnnum}>
                  <Text style={styles.textnum}>7</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnnum}>
                  <Text style={styles.textnum}>8</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnnum}>
                  <Text style={styles.textnum}>9</Text>
                </TouchableOpacity>
              </View>
              <View style={{flex:1,flexDirection:'row'}}>
                <TouchableOpacity style={styles.btnnum}>
                  <Text style={styles.textnum}>4</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnnum}>
                  <Text style={styles.textnum}>5</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnnum}>
                  <Text style={styles.textnum}>6</Text>
                </TouchableOpacity>
              </View>
              <View style={{flex:1,flexDirection:'row'}}>
                <TouchableOpacity style={styles.btnnum}>
                  <Text style={styles.textnum}>1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnnum}>
                  <Text style={styles.textnum}>2</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnnum}>
                  <Text style={styles.textnum}>3</Text>
                </TouchableOpacity>
              </View>
            </View>
            
            <View style={{flex:1,flexDirection:'row'}}>
              <View style={{flex:2,backgroundColor:'black'}}>
                <TouchableOpacity style={styles.btn0}>
                  <Text style={{fontSize:30,color:'white'}}>  0</Text>
                </TouchableOpacity>
              </View>
              <View style={{flex:1,backgroundColor :'black'}}>
                <TouchableOpacity style={styles.btn3}>
                  <Text style={{fontSize:30,color:'white'}}>,</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={{flex:1,backgroundColor :'black'}}>
            <TouchableOpacity style={styles.btn2}>
              <Text style={styles.textop}>÷</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn2}>
              <Text style={styles.textop}>x</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn2}>
              <Text style={styles.textop}>-</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn2}>
              <Text style={styles.textop}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn2}>
              <Text style={styles.textop}>=</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      );
  }
}

const styles = StyleSheet.create({
  btn3:{
      flex:1,
      alignItems: 'center',
      backgroundColor: '#414345',
      margin:15,
      borderRadius: 100,
  },
  btn0:{
      flex:1,
      alignItems: 'center',
      backgroundColor: '#414345',
      padding:5,
      margin:15,
      borderRadius: 100,
      alignItems:'flex-start'
  },
  btnnum:{
      flex:1,
      alignItems: 'center',
      backgroundColor: '#414345',
      padding:10,
      margin:15,
      borderRadius: 100
  },
  btn1:{
      flex:1,
      alignItems: 'center',
      backgroundColor: '#E9E4F0',
      padding:15,
      margin:15,
      borderRadius: 100
  },
  textop:{
    fontSize:30,
    color:'black'
  },
  textnum:{
    fontSize:30,
    color:'white'
  },
  btn2:{
      flex:1,
      alignItems: 'center',
      backgroundColor: '#FFE000',
      margin:12,
      padding:10,
      borderRadius: 50
  }
  
});
