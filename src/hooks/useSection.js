import { useState } from 'react';

export const useSection = () => {
  const [section, setSection] = useState('Destacados');
  return {
    section,
    setSection,
  };
};
