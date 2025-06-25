export const metadata = {
  title: "Contact Us - IELTS Band Calculator",
  description: "Get in touch with us for any questions about our IELTS band calculator or feedback.",
};

export default function Contact() {
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
  const cardStyle = {
    backgroundColor: '#f9fafb',
    padding: '32px',
    borderRadius: '8px',
    textAlign: 'center',
    maxWidth: '600px',
    margin: '0 auto',
  };
  const emailButtonStyle = {
    display: 'inline-block',
    backgroundColor: '#2563eb',
    color: '#ffffff',
    padding: '16px 32px',
    fontSize: '1.125rem',
    fontWeight: '500',
    textDecoration: 'none',
    borderRadius: '8px',
    marginTop: '16px',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Contact Us</h1>
      
      <div style={cardStyle}>
        <h2 style={sectionTitleStyle}>Get in Touch</h2>
        <p style={paragraphStyle}>
          {"Have questions about our IELTS Band Calculator? Need help using the tool? We'd love to hear from you!"}
        </p>
        
        <div style={{ marginBottom: '24px' }}>
          <h3 style={{ color: '#1f2937', marginBottom: '8px', fontSize: '1.125rem', fontWeight: '600' }}>
            Email Us
          </h3>
          <p style={{ color: '#2563eb', fontSize: '1.25rem', fontWeight: '500', marginBottom: '0' }}>
            contactbusiness083@gmail.com
          </p>
        </div>

        <a 
          href="mailto:contactbusiness083@gmail.com?subject=IELTS Calculator Question&body=Hi there,%0D%0A%0D%0AI have a question about the IELTS Band Calculator:%0D%0A%0D%0A"
          style={emailButtonStyle}
        >
          Send Email
        </a>

        <div style={{ marginTop: '32px', fontSize: '0.875rem', color: '#6b7280' }}>
          <p style={{ marginBottom: '8px' }}>📧 Response Time: 24-48 hours</p>
          <p style={{ marginBottom: '8px' }}>💡 Include your question details</p>
          <p style={{ margin: '0' }}>🔧 Mention any technical issues</p>
        </div>
      </div>

      <div style={{ marginTop: '48px' }}>
        <h2 style={sectionTitleStyle}>Common Questions</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '8px' }}>
            <h3 style={{ color: '#1f2937', marginBottom: '12px', fontSize: '1.125rem', fontWeight: '600' }}>
              Calculator Issues?
            </h3>
            <p style={{ color: '#4b5563', fontSize: '0.875rem', marginBottom: '12px' }}>
              Check our FAQ page for common calculator problems and solutions.
            </p>
            <a href="/faq" style={{ color: '#2563eb', textDecoration: 'underline', fontSize: '0.875rem' }}>
              Visit FAQ →
            </a>
          </div>
          
          <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '8px' }}>
            <h3 style={{ color: '#1f2937', marginBottom: '12px', fontSize: '1.125rem', fontWeight: '600' }}>
              How Does It Work?
            </h3>
            <p style={{ color: '#4b5563', fontSize: '0.875rem', marginBottom: '12px' }}>
              Learn about IELTS scoring methodology and how our calculator works.
            </p>
            <a href="/how-it-works" style={{ color: '#2563eb', textDecoration: 'underline', fontSize: '0.875rem' }}>
              Learn More →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
