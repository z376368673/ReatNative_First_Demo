/**
 * 自定义导航栏
 * https://github.com/facebook/react-native
 * @flow
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    StatusBar,
    TouchableOpacity,
} from 'react-native';
import Ionicons, {Button} from 'react-native-vector-icons/Ionicons';

//定义Bar的高度
const NAV_HEIGHT_ANDROID = 50;
const NAV_HEIGHT_IOS = 44;
const STATUS_HEIGHT = 20;
const StatusBarShape = {
    backgroundColor: PropTypes.string,
    //onefo 是必须是其中一个 相当于 枚举
    barStyle: PropTypes.oneOf('default', 'light-content', 'dark-content'),
    hidden: PropTypes.bool,
    //指定状态栏是否透明。设置为true时，应用会在状态栏之下绘制（即所谓“沉浸式”——被状态栏遮住一部分）
    translucent: PropTypes.bool,
};

const mainColor = "#d15";
const textColor = '#fff'
export default class NavigationBar extends Component<Props> {
    //类型约束
    static propTypes = {
        style: View.propTypes.style,
        title: PropTypes.string,
        titleView: PropTypes.elements,

        leftView: PropTypes.elements,
        leftText: PropTypes.string,
        //
        rightView: PropTypes.elements,
        rightText: PropTypes.string,

        hide: PropTypes.bool,
        statusBar: PropTypes.shape(StatusBarShape),
    }
    static defaultProps = {
        statusBar: {
            statusBar: 'light-content',
            hide: false,
            translucent: false,
            backgroundColor: mainColor
        },
        title: '标题',
        leftText: '',
        rightText: '',
        hide: false,
        props: null,
    }

    constructor(props) {
        super(props);
    }

    render() {
        const {navigation} = this.props
        //状态栏
        let status = <View style={styles.statusBar}>
            <StatusBar {...this.props.statusBar}/>
        </View>
        //如果titleView 没有传过来 则 默认为TextView
        let titleView = this.props.titleView ? this.props.titleView :
            <Text style={styles.titleText}>{this.props.title}</Text>
        //左边布局，一般都是返回按钮
        let leftView = this.props.leftView ? this.props.leftView :
            <View style={styles.leftContainer}>
                {/* <Image source={require('ios-arrow-back')} />*/}
                <Ionicons name={'ios-arrow-back'} size={25} color={textColor}/>
                <Text style={styles.leftText}>{this.props.leftText}</Text>
            </View>
        //右边布局，一般都是 “保存”|
        let rightView = this.props.rightView ? this.props.rightView :
            <Text style={styles.rightText}>{this.props.rightText}</Text>
        //标题栏布局
        let content = <View style={styles.navBar}>
            <View style={styles.leftViewContainer}>{leftView}</View>
            <View style={styles.titleViewContainer}>{titleView}</View>
            <View style={styles.rightViewContainer}>{rightView}</View>
        </View>
        return (
            <View style={[styles.container, this.props.style]}>
                {status}
                {content}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    statusBar: {
        height: Platform.OS === 'ios' ? STATUS_HEIGHT : 0,
    },
    container: {
        backgroundColor: mainColor,
    },
    leftContainer: {
        flexDirection: 'row',
        alignItems: 'center',//上下剧中
    },
    navBar: {
        justifyContent: 'space-between',
        alignItems: 'center',
        height: Platform.OS === "ios" ? NAV_HEIGHT_IOS : NAV_HEIGHT_ANDROID,
        flexDirection: 'row',
    },
    titleViewContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',//布局方式 绝对布局
        left: 40,
        right: 40,
        top: 0,
        bottom: 0,
    },
    leftViewContainer: {
        justifyContent: 'center',
        // alignItems:'center',
        position: 'absolute',//布局方式 绝对布局
        left: 10,
        right: 10,
        top: 0,
        bottom: 0,
    },

    rightViewContainer: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        flexDirection: 'row',
        position: 'absolute',//布局方式 绝对布局
        left: 10,
        right: 10,
        top: 0,
        bottom: 0,
    },

    titleText: {
        color: textColor,
        fontSize: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    leftText: {
        //color:"#d15",
        fontSize: 15,
        justifyContent: 'center',
        alignItems: 'center',
        left: 5,
    },
    rightText: {
        color: textColor,
        fontSize: 15,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5
    },

});
