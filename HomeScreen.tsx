// screens/HomeScreen.tsx
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
} from 'react-native';
import Colors from '../constants/Colors';

const HomeScreen = ({ navigation }: any) => {
  const [searchQuery, setSearchQuery] = useState('');

  const ads = [
    { id: '1', title: 'Siberian Husky', price: '15 000 TND', image: 'https://via.placeholder.com/150/41644A/FFFFFF?text=🐶' },
    { id: '2', title: 'Croquettes Premium', price: '35 TND', image: 'https://via.placeholder.com/150/E9762B/FFFFFF?text=🍖' },
    { id: '3', title: 'Dr. Martin - Vétérinaire', price: 'Consultation', image: 'https://via.placeholder.com/150/0D4715/FFFFFF?text=🏥' },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Hayewen.tn</Text>
      </View>

      {/* Contenu scrollable */}
      <ScrollView style={styles.content}>
        {/* Barre de recherche */}
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Recherche ici..."
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          <Text style={styles.searchIcon}>🔍</Text>
        </View>

        {/* Titre Catégories */}
        <View style={styles.categoryHeader}>
          <Text style={styles.categoryTitle}>Catégories</Text>
          <TouchableOpacity onPress={() => navigation.navigate('CategoryList')}>
            <Text style={styles.seeAll}>Voir tout</Text>
          </TouchableOpacity>
        </View>

        {/* Catégories horizontales */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoriesScroll}>
          {[
            { name: 'Docteurs', icon: '🏥', screen: 'Doctor' },
            { name: 'Accessoires', icon: '🎒', screen: 'Accessory' },
            { name: 'Nourriture', icon: '🍖', screen: 'Food' },
            { name: 'Animaux', icon: '🐶', screen: 'Animal' },
          ].map((cat, i) => (
            <TouchableOpacity
              key={i}
              style={styles.categoryItem}
              onPress={() => navigation.navigate(cat.screen)}
            >
              <Text style={styles.categoryIcon}>{cat.icon}</Text>
              <Text style={styles.categoryName}>{cat.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Annonces */}
        {ads.map((ad) => (
          <View key={ad.id} style={styles.adCard}>
            <Image source={{ uri: ad.image }} style={styles.adImage} />
            <View style={styles.adContent}>
              <Text style={styles.adTitle}>{ad.title}</Text>
              <Text style={styles.adPrice}>{ad.price}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background, // #F1F0E9
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical:25,
    backgroundColor: Colors.primary, // #41644A
  },
  headerTitle: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 15,
    backgroundColor: '#fff',
    borderRadius: 25,
    paddingHorizontal: 15,
    elevation: 2,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 16,
  },
  searchIcon: {
    fontSize: 18,
    color: '#888',
  },
  categoryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 15,
    marginVertical: 10,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.primaryDark, // #0D4715
  },
  seeAll: {
    color: Colors.secondary, // #E9762B
    fontWeight: '600',
  },
  categoriesScroll: {
    marginVertical: 10,
    marginHorizontal: 10,
  },
  categoryItem: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 90,
    height: 90,
    marginHorizontal: 8,
    backgroundColor: '#fff',
    borderRadius: 45,
    elevation: 3,
  },
  categoryIcon: {
    fontSize: 28,
    marginBottom: 6,
  },
  categoryName: {
    fontSize: 12,
    textAlign: 'center',
    color: Colors.text,
  },
  adCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginHorizontal: 15,
    marginVertical: 10,
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 2,
  },
  adImage: {
    width: 100,
    height: 100,
  },
  adContent: {
    justifyContent: 'center',
    padding: 14,
    flex: 1,
  },
  adTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.text,
  },
  adPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.secondary, // #E9762B
    marginTop: 4,
  },
});

export default HomeScreen;