import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import { Button } from '../components/Button';

    test('button component', () => {
        render(<Button text='testButton'/>);
        const text = screen.getByText('testButton');
        expect(text).toContainHTML('testButton');
    })


