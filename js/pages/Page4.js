/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
//import {AppStackNavigator} from 'AppStackNavigator'
import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';
import NavigationBar from "../view/NavigationBar";


type Props = {};

export default class Page4 extends Component<Props> {
    constructor(props) {
        super(props);
        this.setState(() => {
        })
    }
    static  navigationOptions =({navigation})=>{
        // const {state, setParams} = navigation;
        // const {params} = state;
        return {
            title: navigation.state.params.title ? navigation.state.params.title : 'Page4s',
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <NavigationBar
                    title='Page4'
                    navigation={this.props.navigation}
                />
                <Text style={styles.text}> This is Page4</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#F1f1f1',
    },
    text: {
        color: "#d15",
        fontSize: 20,
        marginTop: 30
    },
});
