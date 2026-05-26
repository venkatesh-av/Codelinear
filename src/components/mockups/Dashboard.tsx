import React from 'react';
import './Dashboard.css';
import Sidebar from './Sidebar.tsx';
import RecentActivity from './RecentActivity.tsx';

export default function Dashboard() {
  return (
    <section className="dashboard">
      <div className="dashboard-inner">
        <div className="dashboard-main">
          <div className="cards-grid">
            <div className="card balance-card">
              <div className="card-top">Total balance</div>
              <div className="card-value">$42,295.00 USD</div>
              <div className="card-meta">Get summary of your weekly online transactions here.</div>
            </div>

            <div className="card small-card">
              <div className="card-top">Current balance</div>
              <div className="card-value accent">$1,500.50</div>
              <div className="card-sub">Income</div>
            </div>

            <div className="card small-card">
              <div className="card-top">Outcome</div>
              <div className="card-value negative">$350.60</div>
              <div className="card-sub">This week</div>
            </div>

            <div className="card progress-card">
              <div className="card-top">Renovation</div>
              <div className="progress">
                <div className="progress-bar" style={{ width: '52%' }} />
              </div>
              <div className="progress-label">52%</div>
            </div>
          </div>
        </div>

        <aside className="dashboard-side">
          <Sidebar />
          <RecentActivity />
        </aside>
      </div>
    </section>
  );
}
