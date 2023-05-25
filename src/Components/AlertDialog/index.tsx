import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

export function AlertDialog() {
  return (
    <>
      <Dialog open>
        <DialogTitle>Confirmar Exclusão</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Deseja realmente excluir?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button>SIM</Button>
          <Button>Cancelar</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}