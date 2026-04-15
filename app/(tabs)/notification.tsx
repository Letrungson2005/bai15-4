import { ScrollView, Text, View } from "react-native";

const notifications = [
  "Sản phẩm Orange Juice vừa được quét thành công.",
  "Có 1 mục trong giỏ hàng đang chờ thanh toán.",
  "Hồ sơ sản phẩm Coffee đã được cập nhật.",
];

export default function Screen() {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#FAFAFA" }} contentContainerStyle={{ padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: "700", marginBottom: 8 }}>Thông báo</Text>
      <Text style={{ color: "#777", marginBottom: 16 }}>Cập nhật gần nhất từ ứng dụng.</Text>

      {notifications.map((item) => (
        <View
          key={item}
          style={{
            backgroundColor: "#fff",
            borderRadius: 18,
            padding: 16,
            marginBottom: 12,
            elevation: 2,
          }}
        >
          <Text style={{ color: "#333", lineHeight: 22 }}>{item}</Text>
        </View>
      ))}
    </ScrollView>
  );
}
