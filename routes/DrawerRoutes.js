import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FiltersScreen from '../screens/FiltersScreen';
import TabRoutes from './TabRoutes';
import HeaderSaveButton from '../components/HeaderSavebutton';
const Drawer = createDrawerNavigator();
function DrawerRoutes (){
    return(
     <Drawer.Navigator screenOptions={{//shared options between all routes
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
        <Drawer.Screen name="Categories" component={TabRoutes} />
        <Drawer.Screen name="Filters" component={FiltersScreen} /* options={{
          headerRight: () => (
            <HeaderSaveButton/>
          ),
        }} */ />
      </Drawer.Navigator> 
    );
  }
  export default DrawerRoutes;