import React, { Component, PropTypes } from 'react';
import {
   View,
   Text,
   Button,
   StyleSheet
} from 'react-native';
import KerKerContainer from '../components/KerKerContainer.js';
import PromoScene from './PromoScene.js'


export default class NextScene extends Component {

  constructor() {
    super();
    this.nextPage = this.nextPage.bind(this)
  }


  nextPage() {
     this.props.toRoute({
       name: "We <3 You",
       component: PromoScene
     });
   }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Here is the Kerker 💖💖 Feature
        </Text>
        <KerKerContainer/>
        <Text style={styles.instructions}>
          Keep pressing Next for Navigation
        </Text>
        <Button title="Next" onPress={this.nextPage}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
