const TransactionList = ({ transactions, onDelete }) => {
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Transaction History</h5>
          <div className="list-group">
            {transactions.map(transaction => (
              <div 
                key={transaction.id}
                className={`list-group-item d-flex justify-content-between align-items-center ${
                  transaction.type === 'income' ? 'list-group-item-success' : 'list-group-item-danger'
                }`}
              >
                <div>
                  <strong>{transaction.title}</strong>
                  <br />
                  <small className="text-muted">
                    {transaction.category} - {new Date(transaction.date).toLocaleDateString()}
                  </small>
                </div>
                <div>
                  <span className="me-2">
                    {transaction.type === 'income' ? '+' : '-'}${Math.abs(transaction.amount).toFixed(2)}
                  </span>
                  <button 
                    className="btn btn-sm btn-outline-danger"
                    onClick={() => onDelete(transaction.id)}
                  >
                    ×
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default TransactionList;