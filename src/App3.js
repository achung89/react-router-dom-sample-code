import React from 'react';
import {Route, BrowserRouter, Link} from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated:false, //1
      // homeRoutes: HomeRoutes,

    };
    this.authenticateThis = this.authenticateThis.bind(this);
  }

  authenticateThis(props) {

    //mock authentication
    setTimeout(()=>{this.setState({authenticated:true});}, 3000);

    //loading until authenticated
    return (!(props.authenticated) ? (<div>Checking</div>) : <HomeRoutes {...props} />); //3
  }

  render() {
    return (
        <div>
          <Link to="/checkit">Check Auth</Link>
          <Route path="/checkit" component={(this.authenticateThis)} {...this.state} />{/*2*/}
        </div>
    );
  }
}

var HomeRoutes = ({match})=> (
    <div>
      <Link to={`${match.url}/fun`}>Fun</Link>
      <Route path={`${match.url}/fun`} component={Fun} />

      <Link to={`${match.url}/joy`}>Joy</Link>
      <Route path={`${match.url}/joy`} component={Joy} />

      <Link to={`${match.url}/plums`}>Plum</Link>
      <Route path={`${match.url}/plums`} component={Plums} />
    </div>
  );



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