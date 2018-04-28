import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Image
} from 'react-native';

import MyView from './MyView.js'

const Space = ({h, w, color}) => {
  return <MyView h={h} w={w} color={color} />;
};


export default Space;
