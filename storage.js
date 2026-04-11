import AsyncStorage from '@react-native-async-storage/async-storage';

export const storage = {
  // Lưu dữ liệu (Ví dụ: lưu user, lưu giỏ hàng)
  save: async (key, value) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (e) { console.error("Lỗi lưu:", e); }
  },
  // Lấy dữ liệu ra
  get: async (key) => {
    try {
      const value = await AsyncStorage.getItem(key);
      return value != null ? JSON.parse(value) : null;
    } catch (e) { console.error("Lỗi lấy:", e); }
  },
  // Xóa dữ liệu (Dùng khi Logout)
  remove: async (key) => {
    try {
      await AsyncStorage.removeItem(key);
    } catch (e) { console.error("Lỗi xóa:", e); }
  }
};