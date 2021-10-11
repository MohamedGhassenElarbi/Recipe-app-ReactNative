import React,{useState,useEffect} from "react";
import { View,StyleSheet,Text, Switch } from "react-native";
import HeaderSaveButton from "../components/HeaderSavebutton";
const FiltersScreen = ({ navigation }) => {
    const [isGlutenFree, setIsGlutenFree] = useState(false);
    const [isVegan, setIsVegan] = useState(false);
    const [isVegetarian, setIsVegetarian] = useState(false);
    const [isLactoseFree, setIsLactoseFree] = useState(false);
    const appliedFilters={
        glutenFree:isGlutenFree,
        lactoseFree:isLactoseFree,
        vegetarian:isVegetarian,
        vegan:isVegan,
    }
    
    React.useLayoutEffect(() => {
        navigation.setOptions({
          headerRight: () => (
            <HeaderSaveButton appliedFilters={appliedFilters} />
          ),
        });
      }, [navigation]);
    return(
        <View>
            <Text style={styles.title}>Available Filters:</Text>
            <View style={styles.filterContainer}>
                <Text style={styles.filterText}>Gluten Free</Text>
                <Switch value={isGlutenFree} onValueChange={newValue =>setIsGlutenFree(newValue)}
                    thumbColor={isGlutenFree ? '#f4511e' : "#f4f3f4"}
                    trackColor={{ false: "#767577", true: 'coral' }}
                />
            </View>
            <View style={styles.filterContainer}>
                <Text style={styles.filterText}>Vegan</Text>
                <Switch value={isVegan} onValueChange={newValue =>setIsVegan(newValue)}
                    thumbColor={isVegan ? '#f4511e' : "#f4f3f4"}
                    trackColor={{ false: "#767577", true: 'coral' }}
                />
            </View>
            <View style={styles.filterContainer}>
                <Text style={styles.filterText}>Vegetarian</Text>
                <Switch value={isVegetarian} onValueChange={newValue =>setIsVegetarian(newValue)}
                    thumbColor={isVegetarian ? '#f4511e' : "#f4f3f4"}
                    trackColor={{ false: "#767577", true: 'coral' }}
                />
            </View>
            <View style={styles.filterContainer}>
                <Text style={styles.filterText}>Lactose Free</Text>
                <Switch value={isLactoseFree} onValueChange={newValue =>setIsLactoseFree(newValue)}
                    thumbColor={isLactoseFree ? '#f4511e' : "#f4f3f4"}
                    trackColor={{ false: "#767577", true: 'coral' }}
                />
            </View>
        </View>
    );
}
export default FiltersScreen;
const styles = StyleSheet.create({
    title:{
        textAlign:'center',
        fontWeight:'bold',
        fontSize:25,
        marginVertical:20,
    },
    filterContainer:{
        marginVertical:10,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        borderWidth:1,
        padding:10,
        marginHorizontal:20,
        borderRadius:10,
        borderColor:'coral',
    },
    filterText:{
        fontSize:18,
    }
});