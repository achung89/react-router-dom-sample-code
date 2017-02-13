import React from 'react';
import {Route, BrowserRouter, Link} from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page:'home',
      // homeRoutes: HomeRoutes,

    }
  }

  render() {
    return (
        <div>
              <div>
                <Link to="/fun">Fun</Link>
                <Route path="/fun" component={Fun} />

                <Link to="/joy">Joy</Link>
                <Route path="/joy" component={Joy} />

                <Link to="/plums">Plum</Link>
                <Route path="/plums" component={Plums} />
              </div>
        </div>
    );
  }
};

var Fun = ()=>(
  <div>
    This is fun
  </div>
);

var Joy = ()=>(
  <div>
    This is joy
  </div>
);

var Plums = ()=>(
  <div>
    This is Plums
  </div>
);

export default App;