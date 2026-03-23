import React from 'react';
import '../css/LeftSidebar.css';

function LeftSidebar({ currentSlide, onSlideChange }) {
  const sidebarItems = [
    {
      icon: '⚡',
      title: 'Power Your Home Smarter',
      subtitle: 'Lower Monthly Bills',
      description: 'Perfect for Families',
      slideIndex: 0
    },
    {
      icon: '🏭',
      title: 'Built for very Business types',
      subtitle: '',
      description: '24x7 Support Available',
      slideIndex: 1
    },
    {
      icon: '☀️',
      title: 'Reliable Daily Savings',
      subtitle: '',
      description: '',
      slideIndex: 2
    },
    {
      icon: '🌍',
      title: 'Cleaner Living, Better Future',
      subtitle: '',
      description: '',
      slideIndex: 3
    },
    {
      icon: '🏢',
      title: 'Easy Rooftop Solar Setup',
      subtitle: '',
      description: '',
      slideIndex: 4
    },
    {
      icon: '🏵️',
      title: 'Trusted by Families',
      subtitle: '',
      description: 'And Shop Owners',
      slideIndex: 5
    }
  ];

  const handleItemClick = (slideIndex) => {
    onSlideChange(slideIndex);
  };

  return (
    <div className="left-sidebar">
      <div className="sidebar-number">
        <span className="number">0{currentSlide + 1}</span>
        <div className="number-line"></div>
      </div>
      <div className="sidebar-items">
        {sidebarItems.map((item, index) => (
          <div 
            key={index} 
            className={`sidebar-item ${currentSlide === item.slideIndex ? 'active' : ''}`}
            onClick={() => handleItemClick(item.slideIndex)}
          >
            <span className="item-icon">{item.icon}</span>
            <div className="item-content">
              <span className="item-title">{item.title}</span>
              {item.subtitle && <span className="item-subtitle">{item.subtitle}</span>}
              {item.description && <span className="item-description">{item.description}</span>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LeftSidebar;
