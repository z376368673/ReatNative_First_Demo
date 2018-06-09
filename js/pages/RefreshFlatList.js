/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, {Component} from 'react';
import {
    FlatList,
    StyleSheet,
    Text,
    View,
    RefreshControl,
    ActivityIndicator,
    TouchableOpacity,
} from 'react-native';
import Toast, {DURATION} from 'react-native-easy-toast'

const CITYS = [];
export default class RefreshFlatList extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            isLoading: false,
            dataArray: this.props.data ? this.props.data : CITYS,
        }
    }

    //界面加载完成
    componentDidMount() {
        for (let i = 0; i < 30; i++) {
            CITYS[i] = this.state.name + i;
        }
    }

    render() {
        return <View style={styles.container}>
            <Toast ref={toast=>this.toast=toast}/>
            <FlatList
                //设置数据
                data={this.state.dataArray}
                //添加item样式
                renderItem={(data) => this._renderItem(data)}
                refreshControl={
                    <RefreshControl
                        //Android下只有一个 colors 是转圈的颜色
                        colors={['#d15', '#000']}
                        //ios 下 可以设置标题，转圈颜色，标题颜色
                        title={'Loading...'}
                        tintColor={'#d15'}
                        titleColor={'#d15'}
                        //刷新状态 false:隐藏，true:显示
                        refreshing={this.state.isLoading}
                        //刷新触发的后执行的方法
                        onRefresh={() => {
                            this._refreshData();
                        }}
                    />
                }
                //定义加载更多控件
                ListFooterComponent={() => this.getIndicator()}
                //设置触发 onEndReached 的距离
                onEndReachedThreshold={0.1}
                //触发加载更多的后执行的方法
                onEndReached={() => this._loadData()}
            />

        </View>
    }

    //item 样式
    _renderItem(dataSource) {
        return <View style={styles.itemView}>
            <TouchableOpacity onPress={()=>{
                // alert('点击')
                // this.toast.show('点击',DURATION.LENGTH_SHORT);
            }}>
                <Text style={styles.text}>{dataSource.item}</Text>
            </TouchableOpacity>
        </View>
    }

    //定义加载更多样式
    getIndicator() {
        return <View style={styles.indicatorContainer}>
            <ActivityIndicator
                size={'large'}
                animating={true}
            />
            <Text style={{color: '#d15', fontSize: 15, margin: 10}}>加载更多</Text>
        </View>;
    }

    //刷新数据
    _refreshData() {
        this.setState({
            isLoading: true,
        });
        setTimeout(() => {
            this.setState({
                isLoading: false,
                dataArray: CITYS,
            });
        }, 2000);
    }

    //加载更多数据
    _loadData() {
        setTimeout(() => {
            let array = [];
            for (let i = this.state.dataArray.length; i < this.state.dataArray.length + 20; i++) {
                array.push(this.state.name + i);
            }
            array = this.state.dataArray.concat(array);
            this.setState({
                dataArray: array,
            });
        }, 2000);

    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#f1f1f1',
    },
    itemView: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0.5,
        borderColor: '#CCC',
        backgroundColor: 'gray',
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 5,
    },
    text: {
        justifyContent: 'center',
        alignItems: 'center',
        color: "#d15",
        fontSize: 20,
        padding: 10
    },
    indicatorContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
