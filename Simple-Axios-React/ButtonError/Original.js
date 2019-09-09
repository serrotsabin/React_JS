import React, { Component } from 'react';
import Blog from '../containers/Blog/Blog';

class Http extends Component {
  render() {
    return (
       <div className="App">
         <h1>Http Page Here</h1>
         <Blog />
        </div>
    );
  }
}

 export default Http;

// import React, { Component } from 'react';

// import Error from './Error';

// import Comp from './Comp'

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <Error>
//         <Comp />
//         </Error>
//       </div>
//     );
//   }
// }

// export default App;

// import React from 'react'
// class ErrorBoundary extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       error: null,
//       errorInfo: null
//     };
//   }

//   componentDidCatch(error, errorInfo) {
//     // Catch errors in any child components and re-renders with an error message
//     this.setState({
//       error: error,
//       errorInfo: errorInfo
//     });
//   }

//   render() {
//     debugger;
//     if (this.state.error) {
//       // Fallback UI if an error occurs
//       return (
//         <div>
//           <h2>{"Oh-no! Something went wrong"}</h2>
//           <p className="red">
//             {this.state.error && this.state.error.toString()}
//           </p>
//           <div>{"Component Stack Error Details: "}</div>
//           <p className="red">{this.state.errorInfo.componentStack}</p>
//         </div>
//       );
//     }else{
//       return this.props.children;
//     }
//   }
// }

// class BuggyButton extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       releaseBugs: false
//     };
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick() {
//     this.setState({
//       releaseBugs: true
//     });
//   }

//   render() {
//     if (this.state.releaseBugs) {
//       throw new Error("I crashed!");
//     }
//     return (
//       <button className="btn" onClick={this.handleClick}>
//         {"Scary Button!"}
//       </button>
//     );
//   }
// }

// function App() {
//   console.log(React.version)
//   return (
//     <div>
//     <ErrorBoundary>
//       <BuggyButton />
//     </ErrorBoundary>
//     <BuggyButton />
//     </div>
//   );
// }
