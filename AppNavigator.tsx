// navigation/AppNavigator.tsx
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from './TabNavigator';

// Tous les écrans
import LoginScreen from '../screens/Auth/LoginScreen';
import RegisterScreen from '../screens/Auth/RegisterScreen';
import DoctorScreen from '../screens/DoctorScreen';
import AccessoryScreen from '../screens/AccessoryScreen';
import FoodScreen from '../screens/FoodScreen';
import AnimalScreen from '../screens/AnimalScreen';
import ProfileScreen from '../screens/ProfileScreen';
import AddPostScreen from '../screens/AddPostScreen';
import CategoryListScreen from '../screens/CategoryListScreen';
import FavoriteScreen from '../screens/FavoriteScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="MainTabs">
      <Stack.Screen
        name="MainTabs"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      {/* Écrans hors barre du bas */}
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Doctor" component={DoctorScreen} options={{ title: 'Vétérinaires' }} />
      <Stack.Screen name="Accessory" component={AccessoryScreen} options={{ title: 'Accessoires' }} />
      <Stack.Screen name="Food" component={FoodScreen} options={{ title: 'Nourriture' }} />
      <Stack.Screen name="Animal" component={AnimalScreen} options={{ title: 'Animaux' }} />
      <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: 'Profil' }} />
      <Stack.Screen name="AddPost" component={AddPostScreen} options={{ title: 'Nouvelle annonce' }} />
      <Stack.Screen name="CategoryList" component={CategoryListScreen} options={{ title: 'Catégories' }} />
      <Stack.Screen name="Favorite" component={FavoriteScreen} options={{ title: 'Favoris' }} />
    </Stack.Navigator>
  );
}

