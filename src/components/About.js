import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
// import Grid from '@mui/material/Grid2';
import { motion } from 'framer-motion';
import { useTheme } from '@mui/material/styles'; // Import useTheme to access theme dynamically

// Animation Variants
const sectionVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

export default function About() {
  const theme = useTheme(); // Access Material-UI theme

  return (
    <Box
      sx={{
        width: '100%',
        paddingX: { xs: '10px', sm: '20px' },
        fontFamily: theme.typography.fontFamily,
      }}
    >
      {/* Header */}
      <Typography
        variant="h3"
        sx={{
          textAlign: 'center',
          marginBottom: '20px',
          fontWeight: 'bold',
          color: theme.palette.primary.secondary,
        }}
      >
        About Me
      </Typography>

      {/* Summary Section */}
      <motion.div variants={sectionVariants} initial="hidden" animate="visible">
        <Box
          sx={{
            marginBottom: '30px',
            display: 'flex', // Enable flexbox
            alignItems: 'center', // Vertically align content
            justifyContent: 'space-between', // Space between heading and content
            gap: '20px', // Add gap between heading and content
          }}
        >
          {/* Left Side: Summary Title */}
          <Box sx={{ flex: '0 0 30%' }}>
            {' '}
            {/* Occupies 30% width */}
            <Typography
              variant="h5"
              sx={{
                fontWeight: 'medium',
                color: theme.palette.secondary.main,
                font:theme.typography.h1 // Use secondary color
              }}
            >
              Summary
            </Typography>
          </Box>

          {/* Right Side: Summary Content */}
          <Box sx={{ flex: '1' }}>
            {' '}
            {/* Occupies remaining space */}
            <Typography
              variant="body1"
              sx={{ textAlign: 'justify', lineHeight: 1.8, font:theme.typography.h4 }}
            >
              I am a passionate and detail-oriented web developer with expertise
              in React.js and modern JavaScript frameworks. I have hands-on
              experience in designing and developing scalable web applications,
              coupled with strong problem-solving skills and a commitment to
              learning and growth. I aim to deliver innovative solutions and
              provide exceptional user experiences.
            </Typography>
          </Box>
        </Box>
      </motion.div>

      <Divider />

      {/* Education Section */}
      <motion.div variants={sectionVariants} initial="hidden" animate="visible">
        <Box
          sx={{
            marginY: '30px',
            display: 'flex', // Flexbox layout
            alignItems: 'flex-start', // Align content at the top
            gap: '20px', // Space between columns
          }}
        >
          {/* Left Side: Heading */}
          <Box sx={{ flex: '0 0 30%' }}>
            {' '}
            {/* Fixed 30% width */}
            <Typography
              variant="h5"
              sx={{
                fontWeight: 'medium',
                marginBottom: '10px',
                color: theme.palette.secondary.main,
                font:theme.typography.h1
              }}
            >
              Education
            </Typography>
          </Box>

          {/* Right Side: Education Details */}
          <Box sx={{ flex: '1' }}>
            {' '}
            {/* Remaining space */}
            <Box sx={{ marginBottom: '15px' }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold',  font:theme.typography.h4 }}>
                Web Development
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: theme.palette.text.secondary }}
              >
               Conestoga College - Kitchener Canada | 2015 -2019
              </Typography>
            </Box>
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 'bold',  font:theme.typography.h4 }}>
                Master of Computer Applications
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: theme.palette.text.secondary }}
              >
                Cochin University Of science and Technology | 2019 -2022
              </Typography>
            </Box>
            <Box sx={{ marginBottom: '15px' }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold',  font:theme.typography.h4 }}>
                Bachelor in Phsyics
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: theme.palette.text.secondary }}
              >
               St Berchmans College - Kerala India | 2015 -2019
              </Typography>
            </Box>
            
          </Box>
        </Box>
      </motion.div>

      <Divider />

      {/* Work Experience Section */}
      <motion.div variants={sectionVariants} initial="hidden" animate="visible">
        <Box
          sx={{
            marginY: '30px',
            display: 'flex', // Flexbox layout
            alignItems: 'flex-start', // Align content at the top
            gap: '20px', // Space between columns
          }}
        >
          {/* Left Side: Heading */}
          <Box sx={{ flex: '0 0 30%' }}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 'medium',
                marginBottom: '10px',
                color: theme.palette.secondary.main,
                font:theme.typography.h1
              }}
            >
              Work Experience
            </Typography>
          </Box>

          {/* Right Side: Work Experience Details */}
          <Box sx={{ flex: '1' }}>
            {/* First Job */}
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 'bold',  font:theme.typography.h4 }}>
                Web Developer Intern
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: theme.palette.text.secondary }}
              >
                Alcor Media | Jan 2024 - Present
              </Typography>
              <Typography
                variant="body1"
                sx={{ textAlign: 'justify', marginTop: '5px' , font:theme.typography.h4 }}
              >
                Developed responsive web pages and e-commerce platforms using
                React.js, Material-UI, and REST APIs. Focused on user interface
                optimization and integrated authentication systems for seamless
                user experiences.
              </Typography>
            </Box>
          </Box>
        </Box>
      </motion.div>
    </Box>
  );
}
