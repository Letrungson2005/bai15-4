import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function Success() {
  const router = useRouter();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FAFAFA",
        padding: 24,
      }}
    >
      <Text style={{ fontSize: 54, marginBottom: 12 }}>✅</Text>
      <Text style={{ fontSize: 24, fontWeight: "700", marginBottom: 8 }}>Thanh toán thành công</Text>
      <Text style={{ fontSize: 15, color: "#666", textAlign: "center", marginBottom: 24 }}>
        Đơn hàng của bạn đã được ghi nhận và giỏ hàng đã được làm mới.
      </Text>
      <TouchableOpacity
        onPress={() => router.replace("/")}
        style={{
          backgroundColor: "#FF8A65",
          paddingHorizontal: 22,
          paddingVertical: 14,
          borderRadius: 16,
        }}
      >
        <Text style={{ color: "#fff", fontWeight: "700" }}>Về trang chủ</Text>
      </TouchableOpacity>
    </View>
  );
}
