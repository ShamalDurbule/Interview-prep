import { useEffect, useState } from "react";
export default function UserFunction(props) {
  const [count1, setcount1] = useState(0);
  const [count2, setcount2] = useState(0);

  useEffect(() => {
   const timer = setInterval(() => {  //similar to ComponentDidMount (Mounting Phase)
      console.log("Functional Component")
    },1000)

    return () => { // similar to ComponentWillMount; (UnMounting Phase)
      clearInterval(timer);
    }
  }, [] ); //similar to ComponentDidUpdate (Updating phase)

  const handleIncrement = () => {
    setcount1(count1 + 1);
    setcount2(count2 + 2);
  };

  return (
    <div className="UserInfo">
      <h1>
      Count1 : {count1} ,Count2 : {count2}
      </h1>
      <button onClick={handleIncrement}>Increment</button>
      <h2>Name : {props.name}</h2>
      <h3>Location : {props.location}</h3>
      <h4>Contact : 8888095900</h4>
      <h4>Email : sdurbule24@gmail.com</h4>
    </div>
  );
}
