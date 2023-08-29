import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard({ userData }) {
    return (
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            User Information
          </Typography>
          <Typography>Name: {userData.name}</Typography>
          <Typography>Date of Birth: {userData.dob}</Typography>
          <Typography>Email: {userData.email}</Typography>
          <Typography>Contact: {userData.contact}</Typography>
          <Typography>Introduction: {userData.introduction}</Typography>
        </CardContent>
      </Card>
    );
  }
  