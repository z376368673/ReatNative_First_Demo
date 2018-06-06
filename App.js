/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import {Button,Image} from 'react-native'
import {
    YellowBox
} from 'react-native';
// 处理 react-navigation 带来的警告
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated']);

import {AppStackNavigator} from './js/AppStackNavigator'
export default  AppStackNavigator;
