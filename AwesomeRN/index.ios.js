/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Image,
  ListView,
  StyleSheet,
  Text,
  View
} from 'react-native';

var MOCKED_MOVIES_DATA = [
  {title: 'Title', year: '2016', poster: {
    thumbnail: 'http://i.imgur.com/UePbdph.jpg'
  }},
];

var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';

class AwesomeRN extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      loaded: false,
    };
  }

  ComponentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch(REQUEST_URL)
    .then((response) => response.json())
    .then((responseData) => {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(responseData.movies),
        loaded: true,
      });
    })
    .done();
  }

  render() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }

    // var movie = MOCKED_MOVIES_DATA[0];
    // return this.renderMovie(movie);
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderMovie}
        style={styles.listView}
        />
    );
  }

renderLoadingView() {
  return (
    <View style={styles.container}>
      <Text>
        Loading movies...
      </Text>
    </View>
  );
}

renderMovie(movie) {
  return (
    <View style={styles.container}>
    <Image
      source={{uri: 'http://resizing.flixster.com/DeLpPTAwX3O2LszOpeaMHjbzuAw=/53x77/dkpu1ddg7pbsk.cloudfront.net/movie/11/16/47/11164719_ori.jpg'}}
      style={styles.thumbnail}
    />
    <View style={styles.rightContainer}>
      <Text style={styles.title}>{movie.title}</Text>
      <Text style={styles.year}>{movie.year}</Text>
    </View>
  </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  rightContainer: {
    flex: 1,
  },

  listView: {
    paddingTop: 20,
    backgroundColor: '#F5FCFF'
  }
  thumbnail: {
    width: 53,
    height: 81,
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center',
  },
  year: {
    textAlign: 'center',
  },
});

AppRegistry.registerComponent('AwesomeRN', () => AwesomeRN);
