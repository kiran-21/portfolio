import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { useTheme } from '@mui/material/styles';

export default function Footer() {
  const theme = useTheme();
  return (
    <Container
      component="footer"
      maxWidth={false}
      sx={{
        backgroundColor: theme.palette.primary.white, // Dark gray
        color: theme.palette.primary.dark, // White text
        padding: "10px 0",
        textAlign: "center",
        marginTop: "auto", // Push footer to bottom if needed
      }}
    >
      <Grid container justifyContent="center" spacing={2}>
        {/* Social Media Links */}
        <Grid item>
          <IconButton
            href="https://www.linkedin.com/in/kiran-s-r/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: theme.palette.primary.dark, "&:hover": { color: "#0A66C2" } }} 
          >
            <FaLinkedin size={24} />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton
            href="https://github.com/kiran-21"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: theme.palette.primary.dark, "&:hover": { color: "#333" } }} 
          >
            <FaGithub size={24} />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton
            href="mailto:kiranksr.sr@gmail.com"
            sx={{ color: theme.palette.primary.dark, "&:hover": { color: "#D44638" } }}
          >
            <FaEnvelope size={24} />
          </IconButton>
        </Grid>
      </Grid>

      {/* Footer Text */}
      <Typography variant="body2" sx={{ marginTop: 2, color:theme.palette.secondary.main }}>
        © {new Date().getFullYear()} Kiran S Radhakrishnan. All rights reserved.
      </Typography>
    </Container>
  );
}