
// import React from 'react';
// import { useParams, Redirect } from 'react-router-dom';

// function DogDetails({ dogs }) {
//   const { name } = useParams();
//   const dog = dogs.find(d => d.name.toLowerCase() === name.toLowerCase());

//   if (!dog) return <Redirect to="/dogs" />;

//   return (
//     <div>
//       <h2>{dog.name}</h2>
//       <img src={dog.src} alt={dog.name} />
//       <h3>Age: {dog.age}</h3>
//       <ul>
//         {dog.facts.map((fact, idx) => (
//           <li key={idx}>{fact}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// receive on the dog passed in the prop
import React from 'react';
import { useParams, Navigate } from 'react-router-dom';

function DogDetails({ dogs }) {
  const { name } = useParams();
  
  // Find the dog by name, ignoring case
  const dog = dogs.find(d => d.name.toLowerCase() === name.toLowerCase());
  
  // If no matching dog, redirect to the main dogs page
  if (!dog) {
    return <Navigate to="/dogs" />;
  }

  return (
    <div>
      <h2>{dog.name}</h2>
      <img src={dog.src} alt={dog.name} />
      <ul>
        {dog.facts.map((fact, i) => (
          <li key={i}>{fact}</li>
        ))}
      </ul>
    </div>
  );
}

export default DogDetails;

