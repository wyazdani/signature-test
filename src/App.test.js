// src/App.test.js
import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import App from './App';

test('opens and closes the signature dialog', async () => {
  const { getByText, queryByText } = render(<App />);

  fireEvent.click(getByText(/Open Signature Pad/i));
  expect(getByText(/Sign Here/i)).toBeInTheDocument();

  fireEvent.click(getByText(/Cancel/i));
  await waitFor(() => {
    expect(queryByText(/Sign Here/i)).not.toBeInTheDocument();
  });
});
