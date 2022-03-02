import { Text, View, StyleSheet } from 'react-native'
import React, { Component } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchUser } from '../redux/actions/index';
import Home from './Home'
import FontAwesome from "react-native-vector-icons/FontAwesome";
const Tab = createBottomTabNavigator();

export class MainScreen extends Component {
  componentDidMount() {
    this.props.fetchUser()

  }




  render() {
    return (

      <Tab.Navigator>
        <Tab.Screen name="Home" options={{ headerShown: true}} component={Home}
          options={{
            header: () => null,
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="home" color={color} size={26} />
            ),
          }} />
           <Tab.Screen name="Home1" options={{ headerShown: false }} component={Home}
          options={{
            header: () => null,
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="home" color={color} size={26} />
            ),
          }} />
           <Tab.Screen name="Home2" options={{ headerShown: false }} component={Home}
          options={{
            header: () => null,
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="home" color={color} size={26} />
            ),
          }} />
      </Tab.Navigator>
    )
  }
}
const mapStateToProps = (store) => ({
  currentUser: store.userState.currentUser
})
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const mapDispatchProps = (dispatch) => bindActionCreators({ fetchUser }, dispatch)

export default connect(mapStateToProps, mapDispatchProps)(MainScreen);