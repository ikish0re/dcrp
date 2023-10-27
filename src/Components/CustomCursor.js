import React, { useState, useEffect } from 'react';
import logo from "../assets/logo.png";
import '../css/CustomCursor.css'

export const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHoveringButton, setIsHoveringButton] = useState(false);
  const [isHoveringNavLink, setIsHoveringNavLink] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', updateMousePosition);

    return () => {
      document.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  const handleButtonHover = () => {
    setIsHoveringButton(true);
  };

  const handleButtonLeave = () => {
    setIsHoveringButton(false);
  };

  const handleNavLinkHover = () => {
    setIsHoveringNavLink(true);
  };

  const handleNavLinkLeave = () => {
    setIsHoveringNavLink(false);
  };

  const cursorImage = isHoveringButton || isHoveringNavLink
    ? 'path_to_your_default_cursor_image.png'
    : 'path_to_your_custom_cursor_image.png';

  return (
    <div
      className="custom-cursor"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      <img src={logo} alt="Custom Cursor" />
    </div>
  );
};
