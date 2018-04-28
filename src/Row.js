import React, { Component } from 'react';

import MyView from './MyView.js'

const Row = (props) => {

  let myStyle = [props.style, {flexDirection: 'row'}];

  return <MyView style={myStyle} {...props} />;
};

export default Row;
