import React from 'react';
import { View, Text, StyleSheet, FlatImage, TouchableOpacity, ScrollView, SafeAreaView, Image } from 'react-native';
import { storage } from './storage'; // Đảm bảo có file này

export default function ExploreScreen({ navigation }) {
  
  // Hàm Đăng xuất để bạn quay video
  const handleLogout = async () => {
    await storage.remove('user_data'); // Xóa dữ liệu đã lưu
    navigation.replace('Login');      // Quay về trang Đăng nhập
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Phần Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Sản phẩm tươi sạch</Text>
        </View>

        {/* Nội dung trang chủ (Demo vài sản phẩm) */}
        <View style={styles.productGrid}>
          <View style={styles.productCard}>
            <Image source={{uri: 'https://cdn-icons-png.flaticon.com/512/2909/2909808.png'}} style={styles.img} />
            <Text style={styles.pName}>Chuối hữu cơ</Text>
            <Text style={styles.pPrice}>$4.99</Text>
          </View>
          <View style={styles.productCard}>
            <Image source={{uri: 'https://cdn-icons-png.flaticon.com/512/2613/2613149.png'}} style={styles.img} />
            <Text style={styles.pName}>Trứng gà ta</Text>
            <Text style={styles.pPrice}>$1.50</Text>
          </View>
        </View>

        {/* NÚT ĐĂNG XUẤT (Bấm vào đây để quay lại Login) */}
        <TouchableOpacity style={styles.logoutBtn} onPress={handleLogout}>
          <Text style={styles.logoutText}>Đăng xuất khỏi hệ thống</Text>
        </TouchableOpacity>

        <Text style={styles.footerInfo}>MSSV: 23810310352</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: { padding: 20, alignItems: 'center', borderBottomWidth: 1, borderBottomColor: '#eee' },
  headerTitle: { fontSize: 20, fontWeight: 'bold' },
  productGrid: { flexDirection: 'row', flexWrap: 'wrap', padding: 10, justifyContent: 'space-around' },
  productCard: { width: '45%', padding: 15, borderWidth: 1, borderColor: '#eee', borderRadius: 15, marginBottom: 15, alignItems: 'center' },
  img: { width: 80, height: 80, marginBottom: 10 },
  pName: { fontWeight: 'bold' },
  pPrice: { color: '#7C7C7C' },
  
  // Style cho nút Logout
  logoutBtn: { 
    backgroundColor: '#FF4D4D', 
    padding: 15, 
    borderRadius: 15, 
    margin: 20, 
    alignItems: 'center',
    marginTop: 50 
  },
  logoutText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
  footerInfo: { textAlign: 'center', color: '#bbb', marginBottom: 20 }
});