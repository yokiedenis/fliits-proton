// Dashboard.jsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Dashboard.css';

export default function Dashboard() {
  const [activeNav, setActiveNav] = useState('Dashboard');
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Retrieve the user data from localStorage
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser); // Set the user state with the retrieved data
    }
  }, []); // Empty dependency array to run this effect only once when the component mounts

  // Fallback if user is not found in localStorage
  const name = user?.name || 'User';
  const email = user?.email || 'No email found';

  const navItems = [
    'Dashboard', 'Profile', 'Add/Edit Car', 'Track Vehicle', 
    'Trip history', 'Transactions', 'Reports', 'Help', 'Settings'
  ];

  const customerData = [
    { name: 'John Doe', license: 'DL-12345', date: '2024-08-05', amount: 120, status: 'Good' },
    { name: 'Jane Smith', license: 'DL-12345', date: '2024-08-05', amount: 120, status: 'Good' },
    { name: 'Alex Johnson', license: 'DL-12345', date: '2024-08-05', amount: 120, status: 'Damaged' },
    { name: 'Emily Davis', license: 'DL-12345', date: '2024-08-05', amount: 120, status: 'Good' },
    { name: 'Michael Brown', license: 'DL-12345', date: '2024-08-05', amount: 120, status: 'Good' },
    { name: 'Sarah Wilson', license: 'DL-12345', date: '2024-08-05', amount: 120, status: 'Damaged' },
    { name: 'David Clark', license: 'DL-12345', date: '2024-08-05', amount: 120, status: 'Good' },
  ];

  const weeklyData = [
    { day: 'Mon', earnings: 150 },
    { day: 'Tue', earnings: 50 },
    { day: 'Wed', earnings: 100 },
    { day: 'Thu', earnings: 250 },
    { day: 'Fri', earnings: 175 },
    { day: 'Sat', earnings: 0 },
    { day: 'Sun', earnings: 0 },
  ];

  return (
    <div className="dashboard">
      <aside className="sidebar">
        <div className="logo"> 
          <Link to="/" className="logo-link">
            FL<span style={{ color: 'gold' }}>ii</span>TS
          </Link>
        </div>
        <nav>
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className={activeNav === item ? 'active' : ''}
              onClick={() => setActiveNav(item)}
            >
              {item}
            </a>
          ))}
        </nav>
      </aside>

      <main className="main-content">
        <header>
          <div className="user-info">
            <div className="avatar">
              <img src='/review 1.jpg' alt='profile' className="Profile"/>
            </div>
            <div>
              <h1>Hello, {name}</h1>
              <p>{email}</p>
            </div>
          </div>
          <div className="notifications">
            <button>🔔</button>
            <button>✉️</button>
          </div>
        </header>

        <div className="balance-section">
          <div className="balance-card">
            <h3>Available Balance</h3>
            <div className="balance-amount">
              <span className="amount">$18,560.43</span>
              <span className="change positive">↑ 5.6% vs last month</span>
            </div>
          </div>
          <div className="balance-card">
            <h3>Weekly Total Earnings</h3>
            <div className="balance-amount">
              <span className="amount">$700</span>
              <span className="change positive">↑ 1.6% vs last week</span>
            </div>
          </div>
        </div>

        <div className="chart-section">
          <h3>Weekly Earnings</h3>
          <div className="chart">
            {weeklyData.map((data) => (
              <div key={data.day} className="bar-container">
                <div 
                  className="bar" 
                  style={{ height: `${(data.earnings / 250) * 100}%` }}
                ></div>
                <span>{data.day}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="table-section">
          <table>
            <thead>
              <tr>
                <th>Customer Name</th>
                <th>License ID</th>
                <th>Date</th>
                <th>Amount Paid ($)</th>
                <th>Car Status</th>
              </tr>
            </thead>
            <tbody>
              {customerData.map((customer, index) => (
                <tr key={index}>
                  <td>
                    <div className="customer-name">
                      <div className="avatar_small">
                        <img src='/review 1.jpg' alt='profile' className="Profile_small"/>
                      </div>
                      {customer.name}
                    </div>
                  </td>
                  <td>{customer.license}</td>
                  <td>{customer.date}</td>
                  <td>{customer.amount}</td>
                  <td>
                    <span className={`status ${customer.status.toLowerCase()}`}>
                      {customer.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
