import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import About from './About';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export default function Home() {
  const [value, setValue] = React.useState('About');

  // Handle tab change
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // Detect screen size for responsiveness
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Check if screen size is 'sm' or below

  return (
    <Box sx={{ width: '100%', height: '75vh' }}>
      {/* Show Tabs for larger screens */}
      {!isMobile ? (
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="secondary"
          aria-label="secondary tabs example"
        >
          <Tab value="About" label="About" />
          <Tab value="Project" label="Project" />
          <Tab value="Contact" label="Contact" />
        </Tabs>
      ) : (
        // Show Breadcrumbs for smaller screens
        <Breadcrumbs aria-label="breadcrumb" sx={{ padding: 1 }}>
          <Link
            color={value === 'About' ? 'text.primary' : 'inherit'}
            underline={value === 'About' ? 'none' : 'hover'}
            onClick={() => setValue('About')}
            sx={{ cursor: 'pointer' }}
          >
            About
          </Link>
          <Link
            color={value === 'Project' ? 'text.primary' : 'inherit'}
            underline={value === 'Project' ? 'none' : 'hover'}
            onClick={() => setValue('Project')}
            sx={{ cursor: 'pointer' }}
          >
            Project
          </Link>
          <Link
            color={value === 'Contact' ? 'text.primary' : 'inherit'}
            underline={value === 'Contact' ? 'none' : 'hover'}
            onClick={() => setValue('Contact')}
            sx={{ cursor: 'pointer' }}
          >
            Contact
          </Link>
        </Breadcrumbs>
      )}

      {/* Render Components based on selected tab */}
      <Box sx={{ padding: 2 }}>
        {value === 'About' && <About />}
        {value === 'Project' && <Typography>Project Content</Typography>}
        {value === 'Contact' && <Typography>Contact Content</Typography>}
      </Box>
    </Box>
  );
}