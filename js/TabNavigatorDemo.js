/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
//import {AppStackNavigator} from './js/AppStackNavigator'
import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
//导入导航模块
import TabNavigator from 'react-native-tab-navigator';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
//export default  AppStackNavigator;
export default class App extends Component<Props> {
    constructor(props){
        super(props);
        this.state={
                selectedTab:'one'
        }
    }
    render() {
        const {navigation}=this.props;
        return (
            <View style={styles.container}>
                <TabNavigator>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'one'}
                        title="One"
                        renderIcon={() => <Image style={styles.imageTab}
                                                 source={require('../res/images/ic_one_n.png')}/>}
                        renderSelectedIcon={() => <Image style={styles.imageTab}
                                                         source={require('../res/images/ic_one_p.png')}/>}
                        badgeText="1"
                        onPress={() => this.setState({selectedTab: 'one'})}>
                        <View onPress={()=>{
                            navigation.goBack();
                        }} style={styles.page1}>{/*<Text>{instructions}</Text>*/}</View>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'two'}
                        title="Two"
                        renderIcon={() => <Image style={styles.imageTab}
                                                 source={require('../res/images/ic_two_n.png')}/>}
                        renderSelectedIcon={() => <Image style={styles.imageTab}
                                                         source={require('../res/images/ic_two_p.png')}/>}
                        onPress={() => this.setState({selectedTab: 'two'})}>
                        <View style={styles.page2}><Text>{instructions}</Text></View>
                    </TabNavigator.Item>
                </TabNavigator>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F11CFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    page1:{
      flex:1,
        backgroundColor:"#d15"
    },
    page2:{
        flex:1,
        backgroundColor:"#a75"
    },
    imageTab: {
        height: 30,
        width: 30,
        backgroundColor:'#34f223'
    }
});
