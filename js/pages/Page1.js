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
import ScrollableTabView,{ScrollableTabBar} from 'react-native-scrollable-tab-view'

type Props = {};
export default class Page1 extends Component<Props> {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <View style={styles.container}>
                <ScrollableTabView>
                    <Text tabLabel='Java'>java</Text>
                    <Text tabLabel='Android'>android</Text>
                    <Text tabLabel='IOS'>ios</Text>
                    <Text tabLabel='JavaScript'>js</Text>
                </ScrollableTabView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F1f1f1',
    },
    text:{
        color:"#d15",
        fontSize:20,
        marginTop:30
    },
});
