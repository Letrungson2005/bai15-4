import { useRouter } from "expo-router";
import { Alert, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useCart } from "../context/CartContext";

export default function Payment() {
  const { cart, total, clearCart } = useCart();
  const router = useRouter();

  const handlePayment = () => {
    Alert.alert("Thanh toán thành công", "Đơn hàng của bạn đã được xác nhận.");
    clearCart();
    router.replace("/success");
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#FAFAFA" }}>
      <ScrollView contentContainerStyle={{ padding: 20 }}>
        <Text style={{ fontSize: 24, fontWeight: "700", marginBottom: 10 }}>Thanh toán</Text>

        {cart.length === 0 ? (
          <Text style={{ color: "#888", marginTop: 20, textAlign: "center" }}>
            Giỏ hàng của bạn đang trống.
          </Text>
        ) : (
          cart.map((item) => (
            <View
              key={item.id}
              style={{
                backgroundColor: "#fff",
                borderRadius: 20,
                padding: 15,
                marginTop: 12,
                shadowColor: "#000",
                shadowOpacity: 0.05,
                shadowRadius: 6,
                shadowOffset: { width: 0, height: 3 },
                elevation: 3,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontWeight: "600", fontSize: 16 }}>{item.name}</Text>
                <Text style={{ color: "#FF8A65", fontWeight: "600" }}>
                  {(item.price * item.qty).toLocaleString("vi-VN")} ₫
                </Text>
              </View>

              <Text style={{ marginTop: 8, fontSize: 14, color: "#555" }}>Số lượng: {item.qty}</Text>
            </View>
          ))
        )}
      </ScrollView>

      {cart.length > 0 && (
        <View
          style={{
            padding: 20,
            borderTopWidth: 1,
            borderColor: "#eee",
            backgroundColor: "#fff",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 16,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "500" }}>Tổng tiền</Text>
            <Text style={{ fontSize: 20, fontWeight: "700", color: "#FF8A65" }}>
              {total.toLocaleString("vi-VN")} ₫
            </Text>
          </View>

          <TouchableOpacity
            onPress={handlePayment}
            style={{
              backgroundColor: "#FF8A65",
              paddingVertical: 16,
              borderRadius: 18,
              alignItems: "center",
            }}
            activeOpacity={0.8}
          >
            <Text
              style={{
                color: "#fff",
                fontWeight: "600",
                fontSize: 17,
              }}
            >
              Thanh toán ngay
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
