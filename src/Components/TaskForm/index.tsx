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
      <form onSubmit={handleSubmit}>
        <Grid
          container
          columnSpacing={theme.spacing(0.5)}
          rowSpacing={theme.spacing(5)}
          mt={1}
        >
          <Grid item xl={11} xs={12}>
            <TextField
              name='taskDescription'
              id="nova-tarefa"
              label="Adicione uma nova tarefa"
              variant="outlined"
              fullWidth
              sx={{
                backgroundColor: colors.grey[800],
              }}
            />
          </Grid>
          <Grid item xl={1} xs={12}>
            <Button
              type='submit'
              variant='contained'
              /* onClick={handleCreate} */
              fullWidth
              sx={{
                height: '100%',
              }}
            >Criar<PlusCircle size={32} />
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  )
}