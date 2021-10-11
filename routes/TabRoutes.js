import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CategoriesScreen from '../screens/CategoriesScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons';
const Tab = createBottomTabNavigator();
function TabRoutes(){
    return(
      <Tab.Navigator screenOptions={{//shared options between all routes
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
        <Tab.Screen name="Meals" component={CategoriesScreen} options={{
            tabBarIcon: (props) => (
              <MaterialCommunityIcons name="food" size={30} color='#f4511e' />
            ),
            tabBarActiveTintColor:'#f4511e',
            headerShown: false
            }}/>
        <Tab.Screen name="Favorites" component={FavoritesScreen} options={{
            tabBarIcon: (props) => (
              <AntDesign name="heart" size={30} color='#f4511e' />
            ),
            tabBarActiveTintColor:'#f4511e'}}/>
      </Tab.Navigator>
    );
  };
  export default TabRoutes;