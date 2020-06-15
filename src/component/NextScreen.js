import React, {Component} from "react";
import {SafeAreaView, Text} from 'react-native';

class NextScreen extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <SafeAreaView style={{flexDirection: 'column', backgroundColor: 'white', flex: 1}}>
                <Text>Hello</Text>
            </SafeAreaView>
        );
    }

}


export default NextScreen;



