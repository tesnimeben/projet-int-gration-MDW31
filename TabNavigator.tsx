// navigation/TabNavigator.tsx
import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';

// Écrans
import HomeScreen from '../screens/HomeScreen';
import CategoryListScreen from '../screens/CategoryListScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import LoginScreen from '../screens/Auth/LoginScreen';
import AddPostScreen from '../screens/AddPostScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: 100,
          paddingTop: 5,
          backgroundColor: '#41644A',
          borderTopWidth: 1,
          borderTopColor: '#eee',
        },
        tabBarShowLabel: true,
        tabBarLabelStyle: { fontSize: 10, marginBottom:5 },
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: '#ffffffff',
      }}
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeScreen}
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ color }) => <Text style={{ fontSize: 20, color }}>🏠</Text>,
        }}
      />
      <Tab.Screen
        name="CategoryTab"
        component={CategoryListScreen}
        options={{
          title: 'Category',
          headerShown: false,
          tabBarIcon: ({ color }) => <Text style={{ fontSize: 20, color }}>💡</Text>,
        }}
      />
      <Tab.Screen
        name="AddPost"
        component={AddPostScreen}
        options={{
          title: 'Sell',
          tabBarIcon: ({ color }) => (
            <View style={styles.fab}>
              <Text style={styles.fabText}>+</Text>
            </View>
          ),
          tabBarLabel: () => null,
        }}
      />
      <Tab.Screen
        name="FavoriteTab"
        component={FavoriteScreen}
        options={{
          title: 'My Ads',
          headerShown: false,
          tabBarIcon: ({ color }) => <Text style={{ fontSize: 20, color }}>❤️</Text>,
        }}
      />
      <Tab.Screen
        name="AccountTab"
        component={LoginScreen}
        options={{
          title: 'Account',
          headerShown: false,
          tabBarIcon: ({ color }) => <Text style={{ fontSize: 20, color }}>👤</Text>,
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  fab: {
    width: 80,
    height: 100,
    borderRadius: 30,
    backgroundColor: Colors.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#fff',
    elevation: 5,
  },
  fabText: {
    fontSize: 32,
    color: '#ffffffff',
    lineHeight: 32,
  },
});