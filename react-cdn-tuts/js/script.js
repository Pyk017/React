const { Container, Box, Typography, SvgIcon, colors } = MaterialUI;

const HomeIcon = (props) => {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
};

const App = () => {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h1" component="h1" gutterBottom>
          Hello, World!
        </Typography>
        <HomeIcon sx={{ color: colors.pink[500] }} fontSize="large" />
      </Box>
    </Container>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
