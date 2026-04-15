import { useRouter } from "expo-router";
import { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useCart } from "../context/CartContext";

import coffee from "../assets/images/coffe.jpg";
import juice from "../assets/images/juice.jpg";
import milk from "../assets/images/milk.jpg";
import tea from "../assets/images/tea.jpg";

const products = [
  { id: 1, name: "Milk", price: 129000, img: milk },
  { id: 2, name: "Orange Juice", price: 149000, img: juice },
  { id: 3, name: "Green Tea", price: 99000, img: tea },
  { id: 4, name: "Coffee", price: 199000, img: coffee },
];

type QuantityMap = Record<number, number>;

export default function Products() {
  const { addToCart } = useCart();
  const router = useRouter();
  const [qty, setQty] = useState<QuantityMap>({
    1: 1,
    2: 1,
    3: 1,
    4: 1,
  });

  const increase = (id: number) => {
    setQty((prev) => ({ ...prev, [id]: prev[id] + 1 }));
  };

  const decrease = (id: number) => {
    setQty((prev) => ({ ...prev, [id]: Math.max(1, prev[id] - 1) }));
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#FAFAFA" }}>
      <ScrollView contentContainerStyle={{ padding: 20, paddingBottom: 100 }}>
        <Text style={{ fontSize: 24, fontWeight: "700", marginBottom: 15 }}>Products</Text>

        {products.map((item) => (
          <View
            key={item.id}
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#fff",
              padding: 12,
              borderRadius: 18,
              marginBottom: 12,
              elevation: 3,
            }}
          >
            <Image
              source={item.img}
              style={{
                width: 60,
                height: 60,
                borderRadius: 12,
                marginRight: 12,
              }}
            />

            <View style={{ flex: 1 }}>
              <Text style={{ fontWeight: "600", fontSize: 16 }}>{item.name}</Text>

              <Text style={{ color: "#FF8A65", marginTop: 4 }}>
                {item.price.toLocaleString("vi-VN")} ₫
              </Text>

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 8,
                }}
              >
                <TouchableOpacity
                  onPress={() => decrease(item.id)}
                  style={{
                    width: 30,
                    height: 30,
                    backgroundColor: "#eee",
                    borderRadius: 8,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text>-</Text>
                </TouchableOpacity>

                <Text style={{ marginHorizontal: 10, fontWeight: "600" }}>{qty[item.id]}</Text>

                <TouchableOpacity
                  onPress={() => increase(item.id)}
                  style={{
                    width: 30,
                    height: 30,
                    backgroundColor: "#FF8A65",
                    borderRadius: 8,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text style={{ color: "#fff" }}>+</Text>
                </TouchableOpacity>
              </View>
            </View>

            <TouchableOpacity
              onPress={() => addToCart({ ...item, qty: qty[item.id] })}
              style={{
                backgroundColor: "#FF8A65",
                paddingVertical: 8,
                paddingHorizontal: 12,
                borderRadius: 10,
              }}
            >
              <Text style={{ color: "#fff", fontWeight: "600" }}>Add</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      <View
        style={{
          position: "absolute",
          bottom: 20,
          left: 20,
          right: 20,
        }}
      >
        <TouchableOpacity
          onPress={() => router.push("/payment")}
          style={{
            backgroundColor: "#FF8A65",
            padding: 16,
            borderRadius: 20,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontWeight: "700",
              fontSize: 16,
            }}
          >
            Go to Payment
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
