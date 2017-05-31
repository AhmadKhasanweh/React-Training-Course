var React = require ('react');
var Popular = require('./Popular');
var ReactRouter = require('react-router-dom');
// var ReactRouter = ReactRouter.

class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <Popular />
      </div>
    )
  }
}

module.exports = App;
