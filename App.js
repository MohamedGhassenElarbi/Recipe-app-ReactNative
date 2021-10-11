import React from 'react';
import { StyleSheet} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import CategoryMealsScreen from './screens/CategoryMealsScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import HeaderFavoriteButton from './components/HeaderFavoriteButton';
import mealsReducer from './store/reducers/meals';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import DrawerRoutes from './routes/DrawerRoutes';

const rootReducer = combineReducers({
  meals:mealsReducer,
})
const store =createStore(rootReducer);
const Stack = createNativeStackNavigator();




export default function App() {

  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Categories"
        screenOptions={{//shared options between all routes
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen name="Categorie" component={DrawerRoutes} options={{headerShown: false}} />
        <Stack.Screen name="CategoryMeals" component={CategoryMealsScreen} 
          options={({ route }) => ({ title: route.params.name })}
        />
        <Stack.Screen name="MealDetail" component={MealDetailScreen}
          options={({ route }) => ({ title: route.params.item.title ,
            headerRight: () => (
              <HeaderFavoriteButton id={route.params.item.id}/>
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
