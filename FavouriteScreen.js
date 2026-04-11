import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, SafeAreaView, TouchableOpacity, Dimensions } from 'react-native';
// Thư viện icon mũi tên
import { Entypo } from '@expo/vector-icons'; 

const { width } = Dimensions.get('window');

// 1. Định nghĩa dữ liệu danh sách sản phẩm (giống hệt ảnh mẫu 2)
const favProducts = [
  { id: 1, name: 'Sprite Can', desc: '325ml, Price', price: '$1.50', img: require('./assets/sprite.png') },
  { id: 2, name: 'Diet Coke', desc: '355ml, Price', price: '$1.99', img: require('./assets/coke.png') },
  { id: 3, name: 'Apple & Grape Juice', desc: '2L, Price', price: '$15.50', img: require('./assets/nuocngot.png') }, // Giả định tên file
  { id: 4, name: 'Coca Cola Can', desc: '325ml, Price', price: '$4.99', img: require('./assets/coca.png') },
  { id: 5, name: 'Pepsi Can ', desc: '330ml, Price', price: '$4.99', img: require('./assets/pepsi.png') },
];

export default function FavouriteScreen({ navigation }) {

  // 2. Thành phần con hiển thị từng dòng sản phẩm
  const ProductItem = ({ item }) => (
    <View style={styles.itemContainer}>
      {/* Hình ảnh sản phẩm */}
      <Image source={item.img} style={styles.itemImage} resizeMode="contain" />
      
      {/* Thông tin tên và mô tả */}
      <View style={styles.itemInfo}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemDesc}>{item.desc}</Text>
      </View>
      
      {/* Giá tiền */}
      <Text style={styles.itemPrice}>{item.price}</Text>
      
      {/* Icon mũi tên bên phải */}
      <TouchableOpacity style={styles.arrowBtn}>
        <Entypo name="chevron-small-right" size={24} color="#181725" />
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* 3. Header: Tiêu đề màn hình */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Favorurite</Text>
      </View>

      {/* 4. Danh sách sản phẩm có thể cuộn */}
      <ScrollView 
        style={styles.content} 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {favProducts.map((product) => (
          <ProductItem key={product.id} item={product} />
        ))}
        
        {/* Khoảng trống cuối danh sách để nút không che khuất */}
        <View style={{ height: 100 }} />
      </ScrollView>

      {/* 5. Nút bấm Add All To Cart */}
      <View style={styles.footerBtnContainer}>
        <TouchableOpacity style={styles.applyButton} activeOpacity={0.8}>
          <Text style={styles.applyText}>Add All To Cart</Text>
        </TouchableOpacity>
      </View>

      {/* 6. Thanh menu dưới cùng */}
      <View style={styles.bottomTab}>
        <TouchableOpacity 
          style={styles.touchArea} 
          onPress={() => navigation.navigate('ExplorePage')}
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

// 7. Định nghĩa Stylesheet (CSS)
const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: 'white' 
  },
  header: { 
    paddingVertical: 20, 
    alignItems: 'center', 
    borderBottomWidth: 1, 
    borderBottomColor: '#E2E2E2',
    marginTop: 10
  },
  headerTitle: { 
    fontSize: 20, 
    fontWeight: 'bold', 
    color: '#181725' 
  },
  content: { 
    flex: 1 
  },
  scrollContent: { 
    paddingHorizontal: 15, 
    paddingTop: 10 
  },
  // Style cho từng dòng sản phẩm
  itemContainer: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    paddingVertical: 20, 
    borderBottomWidth: 1, 
    borderBottomColor: '#E2E2E2' 
  },
  itemImage: { 
    width: 60, 
    height: 60, 
    marginRight: 15 
  },
  itemInfo: { 
    flex: 1, 
    justifyContent: 'center' 
  },
  itemName: { 
    fontSize: 16, 
    fontWeight: 'bold', 
    color: '#181725', 
    marginBottom: 5 
  },
  itemDesc: { 
    fontSize: 14, 
    color: '#7C7C7C' 
  },
  itemPrice: { 
    fontSize: 16, 
    fontWeight: '600', 
    color: '#181725', 
    marginRight: 10 
  },
  arrowBtn: { 
    padding: 5 
  },
  // Style cho nút bấm dưới cùng
  footerBtnContainer: {
    position: 'absolute',
    bottom: 90, // Nằm trên thanh menu dưới cùng
    width: width,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  applyButton: { 
    backgroundColor: '#53B175', // Màu xanh đặc trưng
    width: '100%',
    height: 65, 
    borderRadius: 19, 
    justifyContent: 'center', 
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5, // Bóng đổ trên Android
  },
  applyText: { 
    color: 'white', 
    fontSize: 18, 
    fontWeight: '600' 
  },
  // Style cho thanh menu dưới cùng
  bottomTab: { 
    position: 'absolute', 
    bottom: 0, 
    width: '100%', 
    height: 80, 
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#F2F3F2'
  },
  touchArea: { 
    width: '100%', 
    height: '100%' 
  },
  tabBarImg: { 
    width: '100%', 
    height: '100%' 
  }
});