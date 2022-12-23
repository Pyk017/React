import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  container: {
    padding: "16px 0",
  },

  icon: {
    marginRight: "10px",
  },

  buttons: {
    marginTop: "10px",
  },

  cardGrid: {
    padding: "20px 0",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
  cardMedia: {
    paddingTop: "56.25%", //? 16:9 ratio
  },
  cardContent: {
    flexGrow: 1,
  },

  box: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "1.5rem",
  },

  footer: {
    background: "#d7d7d7",
    padding: "10px 0",
  },
});

export default useStyles;
