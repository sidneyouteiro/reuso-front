import React, { useState } from 'react';
import { TextField, Button, Grid, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const Formulario = () => {
  const [inputs, setInputs] = useState([{ name: '', type: '' }]);
  const [outputs, setOutputs] = useState([{ name: '', type: '' }]);

  const handleAddInput = () => {
    setInputs([...inputs, { name: '', type: '' }]);
  };

  const handleRemoveInput = (index) => {
    const values = [...inputs];
    values.splice(index, 1);
    setInputs(values);
  };

  const handleInputChange = (index, event) => {
    const values = [...inputs];
    values[index][event.target.name] = event.target.value;
    setInputs(values);
  };

  const handleAddOutput = () => {
    setOutputs([...outputs, { name: '', type: '' }]);
  };

  const handleRemoveOutput = (index) => {
    const values = [...outputs];
    values.splice(index, 1);
    setOutputs(values);
  };

  const handleOutputChange = (index, event) => {
    const values = [...outputs];
    values[index][event.target.name] = event.target.value;
    setOutputs(values);
  };

  return (
    <form>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField fullWidth label="Título" variant="outlined" />
        </Grid>
        <Grid item xs={12}>
          <TextField fullWidth label="Descrição" variant="outlined" />
        </Grid>
        {inputs.map((input, index) => (
          <React.Fragment key={index}>
            <Grid item xs={5}>
              <TextField
                fullWidth
                label="Nome do Input"
                variant="outlined"
                name="name"
                value={input.name}
                onChange={(event) => handleInputChange(index, event)}
              />
            </Grid>
            <Grid item xs={5}>
              <TextField
                fullWidth
                label="Tipo do Input"
                variant="outlined"
                name="type"
                value={input.type}
                onChange={(event) => handleInputChange(index, event)}
              />
            </Grid>
            <Grid item xs={2}>
              <IconButton
                color="secondary"
                onClick={() => handleRemoveInput(index)}
                disabled={inputs.length === 1}
              >
                <RemoveIcon />
              </IconButton>
            </Grid>
          </React.Fragment>
        ))}
        <Grid item xs={12}>
          <IconButton color="primary" onClick={handleAddInput}>
            <AddIcon />
          </IconButton>
        </Grid>
        {outputs.map((output, index) => (
          <React.Fragment key={index}>
            <Grid item xs={5}>
              <TextField
                fullWidth
                label="Nome do Output"
                variant="outlined"
                name="name"
                value={output.name}
                onChange={(event) => handleOutputChange(index, event)}
              />
            </Grid>
            <Grid item xs={5}>
              <TextField
                fullWidth
                label="Tipo do Output"
                variant="outlined"
                name="type"
                value={output.type}
                onChange={(event) => handleOutputChange(index, event)}
              />
            </Grid>
            <Grid item xs={2}>
              <IconButton
                color="secondary"
                onClick={() => handleRemoveOutput(index)}
                disabled={outputs.length === 1}
              >
                <RemoveIcon />
              </IconButton>
            </Grid>
          </React.Fragment>
        ))}
        <Grid item xs={12}>
          <IconButton color="primary" onClick={handleAddOutput}>
            <AddIcon />
          </IconButton>
        </Grid>
        <Grid item xs={6}>
          <TextField fullWidth label="Nome do Test Case" variant="outlined" />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary">Adicionar</Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default Formulario;
