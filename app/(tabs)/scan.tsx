import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useEffect, useRef, useState } from "react";
import {
  Animated,
  Easing,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import juicemilk from "../../assets/images/juicemilk.jpg";

export default function ScanScreen() {
  const router = useRouter();
  const [isScanning, setIsScanning] = useState(true);
  const [isDetected, setIsDetected] = useState(false);
  const scanProgress = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (!isScanning) {
      scanProgress.stopAnimation();
      return;
    }

    const loop = Animated.loop(
      Animated.sequence([
        Animated.timing(scanProgress, {
          toValue: 1,
          duration: 1400,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(scanProgress, {
          toValue: 0,
          duration: 1400,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
      ])
    );

    loop.start();

    const timer = setTimeout(() => {
      setIsScanning(false);
      setIsDetected(true);
      scanProgress.stopAnimation();
    }, 2600);

    return () => {
      loop.stop();
      clearTimeout(timer);
    };
  }, [isScanning, scanProgress]);

  const restartScan = () => {
    setIsDetected(false);
    setIsScanning(true);
  };

  const translateY = scanProgress.interpolate({
    inputRange: [0, 1],
    outputRange: [-115, 115],
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
        <Ionicons name="chevron-back" size={24} color="#333" />
      </TouchableOpacity>

      <View style={styles.header}>
        <Text style={styles.headerTitle}>Quét sản phẩm</Text>
        <Text style={styles.headerText}>
          Mô phỏng thao tác quét bằng camera để nhận diện sản phẩm trong khung.
        </Text>
      </View>

      <View style={styles.stage}>
        <Image source={juicemilk} style={styles.productImage} resizeMode="contain" />

        <View style={[styles.scanFrame, isDetected && styles.scanFrameDetected]}>
          <View style={styles.cornerTopLeft} />
          <View style={styles.cornerTopRight} />
          <View style={styles.cornerBottomLeft} />
          <View style={styles.cornerBottomRight} />
          {isScanning && <Animated.View style={[styles.scanLine, { transform: [{ translateY }] }]} />}
          {isDetected && (
            <View style={styles.detectedBadge}>
              <Ionicons name="checkmark-circle" size={18} color="#fff" />
              <Text style={styles.detectedText}>Đã nhận diện</Text>
            </View>
          )}
        </View>
      </View>

      <View style={styles.card}>
        <View style={styles.cardLeft}>
          <Image source={juicemilk} style={styles.thumb} />
          <View style={{ flex: 1 }}>
            <Text style={styles.brand}>{isDetected ? "Sản phẩm đã quét" : "Đang quét"}</Text>
            <Text style={styles.name}>Juice Milk</Text>
            <Text style={styles.meta}>
              {isDetected ? "Đã nhận diện thành công trong vùng quét." : "Camera đang dò đối tượng trong khung."}
            </Text>
          </View>
        </View>

        <TouchableOpacity style={styles.actionBtn} onPress={restartScan}>
          <Ionicons name="scan" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8D6C2",
    paddingTop: 56,
    paddingHorizontal: 20,
  },
  backBtn: {
    width: 44,
    height: 44,
    backgroundColor: "#fff",
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  header: {
    marginBottom: 24,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "700",
    color: "#1E1E1E",
    marginBottom: 8,
  },
  headerText: {
    fontSize: 15,
    lineHeight: 22,
    color: "#5F5A55",
  },
  stage: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  productImage: {
    width: "78%",
    height: "62%",
    borderRadius: 28,
  },
  scanFrame: {
    position: "absolute",
    width: "82%",
    aspectRatio: 1,
    maxWidth: 320,
  },
  scanFrameDetected: {
    shadowColor: "#59C28B",
    shadowOpacity: 0.45,
    shadowRadius: 18,
    elevation: 8,
  },
  scanLine: {
    position: "absolute",
    left: 16,
    right: 16,
    top: "50%",
    height: 3,
    backgroundColor: "rgba(255,255,255,0.95)",
    borderRadius: 999,
  },
  cornerTopLeft: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 42,
    height: 42,
    borderTopWidth: 4,
    borderLeftWidth: 4,
    borderColor: "#fff",
    borderTopLeftRadius: 14,
  },
  cornerTopRight: {
    position: "absolute",
    top: 0,
    right: 0,
    width: 42,
    height: 42,
    borderTopWidth: 4,
    borderRightWidth: 4,
    borderColor: "#fff",
    borderTopRightRadius: 14,
  },
  cornerBottomLeft: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: 42,
    height: 42,
    borderBottomWidth: 4,
    borderLeftWidth: 4,
    borderColor: "#fff",
    borderBottomLeftRadius: 14,
  },
  cornerBottomRight: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 42,
    height: 42,
    borderBottomWidth: 4,
    borderRightWidth: 4,
    borderColor: "#fff",
    borderBottomRightRadius: 14,
  },
  detectedBadge: {
    position: "absolute",
    bottom: 18,
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    backgroundColor: "#59C28B",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 999,
  },
  detectedText: {
    color: "#fff",
    fontWeight: "700",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 22,
    padding: 16,
    marginBottom: 24,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
  },
  cardLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    flex: 1,
  },
  thumb: {
    width: 56,
    height: 56,
    borderRadius: 14,
  },
  brand: {
    color: "#888",
    fontSize: 12,
    marginBottom: 2,
  },
  name: {
    fontSize: 16,
    fontWeight: "700",
    color: "#111",
  },
  meta: {
    marginTop: 4,
    color: "#666",
    fontSize: 12,
  },
  actionBtn: {
    width: 46,
    height: 46,
    borderRadius: 14,
    backgroundColor: "#FF8A65",
    alignItems: "center",
    justifyContent: "center",
  },
});
