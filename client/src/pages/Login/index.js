import { React, useState } from "react";
import {
  Grid,
  Typography,
  TextField,
  InputAdornment,
  Button,
} from "@mui/material";
import { PersonOutlineOutlined, HttpsOutlined } from "@mui/icons-material/";
import IMG from "../../assets/Ticket.png";
import "./styles.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {};
  const handleForget = () => {};

  return (
    <Grid
      container
      direction='row'
      sx={{
        backgroundColor: "primary.main",
        height: "100vh",
        ml: "-1em",
        width: {m:"102%", xs:"104%"},
      }}>
      <Grid
        sx={{
          display: { xs: "none", md: "block" },
          width: { xl: "auto", md: "44%" },
          position: "relative",
          paddingLeft: "16em",
          paddingTop: "2em",
          backgroundColor: "#d9d9d9",
          backgroundImage: "linear-gradient(315deg, #d9d9d9 0%, #f6f2f2  74%)",
          height: "100vh",
        }}>
        <img
          src={IMG}
          alt='logo'
          id='img'
          style={{
            position: "relative",
            right: "10em",
            top: "4em"
            
          }}
        />
      </Grid>
      <Grid sx={{ ml: {md:15, xs: 6}, mt: {xl:30, xs:10, l:10}, width:{xs:"85%", md:"auto"}}}>
        <Typography
          variant='subtitle1'
          sx={{
            color: "white.main",
            fontSize: "1.5em",
            textAlign: "left",
            paddingTop: "2em",
          }}>
          LOGIN
        </Typography>
        <Typography
          variant='h4'
          sx={{
            color: "white.main",
            textAlign: "left",
            fontWeight: 700,
            mt: -1,
          }}>
          YOUR ACCOUNT
        </Typography>
        <TextField
          label='Email :'
          value={username}
          onChange={handleUsername}
          type='email'
          variant='standard'
          color='white'
          size='normal'
          sx={{
            color: "white.main !important",
            width: "100%",
            mt: "1em",
            pt: "0.5em",
            "& input": {
              color: "white.main",
              fontSize: "1.2em",
            },
            "& label": {
              color: "white.main",
              fontSize: "1.4em",
              fontWeight: 100,
              p5: "1em",
            },
            fontSize: "1em",
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <PersonOutlineOutlined sx={{ color: "white.main" }} />
              </InputAdornment>
            ),
          }}
          focused
        />
        <TextField
          label='Password :'
          value={password}
          type='password'
          onChange={handlePassword}
          variant='standard'
          color='white'
          size='normal'
          sx={{
            color: "white.main !important",
            width: "100%",
            pt: "0.5em",
            mt: "2em",
            "& input": {
              color: "white.main",
              fontSize: "1.2em",
            },
            "& label": {
              color: "white.main",
              fontSize: "1.4em",
              fontWeight: 100,
              p5: "1em",
            },
            fontSize: "1em",
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <HttpsOutlined sx={{ color: "white.main" }} />
              </InputAdornment>
            ),
          }}
          focused
        />
        <Grid
          container
          direction='row'
          sx={{
            mt: "2em",
            justifyContent: "space-between",
          }}>
          <Button
            variant='contained'
            color='white'
            type='submit'
            size='medium'
            sx={{
              color: "primary.main",
            }}
            onClick={handleSubmit}>
            LOGIN
          </Button>
          <Button
            variant='text'
            color='white'
            size='medium'
            sx={{
              color: "white.main",
            }}
            onClick={handleForget}>
            FORGOT PASSWORD?
          </Button>
        </Grid>
        <Grid
          container
          direction='row'
          sx={{
            mt: "2em",
            alignItems: "baseline",
          }}>
          <Typography
            variant='subtitle1'
            sx={{
              color: "white.main",
              textAlign: "left",
              fontSize: "1em",
              mt: "2em",
            }}>
            Don't have an account?
          </Typography>
          <Button
            variant='text'
            sx={{
              color: "secondary.lighter",
              textAlign: "left",
              fontSize: "1em",
              mt: "0.5em",
              fontWeight: 500,
            }}>
            Sign up!
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Login;
