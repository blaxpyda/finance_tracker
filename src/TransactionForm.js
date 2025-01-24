import { useState } from 'react';

const categories = {
  income: ['Salary', 'Freelance', 'Investment', 'Other'],
  expense: ['Food', 'Transport', 'Housing', 'Entertainment', 'Utilities', 'Other']
};

const TransactionForm = ({ type, onSubmit }) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState(categories[type][0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      title,
      amount: parseFloat(amount),
      type,
      category,
      date: new Date().toISOString()
    });
    setTitle('');
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="row g-3">
        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        
        <div className="col-md-3">
          <input
            type="number"
            className="form-control"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            min="0"
            step="0.01"
            required
          />
        </div>
        
        <div className="col-md-3">
          <select
            className="form-select"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {categories[type].map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
        
        <div className="col-md-2">
          <button type="submit" className="btn btn-primary w-100">
            Add {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        </div>
      </div>
    </form>
  );
};

export default TransactionForm;