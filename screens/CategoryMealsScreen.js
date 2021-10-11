import React from "react";
import { View,StyleSheet,Text,FlatList } from "react-native";
import { useSelector } from "react-redux";
import MealItem from "../components/MealItem";

const CategoryMealsScreen = ({route,navigation}) => {
    const { id} = route.params;
    const availableMeals = useSelector(state => state.meals.filteredMeals)
    const filteredMealsPerCategory=availableMeals.filter(token=>token.categoryIds.indexOf(id)>=0);
    return(
        <View>
            <FlatList data={filteredMealsPerCategory}
                renderItem={({item})=>{
                    return(
                      <MealItem item={item} navigation={navigation}/>
                    );
                }}
            />
        </View>
    );
}
export default CategoryMealsScreen;
const styles = StyleSheet.create({
    
});