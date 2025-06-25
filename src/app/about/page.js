// src/app/about/page.js
export const metadata = {
  title: "About - IELTS Band Calculator",
  description: "Learn about our free IELTS band calculator tool and how it helps students calculate their IELTS scores accurately.",
};

export default function About() {
  const containerStyle = {
    maxWidth: '896px', // approx max-w-4xl
    margin: '0 auto',
    padding: '32px 16px',
    boxSizing: 'border-box',
  };
  const headingStyle = {
    fontSize: '2.25rem', // text-4xl
    fontWeight: 'bold',
    color: '#1f2937', // gray-800
    marginBottom: '24px',
  };
  const sectionTitleStyle = {
    fontSize: '1.5rem', // text-2xl
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: '16px',
  };
  const paragraphStyle = {
    color: '#4b5563', // gray-600
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
    marginBottom: '8px',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>About IELTS Band Calculator</h1>

      <p style={paragraphStyle}>
        Our IELTS Band Calculator is a free, easy-to-use tool designed to help IELTS test-takers
        calculate their overall band scores accurately and instantly.
      </p>

      <h2 style={sectionTitleStyle}>What We Do</h2>
      <p style={paragraphStyle}>
        We provide a simple and reliable way to calculate your IELTS band scores from your individual
        section scores (Listening, Reading, Writing, Speaking). Our calculator uses the official IELTS
        scoring methodology to give you accurate results.
      </p>

      <h2 style={sectionTitleStyle}>Why Use Our Calculator?</h2>
      <ul style={listStyle}>
        {[
          { label: 'Accurate: Based on official IELTS scoring guidelines' },
          { label: 'Free: No registration or payment required' },
          { label: 'Instant: Get your results immediately' },
          { label: 'Easy to Use: Simple interface, no complex steps' },
        ].map((item, idx) => (
          <li key={idx} style={listItemStyle}>
            <strong>{item.label.split(':')[0]}:</strong> {item.label.split(': ')[1]}
          </li>
        ))}
      </ul>

      <h2 style={sectionTitleStyle}>Our Mission</h2>
      <p style={paragraphStyle}>
        We aim to help IELTS candidates better understand their performance and plan their preparation
        more effectively. Whether you&apos;re applying for university admission, immigration, or professional
        registration, knowing your IELTS band score is crucial for your success.
      </p>
    </div>
  );
}
