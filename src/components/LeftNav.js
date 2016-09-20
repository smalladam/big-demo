import React, { PropTypes } from 'react';
import { Link } from 'react-router';

class LeftNav extends React.Component {
  render () {
   return(
     <div className="Left-Nav">
         <h3>Smalladam own website</h3>
         <Link activeStyle={{color:"#ffffff"}} onlyActiveOnIndex={true} to="/Home"><span className="glyphicon glyphicon-home" aria-hidden="true"></span>&nbsp;&nbsp;Home</Link>
         <Link activeStyle={{color:"#ffffff"}} to="/blog"><span className="glyphicon glyphicon-book" aria-hidden="true"></span>&nbsp;&nbsp;Blog</Link>
         <Link activeStyle={{color:"#ffffff"}} to="/work"><span className="glyphicon glyphicon-edit" aria-hidden="true"></span>&nbsp;&nbsp;Work</Link>
         <Link activeStyle={{color:"#ffffff"}} to="/about"><span className="glyphicon glyphicon-user" aria-hidden="true"></span>&nbsp;&nbsp;About</Link>
     </div>
   )
  }
}

export default LeftNav;
