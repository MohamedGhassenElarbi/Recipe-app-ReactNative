import React from "react";
import { View,Text,StyleSheet, ImageBackground,TouchableOpacity } from "react-native";
import {MaterialIcons} from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

const MealItem = (props) => {
    return(
        <TouchableOpacity onPress={()=>props.navigation.navigate('MealDetail',{item:props.item})}>
        <View style={styles.container}>
            
            <ImageBackground source={{uri: props.item.imageUrl}} resizeMode="cover" style={styles.bgImage}>
            <View style={styles.titleBackground}><Text style={styles.title}>{props.item.title}</Text></View>
            </ImageBackground>
            <View style={styles.bottomInfo}>
                <View style={styles.infoContainer}>
                    <MaterialIcons name='timer' size={20} color='white'/>
                    <Text style={styles.bottomText}>{props.item.duration}</Text>
                </View>
                <View style={styles.infoContainer}>
                    <MaterialCommunityIcons name="hand-peace" size={24} color="white" />
                    <Text style={styles.bottomText}>{props.item.complexity}</Text>
                </View>
                <View style={styles.infoContainer}>
                    <MaterialIcons name='attach-money' size={20} color='white'/>
                    <Text style={styles.bottomText}>{props.item.affordability}</Text>
                </View>  
            </View>
        </View>
        </TouchableOpacity>
    );
}
export default MealItem;
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'coral',
        height:300,
        marginHorizontal:6,
        marginVertical:10,
        borderColor:'transparent',
        borderWidth:1,
        overflow:"hidden",
        borderRadius:10,
    },
    bgImage:{
        width:"100%",
        height:250,
    },
    titleBackground:{
        backgroundColor:'rgba(0,0,0,0.7)',
        height:50,
        
    },
    title:{
        color:'white',
        fontSize:20,
        textAlign:'center'
    },
    bottomInfo:{
        paddingTop:10,
        flexDirection:'row',
        justifyContent:'space-around'
        
    },
    bottomText:{
        color:'white',
        fontWeight:'bold',
        fontSize:15,
        marginLeft:5,
    },
    infoContainer:{
        flexDirection:'row',
    }

})