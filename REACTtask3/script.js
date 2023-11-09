import React from 'react';
import ReactDOM from 'react-dom';
import ColorPicker from './colorpicker';

const colors = ['#ff0000', '#00ff00', '#0000ff'];

ReactDOM.render(<ColorPicker colors={colors} />, document.getElementById('root'));
