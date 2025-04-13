import React, { useState } from 'react';
import styles from '../styles/Matrix.module.css';
import { mockTactics, filterOptions } from '../data/mockData';
import TechniqueDetail from './TechniqueDetail';

const Matrix = () => {
  const [activeAttackType, setActiveAttackType] = useState('enterprise');
  const [selectedTechnique, setSelectedTechnique] = useState(null);

  const attackTypes = [
    { id: 'enterprise', label: 'Enterprise attack', count: 277 },
    { id: 'mobile', label: 'Mobile attack', count: 11 },
    { id: 'ics', label: 'ICS attack', count: 0 }
  ];

  const handleTechniqueClick = (technique) => {
    setSelectedTechnique(technique);
  };

  const scrollMatrix = (direction) => {
    const matrix = document.querySelector(`.${styles.matrix}`);
    const scrollAmount = direction === 'left' ? -300 : 300;
    matrix.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>MITRE ATT&CK Matrix</h1>
        
        {/* Selected Actors Section */}
        <div className={styles.selectedActorsSection}>
          <span className={styles.sectionTitle}>Selected actors:</span>
          <div className={styles.selectedActors}>
            {filterOptions.actors.slice(0, 6).map((actor) => (
              <span key={actor} className={styles.actorTag}>
                {actor}
                <span className={styles.removeActor}>×</span>
              </span>
            ))}
          </div>
        </div>

        {/* Filter Section */}
        <div className={styles.filterSection}>
          <div className={styles.filterControls}>
            <div className={styles.filterTitle}>Filter by:</div>
            <select className={styles.filterSelect}>
              <option value="">Actor/Threat Group</option>
              {filterOptions.actors.map((actor) => (
                <option key={actor} value={`APT ${actor}`}>{actor}</option>
              ))}
            </select>

            <select className={styles.filterSelect}>
              <option value="">Region</option>
              {filterOptions.regions.map((region) => (
                <option key={region} value={`North ${region}`}>{region}</option>
              ))}
            </select>

            <select className={styles.filterSelect}>
              <option value="">Industry</option>
              {filterOptions.industries.map((industry) => (
                <option key={industry} value={`Finance ${industry}`}>{industry}</option>
              ))}
            </select>

            <div className={styles.filterTitle}>Date filter:</div>
            <div className={styles.dateFilter}>
              <input
                type="text"
                placeholder="start"
                onFocus={(e) => e.target.type = 'date'}
                onBlur={(e) => {
                  if (!e.target.value) e.target.type = 'text';
                }}
              />
              <span>—</span>
              <input
                type="text"
                placeholder="end"
                onFocus={(e) => e.target.type = 'date'}
                onBlur={(e) => {
                  if (!e.target.value) e.target.type = 'text';
                }}
              />
            </div>
            <div className={styles.exportControls}>
              <button className={styles.exportButton}>CSV</button>
              <button className={styles.exportButton}>JSON</button>
            </div>
          </div>
        </div>

        {/* Attack Type Navigation */}
        <div className={styles.attackTypeNav}>
          {attackTypes.map((type) => (
            <button
              key={type.id}
              className={`${styles.attackTypeButton} ${activeAttackType === type.id ? styles.active : ''}`}
              onClick={() => setActiveAttackType(type.id)}
            >
              {type.label}
              <span className={styles.attackCount}>{type.count}</span>
            </button>
          ))}
        </div>

        {/* Navigation Controls */}
        <div className={styles.navigationControls}>
          <button 
            className={styles.navigationButton}
            onClick={() => scrollMatrix('left')}
            aria-label="Scroll left"
          >
            ‹
          </button>
          <button 
            className={styles.navigationButton}
            onClick={() => scrollMatrix('right')}
            aria-label="Scroll right"
          >
            ›
          </button>
        </div>
      </header>

      {/* Matrix Grid */}
      <div className={styles.matrix}>
        {mockTactics.map((tactic) => (
          <div 
            key={tactic.name} 
            className={styles.tacticColumn}
            data-tactic={tactic.name}
          >
            <h2 className={styles.tacticHeader}>{tactic.name}</h2>
            <span className={styles.tacticCount}>{tactic.techniques.length} techniques</span>
            <div className={styles.techniqueList}>
              {tactic.techniques.map((technique) => (
                <div
                  key={technique.name}
                  className={styles.techniqueItem}
                  onClick={() => handleTechniqueClick(technique)}
                >
                  <span className={styles.techniqueName}>{technique.name}</span>
                  {technique.count > 0 && (
                    <span className={styles.techniqueCount}>
                      {technique.count}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Technique Detail Modal */}
      {selectedTechnique && (
        <TechniqueDetail
          technique={selectedTechnique}
          onClose={() => setSelectedTechnique(null)}
        />
      )}
    </div>
  );
};

export default Matrix; 