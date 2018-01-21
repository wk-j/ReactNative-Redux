import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { store } from './App';

export default class ProfileScreen extends Component {
    constructor() {
        super();
        this.state = {chen: ""}
        console.log(store.getState());
    }

    componentDidMount() {
        this.setState({chen: "ที่นี้หน้า 2"});
    }
    render() {
        return (
            <View>
                <Text>{this.state.chen}</Text>
                <Text>{this.props.username}</Text>
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