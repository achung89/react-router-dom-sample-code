import React from 'react';
import {Route, BrowserRouter, Link} from 'react-router-dom';

class App2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
        <div>
          <Link to="/page1" style={{display:'block'}}>Top</Link>
            <Route path="/page1" component={HomeRoutes} />
            <br />
            
          <Link to="/page2" style={{display:'block'}}>Bottom</Link>
            <Route path="/page2" component={HomeRoutes} />
        </div>
    );
  }
};


var HomeRoutes = ({match}) => (
    <div>
      <Link to={`${match.url}/fun`}>Fun</Link>
      <Route path={`${match.url}/fun`} component={Fun} />

      <Link to={`${match.url}/joy`}>Joy</Link>
      <Route path={`${match.url}/joy`} component={Joy} />

      <Link to={`${match.url}/plums`}>Plum</Link>
      <Route path={`${match.url}/plums`} component={Plums} />
    </div>
)

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

export default App2;