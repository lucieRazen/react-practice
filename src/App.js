import "./App.css";
import Button from "@mui/material/Button";
import { Container } from "@mui/system";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import kakaoLogin from "./img-login-kakao-52.svg";
import naverLogin from "./img-login-naver-52.svg";
import googleLogin from "./img-login-google-52.png";
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import { purple } from "@mui/material/colors";

function DenseAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor: "white"}} >
        <Toolbar sx={{padding: 0}}>
          <Box sx={{flexGrow: 0, width: "48px", height: "48px", display: "flex", justifyContent: "center", alignItems: "center"}}>
          <IconButton
            edge="start"
            aria-label="menu"
            sx={{ color: "black" }}
          >
            <ArrowBackIcon />
          </IconButton>
          </Box>
          
          <Typography variant="h6" component="div" sx={{color: "#111111", fontWeight: 600, flexGrow: 1, textAlign: "center"}}>
            로그인
          </Typography>
          <Box sx={{flexGrow: 0, width: "48px", height: "48px"}}></Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

function SocialLoginBox() {
  return (
    <Grid Container 
    spacing={3} 
    sx={{display: "flex",
    justifyContent: "space-between",
    paddingLeft:"72px",
    paddingRight:"72px",
    width:"100%"
    }} >
      <Grid item>
        <img src={kakaoLogin} alt="kakaoLogin" width="48px" height="48px" />
      </Grid>
      <Grid item>
        <img src={naverLogin} alt="naverLogin" width="48px" height="48px" />
      </Grid>
      <Grid item>
        <img src={googleLogin} alt="googleLogin" width="48px" height="48px" />
      </Grid>
    </Grid>
  );
}

// const ColorButton = styled(Button)(({ theme }) => ({
//   color: theme.palette.getContrastText(purple[500]),
//   backgroundColor: purple[500],
//   "&:hover": {
//     backgroundColor: purple[700],
//   },
// }));

// function CustomizedButtons() {
//   return (
//     <Button sx={{ m: 6, padding: 1, border: "1px solid rgb(235 76 137)", color: "rgb(235 76 137)" }} variant="outlined" fullWidth>
//       이메일로그인
//     </Button>
//   );
// }

const ColorButton = styled(Button)(({ theme }) => ({
  margin: "48px",
  padding: "8px",
  border: "1px solid rgb(235 76 137)", 
  color: "rgb(235 76 137)"
}));

function CustomizedButtons() {
  return (
    <ColorButton variant="outlined" fullWidth>
      이메일로그인
    </ColorButton>
  );
}

function App() {
  return (
    <>
      <DenseAppBar />
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 24,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <CustomizedButtons />

          <SocialLoginBox />

          <Typography component="h1" variant="h6" sx={{ m: 4 }}>
            회원가입
          </Typography>
        </Box>
      </Container>
    </>
  );
}

export default App;
