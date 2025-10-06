// screens/ProfileScreen.tsx
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Colors from '../constants/Colors';

const ProfileScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mon Profil</Text>
      <Text style={styles.text}>Nom : Utilisateur</Text>
      <Text style={styles.text}>Email : user@example.com</Text>
      <Button
        title="Ajouter une annonce"
        onPress={() => navigation.navigate('AddPost')}
        color={Colors.secondary}
      />
      <Button
        title="Déconnexion"
        onPress={() => navigation.replace('Login')}
        color="#ccc"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: Colors.background,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.primary,
    marginBottom: 20,
    textAlign: 'center',
  },
  text: {
    fontSize: 16,
    color: Colors.text,
    marginBottom: 10,
  },
});

export default ProfileScreen;