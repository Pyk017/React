import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

type SnackBarProps = {
  open: boolean;
  setOpen: React.Dispatch<boolean>;
  flag: boolean;
  description: string;
};

const SnackBar = ({ open, setOpen, flag, description }: SnackBarProps) => {
  const handleClose = () => setOpen(false);

  return (
    <>
      {flag ? (
        <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
          <MuiAlert
            elevation={6}
            variant="filled"
            onClose={handleClose}
            severity="success"
          >
            {description}
          </MuiAlert>
        </Snackbar>
      ) : (
        <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
          <MuiAlert
            elevation={6}
            variant="filled"
            onClose={handleClose}
            severity="error"
          >
            {description}
          </MuiAlert>
        </Snackbar>
      )}
    </>
  );
};

export default SnackBar;
