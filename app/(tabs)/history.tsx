import { ScrollView, Text, View } from "react-native";

const historyItems = [
  { id: "HS-001", name: "Orange Juice", status: "Verified", time: "10:30" },
  { id: "HS-002", name: "Milk", status: "Need review", time: "09:12" },
  { id: "HS-003", name: "Coffee", status: "Verified", time: "Yesterday" },
];

export default function Screen() {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#FAFAFA" }} contentContainerStyle={{ padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: "700", marginBottom: 8 }}>Lịch sử quét</Text>
      <Text style={{ color: "#777", marginBottom: 16 }}>Các mã đã kiểm tra gần đây.</Text>

      {historyItems.map((item) => (
        <View
          key={item.id}
          style={{
            backgroundColor: "#fff",
            borderRadius: 18,
            padding: 16,
            marginBottom: 12,
            elevation: 2,
          }}
        >
          <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 6 }}>
            <Text style={{ fontWeight: "700" }}>{item.name}</Text>
            <Text style={{ color: item.status === "Verified" ? "#1B9C62" : "#D48806" }}>{item.status}</Text>
          </View>
          <Text style={{ color: "#666" }}>{item.id}</Text>
          <Text style={{ color: "#999", marginTop: 6 }}>{item.time}</Text>
        </View>
      ))}
    </ScrollView>
  );
}
