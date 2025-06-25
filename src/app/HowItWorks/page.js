// src/app/how-it-works/page.js - COMPLETELY NEW PAGE
export const metadata = {
  title: "How It Works - IELTS Band Calculator",
  description: "Learn how our IELTS band calculator works and understand the official IELTS scoring methodology.",
};

export default function HowItWorks() {
  const containerStyle = {
    maxWidth: '896px',
    margin: '0 auto',
    padding: '32px 16px',
    boxSizing: 'border-box',
  };
  
  const headingStyle = {
    fontSize: '2.25rem',
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: '24px',
  };
  
  const sectionTitleStyle = {
    fontSize: '1.5rem',
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: '16px',
  };
  
  const paragraphStyle = {
    color: '#4b5563',
    fontSize: '1rem',
    marginBottom: '24px',
    lineHeight: 1.6,
  };
  
  const listStyle = {
    color: '#4b5563',
    fontSize: '1rem',
    marginBottom: '24px',
    paddingLeft: '20px',
    lineHeight: 1.6,
  };
  
  const listItemStyle = {
    marginBottom: '12px',
  };

  const stepStyle = {
    backgroundColor: '#f9fafb',
    padding: '24px',
    borderRadius: '8px',
    marginBottom: '24px',
  };

  const stepNumberStyle = {
    display: 'inline-block',
    backgroundColor: '#2563eb',
    color: 'white',
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    textAlign: 'center',
    lineHeight: '32px',
    fontWeight: 'bold',
    marginRight: '12px',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>How It Works</h1>
      
      <p style={paragraphStyle}>
        Our IELTS Band Calculator uses the official scoring methodology to calculate your overall band score. 
        Here's how it works and what you need to know about IELTS scoring.
      </p>

      <h2 style={sectionTitleStyle}>IELTS Scoring System</h2>
      <p style={paragraphStyle}>
        IELTS uses a 9-band scoring system to measure your English language proficiency. Each of the four skills 
        (Listening, Reading, Writing, Speaking) is scored individually, and then an overall band score is calculated.
      </p>

      <h2 style={sectionTitleStyle}>How to Use Our Calculator</h2>
      
      <div style={stepStyle}>
        <span style={stepNumberStyle}>1</span>
        <strong>Enter Your Scores:</strong> Input your individual band scores for each of the four skills: 
        Listening, Reading, Writing, and Speaking.
      </div>

      <div style={stepStyle}>
        <span style={stepNumberStyle}>2</span>
        <strong>Automatic Calculation:</strong> Our calculator instantly computes your overall band score 
        using the official IELTS methodology.
      </div>

      <div style={stepStyle}>
        <span style={stepNumberStyle}>3</span>
        <strong>Get Your Result:</strong> View your overall band score and understand what it means 
        for your goals.
      </div>

      <h2 style={sectionTitleStyle}>Official Calculation Method</h2>
      <p style={paragraphStyle}>
        The overall band score is calculated by taking the average of your four individual scores and 
        rounding to the nearest whole or half band. Here's how the rounding works:
      </p>

      <ul style={listStyle}>
        <li style={listItemStyle}><strong>If the average ends in .25:</strong> Round down to the nearest 0.5</li>
        <li style={listItemStyle}><strong>If the average ends in .75:</strong> Round up to the nearest 0.5</li>
        <li style={listItemStyle}><strong>If the average ends in .5:</strong> Keep as is</li>
        <li style={listItemStyle}><strong>If the average is a whole number:</strong> Keep as is</li>
      </ul>

      <h2 style={sectionTitleStyle}>Example Calculations</h2>
      
      <div style={stepStyle}>
        <strong>Example 1:</strong><br />
        Listening: 6.5, Reading: 6.0, Writing: 6.0, Speaking: 7.0<br />
        Average: (6.5 + 6.0 + 6.0 + 7.0) ÷ 4 = 6.375<br />
        <strong>Overall Band Score: 6.5</strong> (rounded up from 6.375)
      </div>

      <div style={stepStyle}>
        <strong>Example 2:</strong><br />
        Listening: 7.0, Reading: 6.5, Writing: 6.5, Speaking: 7.5<br />
        Average: (7.0 + 6.5 + 6.5 + 7.5) ÷ 4 = 6.875<br />
        <strong>Overall Band Score: 7.0</strong> (rounded up from 6.875)
      </div>

      <h2 style={sectionTitleStyle}>Understanding Your Band Score</h2>
      <ul style={listStyle}>
        <li style={listItemStyle}><strong>Band 9:</strong> Expert user - Full operational command</li>
        <li style={listItemStyle}><strong>Band 8:</strong> Very good user - Very good command</li>
        <li style={listItemStyle}><strong>Band 7:</strong> Good user - Good operational command</li>
        <li style={listItemStyle}><strong>Band 6:</strong> Competent user - Generally effective command</li>
        <li style={listItemStyle}><strong>Band 5:</strong> Modest user - Partial command</li>
        <li style={listItemStyle}><strong>Band 4:</strong> Limited user - Limited command</li>
      </ul>

      <h2 style={sectionTitleStyle}>Important Notes</h2>
      <ul style={listStyle}>
        <li style={listItemStyle}>Our calculator provides estimates based on official IELTS guidelines</li>
        <li style={listItemStyle}>Always refer to your official score report for definitive results</li>
        <li style={listItemStyle}>Different institutions may have specific requirements for individual skills</li>
        <li style={listItemStyle}>The calculator works for both Academic and General Training IELTS</li>
      </ul>

      <div style={{ marginTop: '32px', padding: '24px', backgroundColor: '#dbeafe', borderRadius: '8px', border: '1px solid #93c5fd' }}>
        <h3 style={{ color: '#1e40af', marginBottom: '12px', fontSize: '1.125rem', fontWeight: '600' }}>
          Ready to Calculate Your Score?
        </h3>
        <p style={{ color: '#1e40af', margin: 0 }}>
          Use our free IELTS Band Calculator now to find out your overall band score instantly!
        </p>
      </div>
    </div>
  );
}