// screens/CategoryListScreen.tsx
import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';

const categories = [
  { name: 'Docteurs', icon: '🏥', screen: 'Doctor' },
  { name: 'Accessoires', icon: '🎒', screen: 'Accessory' },
  { name: 'Nourriture', icon: '🍖', screen: 'Food' },
  { name: 'Animaux', icon: '🐶', screen: 'Animal' },
];

const CategoryListScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Catégories</Text>
      <ScrollView contentContainerStyle={styles.list}>
        {categories.map((cat, i) => (
          <TouchableOpacity
            key={i}
            style={styles.item}
            onPress={() => navigation.navigate(cat.screen)}
          >
            <Text style={styles.icon}>{cat.icon}</Text>
            <Text style={styles.name}>{cat.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', color: Colors.primaryDark, marginBottom: 20 },
  list: { paddingBottom: 30 },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
    marginVertical: 8,
    borderRadius: 12,
    elevation: 2,
  },
  icon: { fontSize: 24, marginRight: 16 },
  name: { fontSize: 18, color: Colors.text },
});

export default CategoryListScreen;