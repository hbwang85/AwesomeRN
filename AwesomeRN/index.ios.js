/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

// import React, { Component } from 'react';
// import {
//   AppRegistry,
//   StyleSheet,
//   ListView,
//   Image,
//   Text,
//   View
// } from 'react-native';
//
// var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';
//
// class AwesomeRN extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       dataSource: new ListView.DataSource({
//         rowHasChanged: (row1, row2) => row1 != row2,
//       }),
//       loaded: false,
//     }
//   }
//
//   componentDidMount() {
//     this.fetchData();
//   }
//
//   fetchData() {
//     fetch(REQUEST_URL)
//     .then((response) => response.json())
//     .then((responseData) => {
//       this.setState({
//           dataSource: this.state.dataSource.cloneWithRows(responseData.movies),
//           loaded: true,
//       });
//     })
//     .done();
//   }
//
//
//   render() {
//     if (!this.state.loaded) {
//       return this.renderLoadingView()
//     }
//
//     //TODO How to invoke the action below
//     // var movie = this.state.movies[0]
//     // return this.renderMovie(movie);
//
//     return (
//       <ListView
//         dataSource={this.state.dataSource}
//         renderRow={this.renderMovie}
//         style={styles.ListView}
//         />
//     );
//
//
//   }
//
//   renderLoadingView() {
//     return (
//       <View style={styles.container}>
//         <Text>
//           Loading movies...
//         </Text>
//       </View>
//     );
//   }
//
//   renderMovie(movie) {
//     console.log(movie);
//     return (
//       <View style={styles.container}>
//         <Image
//           source={{uri: movie.posters.thumbnail}}
//           style={styles.thumbnail}
//         />
//         <View style={styles.rightContainer}>
//           <Text style={styles.title}>{movie.title}</Text>
//           <Text style={styles.year}>{movie.year}</Text>
//         </View>
//       </View>
//     );
//   }
// }
//
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   ListView: {
//     paddingTop: 20,
//     backgroundColor: '#F5FCFF',
//   },
//   title: {
//     fontSize: 20,
//     marginBottom: 8,
//     textAlign: 'center',
//   },
//   year: {
//     textAlign: 'center',
//   },
//   rightContainer: {
//     flex: 1,
//   },
//   thumbnail: {
//     width: 53,
//     height: 81,
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
// import {AppRegistry} from `react-native`;
//TODO {}
const {AppRegistry} = require(`react-native`)
const setup = require('./js/setup')
AppRegistry.registerComponent('AwesomeRN', () => setup);
