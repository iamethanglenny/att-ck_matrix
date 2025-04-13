import React from 'react';
import styles from '../styles/TechniqueDetail.module.css';

const DEFAULT_TECHNIQUE = {
  version: '1.0',
  created: '2020-01-01',
  modified: '2020-01-01',
  dataSources: ['Process Monitoring'],
  platforms: ['Windows'],
  selectedMatches: 0,
  totalMatches: 0,
  hackerGroups: [],
  industries: [],
  regions: [],
  countries: [],
  mitigations: ['No specific mitigations documented.'],
  description: 'No detailed description available for this technique.'
};

const TechniqueDetail = ({ technique, onClose }) => {
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  // Merge the technique with default values
  const fullTechnique = {
    ...DEFAULT_TECHNIQUE,
    ...technique,
    // Use count as selectedMatches if available
    selectedMatches: technique.count || technique.selectedMatches || DEFAULT_TECHNIQUE.selectedMatches,
    // Default ID if not provided
    id: technique.id || `T${Math.floor(1000 + Math.random() * 9000)}`,
    // Default tactic from parent if available
    tactic: technique.tactic || technique.name.split('/')[0],
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <div className={styles.header}>
          <h1>{fullTechnique.name}</h1>
          <div className={styles.metadata}>
            Created at {formatDate(fullTechnique.created)} · Last modified {formatDate(fullTechnique.modified)}
          </div>
        </div>

        <div className={styles.content}>
          <section className={styles.techniqueInfo}>
            <h2>Technique info</h2>
            <div className={styles.infoGrid}>
              <div className={styles.infoItem}>
                <label>ID</label>
                <span>{fullTechnique.id}</span>
              </div>
              <div className={styles.infoItem}>
                <label>Version</label>
                <span>{fullTechnique.version}</span>
              </div>
              <div className={styles.infoItem}>
                <label>Tactic</label>
                <span>{fullTechnique.tactic}</span>
              </div>
            </div>
          </section>

          <section className={styles.dataSources}>
            <div className={styles.sourceHeader}>
              <h3>Data Sources</h3>
            </div>
            <div className={styles.sourceList}>
              {fullTechnique.dataSources.map((source, index) => (
                <span key={index} className={styles.sourceItem}>{source}</span>
              ))}
            </div>
          </section>

          <section className={styles.platforms}>
            <div className={styles.platformHeader}>
              <h3>Platforms</h3>
            </div>
            <div className={styles.platformList}>
              {fullTechnique.platforms.map((platform, index) => (
                <span key={index} className={styles.platformItem}>{platform}</span>
              ))}
            </div>
          </section>

          <section className={styles.stats}>
            <div className={styles.statsItem}>
              <span>Selected matches</span>
              <div className={styles.statsValue}>{fullTechnique.selectedMatches}</div>
            </div>
            <div className={styles.statsItem}>
              <span>Total matches</span>
              <div className={styles.statsValue}>{fullTechnique.totalMatches}</div>
            </div>
          </section>

          {fullTechnique.hackerGroups.length > 0 && (
            <section className={styles.groups}>
              <h3>Hacker groups</h3>
              <div className={styles.groupList}>
                {fullTechnique.hackerGroups.map((group, index) => (
                  <span key={index} className={styles.groupItem}>{group}</span>
                ))}
              </div>
            </section>
          )}

          {(fullTechnique.industries.length > 0 || 
            fullTechnique.regions.length > 0 || 
            fullTechnique.countries.length > 0) && (
            <section className={styles.targeting}>
              {fullTechnique.industries.length > 0 && (
                <div className={styles.targetingSection}>
                  <h3>Industry</h3>
                  <div className={styles.targetList}>
                    {fullTechnique.industries.map((industry, index) => (
                      <span key={index} className={styles.targetItem}>{industry}</span>
                    ))}
                  </div>
                </div>
              )}

              {fullTechnique.regions.length > 0 && (
                <div className={styles.targetingSection}>
                  <h3>Region</h3>
                  <div className={styles.targetList}>
                    {fullTechnique.regions.map((region, index) => (
                      <span key={index} className={styles.targetItem}>{region}</span>
                    ))}
                  </div>
                </div>
              )}

              {fullTechnique.countries.length > 0 && (
                <div className={styles.targetingSection}>
                  <h3>Country</h3>
                  <div className={styles.targetList}>
                    {fullTechnique.countries.map((country, index) => (
                      <div key={index} className={styles.countryItem}>
                        <img 
                          src={`/flags/${country.code.toLowerCase()}.svg`} 
                          alt={country.name}
                          className={styles.flag}
                        />
                        <span>{country.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </section>
          )}

          <section className={styles.mainContent}>
            <h2>Main</h2>
            <div className={styles.description}>
              {fullTechnique.description}
            </div>
          </section>

          <section className={styles.mitigations}>
            <h2>Mitigations</h2>
            <div className={styles.mitigationList}>
              {fullTechnique.mitigations.map((mitigation, index) => (
                <div key={index} className={styles.mitigationItem}>
                  {mitigation}
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TechniqueDetail; 