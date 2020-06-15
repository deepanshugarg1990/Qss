import React, {Component} from "react";
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import {DressScreen, SectionListScreen, SectionScreen, ToolBarScreen} from "../screens";

class Home extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <SafeAreaView style={{flexDirection: 'column', backgroundColor: 'white', flex: 1}}>
                <ToolBarScreen
                    click={this.onclick}
                />
                <ScrollView style={{flex: 1}}>
                    <DressScreen/>
                    <SectionScreen/>
                    <SectionListScreen/>
                </ScrollView>
            </SafeAreaView>
        );
    }


    onclick = () => {
        this.props.navigation.navigate('NextScreen')
    }

}


const styles = StyleSheet.create({
    topBarStyle: {
        backgroundColor: 'white',
        height: 60,
        flexDirection: 'row'
    },
    tinyLogo: {
        width: 20,
        height: 20,
    },
    locationStyle: {
        height: 40,
        borderColor: 'gray',
        marginTop: 8,
        marginLeft: 10,
        borderWidth: 1,
        flex: .7,
        borderRadius: 18,
        flexDirection: 'row',
        backgroundColor: "#F2F2F2"
    },
    locationImageStyle: {
        width: 20,
        height: 20,
        marginLeft: 5,
        marginTop: 8,
        resizeMode: 'contain'
    },
    drawerStyle: {
        width: 30, height: 30, marginLeft: 15, marginTop: 8, resizeMode: 'contain'
    },

    bellStyle: {
        width: 30,
        height: 30,
        marginLeft: 5,
        marginTop: 8,
        resizeMode: 'contain'
    }

})


export default Home;



