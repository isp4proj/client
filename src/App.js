import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@mui/material/styles";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Scans from "./pages/Scans";
import Scan from "./pages/Scan";

import AuthRoute from "./util/AuthRoute";
import Provider from "./util/Provider";

import background from "./assets/background.mp4";
import AboutUs from "./pages/AboutUs";
import HowItWork from "./pages/HowItWork";

const theme1 = createTheme({
  typography: {
    h1: {
      fontFamily: "AirbnbCerealMedium",
    },
    h2: {
      fontFamily: "AirbnbCerealMedium",
    },
    h3: {
      fontFamily: "AirbnbCerealMedium",
    },
    h4: {
      fontFamily: "AirbnbCerealMedium",
    },
    h5: {
      fontFamily: "AirbnbCerealMedium",
    },
    h6: {
      fontFamily: "AirbnbCerealBook",
    },
    body1: {
      fontFamily: "AirbnbCerealBook",
    },
    body2: {
      fontFamily: "AirbnbCerealBook",
    },
    p: {
      fontFamily: "AirbnbCerealBook",
    },
    overline: {
      fontFamily: "AirbnbCerealMedium",
    },
    button: { fontFamily: "AirbnbCerealBook" },
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
  palette: {
    primary: {
      main: "#581c87",
    },
    secondary: {
      main: "#6b21a8",
    },
  },
});

let theme = responsiveFontSizes(theme1);

function App() {
  return (
    <div className="App">
      <video
        autoPlay
        muted
        loop
        id="myVideo"
        style={{
          position: "absolute",
          zIndex: "-100",
          width: "100%",
          left: "0",
          top: "0px",
          // height: 'calc(100% - 50px)',
          height: "100%",
          objectFit: "cover",
          // opacity: "0.5",
        }}
      >
        <source src={background} type="video/mp4" />
      </video>
      <ThemeProvider theme={theme}>
        <Provider>
          <BrowserRouter>
            <Switch>
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Route path="/about" component={AboutUs} />
              <Route path="/how" component={HowItWork} />

              <AuthRoute exact path="/" component={Scans} />
              <AuthRoute path="/scan/:id" component={Scan} />
            </Switch>
          </BrowserRouter>
        </Provider>
      </ThemeProvider>
    </div>
  );
}

export default App;
