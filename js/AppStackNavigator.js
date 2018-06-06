/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import {createStackNavigator, createBottomTabNavigator,StackNavigator} from 'react-navigation'
import Welcome from './Welcome'
import Page1 from './pages/Page1'
import Page2 from './pages/Page2'
import Page3 from "./pages/Page3"
import Page4 from "./pages/Page4"
import PageOne from "./pages/PageOne"
import PageTwo from "./pages/PageTwo"
import PageThree from "./pages/PageThree"
import PageFour from "./pages/PageFour"
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
export  const HomeTabNavigator = createBottomTabNavigator({
    One:PageOne,
    Two:PageTwo,
    Three:PageThree,
    Four:PageFour,
},{
    navigationOptions: ({ navigation }) => ({
        headerMode: 'none',
        tabBarIcon: ({ focused, tintColor }) => {
            const { routeName } = navigation.state;
            let iconName;
            if (routeName === 'One') {
                iconName = `ios-information-circle${focused ? '' : '-outline'}`;
            } else if (routeName === 'Two') {
                iconName = `ios-options${focused ? '' : '-outline'}`;
            } else if (routeName === 'Three') {
                iconName = `ios-albums${focused ? '' : '-outline'}`;
            } else if (routeName === 'Four') {
                iconName = `ios-apps${focused ? '' : '-outline'}`;
            }
            // You can return any component that you like here! We usually use an
            // icon component from react-native-vector-icons
            return <Ionicons name={iconName} size={25} color={tintColor} />;
        },
    }),
    tabBarOptions: {
        activeTintColor: 'red',
        inactiveTintColor: '#000',
    },
})

export const AppStackNavigator = StackNavigator({
        //静态设置 navigationOptions 的三种方式 如 HomePage里面设置 和当前界面设置（Page1） 和全局设置：最下面代码navigationOptions
        TabNavigator: {
            screen: HomeTabNavigator,
            navigationOptions:{
                // headerMode: 'none',//设置标题 none 为不显示标题
            }
        },
        Welcome: {
            screen: Welcome,
        },
        Page1: {
            screen: Page1,
        },
        Page2: {
            screen: Page2,
        },
        Page3: {
            screen: Page3,
        },
        Page4: {
            screen: Page4,
        },

    },
    {
        mode: 'card',
        //headerMode: 'screen',//设置标题 none 为不显示标题
        headerMode: 'none',
        navigationOptions: {
            gesturesEnabled: false,
        },
    });

