import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {
  Row,
  Box,
  Space,
} from 'react-native-styled-helper-components'

export default class App extends React.Component {
  render() {
    return (
      <Box center f1 ph={20} >
        <Row h={60}  color='blue'>
          <Box color='orange' f1 />
          <Space color='yellow' w={20} />
          <Box color ='red' f1 />
        </Row>
      </Box>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
