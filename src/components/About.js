import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Grid from "@mui/material/Grid2";
import { motion } from 'framer-motion';
import { useTheme } from '@mui/material/styles'; 
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

// Animation Variants
const sectionVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

export default function About() {
  const theme = useTheme(); 

  return (
    <Box
      sx={{
        width: '100%',
        paddingX: { xs: '10px', sm: '20px' },
        fontFamily: theme.typography.fontFamily,
      }}
    >
      {/* Header */}
      <Grid>
      <Typography
        sx={{
          textAlign: 'center',
          fontWeight: 'light',
          marginLeft:'80px',
          color: theme.palette.primary.white,
          fontSize: { xs: '.5rem', sm: '1.5rem'},
        }}
      >
        Hi I am
        
      </Typography>
      <Typography
        sx={{
          textAlign: 'center',
          // marginTop: '40px',
          // marginLeft:'70px',
          marginBottom: '20px',
          fontWeight: 'bold',
          color: theme.palette.primary.white,
          fontSize: { xs: '2.5rem', sm: '4rem'},
        }}
      >
        Kiran S Radhakrishnan
      </Typography>
      
      </Grid>
      

      {/* Summary Section */}
      <motion.div variants={sectionVariants} initial="hidden" animate="visible">
        <Box
          sx={{
            marginBottom: '30px',
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between', 
            gap: '20px', 
            flexDirection:{ xs: 'column', sm: 'row' }
          }}
        >
          {/* Right Side: Summary Content */}
          <Box sx={{ flex: '1' }}>
            {' '}
            {/* Occupies remaining space */}
            <Typography
              variant="body1"
              sx={{
                textAlign: 'center',
                // marginLeft:'70px',
                lineHeight: 1.8,
                font: theme.typography.h5,
                color:theme.palette.primary.main
              }}
            >
              Machine Learning Engineer | AI Enthusiast | Software Engineer | MERN Stack
            </Typography>
          </Box>
        </Box>
      </motion.div>

      <Divider />

      {/* About Me and Skills Section */}
      <motion.div variants={sectionVariants} initial="hidden" animate="visible">
        <Box
          sx={{
            marginY: '30px',
            display: 'flex',
            alignItems: 'flex-start',
            flexDirection: { xs: 'column', sm: 'row' },
            gap: '20px',
          }}
        >
          {/* About Me */}
          <Box sx={{ flex: '1' }}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 'bold',
                marginBottom: '10px',
                textAlign: 'center',
                color: theme.palette.primary.main,
              }}
            >
              ABOUT ME
            </Typography>
            <Typography
              variant="h5"
              sx={{ textAlign: 'justify', lineHeight: 1.8, padding: '30px', color:theme.palette.primary.white }}
            >
              I am a passionate software engineer with expertise in AI, Machine 
              Learning, and full-stack development. I have worked as a web
              developer and am now focusing on Large Language Models (LLMs),
              data engineering, and related fields. I aim to deliver scalable
              solutions and leverage cutting-edge technologies to drive
              innovation and growth.
            </Typography>
          </Box>

          <Box sx={{ flex: '1' }}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 'bold',
                marginBottom: '10px',
                textAlign: 'center',
                color: theme.palette.primary.main,
              }}
            >
              SKILLS
            </Typography>
            <Stack
              direction="row"
              spacing={1}
              flexWrap="wrap"
              justifyContent="center" 
              padding="20px"
              rowGap="15px" 
            >
              {[
                'HTML5',
                'CSS3',
                'JavaScript',
                'ReactJS',
                'MERN Stack',
                'Data Analysis',
                'Data Visualization',
                'GIT',
                'GitHub',
                'Python',
                'Machine Learning',
                'Deep Learning',
                "LLM's",
              ].map((skill) => (
                <Chip
                  key={skill}
                  label={skill}
                  variant="outlined"
                  sx={{
                    padding: '10px 15px',
                    fontWeight: 'bold',
                    fontSize: '0.875rem',
                    borderRadius: '10px',
                    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
                    minWidth: '120px',
                    textAlign: 'center',
                    color:theme.palette.primary.white,
                    '&:hover': {
                      backgroundColor: theme.palette.primary.main,
                      color: theme.palette.primary.dark,
                    }
                  }}
                />
              ))}
            </Stack>
          </Box>
        </Box>
      </motion.div>

      <Divider />

      {/* Professional and Academic Journey */}
      <motion.div variants={sectionVariants} initial="hidden" animate="visible">
        <Box
          sx={{
            marginY: '30px',
            alignItems: 'flex-start',
            color:theme.palette.primary.white
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: 'bold',
              marginBottom: '10px',
              textAlign: 'center',
              color: theme.palette.primary.main,
            }}
          >
            MY JOURNEY
          </Typography>

          <Timeline position="alternate">
            {/* Timeline Items */}
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot
                  sx={{ background: theme.palette.primary.main }}
                />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  Web Developement
                </Typography>
                <Typography variant="body2">
                  Conestoga College, Kitchener, Canada
                </Typography>
                <Typography variant="body2" color='#ff9800'>2023 - 2024</Typography>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot
                  sx={{ background: theme.palette.primary.main }}
                />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  Web Developer
                </Typography>
                <Typography variant="body2">
                  Tecforz Innovation kochi, Kerala, India
                </Typography>
                <Typography variant="body2" color='#ff9800'>2022 - 2023</Typography>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot
                  sx={{ background: theme.palette.primary.main }}
                />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  Master of Computer Applications
                </Typography>
                <Typography variant="body2">
                  Cochin University of Science and Technology, Kochi, India
                </Typography>
                <Typography variant="body2" color='#ff9800'>2019 - 2022</Typography>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot
                  sx={{ background: theme.palette.primary.main }}
                />
              </TimelineSeparator>
              <TimelineContent>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  Bachelor in Physics
                </Typography>
                <Typography variant="body2">
                  St Berchmans College, Changanacherry, India
                </Typography>
                <Typography variant="body2" color='#ff9800'>2015 - 2019</Typography>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </Box>
      </motion.div>
    </Box>
  );
}
