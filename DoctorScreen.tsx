// screens/DoctorScreen.tsx
import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Colors from '../constants/Colors';

const DoctorScreen = () => {
  const doctors = [
    { id: '1', name: 'Dr. Sophie Martin', specialty: 'Chien & Chat', location: 'Paris' },
    { id: '2', name: 'Dr. Jean Dupont', specialty: 'Exotiques', location: 'Lyon' },
    { id: '3', name: 'Dr. Amira Benali', specialty: 'Urgences 24/7', location: 'Marseille' },
  ];

  const renderDoctor = ({ item }: any) => (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{item.name}</Text>
      <Text style={styles.cardText}>Spécialité : {item.specialty}</Text>
      <Text style={styles.cardText}>📍 {item.location}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Vétérinaires</Text>
      <FlatList
        data={doctors}
        renderItem={renderDoctor}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.primary,
    marginBottom: 16,
    textAlign: 'center',
  },
  list: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: Colors.white,
    padding: 16,
    marginVertical: 8,
    borderRadius: 10,
    borderWidth: 1,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.primary,
  },
  cardText: {
    fontSize: 14,
    color: Colors.text,
    marginTop: 4,
  },
});

export default DoctorScreen;