/**
 * 自定义导航栏
 * https://github.com/facebook/react-native
 * @flow
 *
 *
 *
 *
 *
 *
 *
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


{/*  自定义导航栏  使用范例

    <NavigationBar
    title='欢迎页'
    isShowBackView={true}
    //rightText={'分享'}
    rightView={
        <Text>分享</Text>
    }

/>*/
}

const mainColor = "#d15";
const textColor = '#fff'
export default class NavigationBar extends Component<Props> {
    constructor(props) {
        super(props);
    }
   handleLeftPress=()=>{
        const {onLeftPress,navigation} = this.props;
        if (onLeftPress){
            onLeftPress();
        } else {
            if (navigation)navigation.goBack(null);
        }
   };
    //类型约束
    static propTypes = {
        style: View.propTypes.style,
        title: PropTypes.string,
        titleView: PropTypes.elements,
        leftView: PropTypes.elements,
        leftText: PropTypes.string,
        isShowBackView: PropTypes.bool,//是否显示返回按钮
        rightView: PropTypes.elements,
        rightText: PropTypes.string,
        hide: PropTypes.bool,
        statusBar: PropTypes.shape(StatusBarShape),
        onLeftPress:PropTypes.func,
    }
    static defaultProps = {
        statusBar: {
            statusBar: 'light-content',
            hide: false,
            translucent: false,
            backgroundColor: mainColor
        },
        isShowBackView: true,//默认显示返回按钮
        title: '标题',
        leftText: '',
        rightText: '',
        hide: false,
        props: null,
        style: {
            backgroundColor: mainColor
        },

    }

    render() {
        //状态栏
        let status = <View style={styles.statusBar}>
            <StatusBar {...this.props.statusBar}/>
        </View>
        //标题栏布局
        let content = <View style={styles.navBar}>
            <TouchableOpacity
                style={styles.leftViewContainer}
                onPress={()=>{
                    //alert('Page1')
                    this.handleLeftPress()
                }}>{this._leftView()}</TouchableOpacity>

            <View style={styles.titleViewContainer}>{this._titleViews()}</View>
            <View style={styles.rightViewContainer}>{this._rightViews()}</View>
        </View>
        return (
            <View style={[styles.container, this.props.style]}>
                {status}
                {content}
            </View>
        );
    }

    //定义左边按钮 左边布局，一般都是返回按钮
    _leftView() {
        //打印日志 不知道在哪看日志输出
        console.log('isShowBackView:'+this.props.isShowBackView);
        //如果不显示左边按钮 直接返回空
        if (!this.props.isShowBackView) return <View/>
        //如果传过来的props.leftView 存在 则直接显示
        if (this.props.leftView) return this.props.leftView;
        //显示默认的 返回按钮
        let backView = <View style={styles.leftContainer}>
            <Ionicons name={'ios-arrow-back'} size={25} color={textColor}/>
            <Text style={styles.leftText}>{this.props.leftText}</Text>
        </View>
        return backView;
    }

    //如果titleView 没有传过来 则 默认为Text 并赋值为 title
    _titleViews() {
        if (this.props.titleView) return this.props.titleView;
        let view = <Text style={styles.titleText}>{this.props.title}</Text>
        return view;
    }

    //右边布局，一般都是 “保存”| 什么都没穿 则隐藏
    _rightViews() {
        if (this.props.rightView) return this.props.rightView;
        let rightViews = <Text style={styles.rightText}>{this.props.rightText}</Text>
        return rightViews;
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
        backgroundColor: mainColor,
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
