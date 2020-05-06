import React from 'react';

//component
function App() {
  const profiles = [
    {name: "Taro",   age: 15},
    {name: "Hanako", age: 5},
    {name: "Noname"}
  ]
  return (
    <div>
    {
      profiles.map((profiles, index) => {
        return <User name={profiles.name} age={profiles.age} key={index} />
      })
    }
    </div>
  );
}

//props
const User = (props) => {
  return <div>Hi, I am {props.name}, and {props.age} years old!</div>
}

//default props
User.defaultProps = {
  age : 1
}

export default App;
