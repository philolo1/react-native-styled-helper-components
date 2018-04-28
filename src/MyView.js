import React, { Component } from 'react';

import {
  View,
} from 'react-native';

const MyView = ({
  // height
  h = 0,
  // width
  w = 0,
  color = 'transparent', f1, f2, f3, f4,
  flex = 0,
  // padding
  pt = 0, pl = 0, pr = 0, pb = 0, pv = 0, ph = 0,
  center = false,
  style,
  children,
}) => {

  let myStyle = {};

  if (h > 0) {
    myStyle.height = h;
  }

  if (w > 0) {
    myStyle.width = w;
  }

  myStyle.backgroundColor = color;

  if (f1) {
    myStyle.flex = 1;
  }

  if (f2) {
    myStyle.flex = 2;
  }

  if (f3) {
    myStyle.flex = 3;
  }

  if (f4) {
    myStyle.flex = 4;
  }

  if (flex > 0) {
    myStyle.flex = flex;
  }

  if (pt > 0) {
    myStyle.paddingTop = pt;
  }

  if (pl > 0) {
    myStyle.paddingLeft = pl;
  }

  if (pr > 0) {
    myStyle.paddingRight = pr;
  }

  if (pb > 0) {
    myStyle.paddingBottom = pb;
  }

  if (ph > 0) {
    myStyle.paddingHorizontal = ph;
  }

  if (pv > 0) {
    myStyle.paddingVertical = pv;
  }

  if (center) {
    myStyle.alignItems = 'center';
    myStyle.justifyContent = 'center';
  }

  return (
    <View style={[myStyle, style]}>
      {children}
    </View>
  );
};


export default MyView;
