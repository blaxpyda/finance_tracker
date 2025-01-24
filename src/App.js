import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './HomePage';
import ChartsPage from './ChartsPage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [transactions, setTransactions] = useState([]);

  // Load transactions from localStorage on mount
  useEffect(() => {
    const savedTransactions = JSON.parse(localStorage.getItem('transactions')) || [];
    setTransactions(savedTransactions);
  }, []);

  // Save transactions to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(transactions));
  }, [transactions]);

  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, { ...newTransaction, id: Date.now() }]);
  };

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter(transaction => transaction.id !== id));
  };

  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">Finance Tracker</Link>
          <div className="navbar-nav">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/charts">Charts</Link>
          </div>
        </div>
      </nav>

      <div className="container mt-4">
        <Routes>
          <Route path="/" element={
            <HomePage 
              transactions={transactions} 
              addTransaction={addTransaction}
              deleteTransaction={deleteTransaction}
            />
          } />
          <Route path="/charts" element={<ChartsPage transactions={transactions} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;