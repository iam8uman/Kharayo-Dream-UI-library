import React from 'react';

interface ToggleProps {
  darkMode: boolean;
  onToggle: () => void;
}

export const Toggle: React.FC<ToggleProps> = ({ darkMode, onToggle }) => (
  <div className="mt-4 flex items-center">
    <label htmlFor="toggle-dark-mode" className="mr-2">Dark Mode</label>
    <input
      id="toggle-dark-mode"
      type="checkbox"
      checked={darkMode}
      onChange={onToggle}
      className="toggle"
    />
  </div>
);
