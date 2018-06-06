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
    Button,
    TextInput
} from 'react-native';
import Page2 from "./Page2";


type Props = {};
export  default class Page3 extends Component<Props> {
    constructor(props){
        super(props);
    }
    static  navigationOptions =({navigation})=>{
        const {state, setParams} = navigation;
        const {params} = state;
        return {
            title: params.title ? params.title : 'Page3',
        }
    }

    render() {
        const {navigation} = this.props;
        const {state,setParams}=navigation;
        const {params} = state;
        const showtext = params.mode==='edit'?'正在编辑...':'已保存';
        return (
            <View style={styles.container}>
                <Text  style={styles.text}> This is Page3</Text>
                <Text>{showtext}</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={ text => {
                       setParams({title:text})
                    }}
                 />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    input:{
        height:50,
        width:100,
        borderWidth:2,
        marginTop:20,
        borderColor:'#752'
    },
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