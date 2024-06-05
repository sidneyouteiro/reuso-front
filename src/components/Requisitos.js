import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';

const Requisitos = () => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Título</TableCell>
            <TableCell>Descrição</TableCell>
            <TableCell>Inputs</TableCell>
            <TableCell>Outputs</TableCell>
            <TableCell>Ações</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>User credential repository</TableCell>
            <TableCell>As developer (...) </TableCell>
            <TableCell>username</TableCell>
            <TableCell>Hashed_password</TableCell>
            <TableCell><Button variant="contained">Code Button</Button></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>User credential repository</TableCell>
            <TableCell>As developer (...) </TableCell>
            <TableCell>username</TableCell>
            <TableCell>Hashed_password</TableCell>
            <TableCell><Button variant="contained">Code Button</Button></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Requisitos;
