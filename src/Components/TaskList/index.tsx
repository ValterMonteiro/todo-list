import { Grid, Box, Typography, Chip, useTheme, Stack, Container, Badge } from "@mui/material";

import { Task } from "../../types";
import { TaskCard } from "../TaskCard";
type TaskListProps = {
  tasks: Task[],
}
export function TaskList() {
  const theme = useTheme();
  return (
    <Container
      sx={{
        paddingTop: theme.spacing(10),
      }}>
      <Grid container spacing={theme.spacing(1)}
        sx={{
          marginTop: theme.spacing(2),
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Grid item>
          <Typography
            variant='caption'
            component='h2'
          >
            Tarefas criadas <Badge color='primary' badgeContent={0} showZero />
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            variant='caption'
            component='h2'
          >
            Concluídas <Badge color='primary' badgeContent={0} showZero />
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={theme.spacing(1)}>
        <Grid item
          xl={12} xs={12}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}>

        </Grid>
      </Grid>
    </Container>
  )
}