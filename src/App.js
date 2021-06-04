import { useState, useReducer, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Navbars from '@Components/Widgets/Navbars/Navbars';
import About from '@Components/About/About';
import Home from '@Components/Home/Home';
import Projects from '@Components/Projects/Projects';
import Resume from '@Components/Resume/Resume';
import Settings from '@Components/Settings/Settings';
import languageReducer from '@Reducers/languageReducer';
import locationReducer from '@Reducers/locationReducer';
import Spinner from '@Components/Widgets/Spinner/Spinner';
import Footer from '@Components/Widgets/Footer/Footer';

function App() {
  const [state, dispatch] = useReducer(languageReducer);
  const [locationState, locationDispatch] = useReducer(locationReducer, {
    location: null,
  });
  const [load, setLoad] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 1000);
  });
  return load ? (
    <div style={{ backgroundColor: 'black', width: '100vw', height: '100vh' }}>
      <Spinner load={load} />
    </div>
  ) : (
    <div style={{ height: '100vh', width: '100%' }}>
      <Navbars
        state={state}
        locationDispatch={locationDispatch}
        locationState={locationState}
      />
      <Router>
        <Switch>
          <Route exact path="/portfolio">
            <Home state={state} />
          </Route>
          <Route exact path="/portfolio/About">
            <About state={state} />
          </Route>
          <Route exact path="/portfolio/Projects">
            <Projects state={state} />
          </Route>
          <Route exact path="/portfolio/Resume">
            <Resume state={state} />
          </Route>
          <Route exact path="/portfolio/Settings">
            <Settings dispatch={dispatch} state={state} setLoad={setLoad} />
          </Route>
        </Switch>
      </Router>
      <Footer locationState={locationState} />
    </div>
  );
}

export default App;
