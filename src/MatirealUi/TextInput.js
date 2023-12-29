
import { Stack, TextField, Typography } from '@mui/material';


function TextInput() {

  return (
    <div >

      <Stack spacing={3} >
        <Typography>
          input text
        </Typography>
        <Stack spacing={3} direction='row' >
          <TextField label='ITAY The King' />
        </Stack>

        <Stack spacing={3} direction='row' >
          <TextField label='primery' color='warning' />
          <TextField label='name' color='secondary' required />
          <TextField label='password' color='error' type='password' required helperText='dont share the password' />
          <TextField
      label="Read only"
      color="error"
      InputProps={{
        readOnly: true,
      }}
      value="You cannot right here"
    />

        </Stack>


      </Stack>

    </div>
  );
}

export default TextInput;
