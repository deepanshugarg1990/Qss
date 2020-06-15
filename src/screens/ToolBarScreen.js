import React, {Component} from "react";
import {Image, StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import {ImageAssets} from '../utils/index'

class ToolBarScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: ""
        }
    }


    render() {
        return (
            <View style={styles.topBarStyle}>
                <TouchableOpacity
                    style={{flex: .2}}
                    onPress={() => {
                       this.props.click();
                    }}>
                    <Image style={styles.drawerStyle}
                           source={ImageAssets.icon_drawer}
                    />
                </TouchableOpacity>

                <View style={styles.locationStyle}>
                    <Image style={styles.locationImageStyle}
                           source={ImageAssets.icon_location}/>
                    <TextInput
                        style={{flex: 1}}
                        onChangeText={(text) => {
                            this.setState({text: text})
                        }}
                        placeholder="Search by location"
                        value={this.state.text}
                    />
                </View>

                <TouchableOpacity
                    style={{flex: .1, marginTop: 17, marginLeft: 15}}
                    onPress={() => {
                        this.props.click();
                    }}>
                    <Image
                        source={ImageAssets.icon_shorting}
                    />
                </TouchableOpacity>

                <TouchableOpacity
                    style={{flex: .2, marginTop: 5}}
                    onPress={() => {
                        this.props.click();
                    }}>
                    <Image style={styles.bellStyle}
                           source={ImageAssets.icon_bell}
                    />
                </TouchableOpacity>

            </View>

        );
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


export default ToolBarScreen;



