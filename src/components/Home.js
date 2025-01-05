import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import About from './About';
import Project from './Project';
import Header from './Header';

export default function Home() {
  const theme = useTheme();
  const [selectedTab, setSelectedTab] = useState('About'); // Default Tab: About

  const handleNavigation = (tab) => {
    setSelectedTab(tab); // Set the selected tab dynamically
  };

  return (
    <Box
      sx={{
        width: '100%',
        paddingX: '0px',
        margin: '0',
        boxSizing: 'border-box',
        background: theme.palette.primary.dark,
      }}
    >
      {/* Header Component */}
      <Header onNavigate={handleNavigation} />

      {/* Render Sections Based on Selected Tab */}
      <Box sx={{ padding: 2, margin: '0' }}>
        {selectedTab === 'About' && <About />}
        {selectedTab === 'Project' && <Project />}
      </Box>
    </Box>
  );
}
