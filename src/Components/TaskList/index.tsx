import { Grid, Box, Typography, Chip, useTheme, Stack } from "@mui/material";

import { Task } from "../../types";
import { TaskCard } from "../TaskCard";
type TaskListProps = {
  tasks: Task[],
}
export function TaskList({ tasks }: TaskListProps) {
  const theme = useTheme();
  return (
    <>
      <Grid container
        columnSpacing={theme.spacing(1)}
        rowSpacing={theme.spacing(4)}
        mt={1}
        sx={{
          marginTop: theme.spacing(13),
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Grid item xl={12} display='flex' justifyContent='space-between'>
          <Box display='flex' alignItems='center' gap={theme.spacing(1)}>
            <Typography>Tarefas criadas</Typography>
            <Chip size='small' label={5} />
          </Box>
        </Grid>
        <Grid item xl={12} display='flex' justifyContent='space-between'>
          <Box display='flex' alignItems='center' gap={theme.spacing(1)}>
            <Typography>Concluídas </Typography>
            <Chip size='small' label={'2 de 5'} />
          </Box>
        </Grid>
      </Grid >
      <Grid item xl={12}>
        <Stack gap={theme.spacing(1)}>
          {tasks?.map((task: Task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </Stack>
      </Grid>
    </>
  )
}