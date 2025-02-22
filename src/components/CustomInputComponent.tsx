import React, {Component, memo} from 'react';
import {Text, TextInput, View} from 'react-native';
import {Iprops} from './helper';

export const CustomInputComponent =memo(class extends Component<Iprops> {
  constructor(props: any) {
    super(props);
  }
  componentDidUpdate(): void {
    console.log('CustomInput component re-rendered');
  }
  render(): React.ReactNode {
    return (
      <View>
        <TextInput
          value={this.props.name}
          onChangeText={this.props.setName}
          style={{borderWidth: 1, margin: 20}}
          placeholder="Enter text"
        />
        <Text style={{textAlign: 'center'}}>Custom TextInput Component</Text>
      </View>
    );
  }
})
