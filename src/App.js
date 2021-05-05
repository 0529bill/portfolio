import { useState, useReducer, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Navbars from '@Components/Widgets/Navbars/Navbars';
import About from '@Components/About/About';
import Home from '@Components/Home/Home';
import Projects from '@Components/Projects/Projects';
import Resume from '@Components/Resume/Resume';
import Settings from '@Components/Settings/Settings';
import languageReducer from '@Reducers/languageReducer';
import Spinner from '@Components/Widgets/Spinner/Spinner';

function App() {
  const [state, dispatch] = useReducer(languageReducer);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 1200);
  });
  return load ? (
    <Spinner load={load} />
  ) : (
    <>
      <Navbars state={state} />
      <Router>
        <Switch>
          <Route exact path="/">
            <Home state={state} />
          </Route>
          <Route path="/About">
            <About state={state} />
          </Route>
          <Route path="/Projects">
            <Projects state={state} />
          </Route>
          <Route path="/Resume">
            <Resume state={state} />
          </Route>
          <Route path="/settings">
            <Settings dispatch={dispatch} state={state} />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
