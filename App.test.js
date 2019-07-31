import { render } from 'react-native-testing-library';
import React from 'react';
import { View } from 'react-native';

describe('app', () => {
    test('renders correctly a view', () => {
        render(<View />); 
    })
})