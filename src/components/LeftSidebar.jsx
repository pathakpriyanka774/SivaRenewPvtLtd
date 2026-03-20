import React from 'react';
import '../css/LeftSidebar.css';

function LeftSidebar({ currentSlide, onSlideChange }) {
  const sidebarItems = [
    {
      icon: '⚡',
      title: 'Powering the Country',
      subtitle: '335 kWp',
      description: 'Leading Healthcare Facility',
      slideIndex: 0
    },
    {
      icon: '🏭',
      title: 'Manufacturing Excellence',
      subtitle: '',
      description: '',
      slideIndex: 1
    },
    {
      icon: '☀️',
      title: '#Dependable AsTheSun',
      subtitle: '',
      description: '',
      slideIndex: 2
    },
    {
      icon: '🌍',
      title: 'Envisaging a Greener Tomorrow',
      subtitle: '',
      description: '',
      slideIndex: 3
    },
    {
      icon: '🏢',
      title: '#1 Rooftop Player',
      subtitle: '',
      description: '',
      slideIndex: 4
    },
    {
      icon: '🏵️',
      title: 'Trusted by 1000+ Clients',
      subtitle: '',
      description: 'Across India',
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
