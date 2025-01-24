import { useState } from 'react';
import TransactionForm from './TransactionForm';
import TransactionList from './TransactionList';

const HomePage = ({ transactions, addTransaction, deleteTransaction }) => {
  const [showIncomeForm, setShowIncomeForm] = useState(true);

  return (
    <div>
      <div className="mb-4">
        <button 
          className={`btn ${showIncomeForm ? 'btn-success' : 'btn-outline-success'} me-2`}
          onClick={() => setShowIncomeForm(true)}
        >
          Add Income
        </button>
        <button 
          className={`btn ${!showIncomeForm ? 'btn-danger' : 'btn-outline-danger'}`}
          onClick={() => setShowIncomeForm(false)}
        >
          Add Expense
        </button>
      </div>

      <TransactionForm 
        type={showIncomeForm ? 'income' : 'expense'} 
        onSubmit={addTransaction} 
      />
      
      <TransactionList 
        transactions={transactions} 
        onDelete={deleteTransaction} 
      />
    </div>
  );
};

export default HomePage;