import React from 'react';
import { StyleSheet, View, Image, ScrollView, SafeAreaView, TouchableOpacity, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default function CartScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      {/* 1. Phần nội dung cuộn */}
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        {/* Ảnh tiêu đề My Cart */}
        <Image source={require('./assets/mycart.png')} style={styles.headerImg} resizeMode="contain" />

        {/* Danh sách ảnh sản phẩm */}
        <Image source={require('./assets/otdo.png')} style={styles.productImg} resizeMode="contain" />
        <Image source={require('./assets/trung.png')} style={styles.productImg} resizeMode="contain" />
        <Image source={require('./assets/chuoi.png')} style={styles.productImg} resizeMode="contain" />
        <Image source={require('./assets/hoaqua.png')} style={styles.productImg} resizeMode="contain" />

        {/* FIX: Biến ảnh Checkout thành nút bấm để sang trang Checkout */}
        <TouchableOpacity 
          activeOpacity={0.8} 
          onPress={() => navigation.navigate('Checkout')}
          style={styles.checkoutBtnArea}
        >
          <Image source={require('./assets/check.png')} style={styles.checkImg} resizeMode="contain" />
        </TouchableOpacity>

      </ScrollView>

      {/* 2. THANH CHỌN (Bottom Tab) */}
      <View style={styles.bottomTabContainer}>
        <TouchableOpacity 
          activeOpacity={0.9} 
          onPress={() => navigation.navigate('ExplorePage')}
          style={styles.touchArea}
        >
          <Image 
            source={require('./assets/thanhchon.png')} 
            style={styles.tabBarImg} 
            resizeMode="stretch" 
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: 'white' 
  },
  scrollContent: { 
    alignItems: 'center', 
    paddingBottom: 120 
  },
  headerImg: { 
    width: 200, 
    height: 80, 
    marginTop: 10 
  },
  productImg: { 
    width: width * 0.95, 
    height: 110, 
    marginBottom: 5 
  },
  // Style cho vùng bấm của nút Checkout
  checkoutBtnArea: {
    width: width * 0.9,
    height: 90,
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkImg: { 
    width: '100%', 
    height: '100%', 
  },
  bottomTabContainer: { 
    position: 'absolute', 
    bottom: 0, 
    left: 0, 
    right: 0, 
    height: 80, 
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#F2F3F2',
  },
  touchArea: {
    width: '100%',
    height: '100%',
  },
  tabBarImg: { 
    width: '100%', 
    height: '100%' 
  }
});