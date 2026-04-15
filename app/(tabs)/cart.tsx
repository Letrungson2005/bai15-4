import { useRouter } from "expo-router";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useCart } from "../../context/CartContext";

export default function CartScreen() {
  const { cart, total, increase, decrease } = useCart();
  const router = useRouter();

  return (
    <View style={{ flex: 1, backgroundColor: "#FAFAFA" }}>
      <ScrollView contentContainerStyle={{ padding: 20, paddingBottom: 120 }}>
        <Text style={{ fontSize: 24, fontWeight: "700", marginBottom: 8 }}>Giỏ hàng</Text>
        <Text style={{ color: "#777", marginBottom: 16 }}>
          {cart.length === 0 ? "Chưa có sản phẩm nào trong giỏ." : `Có ${cart.length} sản phẩm đã được chọn.`}
        </Text>

        {cart.map((item) => (
          <View
            key={item.id}
            style={{
              backgroundColor: "#fff",
              borderRadius: 18,
              padding: 16,
              marginBottom: 12,
              shadowColor: "#000",
              shadowOpacity: 0.05,
              shadowRadius: 8,
              shadowOffset: { width: 0, height: 4 },
              elevation: 3,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 10,
              }}
            >
              <Text style={{ fontSize: 16, fontWeight: "600" }}>{item.name}</Text>
              <Text style={{ color: "#FF8A65", fontWeight: "700" }}>
                {(item.price * item.qty).toLocaleString("vi-VN")} ₫
              </Text>
            </View>

            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
              <Text style={{ color: "#666" }}>{item.price.toLocaleString("vi-VN")} ₫ / sản phẩm</Text>

              <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                <TouchableOpacity
                  onPress={() => decrease(item.id)}
                  style={{
                    width: 34,
                    height: 34,
                    borderRadius: 10,
                    backgroundColor: "#F1F1F1",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text style={{ fontSize: 18, fontWeight: "600" }}>-</Text>
                </TouchableOpacity>
                <Text style={{ minWidth: 24, textAlign: "center", fontWeight: "700" }}>{item.qty}</Text>
                <TouchableOpacity
                  onPress={() => increase(item.id)}
                  style={{
                    width: 34,
                    height: 34,
                    borderRadius: 10,
                    backgroundColor: "#FF8A65",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text style={{ fontSize: 18, fontWeight: "600", color: "#fff" }}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>

      {cart.length > 0 && (
        <View
          style={{
            position: "absolute",
            left: 20,
            right: 20,
            bottom: 20,
            backgroundColor: "#fff",
            borderRadius: 20,
            padding: 16,
            shadowColor: "#000",
            shadowOpacity: 0.08,
            shadowRadius: 12,
            shadowOffset: { width: 0, height: 4 },
            elevation: 4,
          }}
        >
          <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 12 }}>
            <Text style={{ color: "#666", fontSize: 15 }}>Tổng tiền</Text>
            <Text style={{ fontWeight: "700", fontSize: 20, color: "#FF8A65" }}>
              {total.toLocaleString("vi-VN")} ₫
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => router.push("/payment")}
            style={{
              backgroundColor: "#FF8A65",
              borderRadius: 16,
              paddingVertical: 14,
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#fff", fontSize: 16, fontWeight: "700" }}>Tiến hành thanh toán</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
