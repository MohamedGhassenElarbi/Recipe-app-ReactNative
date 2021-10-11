import React from "react";
import { View,TouchableOpacity, Alert } from "react-native";
import { Entypo } from '@expo/vector-icons'; 
import { useDispatch } from "react-redux";
import {setFilters} from '../store/actions/meals';
const HeaderSaveButton = (props) => {
    const dispatch = useDispatch();
    const applyFiltersHandler = () => {
        dispatch(setFilters(props.appliedFilters));
        Alert.alert("Great !",'Filters saved successfully',[{title:'Close'}])
    }
    return(
        <TouchableOpacity onPress={applyFiltersHandler}>
        <View style={{marginRight:15}}>
        <Entypo name="save" size={30} color="white" />
        </View>
        </TouchableOpacity>
    );
}
export default HeaderSaveButton;