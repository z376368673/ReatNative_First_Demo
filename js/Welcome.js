/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
//import {AppStackNavigator} from 'AppStackNavigator'
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';
import {HomeTabNavigator} from "./AppStackNavigator";
import NavigationBar from './view/NavigationBar'

type Props = {};
export  default class Welcome extends Component<Props> {
    constructor(props){
        super(props);
    }
    componentWillUnmount(){
        //setTimeout.exit();
       // clearTimeout();
        //如果定时器不为空，则清除定时器
        this.timer&&clearTimeout(this.timer);
    }
    componentDidMount() {
       this.timer =  setTimeout(()=>{
          // alert("哈哈");
           const {navigation} = this.props;
            //navigation.navigate("TabNavigator");
           // navigation.navigate("Page2");
           //重置路由，把下一个界面当作首页,
           // navigation.resetTo({
           //     component:HomeTabNavigator,
           // });
        },1000);
    }
    render() {
        const {navigation} = this.props;
        return (
            <View style={styles.container}>
                <NavigationBar
                    title='欢迎页'
                    isShowBackView={false}
                />
                <Text style={styles.text}> Welcome React-Native</Text>
                <Button
                    style={styles.button}
                    title="Go TabNavigator"
                    onPress={()=>{
                        navigation.navigate('TabNavigator')
                    }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //justifyContent: 'center',
        //alignItems: 'center',
        backgroundColor: '#F1f1f1',
    },

    text:{
        color:"#d15",
        fontSize:20,
        marginTop:30
    },

    button:{
        marginTop:30
    },
});
