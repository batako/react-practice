// --------------------------------------------------
// import { Component, Fragment } from 'react'

// function App() {
//   return <div>function: hello, world!</div>;
// }

// class App extends Component {
//   render() {
//     // return React.createElement(
//     //   'div',
//     //   null,
//     //   'class1: hello, world!!'
//     // );

//     // return <div>class2: hello, world!</div>;

//     // const greeting = 'Hi!!!'
//     // const dom = <h1 className="hoge222">{greeting}</h1>;
//     // return dom;

//     return (
//       <Fragment>
//         <label htmlFor="bar">bar</label>
//         <input type="text" onChange={() => {console.log('Fragment')}} />
//       </Fragment>
//     );
//   }
// }

// const App = () => {
//   return (
//     <div>
//       <Cat />
//       <Cat />
//       <Cat />
//       <Cat />
//       <Cat />
//     </div>
//   )
// }
// const Cat = () => {
//   return <div>Meow!</div>
// }


// --------------------------------------------------
// import PropTypes from 'prop-types';
// const App = () => {
//   const users = [
//     {name: 'Tarou', age: 10},
//     {name: 'Hanako', age: 5},
//     // {name: 'Hanako', age: '5'},
//     // {name: 'Hanako'},
//     // {},
//   ]
//   return (
//     <div>
//       {
//         users.map((user, index) => {
//           return <User name={user.name} age={user.age} key={index} />;
//         })
//       }
//     </div>
//   )
// }
// const User = (props) => {
//   return <div>Hi, I am {props.name}, and {props.age} yeard old!</div>
// }
// // User.defaultProps = {
// //   name: 'unknown',
// //   age:  -1,
// // };
// User.propTypes = {
//   name: PropTypes.string.isRequired,
//   age:  PropTypes.number.isRequired,
// }

// --------------------------------------------------
import { Component, Fragment } from 'react'
const App = () => (<Counter></Counter>)

class Counter extends Component {
  constructor(props) {
    super(props)
    console.log(this.state)
    this.state = { count: 0 }
  }

  handlePlusButton = () => {
    this.setState({ count: this.state.count + 1 })
  }

  handleMinusButton = () => {
    this.setState({ count: this.state.count - 1 })
  }

  render() {
    return (
      <Fragment>
        <div>count: { this.state.count}</div>
        <button type="button" onClick={ this.handlePlusButton }>+</button>
        <button type="button" onClick={ this.handleMinusButton }>-</button>
      </Fragment>
    );
  }
}

export default App;
