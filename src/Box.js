import React, { Component } from 'react';

import MyView from './MyView.js'

const Box = (props) => {
  return <MyView {...props} />;
};


export default Box;
