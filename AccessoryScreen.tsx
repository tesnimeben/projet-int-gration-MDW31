// screens/AccessoryScreen.tsx
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Colors from '../constants/Colors';

const AccessoryScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Accessoires</Text>
      <Text style={styles.subtitle}>Colliers, jouets, litières, gamelles...</Text>
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
});

export default AccessoryScreen;