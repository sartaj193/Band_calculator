// src/components/Footer.js
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Footer() {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    // Handler to update window width
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    // Initialize
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Breakpoints similar to Tailwind: sm = 640px, md = 768px, lg = 1024px
  const isSm = windowWidth >= 640;
  const isMd = windowWidth >= 768;
  const isLg = windowWidth >= 1024;

  // Container padding: px-4 sm:px-6 lg:px-8; py-8
  const horizontalPadding = isLg ? '32px' : isSm ? '24px' : '16px';
  const verticalPadding = '32px'; // py-8 = 2rem = 32px

  // Grid columns: grid-cols-1 md:grid-cols-3; gap-8 => 2rem = 32px
  const gridTemplateColumns = isMd ? 'repeat(3, 1fr)' : '1fr';
  const gridGap = '32px';

  // Colors
  const bgColor = '#2d3748'; // gray-800
  const textColor = '#ffffff';
  const textGray300 = '#d1d5db';
  const textGray400 = '#cbd5e0';
  const borderGray700 = '#4a5568';
  const hoverColor = '#ffffff';
  const hoverTextColor = '#ffffff';
  const linkDefaultColor = textGray300;
  const linkHoverColor = '#ffffff';

  // Bottom bar styles
  const borderTopStyle = `1px solid ${borderGray700}`;
  const bottomMarginTop = '32px'; // mt-8
  const bottomPaddingTop = '24px'; // pt-6

  // Flex for bottom: flex-col sm:flex-row justify-between items-center
  const bottomFlexDirection = isSm ? 'row' : 'column';
  const bottomGap = '16px'; // space between links: space-x-4 = 1rem = 16px
  const bottomLinksMarginTop = isSm ? '0' : '16px'; // mt-4 on small

  // Hover handler
  const hoverProps = {
    onMouseEnter: e => (e.currentTarget.style.color = linkHoverColor),
    onMouseLeave: e => (e.currentTarget.style.color = linkDefaultColor),
  };

  const footerStyle = {
    backgroundColor: bgColor,
    color: textColor,
    marginTop: 'auto',
  };
  const containerStyle = {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: `${verticalPadding} ${horizontalPadding}`,
    boxSizing: 'border-box',
  };
  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: gridTemplateColumns,
    gap: gridGap,
  };
  const logoBoxStyle = {
    backgroundImage: 'linear-gradient(to right, #3b82f6, #8b5cf6)', // blue-500 to purple-600
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: '1.25rem', // text-xl
    padding: '8px 12px', // px-3 py-2
    borderRadius: '0.5rem', // rounded-lg
    display: 'inline-block',
    marginBottom: '16px', // mb-4
    textDecoration: 'none',
  };
  const descTextStyle = {
    color: textGray300,
    fontSize: '0.875rem', // text-sm
  };
  const sectionTitleStyle = {
    color: textColor,
    fontSize: '1.125rem', // text-lg
    fontWeight: '600',
    marginBottom: '16px', // mb-4
  };
  const linkStyle = {
    color: linkDefaultColor,
    textDecoration: 'none',
    fontSize: '0.875rem', // text-sm
    transition: 'color 0.3s',
  };
  const listItemStyle = {
    marginBottom: '8px', // space-y-2 => vertical spacing; last item margin not critical
  };

  const bottomBarStyle = {
    borderTop: borderTopStyle,
    marginTop: bottomMarginTop,
    paddingTop: bottomPaddingTop,
  };
  const bottomContainerStyle = {
    display: 'flex',
    flexDirection: bottomFlexDirection,
    justifyContent: 'space-between',
    alignItems: 'center',
  };
  const bottomTextStyle = {
    color: textGray400,
    fontSize: '0.875rem', // text-sm
  };
  const bottomLinksContainerStyle = {
    display: 'flex',
    gap: bottomGap,
    marginTop: bottomLinksMarginTop,
  };

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <div style={gridStyle}>
          {/* Logo and Description */}
          <div>
            <Link href="/" style={{ textDecoration: 'none' }}>
              <div style={logoBoxStyle}>
                IELTS
                <span style={{ color: '#facc15' /* yellow-300 */, marginLeft: '4px' }}>
                  Calc
                </span>
              </div>
            </Link>
            <p style={descTextStyle}>
              Calculate your IELTS band score instantly with our accurate and easy-to-use calculator.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 style={sectionTitleStyle}>Quick Links</h3>
            <ul style={{ padding: 0, margin: 0, listStyle: 'none' }}>
              {[
                { href: '/', label: 'IELTS Calculator' },
                
              ].map((item) => (
                <li key={item.href} style={listItemStyle}>
                  <Link href={item.href} style={linkStyle} {...hoverProps}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 style={sectionTitleStyle}>Legal</h3>
            <ul style={{ padding: 0, margin: 0, listStyle: 'none' }}>
              {[
                { href: '/privacy-policy', label: 'Privacy Policy' },
                { href: '/terms-of-service', label: 'Terms of Service' },
                { href: '/contact', label: 'Contact' },
                { href: '/about', label: 'About ' },
                { href: '/FAQ', label: 'FAQ ' },
                      { href: '/HowItWorks', label: 'HowItWorks' },
              ].map((item) => (
                <li key={item.href} style={listItemStyle}>
                  <Link href={item.href} style={linkStyle} {...hoverProps}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={bottomBarStyle}>
          <div style={bottomContainerStyle}>
            <p style={bottomTextStyle}>
              © {new Date().getFullYear()} IELTS Calculator. All rights reserved.
            </p>
            <div style={bottomLinksContainerStyle}>
              {[
                { href: '/privacy-policy', label: 'Privacy' },
                { href: '/terms-of-service', label: 'Terms' },
                { href: '/contact', label: 'Contact' },
                 { href: '/FAQ', label: 'FAQ' },
                 { href: '/HowItWorks', label: 'HowItWorks' },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  style={bottomTextStyle}
                  {...hoverProps}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
