import React, {Component} from 'react';
import {Button, SafeAreaView, StatusBar, Text, View} from 'react-native';
import {appState} from './src/components/helper';
import { CustomInputComponent } from './src/components/CustomInputComponent';
export default class App extends Component<{}, appState> {
  constructor(props: any) {
    super(props);
    this.state = {
      name: '',
      count: 0,
    };
  }
  setName = (value: string) => {
    this.setState({name: value});
  };
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <StatusBar barStyle={'dark-content'} />
        <SafeAreaView />
        <Text style={{textAlign: 'center', fontSize: 32, fontWeight: '600'}}>
          Count : {this.state.count}
        </Text>
        <View style={{paddingHorizontal: 30}}>
          <Button
            title="Increment"
            onPress={() => this.setState({count: this.state.count + 1})}
          />
        </View>
        <CustomInputComponent name={this.state.name} setName={this.setName} />
      </View>
    );
  }
}
