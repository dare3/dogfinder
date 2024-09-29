// // import './App.css';

// // function App() {
// //   return (
// //     <div className="App">
// //       <h1>Good luck!</h1>
// //     </div>
// //   );
// // }

// // export default App;
// import React from 'react';
// import { Routes, Route, Navigate } from 'react-router-dom';
// import Nav from './Nav';
// import DogList from './DogList';
// import DogDetails from './DogDetails';

// // App.defaultProps = {
// //   dogs: [
// //     { name: "Whiskey", age: 5, src: whiskey, facts: [ ... ] },
// //     { name: "Duke", age: 3, src: duke, facts: [ ... ] },
// //     { name: "Perry", age: 4, src: perry, facts: [ ... ] },
// //     { name: "Tubby", age: 4, src: tubby, facts: [ ... ] }
// //   ]

// // pass specific dog here
// <Route path="/dogs/:name" render={props => {
//   const { name } = props.match.params;
//   const dog = dogs.find(d => d.name.toLowerCase() === name.toLowerCase());
//   return dog ? <DogDetails dog={dog} /> : <Redirect to="/dogs" />;
// }} />

// function App({ dogs }) {
//   return (
//     <div>
//       <Navigate to="/dogs" />
//       <Switch>
//         <Route exact path="/dogs">
//           <DogList dogs={dogs} />
//         </Route>
//         <Route path="/dogs/:name">
//           <DogDetails dogs={dogs} />
//         </Route>
//         <Redirect to="/dogs" />
//       </Switch>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Nav from './Nav'; // Example: Import your Nav component
import DogList from './DogList'; // Import your DogList component
import DogDetails from './DogDetails'; // Import your DogDetails component

function App({ dogs }) {
  return (
    <BrowserRouter>
      <div>
        <Nav dogs={dogs} />
        <Routes>
          <Route exact path="/dogs" element={<DogList dogs={dogs} />} />
          <Route path="/dogs/:name" element={<DogDetails dogs={dogs} />} />
          <Route path="*" element={<Navigate to="/dogs" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

App.defaultProps = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
      src: "whiskey.jpg",
      facts: ["Whiskey loves eating popcorn.", "Whiskey is a terrible guard dog.", "Whiskey wants to cuddle with you!"]
    },
    {
      name: "Duke",
      age: 3,
      src: "duke.jpg",
      facts: ["Duke believes that ball is life.", "Duke likes snow.", "Duke enjoys pawing other dogs."]
    },
    {
      name: "Perry",
      age: 4,
      src: "perry.jpg",
      facts: ["Perry loves all humans.", "Perry demolishes all snacks.", "Perry hates the rain."]
    },
    {
      name: "Tubby",
      age: 4,
      src: "tubby.jpg",
      facts: ["Tubby is really stupid.", "Tubby does not like walks.", "Angelina used to hate Tubby, but claims not to anymore."]
    }
  ]
};

export default App;


