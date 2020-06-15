import React, {Component} from "react";
import {FlatList, Image, Text, View} from 'react-native';
import {ImageAssets} from "../utils";
import CardView from 'react-native-cardview';

class SectionScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: this.getData()
        }
    }

    render() {
        return (
            <View>
                <FlatList
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={this.state.data}
                    renderItem={({item}) => (
                        <View>
                            <View style={{width: 50, height: 50, margin: 15}}>
                                <CardView
                                    cardElevation={5}
                                    cornerRadius={50 / 2}>
                                    <View>
                                        <Image
                                            style={{width: 50, height: 50, padding: 10}}
                                            source={item.Icon}/>
                                    </View>
                                </CardView>
                            </View>
                            <Text style={{alignSelf: 'center', fontSize: 12}}>{item.text}</Text>
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
                "Icon": ImageAssets.icon_pizza,
                'text': 'Food'
            },
            {
                "Icon": ImageAssets.icon_clothes,
                'text': 'Clothes'
            },
            {
                "Icon": ImageAssets.icon_trolly,
                'text': 'Travel'
            },
            {
                "Icon": ImageAssets.icon_beauty,
                'text': 'Beauty'
            },
            {
                "Icon": ImageAssets.icon_gifts,
                'text': 'Gifts'
            }
        ]
    }
}

export default SectionScreen;


