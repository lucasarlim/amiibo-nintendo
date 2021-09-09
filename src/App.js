import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { NavMenu } from './components/NavMenu';
import { AmiiboCaracters } from './pages/AmiiboCaracters';
import { AmiiboCharacter } from './components/AmiiboCharacter';
import { Success } from './pages/Success';
import { Error } from './pages/Error';

const useStyles = makeStyles(theme => ({
  root: {flexGrow: 1}
}))

function App() {

  const classes = useStyles();
  
  return (
    <Router>
      <div className={classes.root}>
        <NavMenu />
        <Switch>
          <Route path="/" exact component={AmiiboCaracters}/>
          <Route path="/caracters/:id" exact component={AmiiboCharacter}/>
          <Route path="/success" exact component={Success}/>
          <Route exact component={Error}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
