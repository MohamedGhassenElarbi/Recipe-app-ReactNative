import React from "react";
import { View,StyleSheet,FlatList, Text } from "react-native";
import { useSelector } from "react-redux";
import MealItem from "../components/MealItem";
const FavoritesScreen = ({navigation}) => {
    const availableMeals = useSelector(state => state.meals.favoriteMeals);
    if(availableMeals.length===0){
        return <Text style={styles.notFound}>No favorite recipes are found</Text>
    }
    return(
        <View>
            <FlatList data={availableMeals}
                renderItem={({item})=>{
                    return(
                      <MealItem item={item} navigation={navigation}/>
                    );
                }}
            />
        </View>
    );
}
export default FavoritesScreen;
const styles = StyleSheet.create({
    notFound:{
        textAlign:'center',
        fontSize:16,
        color:'red',
        marginVertical:'50%',
    
    }
});