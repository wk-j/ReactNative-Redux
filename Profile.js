import React, { Component } from 'react';
import { Text } from 'react-native';

export class ProfileScreen extends Component {
    constructor() {
        super();
        this.state = {chen: ""}
    }

    componentDidMount() {
        this.setState({chen: "ที่นี้หน้า 2"});
    }
    render() {
        return (
            <Text>{this.state.chen}</Text>
        );
    }
}