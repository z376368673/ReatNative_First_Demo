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
import NavigationBar from "../view/NavigationBar";

type Props = {};
export default class Page1 extends Component<Props> {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <View style={styles.container}>
               <NavigationBar
                   title='自定义标签'
                   //isShowBackView={true}
                   navigation={this.props.navigation}
                   // leftView={this.getLeftStyle_BackText('asd',()=>{
                   //     this.props.navigation.goBack(null);
                   // })}
                   leftView={NavigationBar.getLeftStyle_BackText('返回',()=>{
                       alert('需要保存标签')
                   })}
               />
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
    text:{
        color:"#d15",
        fontSize:20,
        marginTop:30
    },
});
