import { render, screen, fireEvent } from '@testing-library/react';
import TransactionForm from '../TransactionForm';

test('submits income transaction', () => {
  const mockSubmit = jest.fn();
  render(<TransactionForm type="income" onSubmit={mockSubmit} />);
  
  fireEvent.change(screen.getByPlaceholderText('Title'), { target: { value: 'Salary' }});
  fireEvent.change(screen.getByPlaceholderText('Amount'), { target: { value: '3000' }});
  fireEvent.click(screen.getByText('Add Income'));
  
  expect(mockSubmit).toHaveBeenCalledWith({
    title: 'Salary',
    amount: 3000,
    type: 'income',
    category: 'Salary',
    date: expect.any(String)
  });
});