import React from 'react';
import { View, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';

const { height } = Dimensions.get('window');

export default function OrderAcceptedScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/tichxanh.png')} style={styles.tichXanhImg} resizeMode="contain" />
      <Image source={require('./assets/hasbeen.png')} style={styles.hasBeenImg} resizeMode="contain" />
      <Image source={require('./assets/items.png')} style={styles.itemsImg} resizeMode="contain" />
      
      <TouchableOpacity style={styles.trackOrderBtn}>
        <Image source={require('./assets/trackorder.png')} style={styles.buttonImage} resizeMode="contain" />
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.backHomeBtn}
        onPress={() => navigation.navigate('ExplorePage')} 
      >
        <Image source={require('./assets/backhome.png')} style={styles.buttonImage} resizeMode="contain" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', alignItems: 'center' },
  hasBeenImg: { position: 'absolute', top: height / 2 - 50, width: '80%', height: 100, zIndex: 10 },
  tichXanhImg: { position: 'absolute', top: height / 2 - 250, width: 150, height: 150 },
  itemsImg: { position: 'absolute', top: height / 2 + 60, width: '70%', height: 60 },
  backHomeBtn: { position: 'absolute', bottom: 30, width: '90%', height: 50 },
  trackOrderBtn: { position: 'absolute', bottom: 100, width: '90%', height: 50 },
  buttonImage: { width: '100%', height: '100%' },
});