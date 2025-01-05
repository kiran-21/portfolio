import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid2';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import profileImage from '../assets/kiran.png';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Header = () => {
  const theme = useTheme();
  return (
    <>
      <Grid
        container
        alignItems="center"
        justifyContent="space-between"
        sx={{
          background: theme.palette.primary.white,
          color: theme.palette.primary.dark,
          padding: '20px',
        }}
      >
        {/* Profile Image on the Left */}
        <Grid item display="flex" alignItems="center">
          <Avatar
            alt="Kiran S Radhakrishnan"
            src={profileImage}
            sx={{ width: 50, height: 50, marginRight: 3 }}
          />
          <Typography
            sx={{
              fontSize: theme.typography.h3,
              fontFamily: theme.typography.fontFamily,
              color:theme.palette.secondary.main
            }}
          >
            Kiran S Radhakrishnan
          </Typography>
        </Grid>

        {/* Social Media Links on the Right */}
        <Grid item>
          <IconButton
            href="https://www.linkedin.com/in/kiran-s-r/"  
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: theme.palette.primary.dark,
              '&:hover': { color: '#0A66C2' },
            }}
          >
            <FaLinkedin size={24} />
          </IconButton>
    
          <IconButton
            href="https://github.com/kiran-21"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: theme.palette.primary.dark,
              '&:hover': { color: '#333' },
            }}
          >
            <FaGithub size={24} />
          </IconButton>
          <IconButton
            href="mailto:kiranksr.sr@gmail.com"
            sx={{
              color: theme.palette.primary.dark,
              '&:hover': { color: '#D44638' },
            }}
          >
            <FaEnvelope size={24} />
          </IconButton>
        </Grid>
      </Grid>
    </>
  );
};
export default Header;
