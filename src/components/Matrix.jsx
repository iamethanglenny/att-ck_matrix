import React, { useState, useMemo } from 'react';
import styles from '../styles/Matrix.module.css';
import { mockTactics, mobileMockTactics, icsMockTactics, filterOptions } from '../data/mockData';
import TechniqueDetail from './TechniqueDetail';

const Matrix = () => {
  const [activeAttackType, setActiveAttackType] = useState('enterprise');
  const [selectedTechnique, setSelectedTechnique] = useState(null);
  const [selectedActor, setSelectedActor] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  // Determine which data set to use based on activeAttackType and assign static colors
  const currentTactics = useMemo(() => {
    let baseTactics;
    switch (activeAttackType) {
      case 'mobile':
        baseTactics = mobileMockTactics;
        break;
      case 'ics':
        baseTactics = icsMockTactics;
        break;
      case 'enterprise':
      default:
        baseTactics = mockTactics;
        break;
    }

    // Assign a static random color to each technique once
    return baseTactics.map(tactic => ({
      ...tactic,
      techniques: tactic.techniques.map(technique => {
        if (technique.assignedColor) {
          return technique; // Already has a color assigned
        }
        
        // Assign a weighted random color (50% blue, 25% yellow, 25% red)
        const colors = {
          blue: '#4169E1',
          yellow: '#FCC537',
          red: '#FC5B3B'
        };
        let randomColor;
        let colorName;
        const rand = Math.random();

        if (rand < 0.50) { // 50% chance for blue
          randomColor = colors.blue;
          colorName = 'blue';
        } else if (rand < 0.75) { // 25% chance for yellow (0.50 to 0.75)
          randomColor = colors.yellow;
          colorName = 'yellow';
        } else { // 25% chance for red (0.75 to 1.00)
          randomColor = colors.red;
          colorName = 'red';
        }

        return {
          ...technique,
          assignedColor: randomColor, // Store the assigned color
          colorName: colorName        // Store the color name for data attribute
        };
      })
    }));
  }, [activeAttackType]);

  // Calculate total techniques for each attack type
  const attackTypes = [
    { id: 'enterprise', label: 'Enterprise attack', count: mockTactics.reduce((sum, t) => sum + t.techniques.length, 0) },
    { id: 'mobile', label: 'Mobile attack', count: mobileMockTactics.reduce((sum, t) => sum + t.techniques.length, 0) },
    { id: 'ics', label: 'ICS attack', count: icsMockTactics.reduce((sum, t) => sum + t.techniques.length, 0) } // Use actual ICS count
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
            <select 
              className={`${styles.filterSelect} ${selectedActor ? styles.activeFilter : ''}`}
              value={selectedActor}
              onChange={(e) => setSelectedActor(e.target.value)}
            >
              <option value="">Actor/Threat Group</option>
              {filterOptions.actors.map((actor) => (
                <option key={actor} value={`APT ${actor}`}>{actor}</option>
              ))}
            </select>

            <select 
              className={`${styles.filterSelect} ${selectedRegion ? styles.activeFilter : ''}`}
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
            >
              <option value="">Region</option>
              {filterOptions.regions.map((region) => (
                <option key={region} value={`North ${region}`}>{region}</option>
              ))}
            </select>

            <select 
              className={`${styles.filterSelect} ${selectedIndustry ? styles.activeFilter : ''}`}
              value={selectedIndustry}
              onChange={(e) => setSelectedIndustry(e.target.value)}
            >
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
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                onFocus={(e) => e.target.type = 'date'}
                onBlur={(e) => {
                  if (!e.target.value) e.target.type = 'text';
                }}
                className={`${startDate ? styles.activeFilter : ''}`}
              />
              <span>—</span>
              <input
                type="text"
                placeholder="end"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                onFocus={(e) => e.target.type = 'date'}
                onBlur={(e) => {
                  if (!e.target.value) e.target.type = 'text';
                }}
                className={`${endDate ? styles.activeFilter : ''}`}
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
        {currentTactics.map((tactic) => (
          <div 
            key={tactic.name} 
            className={styles.tacticColumn}
            data-tactic={tactic.name}
          >
            <h2 className={styles.tacticHeader}>{tactic.name}</h2>
            <span className={styles.tacticCount}>{tactic.techniques.length} techniques</span>
            <div className={styles.techniqueList}>
              {tactic.techniques.map((technique) => {
                // Use the pre-assigned color
                const { assignedColor, colorName } = technique;
                
                return (
                  <div
                    key={technique.name}
                    className={styles.techniqueItem}
                    onClick={() => handleTechniqueClick(technique)}
                    data-color={colorName} // Use pre-assigned color name
                    style={{ borderLeftColor: assignedColor }} // Use pre-assigned color
                  >
                    <span className={styles.techniqueName}>{technique.name}</span>
                    {technique.count > 0 && (
                      <span className={styles.techniqueCount}>
                        {technique.count}
                      </span>
                    )}
                  </div>
                );
              })}
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