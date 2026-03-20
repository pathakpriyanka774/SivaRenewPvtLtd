import React from 'react';
import '../css/RightCornerIcons.css';

function RightCornerIcons() {
  const cornerIcons = [
    {
      icon: '📞',
      label: 'Phone'
    },
    {
      icon: '✉️',
      label: 'Email'
    },
    {
      icon: '☀️',
      label: 'Solar'
    },
    {
      icon: '🏢',
      label: 'Office'
    }
  ];

  return (
    <div className="right-corner-icons">
      {cornerIcons.map((item, index) => (
        <div key={index} className="corner-icon-item">
          <span className="corner-icon">{item.icon}</span>
        </div>
      ))}
    </div>
  );
}

export default RightCornerIcons;
