import React from "react";
import { View,StyleSheet,TouchableOpacity, Alert } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { toggleFavorite } from "../store/actions/meals";
const HeaderFavoriteButton = (props) => {
    const dispatch = useDispatch();
    const dispatchToggleFavoriteHandler = () => {
        dispatch(toggleFavorite(props.id));
        //Alert.alert("Great !","Recipe added successfully",[{title:'Close'}]);
    }
    const availableMeals = useSelector(state => state.meals.favoriteMeals);
    const mealIsFavorite =availableMeals.findIndex(meal =>meal.id===props.id);
    let fav =false;
    if(mealIsFavorite>=0){
    fav=true;
    }
    return(
        <TouchableOpacity onPress={dispatchToggleFavoriteHandler}>
        <View>
        <AntDesign name="heart" size={24} color={fav?"#8B0000":"white" }/>
        </View>
        </TouchableOpacity>
    );
}
export default HeaderFavoriteButton;
const styles=StyleSheet.create({

})