/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import ScrollableTabView, {ScrollableTabBar} from 'react-native-scrollable-tab-view'
import React, {Component} from 'react';
import {Button, StyleSheet, TouchableOpacity, View} from 'react-native';
import HttpUtils from '../http/HttpUtils'
import RefreshFlatList from "./RefreshFlatList";
import NavigationBar from "../view/NavigationBar";
import Welcome from "../Welcome";

type Props = {};
export default class PageOne extends Component<Props> {
    //构造方法
    constructor(props) {
        super(props);
    }
    //界面加载完成
    componentDidMount() {

    }
    //界面销毁时
    componentWillUnmount() {

    }
    render() {
        return (
            <View style={styles.container}>
                <NavigationBar
                    title='最热'
                    isShowBackView={false}
                    //rightView={this._getRightView()}
                     rightView={NavigationBar.getRightStyle_Text('自定义标签',()=>{
                         this.props.navigation.navigate('Page1');
                     })}
                />
                <ScrollableTabView
                    //背景色
                    tabBarBackgroundColor='#d15'
                    //未选中的tabBar字体颜色
                    tabBarInactiveTextColor='#cccccc'
                    //选中的tabBar字体颜色
                    tabBarActiveTextColor='#fff'
                    //设置下划线样式
                    tabBarUnderlineStyle={{
                        backgroundColor: '#fafafa',
                        height: 2,
                    }}
                    renderTabBar={() => <ScrollableTabBar/>}
                >
                    <RefreshFlatList tabLabel='Java' name='Java'/>
                    <RefreshFlatList tabLabel='Android' name='Android'/>
                    <RefreshFlatList tabLabel='IOS' name='IOS'/>
                    <RefreshFlatList tabLabel='JavaScript' name='JavaScript'/>
                </ScrollableTabView>
            </View>
        );
    }

    _getRightView() {
        let wh = 10;
        return <View style={{flexDirection: 'column', backgroundColor: '#000',flexWrap:'wrap'}} onPress={
            this.props.navigation.navigate('Page1')
        }>
            <View style={{flexDirection: 'row'}}>
                <View style={{backgroundColor: '#fff', width: wh, height: wh}}/>
                <View style={{backgroundColor: '#fff', width: wh, height: wh, marginLeft: 1}}/>
            </View>
            <View style={{flexDirection: 'row', marginTop: 1}}>
                <View style={{backgroundColor: '#fff', width: wh, height: wh}}/>
                <View style={{backgroundColor: '#fff', width: wh, height: wh, marginLeft: 1}}/>
            </View>

        </View>

    }

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F1f1f1',
    },
    text: {
        color: "#d15",
        fontSize: 20,
        marginTop: 30
    },
});
