import React, {Component} from "react";
import {FlatList, Image, Text, View} from 'react-native';
import {ImageAssets} from "../utils";
import CardView from "react-native-cardview";
import {Rating} from 'react-native-elements';

class SectionListScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: this.getData()
        }
    }

    render() {
        return (
            <View style={{marginHorizontal: 5, marginTop: 15, flex: 1}}>
                <FlatList
                    showsverticalscrollindicator={false}
                    data={this.state.data}
                    renderItem={({item}) => (
                        <CardView
                            style={{width: '47%', marginHorizontal: 5, marginTop: 10}}
                            cardElevation={5}
                            cornerRadius={4}>
                            <View>
                                <Image style={{height: 150, width: '100%'}} source={item.Icon}/>
                                <Text style={{fontSize: 16, marginHorizontal: 5}}>{item.text}</Text>
                                <Text style={{fontSize: 12, marginHorizontal: 5}}>1 km Away (562 Reviews)</Text>
                                <Rating
                                    style={{alignSelf: 'flex-start',marginTop:5, marginHorizontal: 5, marginBottom:10}}
                                    type='star'
                                    readonly={true}
                                    ratingCount={5}
                                    startingValue={5}
                                    imageSize={15}/>
                            </View>
                        </CardView>
                    )}
                    numColumns={2}
                    keyExtractor={(item, index) => index.toString()}
                    extraData={this.state}
                />
            </View>);
    }


    getData = () => {
        return [
            {
                "Icon": ImageAssets.icon_food,
                'text': 'Amrit Sweet'
            },
            {
                "Icon": ImageAssets.icon_suites,
                'text': 'Retanlal Clothes'
            },
            {
                "Icon": ImageAssets.icon_girl,
                'text': 'Baby Dress'
            },
            {
                "Icon": ImageAssets.icon_travel,
                'text': 'Travel'
            }
        ]
    }
}

export default SectionListScreen;


