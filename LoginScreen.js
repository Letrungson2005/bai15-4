import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert, Platform } from 'react-native';
import { storage } from './storage'; // Đảm bảo file storage.js nằm cùng thư mục

export default function LoginScreen({ navigation }) {
  const [phone, setPhone] = useState('');

  const handleLogin = async () => {
    if (phone.trim().length > 0) {
      try {
        // 1. Lưu thông tin vào bộ nhớ máy (Dữ liệu để nộp bài)
        const user = { 
          id: Date.now(), 
          name: 'Le Trung Son', 
          mssv: '23810310352', 
          phone: phone 
        };
        await storage.save('user_data', user);

        // 2. Chuyển trang (Sử dụng alert của trình duyệt nếu là bản Web)
        if (Platform.OS === 'web') {
          alert("Đăng nhập thành công!");
          navigation.replace('ExplorePage');
        } else {
          Alert.alert("Thành công", "Đăng nhập thành công!", [
            { text: "OK", onPress: () => navigation.replace('ExplorePage') }
          ]);
        }
      } catch (error) {
        console.error("Lỗi đăng nhập:", error);
      }
    } else {
      if (Platform.OS === 'web') {
        alert("Vui lòng nhập số điện thoại");
      } else {
        Alert.alert("Lỗi", "Vui lòng nhập số điện thoại");
      }
    }
  };

  return (
    <View style={styles.container}>
      {/* Nếu bị lỗi ảnh, bạn hãy kiểm tra file icon.png trong folder assets nhé */}
      <Image 
        source={require('./assets/icon.png')} 
        style={styles.logo} 
        defaultSource={require('./assets/icon.png')}
      />
      
      <Text style={styles.title}>Đăng nhập Nectar</Text>
      <Text style={styles.subtitle}>Nhập số điện thoại để tiếp tục bài tập</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Số điện thoại (VD: 0912345678)"
        keyboardType="phone-pad"
        value={phone}
        onChangeText={setPhone}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Đăng nhập</Text>
      </TouchableOpacity>
      
      <Text style={styles.footerText}>MSSV: 23810310352</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    padding: 25, 
    backgroundColor: '#fff' 
  },
  logo: { 
    width: 80, 
    height: 80, 
    alignSelf: 'center', 
    marginBottom: 20 
  },
  title: { 
    fontSize: 26, 
    fontWeight: 'bold', 
    textAlign: 'left', 
    color: '#181725' 
  },
  subtitle: { 
    fontSize: 16, 
    color: '#7C7C7C', 
    marginBottom: 40, 
    marginTop: 5 
  },
  input: { 
    borderBottomWidth: 1, 
    borderBottomColor: '#E2E2E2', 
    paddingVertical: 10, 
    marginBottom: 40, 
    fontSize: 18 
  },
  button: { 
    backgroundColor: '#53B175', 
    padding: 20, 
    borderRadius: 15, 
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: { 
    color: '#fff', 
    fontSize: 18, 
    fontWeight: '600' 
  },
  footerText: {
    marginTop: 20,
    textAlign: 'center',
    color: '#B1B1B1',
    fontSize: 12
  }
});