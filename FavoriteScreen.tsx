// screens/FavoriteScreen.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';

const FavoriteScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Favoris</Text>
      <Text style={styles.subtitle}>Vos annonces favorites apparaîtront ici.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: Colors.background },
  title: { fontSize: 24, fontWeight: 'bold', color: Colors.primaryDark },
  subtitle: { fontSize: 16, color: Colors.text, textAlign: 'center', paddingHorizontal: 20 },
});

export default FavoriteScreen;