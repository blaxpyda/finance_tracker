import { render, screen } from '@testing-library/react';
import TransactionList from '../TransactionList';

const mockTransactions = [
  { id: 1, title: 'Salary', amount: 3000, type: 'income', category: 'Salary', date: new Date().toISOString() },
  { id: 2, title: 'Groceries', amount: 150, type: 'expense', category: 'Food', date: new Date().toISOString() }
];

test('displays transaction list', () => {
  render(<TransactionList transactions={mockTransactions} />);
  
  expect(screen.getByText('Salary')).toBeInTheDocument();
  expect(screen.getByText('Groceries')).toBeInTheDocument();
  expect(screen.getAllByText(/Salary|Food/)).toHaveLength(2);
});