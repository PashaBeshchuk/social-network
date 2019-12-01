import React, { useState, useEffect, useReducer } from "react"
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

// function News() {
//     const [count, setCount] = useState(0);

//     useEffect(() => {
//         console.log(count)
//         document.title = `You clicked ${count} times`;
//     });

//     return (
//         <div>
//         <p>You clicked {count} times</p>
//         <button onClick={() => setCount(count + 1)}>
//             Click me
//         </button>
//         </div>
//     );
//   }


//  const News = () => {
//     const [count, setCount] = useState(0);
  
//     useEffect(() => {
//       setTimeout(() => {
//         console.log(`You clicked ${count} times`);
//       }, 3000);
//     });
  
//     return (
//       <div>
//         <p>You clicked {count} times</p>
//         <button onClick={() => setCount(count + 1)}>
//           Click me
//         </button>
//       </div>
//     );

// }

// function News() {
//   const [state, dispatch] = useReducer(reducer, initialState);
//   const { count, step } = state;

//   useEffect(() => {
//     const id = setInterval(() => {
//       dispatch({ type: 'tick' }); // Вместо setCount(c => c + step);
//     }, 1000);
//     return () => clearInterval(id);
//   }, [dispatch]);

//   return (
//     <>
//       <h1>{count}</h1>
//       <input value={step} onChange={e => setStep(Number(e.target.value))} />
//     </>
//   );
// }


function Counter({ step }) {
  const [count, dispatch] = useReducer(reducer, 0);


  function reducer(state, action) {
    if (action.type === 'tick') {
      return state + step;
    } else {
      throw new Error();
    }
  }

  useEffect(() => {
    const id = setInterval(() => {
      dispatch({ type: 'tick' });
    }, 1000);
    return () => clearInterval(id);
  }, [dispatch]);

  return <h1>{count}</h1>;
}

function News() {
  const [step, setStep] = useState(1);

  return (
    <>
      <Counter step={step} />
      <input value={step} onChange={e => setStep(Number(e.target.value))} />
    </>
  );
}

// console.log(reducer(initialState, {type:"tick"}))
// console.log(reducer(initialState, {type:"step", step:2}))


//   function sayHi(person) {
//     const name = person.name;
//     setTimeout(() => {
//       alert('Hello, ' + name);
//     }, 3000);
//   }
  
//   let someone = {name: 'Dan'};
//   sayHi(someone);
  
//   someone = {name: 'Yuzhi'};
//   sayHi(someone);
  
//   someone = {name: 'Dominic'};
//   sayHi(someone);
//export default withAuthRedirect(News);

export default News