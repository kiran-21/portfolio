import React from 'react';
import { Box, Typography, Button , Chip, Stack} from '@mui/material';
import { motion } from 'framer-motion';
import Grid from '@mui/material/Grid2';
import { useTheme } from '@mui/material/styles';
import Image from '../assets/logo.svg';
import Divider from '@mui/material/Divider';

const Project = () => {
  const theme = useTheme();

  //project contents
  const projects = [
    {
      title: 'Data Visualization',
      description:
        'Toronto Car theft Data Analysis and Visualization.',
      link: 'https://github.com/kiran-21/cartheft-toronto',
      stack:['Python','Pandas','Seaborn','Numpy','Sklearn','JupyterNote'],
      image: Image,
    },
    {
      title: 'Face Mask Detection',
      description:
        'Detection of face mask using DeepLearning',
      link: 'https://github.com/kiran-21/ai-chatbot',
      stack:['Python','Pandas','Seaborn','Numpy','Sklearn','JupyterNote'],
      image: Image,
    },
    {
      title: 'Detection of Bacilli virus using DeepLearning',
      description:
        'Detection of Bacilli',
      link: 'https://github.com/kiran-21/portfolio-site',
      stack:['Python','Pandas','Seaborn','Numpy','Sklearn','JupyterNote'],
      image: Image,
    },
    {
      title: 'React Web Applications',
      description:
        'A MERN stack-based task management system with user authentication and CRUD operations.',
      link: 'https://github.com/kiran-21/task-manager-app',
      stack:['Python','Pandas','Seaborn','Numpy','Sklearn','JupyterNote'],
      image: Image,
    },
  ];

  const sectionVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <Box
      sx={{
        padding: '20px',
        minHeight: '75vh',
        background: theme.palette.primary.dark,
      }}
    >
      <Typography
        variant="h4"
        sx={{
          textAlign: 'center',
          marginTop: '20px',
          color: theme.palette.primary.white,
          fontWeight: 'bold',
        }}
      >
        Case Study and Projects
      </Typography>

      <Box
        sx={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '20px',
        }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
          >
            <Grid container spacing={4} alignItems="center" marginBottom="20px">
              <Grid item xs={12} sm={6}>
                <Box
                  component="img"
                  src={project.image}
                  alt={project.title}
                  sx={{
                    width: '250px',
                    height: '250px',
                    borderRadius: '10px',
                    objectFit: 'cover',
                  }}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 'bold',
                    color: theme.palette.primary.white,
                  }}
                >
                  {project.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    marginTop: '10px',
                    color: theme.palette.primary.white,
                  }}
                >
                  {project.description}
                </Typography>
                {/* Tech Stack Display */}
                <Stack
                  direction="row"
                  spacing={1}
                  flexWrap="wrap"
                  sx={{
                    marginTop: '10px',
                    marginBottom: '10px',
                  }}
                >
                  {project.stack.map((tech, idx) => (
                    <Chip
                      key={idx}
                      label={tech}
                      variant="outlined"
                      sx={{
                        color: theme.palette.primary.white,
                        borderColor: theme.palette.secondary.main,
                      }}
                    />
                  ))}
                </Stack>
                <Button
                  variant="contained"
                  href={project.link}
                  target="_blank"
                  sx={{
                    marginTop: '10px',
                    backgroundColor: theme.palette.secondary.white,
                    '&:hover': {
                      backgroundColor: theme.palette.primary.main,
                    },
                  }}
                >
                  View on GitHub
                </Button>
              </Grid>
            </Grid>
            {/* Divider */}
            {index < projects.length - 1 && (
              <Divider
                sx={{
                  marginY: '20px',
                  borderColor: theme.palette.secondary.main,
                  opacity: 0.6,
                }}
              />
            )}
          </motion.div>
        ))}
      </Box>
    </Box>
  );
};

export default Project;
