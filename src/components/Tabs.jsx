import React, { useState } from 'react';
import Experience from './Experience';
import Projects from './Projects';
import Skills from './Skills';
import '../Tabs.css';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('experience');

  const renderContent = () => {
    switch (activeTab) {
      case 'experience':
        return <Experience />;
      case 'projects':
        return <Projects />;
      case 'skills':
        return <Skills />;
      default:
        return null;
    }
  };

  return (
    <section className="tabs-container">
      <div className="tabs-nav">
        <button className={activeTab === 'experience' ? 'active' : ''} onClick={() => setActiveTab('experience')}>
          Pengalaman Organisasi
        </button>
        <button className={activeTab === 'projects' ? 'active' : ''} onClick={() => setActiveTab('projects')}>
          Projects
        </button>
        <button className={activeTab === 'skills' ? 'active' : ''} onClick={() => setActiveTab('skills')}>
          Keterampilan
        </button>
      </div>
      <div className="tab-content">{renderContent()}</div>
    </section>
  );
};

export default Tabs;
