// src/components/Navbar.js
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Handle window resize to set isMobile for breakpoint md (~768px)
  useEffect(() => {
    const checkMobile = () => {
      if (window.innerWidth < 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
        setIsOpen(false); // close mobile menu if switching to desktop
      }
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Inline styles
  const navStyle = {
    backgroundColor: '#ffffff',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    position: 'sticky',
    top: 0,
    zIndex: 50,
    width: '100%',
  };
  // Container similar to max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
  const containerStyle = {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 16px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '64px',
    boxSizing: 'border-box',
  };
  const logoStyle = {
    display: 'flex',
    alignItems: 'center',
    flexShrink: 0,
    textDecoration: 'none',
  };
  const logoBoxStyle = {
    backgroundImage: 'linear-gradient(to right, #3b82f6, #8b5cf6)', // blue-500 to purple-600
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: '1.25rem', // text-xl
    padding: '8px 12px',
    borderRadius: '0.5rem', // rounded-lg
    display: 'flex',
    alignItems: 'center',
  };
  const logoSpanStyle = {
    color: '#facc15', // yellow-300
    marginLeft: '4px',
  };
  const desktopMenuStyle = {
    display: isMobile ? 'none' : 'flex',
    marginLeft: '2.5rem', // ml-10
    gap: '2rem', // space-x-8
    alignItems: 'baseline',
  };
  const linkStyle = {
    color: '#374151', // gray-700
    textDecoration: 'none',
    padding: '8px 12px',
    fontSize: '0.875rem', // text-sm
    fontWeight: 500,
    transition: 'color 0.3s',
  };
 
  const mobileButtonStyle = {
    display: isMobile ? 'block' : 'none',
    background: 'none',
    border: 'none',
    padding: 0,
    cursor: 'pointer',
    color: '#374151',
  };
  const svgStyle = {
    width: '24px', // h-6 w-6
    height: '24px',
  };
  const mobileMenuContainerStyle = {
    display: isOpen && isMobile ? 'block' : 'none',
    backgroundColor: '#f9fafb', // bg-gray-50
    padding: '8px 12px',
    boxSizing: 'border-box',
  };
  const mobileLinkStyle = {
    display: 'block',
    color: '#374151',
    textDecoration: 'none',
    padding: '8px 12px',
    fontSize: '1rem', // text-base
    fontWeight: 500,
  };

  // Hover handlers to change color inline
  const hoverProps = {
    onMouseEnter: e => e.currentTarget.style.color = '#2563eb', // blue-600
    onMouseLeave: e => e.currentTarget.style.color = '#374151',
  };

  return (
    <nav style={navStyle}>
      <div style={containerStyle}>
        {/* Logo */}
        <Link href="/" style={logoStyle}>
          <div style={logoBoxStyle}>
            IELTS
            <span style={logoSpanStyle}>Calc</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div style={desktopMenuStyle}>
          <Link href="/" style={linkStyle} {...hoverProps}>Home</Link>
          
          <Link href="/about" style={linkStyle} {...hoverProps}>About</Link>
          <Link href="/contact" style={linkStyle} {...hoverProps}>Contact</Link>
          <Link href="/FAQ" style={linkStyle} {...hoverProps}>FAQ</Link>
          <Link href="/HowItWorks" style={linkStyle} {...hoverProps}>HowItWorks</Link>
        </div>

        {/* Mobile menu button */}
        <div>
          <button
            onClick={() => setIsOpen(prev => !prev)}
            style={mobileButtonStyle}
            {...hoverProps}
          >
            <svg style={svgStyle} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div style={mobileMenuContainerStyle}>
        {isOpen && isMobile && (
          <>
            <Link href="/" style={mobileLinkStyle} {...hoverProps}>Home</Link>
            
            <Link href="/about" style={mobileLinkStyle} {...hoverProps}>About</Link>
            <Link href="/contact" style={mobileLinkStyle} {...hoverProps}>Contact</Link>
            <Link href="/FAQ" style={linkStyle} {...hoverProps}>FAQ</Link>
            <Link href="/HowItWorks" style={mobileLinkStyle} {...hoverProps}>HowItWorks</Link>
          </>
        )}
      </div>
    </nav>
  );
}
