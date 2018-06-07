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
export default class PageTwo extends Component<Props> {
    constructor(props){
        super(props);
    }
    render() {
        const {navigation} = this.props;
        return (
            <View style={styles.container}>
                <NavigationBar
                    title='趋势'
                    isShowBackView={false}
                />
                <Text> This is Page1</Text>
                <Button
                    title="Go Page2"
                    onPress={()=>{
                        navigation.navigate('Page2',{title:'Page2.....'})
                    }}
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
