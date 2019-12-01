// import React, { Component } from "react"

// class Music extends React.Component{
//     constructor(){
//         super()
//     }
//     render(){
//         return <div>
//             Music
//         </div>
//     }
// }


import React, { useState } from 'react';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

function Music() {
  // Объявляем новую переменную состояния "count"
  const [numbers, setCount] = useState(0);
  
  
  const [age, setAge] = useState(42);
  const [fruit, setFruit] = useState('банан');
  const [todos, setTodos] = useState([{ text: 'Изучить хуки' }])
  const [money, setMoney] = useState([{money:300}])
  console.log([age, setAge])
  console.log([fruit, setFruit])
  console.log([todos, setTodos])
  console.log([money, setMoney])
  
  return (
    <div>
      <p>Вы нажали {numbers} раз</p>
      <button onClick={() => setCount(numbers + 1)}>
        Нажми на меня
      </button>
    </div>
  );
}


export default withAuthRedirect(Music);