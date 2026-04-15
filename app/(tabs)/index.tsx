import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

import avt from "../../assets/images/tuananh.png";
import coffee from "../../assets/images/coffe.jpg";
import juice from "../../assets/images/juice.jpg";
import milk from "../../assets/images/milk.jpg";
import tea from "../../assets/images/tea.jpg";

const shortcuts = [
  { title: "Scan", icon: "scan", color: "#EAF4FF", route: "/scan" as const },
  { title: "Counterfeit", icon: "alert-circle", color: "#FFF4E5", route: null },
  { title: "Success", icon: "checkmark-circle", color: "#E9F8EE", route: "/success" as const },
  { title: "Directory", icon: "grid", color: "#F4ECFF", route: "/products" as const },
];

const featuredProducts = [
  { img: juice, name: "Orange Juice", price: 149000 },
  { img: milk, name: "Milk", price: 129000 },
  { img: tea, name: "Green Tea", price: 99000 },
  { img: coffee, name: "Coffee", price: 199000 },
];

export default function Home() {
  const router = useRouter();

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#FAFAFA" }} contentContainerStyle={{ paddingBottom: 30 }}>
      <View
        style={{
          paddingTop: 60,
          paddingHorizontal: 20,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View>
          <Text style={{ fontSize: 14, color: "#888" }}>Hello</Text>
          <Text style={{ fontSize: 26, fontWeight: "700" }}>Sơn 👋</Text>
        </View>

        <Image source={avt} style={{ width: 50, height: 50, borderRadius: 25 }} />
      </View>

      <View
        style={{
          marginTop: 25,
          paddingHorizontal: 20,
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {shortcuts.map((item) => (
          <TouchableOpacity
            key={item.title}
            activeOpacity={0.85}
            onPress={() => item.route && router.push(item.route)}
            style={{
              width: "48%",
              height: 120,
              backgroundColor: item.color,
              borderRadius: 24,
              padding: 15,
              marginBottom: 14,
              justifyContent: "space-between",
            }}
          >
            <Ionicons name={item.icon as never} size={28} color="#333" />
            <Text style={{ fontSize: 14, fontWeight: "600" }}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View
        style={{
          marginTop: 10,
          paddingHorizontal: 20,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "700" }}>Explore More</Text>

        <TouchableOpacity onPress={() => router.push("/products")}>
          <Text style={{ color: "#FF8A65", fontWeight: "600" }}>See all</Text>
        </TouchableOpacity>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginTop: 15, paddingLeft: 20 }}>
        {featuredProducts.map((item) => (
          <View
            key={item.name}
            style={{
              width: 140,
              backgroundColor: "#fff",
              borderRadius: 20,
              padding: 12,
              marginRight: 12,
              elevation: 3,
            }}
          >
            <Image
              source={item.img}
              resizeMode="cover"
              style={{
                width: "100%",
                height: 90,
                borderRadius: 15,
              }}
            />

            <Text style={{ marginTop: 8, fontWeight: "600" }}>{item.name}</Text>

            <Text style={{ color: "#FF8A65", marginTop: 4 }}>{item.price.toLocaleString("vi-VN")} ₫</Text>
          </View>
        ))}
      </ScrollView>

      <View
        style={{
          marginTop: 15,
          marginHorizontal: 20,
          backgroundColor: "#fff",
          borderRadius: 24,
          padding: 20,
          elevation: 5,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            source={coffee}
            style={{
              width: 60,
              height: 60,
              borderRadius: 15,
              marginRight: 10,
            }}
          />

          <View style={{ flex: 1 }}>
            <Text style={{ fontWeight: "600" }}>Fresh Products</Text>
            <Text style={{ color: "#888", marginTop: 4 }}>Explore best items</Text>
          </View>

          <MaterialIcons name="arrow-forward-ios" size={18} color="#999" />
        </View>
      </View>
    </ScrollView>
  );
}
