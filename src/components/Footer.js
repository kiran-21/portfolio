import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { FaLinkedin, FaInstagram, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <Container
      component="footer"
      maxWidth={false}
      sx={{
        backgroundColor: "#343a40", // Dark gray
        color: "white", // White text
        padding: "20px 0",
        textAlign: "center",
        marginTop: "auto", // Push footer to bottom if needed
      }}
    >
      <Grid container justifyContent="center" spacing={2}>
        {/* Social Media Links */}
        <Grid item>
          <IconButton
            href="https://www.linkedin.com/in/your-linkedin"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: "white", "&:hover": { color: "#0A66C2" } }} 
          >
            <FaLinkedin size={24} />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton
            href="https://www.instagram.com/your-instagram"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: "white", "&:hover": { color: "#E4405F" } }} 
          >
            <FaInstagram size={24} />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton
            href="https://github.com/your-github"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: "white", "&:hover": { color: "#333" } }} 
          >
            <FaGithub size={24} />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton
            href="mailto:your-email@example.com"
            sx={{ color: "white", "&:hover": { color: "#D44638" } }}
          >
            <FaEnvelope size={24} />
          </IconButton>
        </Grid>
      </Grid>

      {/* Footer Text */}
      <Typography variant="body2" sx={{ marginTop: 2 }}>
        © {new Date().getFullYear()} Your Name. All rights reserved.
      </Typography>
    </Container>
  );
}