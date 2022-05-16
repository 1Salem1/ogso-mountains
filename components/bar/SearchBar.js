import React from "react";
import { StyleSheet, TextInput, View, Keyboard, Button } from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";


const SearchBar = (props) => {
  return (
    <View style={styles.container}>
      <View
        style={
          !props.clicked
            ? styles.searchBar__unclicked
            : styles.searchBar__clicked
        }
      >
       
        <TextInput
          style={styles.input}
          placeholder="Search"
          value={props.searchPhrase}
          onChangeText={props.setSearchPhrase}
          onFocus={() => {
            props.setClicked(true);
          }}
        />
         <Feather
          name="search"
          size={20}
          color="black"
          style={{ marginLeft: 1 }}
        />
        
        {props.clicked && (
          <Entypo name="cross" size={0} color="black" style={{ padding: 1 }} onPress={() => {
              props.setSearchPhrase("")
          }}/>
        )}
      </View>
      {props.clicked && (
        <View>
         
        </View>
      )}
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
   
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    width: "90%",

    
  },
  searchBar__unclicked: {
    padding: 10,
    flexDirection: "row",
    width: "100%",
    backgroundColor: "white",
    borderRadius: 15,
    alignItems: "center",
    borderRadius: 5,
    borderColor: '#cccccc',
    borderStyle: 'solid',
    borderWidth: 1,
    backgroundColor: '#ffffff',
  },
  searchBar__clicked: {
    padding: 10,
    flexDirection: "row",
    width: "100%",
    backgroundColor: "white",
    borderRadius: 15,
    alignItems: "center",
    borderRadius: 5,
    borderColor: '#cccccc',
    borderStyle: 'solid',
    borderWidth: 1,
    backgroundColor: '#ffffff',
  },
  input: {
    padding: 10,
    flexDirection: "row",
    width: "89%",
    
    backgroundColor: "white",
    borderRadius: 15,
    alignItems: "center",
    
  },
});