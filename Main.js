import React, { Component } from 'react';
import { View, Button, Text } from 'react-native';
import { connect } from 'react-redux';
import Profile from './Profile';

export class MainScreen extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <View>
                <Button title="ไปหน้า Profile" onPress={() => this.props.navigation.navigate("Profile")} />
                <Text>My name is {this.props.user.name}</Text>
                <Button title="change name" onPress={() => this.props.setName("Worameth Semapat")} />
                <Text>{this.props.test}</Text>
            </View>
        );
    }
}

const mapStatetoProps = (state) => {
    return {
        user: state.user,
        emp: state.emp,

    }
}

const mapDispatchtoProps = (dispatch) => {
    return {
        setName: (name) => {
            dispatch({
                type: "setName",
                payload: name,
            });
        }

    }
}

export const Main = connect(mapStatetoProps, mapDispatchtoProps)(MainScreen);