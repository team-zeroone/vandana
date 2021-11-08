import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


import Menu from "./containers/Menu";
import Article from "./containers/Article";
import Layout from "./hoc/Layout";
import { theme } from "./theme/theme";

const firebaseConfig = {
  apiKey: "AIzaSyDZmhbMzCOtPgCY5CItE8jtWlXeWs4kWQ8",
  authDomain: "vandana-94dfa.firebaseapp.com",
  projectId: "vandana-94dfa",
  storageBucket: "vandana-94dfa.appspot.com",
  messagingSenderId: "901516946638",
  appId: "1:901516946638:web:f5072b42552596b8c6b49f",
  measurementId: "G-Z9N1XMK4C6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);

function App() {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Router>
          <Layout>
            <Switch>
              <Route exact path="/" component={Menu} />
              <Route exact path="/article/:articleId" component={Article} />
            </Switch>
          </Layout>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
