// src/app/privacy-policy/page.js
export const metadata = {
  title: "Privacy Policy - IELTS Band Calculator",
  description: "Our privacy policy explaining how we handle your data when using our IELTS band calculator.",
};

export default function PrivacyPolicy() {
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
  const dateStyle = {
    fontSize: '0.875rem',
    color: '#6b7280', // gray-500
    marginBottom: '32px',
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
    marginBottom: '16px',
    lineHeight: 1.6,
  };
  const listStyle = {
    color: '#4b5563',
    fontSize: '1rem',
    paddingLeft: '20px',
    marginBottom: '16px',
    lineHeight: 1.6,
  };
  const listItemStyle = {
    marginBottom: '8px',
  };

  const lastUpdated = new Date().toLocaleDateString();

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Privacy Policy</h1>
      <p style={dateStyle}>Last updated: {lastUpdated}</p>

      <section style={{ marginBottom: '32px' }}>
        <h2 style={sectionTitleStyle}>Information We Collect</h2>
        <p style={paragraphStyle}>
          Our IELTS Band Calculator is designed to protect your privacy. We collect minimal information:
        </p>
        <ul style={listStyle}>
          <li style={listItemStyle}>
            <strong>Usage Data:</strong> We may collect anonymous analytics data to improve our service
          </li>
          <li style={listItemStyle}>
            <strong>Contact Information:</strong> Only if you contact us through our contact form
          </li>
          <li style={listItemStyle}>
            <strong>Calculator Data:</strong> Your IELTS scores are processed locally and not stored on our servers
          </li>
        </ul>
      </section>

      <section style={{ marginBottom: '32px' }}>
        <h2 style={sectionTitleStyle}>How We Use Your Information</h2>
        <p style={paragraphStyle}>We use the information we collect to:</p>
        <ul style={listStyle}>
          <li style={listItemStyle}>Provide and maintain our calculator service</li>
          <li style={listItemStyle}>Respond to your inquiries and support requests</li>
          <li style={listItemStyle}>Improve our website and user experience</li>
          <li style={listItemStyle}>Comply with legal obligations</li>
        </ul>
      </section>

      <section style={{ marginBottom: '32px' }}>
        <h2 style={sectionTitleStyle}>Cookies and Tracking</h2>
        <p style={paragraphStyle}>
          We may use cookies and similar technologies to enhance your experience. These help us
          understand how you use our site and improve our services. You can control cookie
          preferences through your browser settings.
        </p>
      </section>

      <section style={{ marginBottom: '32px' }}>
        <h2 style={sectionTitleStyle}>Third-Party Services</h2>
        <p style={paragraphStyle}>
          We may use third-party services such as Google Analytics to help us understand how
          our service is used. These services have their own privacy policies governing their
          use of information.
        </p>
      </section>

      <section style={{ marginBottom: '32px' }}>
        <h2 style={sectionTitleStyle}>Data Security</h2>
        <p style={paragraphStyle}>
          We implement appropriate security measures to protect your information. However,
          no method of transmission over the internet is 100% secure.
        </p>
      </section>

      <section style={{ marginBottom: '32px' }}>
        <h2 style={sectionTitleStyle}>Contact Us</h2>
        <p style={paragraphStyle}>
          If you have any questions about this Privacy Policy, please contact us at
       contactbusiness083@gmail.com
        </p>
      </section>
    </div>
  );
}
