declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.bmp';
declare module '*.gif';
declare module '*.mp4';
declare module '*.ttf';

declare module '*.svg' {
  import React from 'react';
  import {SvgProps} from 'react-native-svg';
  const content: React.FC<SvgProps>;
  export default content;
}
