import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
} from "react-native";

// definition of the Item, which will be rendered in the FlatList
const Item = ({ name, details }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{name}</Text>
    <Text style={styles.details}>{details}</Text>
  </View>
);

// the filter
const List = (props) => {
  const renderItem = ({ item }) => {
    // when no input, show all
    if (props.searchPhrase === "") {
      return <Item name={item.name} details={item.details} />;
    }
    // filter of the name
    if (item.name.toUpperCase().includes(props.searchPhrase.toUpperCase().trim().replace(/\s/g, ""))) {
      return <Item name={item.name} details={item.details} />;
    }
    // filter of the description
    if (item.details.toUpperCase().includes(props.searchPhrase.toUpperCase().trim().replace(/\s/g, ""))) {
      return <Item name={item.name} details={item.details} />;
    }
  };

  return (
    <SafeAreaView style={styles.list__container}>
      <View
        onStartShouldSetResponder={() => {
          props.setClicked(false);
        }}
      >
        <FlatList
          
          data={props.data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
      
    </SafeAreaView>
  );
};

export default List;

const styles = StyleSheet.create({
  list__container: {
    height : "100%",
    width: "100%",
  },
  item: {
    shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 30, //IOS
    elevation: 20, // Android
    borderRadius: 5,
    padding : 30,
 
  },
  title: {
    marginTop:25,
    fontSize: 17,
    fontWeight: "bold",
    marginBottom: 5,
    fontStyle: "italic",
  },
});