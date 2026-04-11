import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 

const { height } = Dimensions.get('window');

export default function CheckoutScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* 1. NỀN GIỎ HÀNG - Nếu chưa có file gia.png, hãy tạm thời ẩn Image này hoặc đổi tên file cho đúng */}
      <View style={styles.backgroundContainer}>
        <Image 
          source={require('./assets/kkk.png')} // Đảm bảo file này có trong thư mục assets
          style={styles.backgroundImage}
          resizeMode="cover" 
        />
      </View>

      {/* 2. BẢNG CHECKOUT */}
      <View style={styles.checkoutSheet}>
        <View style={styles.dragHandle} />

        <View style={styles.header}>
          <Text style={styles.headerText}>Checkout</Text>
          {/* Nút X để quay lại trang trước */}
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialIcons name="close" size={24} color="#181725" />
          </TouchableOpacity>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          <CheckoutItem label="Delivery" value="Select Method" />
          <CheckoutItem 
            label="Payment" 
            icon={<MaterialIcons name="credit-card" size={22} color="#53B175" />} 
          />
          <CheckoutItem label="Promo Code" value="Pick discount" />
          <CheckoutItem label="Total Cost" value="$13.97" isBold={true} />

          <Text style={styles.termsText}>
            By placing an order you agree to our 
            <Text style={styles.boldLink}> Terms</Text> and 
            <Text style={styles.boldLink}> Conditions</Text>
          </Text>

          {/* Nút Place Order để nhảy sang màn hình OrderAccepted */}
          <TouchableOpacity 
            style={styles.placeOrderBtn}
            onPress={() => navigation.navigate('OrderAccepted')} 
          >
            <Text style={styles.btnText}>Place Order</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
}

// Component phụ cho từng dòng mục trong Checkout
const CheckoutItem = ({ label, value, icon, isBold }) => (
  <TouchableOpacity style={styles.itemRow}>
    <Text style={styles.itemLabel}>{label}</Text>
    <View style={styles.itemRight}>
      {icon}
      {value && <Text style={[styles.itemValue, isBold && {color: '#000', fontWeight: 'bold'}]}>{value}</Text>}
      <MaterialIcons name="chevron-right" size={24} color="#181725" />
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  backgroundContainer: { 
    position: 'absolute', 
    top: 0, // Đưa lên trên để làm nền phía sau bảng checkout
    width: '100%', 
    height: height * 0.5,
    backgroundColor: '#F2F3F2' // Màu nền dự phòng nếu thiếu ảnh
  },
  backgroundImage: { width: '100%', height: '100%' },
  checkoutSheet: {
    position: 'absolute', 
    bottom: 0, 
    width: '100%', 
    height: height * 0.6, // Tăng chiều cao lên một chút để dễ nhìn
    backgroundColor: 'white', 
    borderTopLeftRadius: 30, 
    borderTopRightRadius: 30,
    paddingHorizontal: 25, 
    paddingBottom: 20, 
    elevation: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -10 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  dragHandle: { width: 40, height: 4, backgroundColor: '#E2E2E2', borderRadius: 2, alignSelf: 'center', marginTop: 10 },
  header: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 20, borderBottomWidth: 1, borderBottomColor: '#E2E2E2' },
  headerText: { fontSize: 20, fontWeight: 'bold' },
  itemRow: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 15, borderBottomWidth: 1, borderBottomColor: '#E2E2E2' },
  itemLabel: { fontSize: 16, color: '#7C7C7C' },
  itemRight: { flexDirection: 'row', alignItems: 'center' },
  itemValue: { fontSize: 16, marginRight: 5 },
  termsText: { fontSize: 13, color: '#7C7C7C', marginTop: 15, lineHeight: 20 },
  boldLink: { color: '#000', fontWeight: 'bold' },
  placeOrderBtn: { backgroundColor: '#53B175', borderRadius: 15, paddingVertical: 18, alignItems: 'center', marginTop: 20 },
  btnText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
});