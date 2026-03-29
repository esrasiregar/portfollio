import React from 'react';
import Experience from './Experience';
import Organization from './Organization';
import Projects from './Projects';
import Skills from './Skills';
import '../Tabs.css';

const Tabs = ({ activeTab, setActiveTab }) => {
  const renderContent = () => {
    switch (activeTab) {
      case 'projects':
        return <Projects />;
      case 'skills':
        return <Skills />;
      case 'experience':
        return <Experience />;
      case 'organization':
        return <Organization />;
      default:
        return null;
    }
  };

  return (
    <section id="portfolio" className="tabs-container">
      <div className="tabs-nav">
        <button className={activeTab === 'projects' ? 'active' : ''} onClick={() => setActiveTab('projects')}>
          Projects
        </button>
        <button className={activeTab === 'skills' ? 'active' : ''} onClick={() => setActiveTab('skills')}>
          Skills
        </button>
        <button className={activeTab === 'experience' ? 'active' : ''} onClick={() => setActiveTab('experience')}>
          Experience
        </button>
        <button className={activeTab === 'organization' ? 'active' : ''} onClick={() => setActiveTab('organization')}>
          Organization
        </button>
      </div>
      <div className="tab-content">{renderContent()}</div>
    </section>
  );
};

export default Tabs;
