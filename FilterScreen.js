import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
// Thư viện icon có sẵn trong Expo để làm dấu X và dấu tích
import { Ionicons } from '@expo/vector-icons'; 

export default function FilterScreen({ navigation }) {
  // Quản lý trạng thái các mục được chọn (mặc định chọn giống ảnh mẫu)
  const [selectedCategories, setSelectedCategories] = useState(['Eggs']);
  const [selectedBrands, setSelectedBrands] = useState(['Cocola']);

  // Hàm xử lý chọn/bỏ chọn cho Categories
  const toggleCategory = (name) => {
    if (selectedCategories.includes(name)) {
      setSelectedCategories(selectedCategories.filter(item => item !== name));
    } else {
      setSelectedCategories([...selectedCategories, name]);
    }
  };

  // Hàm xử lý chọn/bỏ chọn cho Brand
  const toggleBrand = (name) => {
    if (selectedBrands.includes(name)) {
      setSelectedBrands(selectedBrands.filter(item => item !== name));
    } else {
      setSelectedBrands([...selectedBrands, name]);
    }
  };

  // Thành phần con hiển thị từng dòng Checkbox
  const CheckboxItem = ({ label, isSelected, onPress }) => (
    <TouchableOpacity style={styles.checkboxRow} onPress={onPress} activeOpacity={0.7}>
      <View style={[styles.checkbox, isSelected && styles.checkboxActive]}>
        {isSelected && <Ionicons name="checkmark" size={16} color="white" />}
      </View>
      <Text style={[styles.label, isSelected && styles.labelActive]}>{label}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* 1. Header: Dấu X và chữ Filters */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.closeButton}>
          <Ionicons name="close" size={28} color="#181725" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Filters</Text>
        <View style={{ width: 28 }} /> 
      </View>

      {/* 2. Nội dung: Bo góc và nền xám nhạt */}
      <ScrollView style={styles.content}>
        
        {/* Nhóm Categories */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Categories</Text>
          {['Eggs', 'Noodles & Pasta', 'Chips & Crisps', 'Fast Food'].map((item) => (
            <CheckboxItem 
              key={item}
              label={item} 
              isSelected={selectedCategories.includes(item)} 
              onPress={() => toggleCategory(item)} 
            />
          ))}
        </View>

        {/* Nhóm Brand */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Brand</Text>
          {['Individual Collection', 'Cocola', 'Ifad', 'Kazi Farmas'].map((item) => (
            <CheckboxItem 
              key={item}
              label={item} 
              isSelected={selectedBrands.includes(item)} 
              onPress={() => toggleBrand(item)} 
            />
          ))}
        </View>

      </ScrollView>

      {/* 3. Nút bấm Apply dưới cùng */}
      <View style={styles.footer}>
        <TouchableOpacity 
          style={styles.applyButton} 
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.applyText}>Apply Filter</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white' },
  header: { 
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', 
    paddingHorizontal: 15, paddingVertical: 15 
  },
  closeButton: { padding: 5 },
  headerTitle: { fontSize: 20, fontWeight: 'bold', color: '#181725' },
  content: { 
    flex: 1, backgroundColor: '#F2F3F2', 
    borderTopLeftRadius: 30, borderTopRightRadius: 30 
  },
  section: { padding: 25 },
  sectionTitle: { fontSize: 24, fontWeight: '600', color: '#181725', marginBottom: 20 },
  checkboxRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
  checkbox: { 
    width: 24, height: 24, borderWidth: 1.5, borderColor: '#B1B1B1', 
    borderRadius: 8, marginRight: 15, alignItems: 'center', justifyContent: 'center' 
  },
  checkboxActive: { backgroundColor: '#53B175', borderColor: '#53B175' },
  label: { fontSize: 16, color: '#181725' },
  labelActive: { color: '#53B175' },
  footer: { padding: 25, backgroundColor: '#F2F3F2' },
  applyButton: { 
    backgroundColor: '#53B175', height: 65, borderRadius: 19, 
    justifyContent: 'center', alignItems: 'center' 
  },
  applyText: { color: 'white', fontSize: 18, fontWeight: '600' }
});