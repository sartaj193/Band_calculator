// src/app/faq/page.js - COMPLETELY NEW PAGE
export const metadata = {
  title: "FAQ - IELTS Band Calculator",
  description: "Frequently asked questions about our IELTS band calculator and IELTS scoring system.",
};

export default function FAQ() {
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
  
  const questionStyle = {
    fontSize: '1.25rem',
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: '12px',
    marginTop: '32px',
  };
  
  const answerStyle = {
    color: '#4b5563',
    fontSize: '1rem',
    marginBottom: '16px',
    lineHeight: 1.6,
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Frequently Asked Questions</h1>
      
      <h2 style={questionStyle}>How accurate is the IELTS Band Calculator?</h2>
      <p style={answerStyle}>
        Our calculator uses the official IELTS scoring methodology to provide accurate estimates. 
        However, your official test results may vary slightly due to various factors in the actual test environment.
      </p>

      <h2 style={questionStyle}>Is the calculator free to use?</h2>
      <p style={answerStyle}>
        Yes, our IELTS Band Calculator is completely free to use. No registration, payment, or personal information is required.
      </p>

      <h2 style={questionStyle}>How is the overall IELTS band score calculated?</h2>
      <p style={answerStyle}>
        The overall band score is calculated by taking the average of your four individual scores 
        (Listening, Reading, Writing, Speaking) and rounding to the nearest 0.5 band.
      </p>

      <h2 style={questionStyle}>Can I use this calculator for both Academic and General Training IELTS?</h2>
      <p style={answerStyle}>
        Yes, the band calculation method is the same for both Academic and General Training IELTS tests.
      </p>

      <h2 style={questionStyle}>What if my scores don't seem right?</h2>
      <p style={answerStyle}>
        Please double-check your individual section scores. If you believe there's an error with our calculator, 
        contact us with the specific scores you entered.
      </p>

      <h2 style={questionStyle}>How often is the calculator updated?</h2>
      <p style={answerStyle}>
        We regularly review and update our calculator to ensure it follows the latest IELTS scoring guidelines 
        from the British Council, IDP, and Cambridge Assessment English.
      </p>

      <h2 style={questionStyle}>Can I save my results?</h2>
      <p style={answerStyle}>
        Currently, the calculator doesn't save results. We recommend taking a screenshot or noting down 
        your calculated band score for future reference.
      </p>

      <h2 style={questionStyle}>What's the difference between individual and overall band scores?</h2>
      <p style={answerStyle}>
        Individual band scores are your performance in each of the four skills (Listening, Reading, Writing, Speaking), 
        while the overall band score is the average of these four scores, rounded to the nearest 0.5.
      </p>

      <h2 style={questionStyle}>Do I need to create an account to use the calculator?</h2>
      <p style={answerStyle}>
        No, you don't need to create an account. Our calculator works instantly without any registration.
      </p>

      <h2 style={questionStyle}>Can I use this calculator on mobile devices?</h2>
      <p style={answerStyle}>
        Yes, our calculator is fully responsive and works on all devices including smartphones and tablets.
      </p>
      
      <div style={{ marginTop: '48px', padding: '24px', backgroundColor: '#f9fafb', borderRadius: '8px' }}>
        <h2 style={questionStyle}>Still have questions?</h2>
        <p style={answerStyle}>
          If you couldn't find the answer you're looking for, please don't hesitate to contact us at 
          contactbusiness083@gmail.com. We're here to help!
        </p>
      </div>
    </div>
  );
}