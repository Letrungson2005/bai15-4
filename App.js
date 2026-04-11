import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// 1. Import trạm quản lý dữ liệu và các màn hình
import { storage } from './storage';
import LoginScreen from './LoginScreen'; 
import ExploreScreen from './ExploreScreen';
import FilterScreen from './FilterScreen';
import CartScreen from './CartScreen';
import CheckoutScreen from './CheckoutScreen';
import OrderAcceptedScreen from './OrderAcceptedScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  // 2. Kiểm tra trạng thái đăng nhập ngay khi mở App
  useEffect(() => {
    const checkStatus = async () => {
      try {
        const user = await storage.get('user_data');
        if (user) {
          setIsLoggedIn(true); // Đã đăng nhập
        }
      } catch (e) {
        console.log("Lỗi kiểm tra login:", e);
      } finally {
        // Đợi 1 chút để dữ liệu kịp load rồi mới tắt màn hình chờ
        setTimeout(() => setLoading(false), 500);
      }
    };
    checkStatus();
  }, []);

  // 3. Màn hình chờ khi App đang kiểm tra dữ liệu
  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#53B175" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator 
        // Nếu đã có dữ liệu user thì vào ExplorePage, chưa có thì vào Login
        initialRouteName={isLoggedIn ? "ExplorePage" : "Login"} 
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="ExplorePage" component={ExploreScreen} />
        <Stack.Screen name="Filter" component={FilterScreen} />
        <Stack.Screen name="Cart" component={CartScreen} />
        <Stack.Screen name="Checkout" component={CheckoutScreen} />
        <Stack.Screen name="OrderAccepted" component={OrderAcceptedScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}