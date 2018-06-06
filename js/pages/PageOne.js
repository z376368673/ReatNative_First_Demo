/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import ScrollableTabView, {ScrollableTabBar} from 'react-native-scrollable-tab-view'
import React, {Component} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import HttpUtils from  '../http/HttpUtils'

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
        const {navigation} = this.props;
        return (
            <View style={styles.container}>
                <ScrollableTabView
                    renderTabBar={() => <ScrollableTabBar/>}
                >
                    <TabOne tabLabel='Java'>java</TabOne>
                    <TabOne tabLabel='Android'>android</TabOne>
                    <TabOne tabLabel='IOS'>ios</TabOne>
                    <TabOne tabLabel='JavaScript'>js</TabOne>
                </ScrollableTabView>
            </View>
        );
    }
}

class TabOne extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            result: '',
        }
    }
    //界面加载完成
    componentDidMount() {
        HttpUtils.getData('https://www.baidu.com')
            .then(result=>{
                this.setState({
                    result:'result',
                   // result:JSON.stringify(result),
                })
            })
            .catch(error=>{
                this.setState({
                    result:error.toString()
                })
            })
    }
    render() {
        return <View>
            <Text style={styles.text}>{this.state.result}</Text>
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F1f1f1',
    },
    text: {
        color: "#d15",
        fontSize: 20,
        marginTop: 30
    },
});
