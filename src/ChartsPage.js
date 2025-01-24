import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const ChartsPage = ({ transactions }) => {
  const income = transactions
    .filter(t => t.type === 'income')
    .reduce((sum, t) => sum + t.amount, 0);

  const expenses = transactions
    .filter(t => t.type === 'expense')
    .reduce((sum, t) => sum + t.amount, 0);

  const data = {
    labels: ['Income', 'Expenses'],
    datasets: [{
      data: [income, expenses],
      backgroundColor: ['#4CAF50', '#F44336'],
      hoverBackgroundColor: ['#66BB6A', '#EF5350']
    }]
  };

  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-title">Income vs Expenses</h2>
        <div style={{ maxWidth: '500px', margin: '0 auto' }}>
          <Doughnut data={data} />
        </div>
        <div className="mt-4">
          <p>Total Income: ${income.toFixed(2)}</p>
          <p>Total Expenses: ${expenses.toFixed(2)}</p>
          <p>Net Savings: ${(income - expenses).toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default ChartsPage;