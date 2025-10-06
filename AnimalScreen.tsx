// screens/AnimalScreen.tsx
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Colors from '../constants/Colors';

const AnimalScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Animaux</Text>
      <Text style={styles.subtitle}>Chiots, chatons, oiseaux, rongeurs...</Text>
      <Text style={styles.info}>Bientôt : annonces avec photos et prix !</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.background,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.primary,
  },
  subtitle: {
    fontSize: 16,
    color: Colors.secondary,
    marginTop: 10,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  info: {
    fontSize: 14,
    color: Colors.text,
    marginTop: 20,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});

export default AnimalScreen;