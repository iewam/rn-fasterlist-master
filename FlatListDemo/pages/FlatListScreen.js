/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
    FlatList,
    RefreshControl,
} from 'react-native';


const CITY_NAMES = ['北京', '上海', '广州', '深圳','青岛', '济南', '济宁', '成都','重庆', '武汉', '杭州', '苏州','青海', '西安', '拉萨'];
export default class FlatListScreen extends React.Component {

    constructor(props) {
        super(props);

        this.state= {
            isLoading: false,
            dataArray: CITY_NAMES,
        };
    }

    _renderItem(data) {
        return <View style={styles.item}>
            <Text style={styles.txt}>{data.item}</Text>
        </View>;
    }

    _loadData() {
        this.setState({
            isLoading: true,
        });
        setTimeout(()=>{
            let dataArray = [];
            for (let i = this.state.dataArray.length - 1; i >= 0; i--) {
                dataArray.push(this.state.dataArray[i]);
            }
            this.setState({
                isLoading: false,
                dataArray: dataArray,
            });
        }, 2000);
    }

   render() {
    return (
        <View style={styles.container}>
            <FlatList
                data={this.state.dataArray}
                renderItem={(data)=> this._renderItem(data)}
                // 默认样式下拉刷新
                // refreshing={this.state.isLoading}
                // onRefresh={()=>{
                //     this._loadData();
                // }}

                //自定义样式下拉刷新
                refreshControl={
                    <RefreshControl
                        title={'Loading'}
                        colors={['red']}
                        titleColor={'red'}
                        tintColor={'orange'}
                        refreshing={this.state.isLoading}
                        onRefresh={()=>{
                            this._loadData();
                        }}
                     />
                }
            />
        </View>
    );
  }
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        backgroundColor: '#169',
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 15,
        marginLeft: 15,
        marginTop: 15,
        borderRadius: 5,
    },
    txt: {
        color: '#fff',
        fontSize: 20,
    },
});

