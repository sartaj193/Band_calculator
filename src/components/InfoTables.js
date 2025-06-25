import React from 'react';

export default function InfoTables() {
  // 1. Listening mapping (raw ranges → band) - from image
  const listeningMapping = [
    { min: 39, max: 40, band: 9.0 },
    { min: 37, max: 38, band: 8.5 },
    { min: 35, max: 36, band: 8.0 },
    { min: 32, max: 34, band: 7.5 },
    { min: 30, max: 31, band: 7.0 },
    { min: 26, max: 29, band: 6.5 },
    { min: 23, max: 25, band: 6.0 },
    { min: 18, max: 22, band: 5.5 },
    { min: 16, max: 17, band: 5.0 },
    { min: 13, max: 15, band: 4.5 },
    { min: 10, max: 12, band: 4.0 },
  ];

  // 2. Academic Reading mapping - from image
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
  ];
  
  
  // General Training Reading mapping - from image
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

  // Styles - Updated color scheme inspired by the image
  const containerStyle = {
    background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 30%, #1e40af 70%, #1e3a8a 100%)',
    minHeight: '100vh',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  };

  const mainContainerStyle = {
    display: 'flex',
    flexDirection: 'row',
    gap: '20px',
    maxWidth: '1200px',
    margin: '0 auto',
    flexWrap: 'wrap',
  };

  const sectionStyle = {
    background: 'rgba(255, 255, 255, 0.15)',
    backdropFilter: 'blur(15px)',
    borderRadius: '20px',
    padding: '25px',
    flex: '1',
    minWidth: '300px',
    boxShadow: '0 12px 40px rgba(0, 0, 0, 0.3)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
  };

  const headerStyle = {
    color: 'white',
    fontSize: '22px',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '20px',
    textTransform: 'uppercase',
    letterSpacing: '1.5px',
    textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
  };

  const subHeaderStyle = {
    color: 'rgba(255, 255, 255, 0.9)',
    fontSize: '14px',
    textAlign: 'center',
    marginBottom: '15px',
    display: 'flex',
    justifyContent: 'space-between',
    fontWeight: '500',
  };

  const scoreRowStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
    gap: '12px',
  };

  const scoreBoxStyle = {
    background: 'linear-gradient(145deg, #64748b, #475569)',
    color: 'white',
    padding: '10px 14px',
    borderRadius: '10px',
    fontSize: '14px',
    fontWeight: 'bold',
    flex: '1',
    textAlign: 'center',
    border: '2px solid rgba(148, 163, 184, 0.5)',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    transition: 'transform 0.2s ease',
  };

  const bandBoxStyle = {
    background: 'linear-gradient(145deg, #f1f5f9, #e2e8f0)',
    color: '#1e293b',
    padding: '10px 14px',
    borderRadius: '10px',
    fontSize: '16px',
    fontWeight: 'bold',
    width: '55px',
    textAlign: 'center',
    border: '2px solid rgba(203, 213, 225, 0.8)',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15)',
    transition: 'transform 0.2s ease',
  };

  const academicBandBoxStyle = {
    background: 'linear-gradient(145deg, #fef08a, #facc15)',
    color: '#713f12',
    padding: '10px 14px',
    borderRadius: '10px',
    fontSize: '16px',
    fontWeight: 'bold',
    width: '55px',
    textAlign: 'center',
    border: '2px solid rgba(250, 204, 21, 0.8)',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15)',
    transition: 'transform 0.2s ease',
  };

  const descriptorContainerStyle = {
    background: 'rgba(255, 255, 255, 0.15)',
    backdropFilter: 'blur(15px)',
    borderRadius: '20px',
    padding: '25px',
    width: '100%',
    marginTop: '20px',
    boxShadow: '0 12px 40px rgba(0, 0, 0, 0.3)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
  };

  const descriptorRowStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
    gap: '20px',
  };

  const descriptorBandStyle = {
    background: 'linear-gradient(145deg, #f1f5f9, #e2e8f0)',
    color: '#1e293b',
    padding: '10px 14px',
    borderRadius: '10px',
    fontSize: '16px',
    fontWeight: 'bold',
    width: '65px',
    textAlign: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15)',
    border: '2px solid rgba(203, 213, 225, 0.8)',
  };

  const descriptorTextStyle = {
    color: 'white',
    fontSize: '16px',
    flex: '1',
    textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)',
  };

  // Helper to render a section
  const renderSection = (title, mapping, isAcademic = false) => (
    <div style={sectionStyle}>
      <div style={headerStyle}>{title}</div>
      <div style={subHeaderStyle}>
   
        <span>Score</span>
      </div>
      {mapping.map((row, idx) => (
        <div key={idx} style={scoreRowStyle}>
          <div style={scoreBoxStyle}>
            {row.min === row.max ? row.min : `${row.min} - ${row.max}`}
          </div>
          <div style={isAcademic ? academicBandBoxStyle : bandBoxStyle}>
            {row.band.toFixed(1)}
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div style={containerStyle}>
      <div style={mainContainerStyle}>
        {/* Listening */}
        {renderSection('LISTENING', listeningMapping)}

        {/* Academic Reading */}
        {renderSection('ACADEMIC READING', readingAcadMap, true)}

        {/* General Reading */}
        {renderSection('GENERAL READING', readingGenMap)}
      </div>

      {/* Band Descriptors */}
      <div style={descriptorContainerStyle}>
        <div style={headerStyle}>Band Descriptors</div>
        {bandDescriptors.map((row, idx) => (
          <div key={idx} style={descriptorRowStyle}>
            <div style={descriptorBandStyle}>{row.band.toFixed(1)}</div>
            <div style={descriptorTextStyle}>{row.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}