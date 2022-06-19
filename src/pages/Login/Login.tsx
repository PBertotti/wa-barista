import {
  Grid,
  Tabs,
  Tab,
  TextField,
  InputAdornment,
  IconButton,
  Checkbox,
  FormControlLabel,
  FormControl,
  Button,
  Typography,
  Link,
} from "@mui/material";
import { useState, SyntheticEvent } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import loginRender from "@/assets/imgs/login-render.svg";

function Login() {
  const [formType, setFormType] = useState(0);

  const changeFormType = (event: SyntheticEvent, type: number) => {
    setFormType(type);
  };

  return (
    <Grid container spacing={2} alignItems="center" justifyContent="center">
      <Grid item md={3} />
      <Grid item md={3} style={{ marginTop: "6%", minHeight: "480px" }}>
        <div>
          <Tabs
            value={formType}
            onChange={changeFormType}
            textColor="secondary"
            variant="fullWidth"
          >
            <Tab label="Login"></Tab>
            <Tab label="Registro"></Tab>
          </Tabs>
          <Form type={formType} />
        </div>
      </Grid>
      <Grid item md={3} style={{ marginTop: "6%" }}>
        <img src={loginRender} style={{ width: "100%", height: "100%" }} />
      </Grid>
      <Grid item md={3} />
    </Grid>
  );
}

const Form = ({ type }: number) => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    password: "",
    saveSession: true,
  });
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  const handleCheckboxToggle = () => {
    const newFormState = {
      ...formState,
      saveSession: !formState.saveSession,
    };

    setFormState(newFormState);
  };

  return (
    <div>
      {type === 1 && (
        <TextField
          type="text"
          label="Nome"
          color="secondary"
          fullWidth
          value={formState.email}
          style={{ marginTop: "1rem" }}
        />
      )}

      <TextField
        type="email"
        label="E-mail"
        color="secondary"
        fullWidth
        value={formState.email}
        style={{ marginTop: "1rem" }}
      />

      <TextField
        type={showPassword ? "text" : "password"}
        label="Senha"
        color="secondary"
        style={{ marginTop: "1rem" }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handlePasswordToggle}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
        fullWidth
      />

      <FormControl>
        <FormControlLabel
          control={<Checkbox checked={formState.saveSession} />}
          label="Mantenha-me conetado."
          onMouseDown={handleCheckboxToggle}
        />
      </FormControl>

      <Button
        fullWidth
        color="primary"
        variant="contained"
        style={{ marginTop: type === 0 ? "1rem" : 0, height: "56px" }}
      >
        {type === 0 ? "LOGIN" : "REGISTRAR-SE"}
      </Button>

      <Typography
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          width: "175px",
          marginTop: 15,
        }}
      >
        {type === 0 && <Link>Esqueceu a sua senha?</Link>}
      </Typography>
      <Typography
        fontSize={14}
        fontWeight={200}
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          textAlign: "center",
          marginTop: "2.5rem",
        }}
      >
        Ao se registrar, você concorda com os <Link>termos de uso</Link> nossos
        e <Link>política de privacidade.</Link>
      </Typography>
    </div>
  );
};

export default Login;
