/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { StackNavigator } from 'react-navigation';
import { Main, MainScreen } from './Main';
import { Profile, ProfileScreen } from './Profile';

const initialState = {
  result: 15000,
  value: []
}

const userReducer = (state = { name: "Chen", age: 14 }, action) => {
  switch (action.type) {
    case "setName":
      state = {
        ...state,
        name: action.payload
      }
      break;
    case "setAge":
      state = {
        ...state,
        age: action.payload
      }
      break;
    default:

  }
  return state;
}

const employeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      state = {
        result: state.result += action.payload,
        value: [...state.value, action.payload]
      }
      break;
    case "SUBTRACT":
      state = {
        result: state.result -= action.payload,
        value: [...state.value, action.payload]
      }
      break;
    default:

  }
  return state;
}

export const store = createStore(combineReducers({ emp: employeeReducer, user: userReducer }));

export class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Main navigation={this.props.navigation} />
      </Provider>
    );
  }

  componentDidMount() {
    store.subscribe(() => {
      console.log("Update Store: ", store.getState());
    });

    /*store.dispatch({
      type: "ADD",
      payload:15000
    })
    store.dispatch({
      type: "setName",
      payload: "Worameth"
    })*/
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export const Route = StackNavigator({
  Main: { screen: App },
  Profile: { screen: Profile },
});

export default Route;