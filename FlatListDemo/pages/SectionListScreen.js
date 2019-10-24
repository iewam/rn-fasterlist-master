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
  ActivityIndicator,
  SectionList,
} from 'react-native';


const CITY_NAMES = [{
  data: ['北京', '上海', '广州', '深圳'],
  title: '一线',
}, {
  data: ['青岛', '济南', '济宁', '成都', '重庆', '武汉'],
  title: '二线',
}, {
  data: ['杭州', '苏州', '青海', '西安', '拉萨'],
  title: '其他',
}];
export default class SectionListScreen extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      dataArray: CITY_NAMES,
    };
  }

  _renderItem(data) {
    return <View style={styles.item}>
      <Text style={styles.txt}>{data.item}</Text>
    </View>;
  }

  _loadData(refreshing) {
    if (refreshing) { // 是下拉刷新
      this.setState({
        isLoading: true,
      });
    }

    setTimeout(() => {
      let dataArray = [];
      if (refreshing) {
        for (let i = this.state.dataArray.length - 1; i >= 0; i--) {
          dataArray.push(this.state.dataArray[i]);
        }
      } else {
        dataArray = this.state.dataArray.concat(CITY_NAMES);
      }

      this.setState({
        isLoading: false,
        dataArray: dataArray,
      });
    }, 2000);
  }

  _genFooterIndicator() {
    console.log(11111111);
    return <View style={styles.indecatorContainer}>
      <ActivityIndicator
        size={'small'}
        animating={true}
        color={'orange'}
      />
      <Text style={styles.indicatorTitle}>上拉加载更多</Text>
    </View>;
  }

  _renderSectionHeader({section}) {
    return <View style={{height: 44, justifyContent: 'center', alignItems: 'center', backgroundColor: '#ddd'}}>
      <Text>{section.title}</Text>
    </View>;
  }

  render() {
    return (
      <View style={styles.container}>
        <SectionList
          sections={this.state.dataArray}
          renderItem={(data) => this._renderItem(data)}
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
              onRefresh={() => {
                this._loadData(true);
              }}
            />
          }
          // 上拉加载组件
          ListFooterComponent={() => this._genFooterIndicator()}
          onEndReached={() => {
            this._loadData();
          }}
          renderSectionHeader={(data) => this._renderSectionHeader(data)}
          ItemSeparatorComponent={()=><View style={{backgroundColor: 'red', height: 1}}></View>}
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
  indecatorContainer: {
    alignItems: 'center',
    margin: 10,
  },
  indicatorTitle: {
    color: '#f00',
    marginTop: 10,
  },
});

