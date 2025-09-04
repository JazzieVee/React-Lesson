import './Counter.css'
import React, {useState} from 'react';

function Counter() {
    const [arr, setArr] = useState([])

    function addMinus() {
        setArr(prevArr => [ ...prevArr, "-"])
    };

    function addPlus() {
        setArr(prevArr => [ ...prevArr, "+"])
    };
   
    return (
        <div>
            <button onClick={addMinus}>-</button>
           
            <button onClick={addPlus}>+</button>
            {arr.toString()}
        </div>
    );
}

export default Counter;
  
/////////////////// BASIC COUNTER METHOD  -- use previous number to get current number///////////////
////////////// ** double stack const variables to double counts per click 
//     const [count, setCount] = useState (0);
//     const increment = () => { setCount (prevCount => prevCount + 1);};
//     const decrement = () => { setCount (prevCount => prevCount - 1);};
//   return (
//         <div>
//             <button onClick={decrement}>-</button>
//             <span> {count} </span>
//             <button onClick={increment}>+</button>
//         </div>
//     );
// }

// export default Counter;







/////////////// OBJECT COUNTER METHOD -- target the specific property of the object ///////////
// const [cart, setCart] = useState({item: "apple", quantity: 0,});

//     const addApple = () => {
//     setCart(prevCart => ({...prevCart, quantity: prevCart.quantity + 1,}))
//     };

//     const subApple = () => {
//         setCart(prevCart => ({ ...prevCart, quantity: prevCart.quantity - 1,}))
//     };

// return (
//         <div>
//             <button onClick={subApple}>-</button>
//             {cart.quantity}
//             {cart.item}
//             <button onClick={addApple}>+</button>
//         </div>
//     );
// }

// export default Counter;

