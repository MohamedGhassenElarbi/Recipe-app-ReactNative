import React from "react";
import { View,Text,StyleSheet,TouchableOpacity } from "react-native";
const GridItem = (props) => {
    const styles =StyleSheet.create({
        container:{
            width:160,
            height:200,
            margin:10,
            borderWidth:1,
            borderRadius:10,
            borderColor:'transparent',
            backgroundColor:props.item.color, 
        },
        itemText:{
            color:'white',
            fontWeight:'bold',
            fontSize:20,
            textAlign:'center',
            paddingVertical:80,   
        }
    })
    return(
        <TouchableOpacity onPress={()=>{props.navigation.navigate("CategoryMeals",{name:props.item.title,id:props.item.id})}}>
        <View style={styles.container}><Text style={styles.itemText}>{props.item.title}</Text></View>
        </TouchableOpacity>
    );
}
export default GridItem;
