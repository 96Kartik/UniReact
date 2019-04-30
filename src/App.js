import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Router, Switch, Route } from './routing';
import Homepage from './pages/Homepage';

export default class App extends React.Component {
  render() {
    return (
      <View style={{position: 'absolute', top: 0, bottom: 0, left: 0, right: 0}}>
        <View style={styles.container}>
          <Router>
            <Switch>
              <Route exact path = "/" render={props=> <Homepage {...props}/>} />
              <Route />
            </Switch>
          </Router>
        </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
    backgroundColor: '#8C9FA8',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
