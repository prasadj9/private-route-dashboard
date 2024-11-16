import { LockOutlined } from '@mui/icons-material'
import { Avatar, Box, Button, Container, Paper, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Register = () => {
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <Container maxWidth="xs">
      <Paper elevation={10} sx={{ marginTop: 0, padding: 2 }}>
        <Avatar
          sx={{
            mx: "auto",
            bgcolor: "secondary.main",
            textAlign: "center",
          }}
        >
          <LockOutlined />
        </Avatar>
        <Typography component="h1" variant="h5" sx={{ textAlign: "center" }}>
          Register
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            placeholder="Enter Username"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
            required
            autoFocus
            sx={{ mb: 2 }}
          />
          <TextField
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            required
            type="password"
          />
          
          <Button type="submit" variant="contained" fullWidth sx={{ mt: 1 }}>
            Register
          </Button>
        </Box>
        
      </Paper>
    </Container>
  )
}

export default Register