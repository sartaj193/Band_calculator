// src/app/terms-of-service/page.js
export const metadata = {
  title: "Terms of Service - IELTS Band Calculator",
  description: "Terms of service for using our IELTS band calculator tool.",
};

export default function TermsOfService() {
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
    color: '#6b7280',
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
      <h1 style={headingStyle}>Terms of Service</h1>
      <p style={dateStyle}>Last updated: {lastUpdated}</p>

      <section style={{ marginBottom: '32px' }}>
        <h2 style={sectionTitleStyle}>Acceptance of Terms</h2>
        <p style={paragraphStyle}>
          By accessing and using our IELTS Band Calculator, you accept and agree to be bound
          by the terms and provision of this agreement.
        </p>
      </section>

      <section style={{ marginBottom: '32px' }}>
        <h2 style={sectionTitleStyle}>Use License</h2>
        <p style={paragraphStyle}>
          Permission is granted to temporarily use our IELTS Band Calculator for personal,
          non-commercial transitory viewing only. This is the grant of a license, not a
          transfer of title, and under this license you may not:
        </p>
        <ul style={listStyle}>
          <li style={listItemStyle}>Modify or copy the materials</li>
          <li style={listItemStyle}>Use the materials for any commercial purpose or for any public display</li>
          <li style={listItemStyle}>Attempt to reverse engineer any software contained on the website</li>
          <li style={listItemStyle}>Remove any copyright or other proprietary notations from the materials</li>
        </ul>
      </section>

      <section style={{ marginBottom: '32px' }}>
        <h2 style={sectionTitleStyle}>Disclaimer</h2>
        <p style={paragraphStyle}>
          The information on this website is provided on an 'as is' basis. To the fullest
          extent permitted by law, we exclude all representations, warranties, and conditions
          relating to our website and the use of this website. Our calculator provides
          estimates based on official IELTS guidelines but should not replace official
          score reports.
        </p>
      </section>

      <section style={{ marginBottom: '32px' }}>
        <h2 style={sectionTitleStyle}>Accuracy of Results</h2>
        <p style={paragraphStyle}>
          While we strive to provide accurate calculations based on official IELTS scoring
          methods, we cannot guarantee 100% accuracy. Users should always refer to their
          official IELTS score report for definitive results.
        </p>
      </section>

      <section style={{ marginBottom: '32px' }}>
        <h2 style={sectionTitleStyle}>Limitations</h2>
        <p style={paragraphStyle}>
          In no event shall our company or its suppliers be liable for any damages arising
          out of the use or inability to use our calculator, even if we have been notified
          orally or in writing of the possibility of such damage.
        </p>
      </section>

      <section style={{ marginBottom: '32px' }}>
        <h2 style={sectionTitleStyle}>Modifications</h2>
        <p style={paragraphStyle}>
          We may revise these terms of service at any time without notice. By using this
          website, you are agreeing to be bound by the then current version of these terms.
        </p>
      </section>

      <section style={{ marginBottom: '32px' }}>
        <h2 style={sectionTitleStyle}>Contact Information</h2>
        <p style={paragraphStyle}>
          If you have any questions about these Terms of Service, please contact us at
     contactbusiness083@gmail.com
        </p>
      </section>
    </div>
  );
}
