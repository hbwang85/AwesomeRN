`use strict`;

var React = require(`react`);
var ReactNative = require(`react-native`);
var {
  StyleSheet,
  TabBarIOS,
  Text,
  View,
} = ReactNative;

var tabOne = `tabOne`;
var tabTwo = `tabTwo`;
var tabThree = `tabThree`;

var TabBarViewIOS = React.createClass ({
  displayName: 'TabBarViewIOS',

  getInitialState: function() {
    return {
      selectedTab: tabOne,
      notifCount: 0,
      presses: 0,
    };
  },

  renderContent: function(color: string, pageText: string, num?: number) {
    return(
      <View style={[styles.tabContent, {backgroundColor: color}]}>
        <Text style={styles.tabText}>{pageText}</Text>
        <Text style={styles.tabText}>{num} re-renders of the {pageText}</Text>
        </View>
    );
  },

  render: function() {
    return (
      <TabBarIOS
        selectedTintColor="red"
        tintColor="white"
        barTintColor="darkslateblue">
        <TabBarIOS.Item
          title='tabOne'
          renderAsOriginal
          icon={require('../resources/star.png')}
          selected={this.state.selectedTab === tabOne}
          onPress={ ()=> {
            this.setState({
              selectedTab: 'tabOne'
            });
          }}>
          {this.renderContent('blue', 'tab one')}
        </TabBarIOS.Item>
        <TabBarIOS.Item
          systemIcon="history"
          badge={this.state.notifCount > 0 ? this.state.notifCount : undefined}
          selected = {this.state.selectedTab === tabTwo}
          onPress = { () => {
            this.setState({
              selectedTab:tabTwo,
              notifCount:this.state.notifCount+1,
            });
          }}>
          {this.renderContent('red', 'tab two', this.state.notifCount)}
        </TabBarIOS.Item>
        <TabBarIOS.Item
          icon={require('../resources/star.png')}
          renderAsOriginal
          title="More"
          selected={this.state.selectedTab === tabThree}
          onPress={() => {
            this.setState ({
              selectedTab:tabThree,
              presses:this.state.presses + 1,
            });
          }}>
          {this.renderContent("green", tabThree, this.state.presses)}
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  },

});

var styles = StyleSheet.create({
  tabContent: {
    flex: 1,
    alignItems: 'center',
  },
  tabText: {
    color: 'white',
    margin: 50,
  },
});

module.exports = TabBarViewIOS;
