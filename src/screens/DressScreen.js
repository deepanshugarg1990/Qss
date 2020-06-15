import React, {Component} from "react";
import {FlatList, Image, Text, View} from 'react-native';
import {ImageAssets} from "../utils";

class DressScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: this.getData()
        }
    }


    render() {
        return (
            <View style={{marginTop: 10}}>
                <FlatList
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={this.state.data}
                    renderItem={({item}) => (
                        <View>
                            <Image
                                style={{width: 200, height: 130, borderRadius: 20, marginHorizontal: 10}}
                                source={item.Icon}/>
                            <Text style={{
                                position: 'absolute',
                                left: 0,
                                bottom: 0,
                                marginLeft: 20,
                                marginBottom: 8,
                                color: 'white',
                                fontSize: 18
                            }}>{item.Name}</Text>

                            <Text style={{
                                position: 'absolute',
                                right: 0,
                                bottom: 0,
                                marginBottom: 8,
                                marginRight: 15,
                                color: 'white',
                                fontSize: 18
                            }}>{item.Price}</Text>
                        </View>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                    extraData={this.state}
                />
            </View>);
    }


    getData = () => {
        return [
            {
                "Name": "Kids Dress",
                "Price": '$19',
                "Icon": ImageAssets.icon_suites
            },
            {
                "Name": "Chocolate Cake",
                "Price": '$19',
                "Icon": ImageAssets.icon_suites
            },
            {
                "Name": "Chocolate Cake",
                "Price": '$19',
                "Icon": ImageAssets.icon_suites
            }
        ]
    }
}

export default DressScreen;


