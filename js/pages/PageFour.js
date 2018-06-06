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

type Props = {};
export default class PageFour extends Component<Props> {
    constructor(props){
        super(props);
    }
    render() {
        const {navigation} = this.props;
        return (
            <View style={styles.container}>
                <Text> This is Page1</Text>
                <Button
                    title="Go Page4"
                    onPress={()=>{
                        navigation.navigate('Page4',{title:'This\'s Page4'})
                    }}
                />
                <Text
                    onPress={()=>{
                        navigation.goBack()
                    }}
                    style={styles.text}> Go Back</Text>
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
