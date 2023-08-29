
import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function UserForm({ onFormSubmit }) {
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    email: '',
    contact: '',
    introduction: '',
  });

  const [validationErrors, setValidationErrors] = useState({
    name: '',
    dob: '',
    email: '',
    contact: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    const newValidationErrors = {};

    if (!formData.name) {
      newValidationErrors.name = 'Name is required.';
    } else if (!/^[A-Za-z]+$/.test(formData.name)) {
      newValidationErrors.name = 'Name should contain alphabets only.';
    }

    if (!formData.dob) {
      newValidationErrors.dob = 'Date of Birth is required.';
    } else {
      const currentDate = new Date();
      const dobDate = new Date(formData.dob);
      if (dobDate > currentDate) {
        newValidationErrors.dob = 'Date of Birth cannot be greater than today\'s date.';
      }
    }

    if (!formData.email) {
      newValidationErrors.email = 'Email is required.';
    } else if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/.test(formData.email)) {
      newValidationErrors.email = 'Invalid email format.';
    }

    if (!formData.contact) {
      newValidationErrors.contact = 'Contact is required.';
    } else if (!/^\d{10}$/.test(formData.contact)) {
      newValidationErrors.contact = 'Contact should be 10 digits only.';
    }

    if (Object.keys(newValidationErrors).length === 0) {
      onFormSubmit(formData);
      setFormData({
        name: '',
        dob: '',
        email: '',
        contact: '',
        introduction: '',
      });
      setValidationErrors({});
    } else {
      setValidationErrors(newValidationErrors);
    }
  };

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          User Information
        </Typography>
        <TextField
          name="name"
          label="Name"
          value={formData.name}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
          error={!!validationErrors.name}
          helperText={validationErrors.name}
        />
        <TextField
          name="dob"
          label="Date of Birth"
          type="date"
          value={formData.dob}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          error={!!validationErrors.dob}
          helperText={validationErrors.dob}
        />
        <TextField
          name="email"
          label="Email"
          value={formData.email}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
          error={!!validationErrors.email}
          helperText={validationErrors.email}
        />
        <TextField
          name="contact"
          label="Contact Number"
          value={formData.contact}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
          error={!!validationErrors.contact}
          helperText={validationErrors.contact}
        />
        <TextField
          name="introduction"
          label="Tell me about yourself"
          multiline
          rows={4}
          value={formData.introduction}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </CardContent>
    </Card>
  );
}
