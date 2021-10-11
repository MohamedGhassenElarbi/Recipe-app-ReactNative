import React from "react";
import { View,StyleSheet,Text,FlatList } from "react-native";
import { CATEGORIES } from "../data/dammyData";
import GridItem from "../components/GridItem";
const CategoriesScreen = ({navigation}) => {
    return(
        <View>
            
        <FlatList numColumns={2} data={CATEGORIES} 
        renderItem={({item})=>{
            return(
              <GridItem item={item} navigation={navigation}/>
            );
          }}/>
        </View>
    );
}
CategoriesScreen.navigationOptions = {
    
}
export default CategoriesScreen;
const styles = StyleSheet.create({

});