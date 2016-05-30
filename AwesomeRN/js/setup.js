/**
  * strict mode
  * //其一：如果在语法检测时发现语法问题，则整个代码块失效，并导致一个语法异常。
  *  其二：如果在运行期出现了违反严格模式的代码，则抛出执行异常。
  */

var React = require('react');
var ReactNative = require('react-native');
var TabBarViewIOS = require('./Tab/TabBarView');
var {
  View,
  StyleSheet,
} = ReactNative;

var AwesomeRN = React.createClass ({
  render() {
    return (
      // <View style={styles.container}>
      // if (Platform.OS === 'ios') {
      //   return TabBarViewIOS;
      // }
      <TabBarViewIOS/>
    // </View>
    );
  },
});

var styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

//MARK: output name must be the Component name
module.exports = AwesomeRN;
