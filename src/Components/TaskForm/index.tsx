import { Button, Container, Grid, TextField, colors, useTheme } from "@mui/material";
import { PlusCircle } from "@phosphor-icons/react";
import { FormEvent } from "react";
import { Task } from "../../types";
import { save } from "../../service/api";
type TaskFormProps = {
  setTasks: Function
}
export function TaskForm({ setTasks }: TaskFormProps) {
  const theme = useTheme();

  //fazer um handleSubmit para adicionar novas task
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const inputTask: HTMLInputElement = event.currentTarget.taskDescription;
    const description: string = inputTask.value;
    const newTask: Task = {
      description,
      done: false,
    };
    const taskSaved: Task = await save(newTask);
    setTasks((oldTask: Task[]) => { return [...oldTask, taskSaved] });
    inputTask.value = '';
    inputTask.focus();
  }

  return (
    <>
      <form>
        <Container
          sx={{
            position: 'relative',
          }}>
          <Grid
            container
            spacing={theme.spacing(2)}
            sx={{
              position: 'absolute',
              top: '-26px',
            }}
          >
            <Grid item xl={12} sm={10}>
              <TextField
                name='Task'
                id="nova-tarefa"
                label="Adicione uma nova tarefa"
                variant="outlined"
                value={novaTarefa}
                onChange={handleClick}
                fullWidth
                sx={{
                  backgroundColor: colors.grey[800],
                }}
              />
            </Grid>
            <Grid item xl={12} sm={2}>
              <Button
                variant='contained'
                onClick={handleCreate}
                fullWidth
                sx={{
                  height: '100%',
                }}
              >Criar<PlusCircle size={32} />
              </Button>
            </Grid>
          </Grid>
        </Container>
      </form>
    </>
  )
}