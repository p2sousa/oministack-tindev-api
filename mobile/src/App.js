import React from 'react';
import { YellowBox } from 'react-native';
import Routes from './routes/routes';

YellowBox.ignoreWarnings([
  'Unrecognized WebSockets'
]);

export default function App() {
  return (
    <Routes />
  );
}