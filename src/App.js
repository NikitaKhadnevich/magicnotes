/* eslint-disable no-unused-vars */
import React from 'react';
import { CssBaseline } from '@material-ui/core';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import AppContainer from './styledApp';
import PrivateRoute from './utils/routing/PrivateRoute';

import {
  MainNotesContainer,
  HeaderNav,
  SharedWrapper,
  AboutWrapper,
  VisitWrapper,
  FormikUp,
  FormikIn,
  ROUTERS,
} from './AppReceiver';

function App() {
  const { notes, notFound, sharedNotes, about, signUp, signIn } = ROUTERS;

  return (
    <>
      <CssBaseline />
      <Router>
        <AppContainer>
          <HeaderNav />
          <Routes>
            <Route path='*' element={<Navigate replace to={notFound} />} />
            <Route path={notFound} element={<VisitWrapper />} />
            <Route path={about} element={<AboutWrapper />} />
            <Route path={signUp} element={<FormikUp />} />
            <Route path={signIn} element={<FormikIn />} />

            <Route
              exact
              path={notes}
              element={
                <PrivateRoute>
                  <MainNotesContainer />
                </PrivateRoute>
              }
            />
            <Route
              exact
              path={sharedNotes}
              element={
                <PrivateRoute>
                  <SharedWrapper />
                </PrivateRoute>
              }
            />
          </Routes>
        </AppContainer>
      </Router>
    </>
  );
}

export default App;
