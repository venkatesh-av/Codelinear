import React from 'react';
import './RecentActivity.css';

const items = [
  { title: 'From Google', date: '10 Jun 2022', amount: '+$859', type: 'Bonus' },
  { title: 'To Jin', date: '12 Jun 2022', amount: '-$59', type: 'Work' },
  { title: 'To David', date: '7 Jun 2022', amount: '-$479', type: 'Work' },
];

export default function RecentActivity() {
  return (
    <div className="recent">
      <div className="recent-header">Recent activity</div>
      <div className="recent-list">
        {items.map((it, i) => (
          <div key={i} className="recent-item">
            <div className="recent-left">
              <div className="recent-title">{it.title}</div>
              <div className="recent-date">{it.date}</div>
            </div>
            <div className={`recent-amount ${it.amount.startsWith('+') ? 'pos' : 'neg'}`}>
              {it.amount}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
