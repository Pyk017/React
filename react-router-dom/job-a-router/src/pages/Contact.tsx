import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

import { useState } from "react";
import { validateEmail } from "../utils/Utilities";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState({
    errorOccured: false,
    helperText: "Please enter your email",
  });
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    if (!validateEmail(email)) {
      setEmailError({
        errorOccured: true,
        helperText: "Incorrect Email entry",
      });
      setEmail("");
      setMessage("");
      return;
    }

    alert(`Email:- ${email} requested. \nMessage:- ${message}`);
    setEmail("");
    setMessage("");
    setEmailError({
      errorOccured: false,
      helperText: "Please enter your email",
    });
  };

  return (
    <>
      <Typography variant="h3">Contact Form</Typography>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "50ch" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <TextField
          id="email"
          label="Email"
          variant="standard"
          required
          helperText={emailError.helperText}
          value={email}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setEmail(event.target.value);
          }}
          error={emailError.errorOccured}
        />
        <TextField
          id="your-message"
          label="Your Message"
          multiline
          maxRows={4}
          variant="standard"
          required
          value={message}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setMessage(event.target.value);
          }}
        />
        <Button
          variant="contained"
          sx={{ my: 2, width: 100 }}
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Box>
    </>
  );
};

export default Contact;
