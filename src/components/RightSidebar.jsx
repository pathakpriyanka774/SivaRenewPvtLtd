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
      icon: (
        <svg viewBox="0 0 32 32" className="whatsapp-icon" aria-hidden="true">
          <path
            d="M19.11 17.33c-.26-.13-1.55-.76-1.79-.85-.24-.09-.42-.13-.6.13-.18.26-.69.85-.84 1.03-.16.18-.31.2-.58.07-.26-.13-1.11-.41-2.11-1.31-.78-.69-1.31-1.55-1.46-1.81-.16-.26-.02-.4.12-.53.12-.12.26-.31.38-.47.13-.16.18-.26.26-.44.09-.18.04-.34-.02-.47-.07-.13-.6-1.45-.82-1.98-.22-.53-.44-.46-.6-.47h-.51c-.18 0-.47.07-.71.34-.24.26-.93.91-.93 2.22 0 1.31.96 2.57 1.09 2.75.13.18 1.88 2.87 4.54 4.02.63.27 1.12.43 1.5.55.63.2 1.2.17 1.65.1.5-.07 1.55-.63 1.77-1.24.22-.62.22-1.15.16-1.24-.07-.09-.24-.14-.5-.27z"
            fill="currentColor"
          />
          <path
            d="M16.02 3.2c-7.05 0-12.77 5.71-12.77 12.76 0 2.25.59 4.45 1.72 6.39L3.2 28.8l6.59-1.73a12.76 12.76 0 0 0 6.23 1.62h.01c7.04 0 12.76-5.72 12.76-12.76 0-3.42-1.33-6.64-3.75-9.06A12.67 12.67 0 0 0 16.02 3.2zm0 22.91h-.01a10.16 10.16 0 0 1-5.18-1.42l-.37-.22-3.91 1.03 1.04-3.81-.24-.39a10.2 10.2 0 0 1 1.57-12.84 10.14 10.14 0 0 1 7.1-2.89c2.71 0 5.25 1.05 7.16 2.96a10.11 10.11 0 0 1 2.97 7.16c0 5.58-4.54 10.12-10.13 10.12z"
            fill="currentColor"
          />
        </svg>
      ),
      label: 'WhatsApp',
      href: 'https://wa.me/919876543210'
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
