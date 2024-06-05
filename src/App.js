import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Requisitos from './components/Requisitos';
import Formulario from './components/Formulario';
import { Container, Grid, Button, Modal, Box } from '@mui/material';


const App = () => {

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <Sidebar />
          </Grid>
          <Grid item xs={9}>
            <Button
              variant="contained"
              color="success"
              onClick={handleOpen}
              style={{ marginBottom: '20px' }}
            >
              Adicionar Requisito
            </Button>
            <Requisitos />
          </Grid>
        </Grid>
      </Container>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
          }}
        >
          <Formulario />
        </Box>
      </Modal>
    </div>
  );
}

export default App;
