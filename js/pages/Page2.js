/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
//import {AppStackNavigator} from 'AppStackNavigator'
import NavigationBar from '../view/NavigationBar'
import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';


type Props = {};
export default class Page2 extends Component<Props> {
    constructor(props) {
        super(props);
        this.setState(() => {
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <NavigationBar
                    title={'标题'}
                    rightText={'分享'}
                    props = {this.props}
                />
                <Text style={styles.text}> This is Page2</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
        color: "#d15",
        fontSize: 20,
        marginTop: 30
    },
});
// Page2.navigationOptions = {
//     title: 'Page2Title!',
// };