var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
  Component
} = React;

var styles = StyleSheet.create({
    container: {
        marginTop: 65,
        padding: 10
    }
});

class GeoInfo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      position: 'unknown'
    };
    navigator.geolocation.getCurrentPosition(
      (position) => this.setState({position}),
      (error) => alert(error.message),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>
          Position: {JSON.stringify(this.state.position)}
        </Text>
      </View>
    );
  }
}

module.exports = GeoInfo;