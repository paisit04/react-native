/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var Featured = require('./components/Featured');
var Search = require('./components/Search');
var GeoInfo = require('./components/GeoInfo');
var {
  AppRegistry,
  TabBarIOS,
  Component
} = React;

class BookSearch extends Component{

  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'featured'
    };
  }

  render() {
    return (
      <TabBarIOS selectedTab={this.state.selectedTab}>
        <TabBarIOS.Item
          selected={this.state.selectedTab === 'featured'}
          icon={{uri:'featured'}}
          onPress={() => {
            this.setState({
                selectedTab: 'featured'
            });
          }}>
          <Featured/>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          selected={this.state.selectedTab === 'search'}
          icon={{uri:'search'}}
          onPress={() => {
            this.setState({
                selectedTab: 'search'
            });
          }}>
          <Search/>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          selected={this.state.selectedTab === 'bookmarks'}
          icon={{uri:'bookmarks'}}
          onPress={() => {
            this.setState({
                selectedTab: 'bookmarks'
            });
          }}>
          <GeoInfo/>
        </TabBarIOS.Item>        
      </TabBarIOS>
    );
  }
}

AppRegistry.registerComponent('BookSearch', () => BookSearch);
