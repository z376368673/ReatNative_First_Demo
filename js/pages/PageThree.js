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
export default class PageThree extends Component<Props> {
    constructor(props){
        super(props);
    }
    render() {
        const {navigation} = this.props;
        return (
            <View style={styles.container}>
                <NavigationBar
                    isShowBackView={false}
                    title='收藏'/>
                <Button
                    title="Go Page3"
                    onPress={()=>{
                        navigation.navigate('Page3',{title:'Page3Title'})
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
