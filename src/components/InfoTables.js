// src/components/InfoTables.js
import React from 'react';

export default function InfoTables() {
  // 1. Listening mapping (raw ranges → band).
  const listeningMapping = [
    { min: 39, max: 40, band: 9.0 },
    { min: 37, max: 38, band: 8.5 },
    { min: 35, max: 36, band: 8.0 },
    { min: 33, max: 34, band: 7.5 },
    { min: 30, max: 32, band: 7.0 },
    { min: 27, max: 29, band: 6.5 },
    { min: 23, max: 26, band: 6.0 },
    { min: 19, max: 22, band: 5.5 },
    { min: 15, max: 18, band: 5.0 },
    { min: 13, max: 14, band: 4.5 },
    { min: 10, max: 12, band: 4.0 },
    { min: 8, max: 9, band: 3.5 },
    { min: 6, max: 7, band: 3.0 },
    { min: 4, max: 5, band: 2.5 },
    { min: 2, max: 3, band: 2.0 },
    { min: 1, max: 1, band: 1.0 },
    { min: 0, max: 0, band: 0.0 },
  ];

  // 2. Reading mappings
  const readingAcadMap = [
    { min: 39, max: 40, band: 9.0 },
    { min: 37, max: 38, band: 8.5 },
    { min: 35, max: 36, band: 8.0 },
    { min: 33, max: 34, band: 7.5 },
    { min: 30, max: 32, band: 7.0 },
    { min: 27, max: 29, band: 6.5 },
    { min: 23, max: 26, band: 6.0 },
    { min: 19, max: 22, band: 5.5 },
    { min: 15, max: 18, band: 5.0 },
    { min: 13, max: 14, band: 4.5 },
    { min: 10, max: 12, band: 4.0 },
    { min: 8, max: 9, band: 3.5 },
    { min: 6, max: 7, band: 3.0 },
    { min: 4, max: 5, band: 2.5 },
    { min: 2, max: 3, band: 2.0 },
    { min: 1, max: 1, band: 1.0 },
    { min: 0, max: 0, band: 0.0 },
  ];
  // General Training mapping (updated)
  const readingGenMap = [
    { min: 40, max: 40, band: 9.0 },
    { min: 39, max: 39, band: 8.5 },
    { min: 37, max: 38, band: 8.0 },
    { min: 36, max: 36, band: 7.5 },
    { min: 34, max: 35, band: 7.0 },
    { min: 32, max: 33, band: 6.5 },
    { min: 30, max: 31, band: 6.0 },
    { min: 27, max: 29, band: 5.5 },
    { min: 23, max: 26, band: 5.0 },
    { min: 19, max: 22, band: 4.5 },
    { min: 15, max: 18, band: 4.0 },
    { min: 12, max: 14, band: 3.5 },
    { min: 9, max: 11, band: 3.0 },
    { min: 6, max: 8, band: 2.5 },
    { min: 4, max: 5, band: 2.0 },
    { min: 2, max: 3, band: 1.0 },
    { min: 1, max: 1, band: 0.5 },
    { min: 0, max: 0, band: 0.0 },
  ];

  // 3. Band descriptors
  const bandDescriptors = [
    { band: 9.0, desc: 'Expert user' },
    { band: 8.0, desc: 'Very good user' },
    { band: 7.0, desc: 'Good user' },
    { band: 6.0, desc: 'Competent user' },
    { band: 5.0, desc: 'Modest user' },
    { band: 4.0, desc: 'Limited user' },
    { band: 3.0, desc: 'Extremely limited user' },
    { band: 2.0, desc: 'Intermittent user' },
    { band: 1.0, desc: 'Non-user' },
    { band: 0.0, desc: 'Did not attempt / No assessable information' },
  ];

  // Inline styles for tables
  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    marginBottom: '24px',
  };
  const thStyle = {
    border: '1px solid #ccc',
    padding: '8px',
    background: '#f2f2f2',
    textAlign: 'center',
  };
  const tdStyle = {
    border: '1px solid #ccc',
    padding: '8px',
    textAlign: 'center',
  };
  const sectionHeaderStyle = {
    fontSize: '1.1rem',
    fontWeight: 'bold',
    marginBottom: '8px',
    marginTop: '16px',
  };

  // Helper to render a raw→band table given a title and mapping array
  const renderSimpleTable = (title, mapping) => (
    <div>
      <div style={sectionHeaderStyle}>{title}</div>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Raw Score Range</th>
            <th style={thStyle}>Band</th>
          </tr>
        </thead>
        <tbody>
          {mapping.map((row, idx) => (
            <tr key={idx}>
              <td style={tdStyle}>
                {row.min === row.max ? row.min : `${row.min}–${row.max}`}
              </td>
              <td style={tdStyle}>{row.band.toFixed(1)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div>
      {/* Listening */}
      {renderSimpleTable('Listening: Raw Score → Band', listeningMapping)}

      {/* Academic Reading */}
      {renderSimpleTable(
        'Academic Reading: Raw Score → Band',
        readingAcadMap
      )}

      {/* General Reading */}
      {renderSimpleTable(
        'General Training Reading: Raw Score → Band',
        readingGenMap
      )}

      {/* Band descriptors */}
      <div>
        <div style={sectionHeaderStyle}>Band Descriptors</div>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Band Score</th>
              <th style={thStyle}>Descriptor</th>
            </tr>
          </thead>
          <tbody>
            {bandDescriptors.map((row, idx) => (
              <tr key={idx}>
                <td style={tdStyle}>{row.band.toFixed(1)}</td>
                <td style={tdStyle}>{row.desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
