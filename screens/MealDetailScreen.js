import { View,StyleSheet,Text,ImageBackground, FlatList, ScrollView } from "react-native";
import {MaterialIcons} from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import React, { useEffect } from 'react';
import { LogBox } from 'react-native';
const MealDetailScreen = ({route,navigation}) => {
    const {item} = route.params;
    useEffect(() => {
        LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    }, [])
    return(
        <ScrollView>
        <View>
        <View style={styles.container}>
            
            <ImageBackground source={{uri: item.imageUrl}} resizeMode="cover" style={styles.bgImage}>
            <View style={styles.titleBackground}><Text style={styles.title}>{item.title}</Text></View>
            </ImageBackground>
            <View style={styles.bottomInfo}>
                <View style={styles.infoContainer}>
                    <MaterialIcons name='timer' size={20} color='white'/>
                    <Text style={styles.bottomText}>{item.duration}</Text>
                </View>
                <View style={styles.infoContainer}>
                    <MaterialCommunityIcons name="hand-peace" size={24} color="white" />
                    <Text style={styles.bottomText}>{item.complexity}</Text>
                </View>
                <View style={styles.infoContainer}>
                    <MaterialIcons name='attach-money' size={20} color='white'/>
                    <Text style={styles.bottomText}>{item.affordability}</Text>
                </View>  
            </View>
        </View>
        <Text style={styles.sectionTitle}>Ingredients</Text>
        <FlatList 
            data={item.ingredients}
            keyExtractor={item => Math.random().toString()}
            renderItem={({item})=>{
                return(
                  <Text style={styles.ingredientItem}>{item}</Text>
                );
            }}
        />
        <Text style={styles.sectionTitle}>Steps</Text>
        <FlatList 
            data={item.steps}
            keyExtractor={item => Math.random().toString()}
            renderItem={({item})=>{
                return(
                  <Text style={styles.stepItem}>{item}</Text>
                );
            }}
        />
        </View>
        </ScrollView>
    );
}
export default MealDetailScreen;
const styles=StyleSheet.create({
    container:{
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
    },
    sectionTitle:{
        fontSize:25,
        fontWeight:'bold',
        color:'coral',
        textAlign:'center',
    },  
    ingredientItem:{
        padding:10,
        borderWidth:1,
        marginVertical:10,
        marginHorizontal:20,
        fontSize:18,
        borderRadius:10,
        borderColor:'coral',
        borderStyle:'dashed'
    },
    stepItem:{
        padding:10,
        borderWidth:1,
        marginVertical:10,
        marginHorizontal:20,
        fontSize:18,
        borderRadius:10,
        borderColor:'coral',
    }

})