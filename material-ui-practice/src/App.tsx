import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import CameraAltIcon from "@mui/icons-material/CameraAlt";

import useStyles from "./styles";

function App() {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <CameraAltIcon className={classes.icon} />
          <Typography variant="h6">Photo Album</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.container}>
          <Container maxWidth="sm">
            <Typography
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Photo Album
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque
              eum quo, ratione doloribus beatae officiis atque architecto omnis
              magnam ipsam ea molestias autem dicta totam assumenda quaerat quas
              odit iusto.
            </Typography>
            <div className={classes.buttons}>
              <Grid container spacing="2" justifyContent="center" gap={1}>
                <Grid item>
                  <Button variant="contained" color="primary">
                    See My Photos
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Secondary Actions
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>

        <Container className={classes.cardGrid} maxWidth="lg">
          <Grid container gap={2} justifyContent="center">
            {Array(9)
              .fill(0)
              .map((_, idx) => (
                <Grid key={idx} item xs={12} sm={6} md={4} lg={3}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image="https://source.unsplash.com/random"
                      title="random image"
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography variant="h5" gutterBottom>
                        This is a media card. You can use this section to
                        declare the content.
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small" color="primary">
                        View
                      </Button>
                      <Button size="small" color="primary">
                        Edit
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
          </Grid>
        </Container>
      </main>
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Copyright @ Prakhar Kumar Kashyap
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary">
          Something here to give the footer a purpose!
        </Typography>
      </footer>
    </>
  );
}

export default App;
