import React from 'react';
import '../styles/components/Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {currentYear} My Website. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
