// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders LiquidHub title', () => {
    render(<App />);
    const titleElement = screen.getByText(/LiquidHub/i);
    expect(titleElement).toBeInTheDocument();
});
