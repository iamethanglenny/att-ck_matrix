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
  if (!technique) return null;

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
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
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>×</button>
        
        <h2 className={styles.techniqueTitle}>{fullTechnique.name}</h2>
        <p className={styles.techniqueMeta}>
          Created at {formatDate(fullTechnique.created)} • Last modified {formatDate(fullTechnique.modified)}
        </p>

        <div className={styles.mainGrid}>
          {/* Left Column */}
          <div className={styles.leftColumn}>
            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>Technique Info</h3>
              <div className={styles.infoGrid}>
                <span className={styles.infoLabel}>ID</span>
                <span className={styles.infoValue}>{fullTechnique.id || 'N/A'}</span>

                <span className={styles.infoLabel}>Version</span>
                <span className={styles.infoValue}>{fullTechnique.version || 'N/A'}</span>

                <span className={styles.infoLabel}>Tactic</span>
                <span className={styles.infoValue}>{fullTechnique.tactic || 'N/A'}</span>

                <span className={styles.infoLabel}>Platforms</span>
                <span className={styles.infoValue}>{(fullTechnique.platforms || []).join(' • ') || 'N/A'}</span>

                <span className={styles.infoLabel}>Data Sources</span>
                <span className={styles.infoValue}>{(fullTechnique.dataSources || []).join(' • ') || 'N/A'}</span>
              </div>
            </div>

            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>Execution Samples</h3>
              <div className={styles.placeholderBox}>
                {/* Placeholder for Execution Samples content */}
              </div>
            </div>

            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>Sub-Techniques</h3>
              <div className={styles.placeholderBox}>
                 {/* Placeholder for Sub-Techniques content */}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className={styles.rightColumn}>
            <div className={styles.summaryBox}>
              <p>Selected Matches: <span className={styles.matchCount}>{fullTechnique.selectedMatches || 'N/A'}</span></p>
              <p>Total Matches: <span className={styles.matchCount}>{fullTechnique.totalMatches || 'N/A'}</span></p>
              
              <div className={styles.infoGrid}>
                <span className={styles.infoLabel}>Hacker Group</span>
                <span className={styles.infoValue}>{(fullTechnique.hackerGroups || []).join(' • ') || 'N/A'}</span>

                <span className={styles.infoLabel}>Industry</span>
                <span className={styles.infoValue}>{(fullTechnique.industries || []).join(' • ') || 'N/A'}</span>

                <span className={styles.infoLabel}>Region</span>
                <span className={styles.infoValue}>{(fullTechnique.regions || []).join(' • ') || 'N/A'}</span>

                <span className={styles.infoLabel}>Country</span>
                <span className={styles.infoValue}>
                  {(fullTechnique.countries || []).map(c => `${c.code} ${c.name}`).join(' • ') || 'N/A'}
                </span>
              </div>
            </div>

            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>Main</h3>
              <div className={styles.placeholderBoxLarge}>
                {fullTechnique.description || 'Main description area...'}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TechniqueDetail; 