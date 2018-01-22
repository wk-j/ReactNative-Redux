import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { store } from './App';
import { connect } from 'react-redux';
import { Main } from './Main';

export class ProfileScreen extends Component {
    constructor() {
        super();
        this.state = {chen: ""}
        console.log(store.getState());
    }

    componentDidMount() {
        this.setState({chen: "ที่นี้หน้า 2"});
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
    }
    render() {
        return (
            <View>
                <Text>{this.state.chen}</Text>
                <Text>{this.props.navigation.username}</Text>
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

//export const Profile = connect(mapStatetoProps)(ProfileScreen)