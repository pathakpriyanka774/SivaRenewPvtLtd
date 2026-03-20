import React from 'react';
import '../css/RightSidebar.css';

function RightSidebar() {
  const sidebarIcons = [
    {
      icon: '📞',
      label: 'Call',
      href: 'tel:+1234567890'
    },
    {
      icon: '✉️',
      label: 'Email',
      href: 'mailto:info@shiva-renew.com'
    },
    {
      icon: '☀️',
      label: 'Solar',
      href: '#'
    },
    {
      icon: '📍',
      label: 'Location',
      href: '#'
    }
  ];

  return (
    <div className="right-sidebar">
      <div className="sidebar-vertical-bar">
        {sidebarIcons.map((item, index) => (
          <a 
            key={index} 
            href={item.href}
            className="sidebar-icon-wrapper"
            aria-label={item.label}
          >
            <div className="sidebar-icon">
              {item.icon}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default RightSidebar;
