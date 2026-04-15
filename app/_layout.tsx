import { Slot } from "expo-router";
import { SafeAreaView, StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { CartProvider } from "../context/CartContext";

export default function Layout() {
  return (
    <SafeAreaProvider>
      <CartProvider>
        <SafeAreaView style={styles.container}>
          <Slot />
        </SafeAreaView>
      </CartProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA",
  },
});
