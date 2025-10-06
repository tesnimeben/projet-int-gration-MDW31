// screens/AddPostScreen.tsx
import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import Colors from '../constants/Colors';

const AddPostScreen = ({ navigation }: any) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('animal');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const handlePost = () => {
    if (!title || !description) {
      Alert.alert('Erreur', 'Veuillez remplir le titre et la description');
      return;
    }

    // Ici, tu enverrais les données à Firebase plus tard
    Alert.alert('Succès', 'Annonce publiée !');
    navigation.goBack(); // Retour à l'écran précédent
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ajouter une annonce</Text>

      <TextInput
        style={styles.input}
        placeholder="Titre de l'annonce"
        value={title}
        onChangeText={setTitle}
      />

      <Text style={styles.label}>Catégorie</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={category}
          onValueChange={setCategory}
          style={styles.picker}
          itemStyle={{ color: Colors.text }}
        >
          <Picker.Item label="Animal" value="animal" />
          <Picker.Item label="Nourriture" value="food" />
          <Picker.Item label="Accessoire" value="accessory" />
          <Picker.Item label="Vétérinaire" value="doctor" />
        </Picker>
      </View>

      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
        multiline
        numberOfLines={4}
      />

      <TextInput
        style={styles.input}
        placeholder="Prix (optionnel)"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
      />

      <Button title="Publier l'annonce" onPress={handlePost} color={Colors.secondary} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: Colors.background,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: Colors.primary,
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    color: Colors.text,
    marginBottom: 8,
    fontWeight: '600',
  },
  input: {
    backgroundColor: Colors.white,
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 16,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    marginBottom: 16,
    backgroundColor: Colors.white,
  },
  picker: {
    height: 50,
    color: Colors.text,
  },
});

export default AddPostScreen;