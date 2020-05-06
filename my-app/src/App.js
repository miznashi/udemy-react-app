import React from 'react';
import PropTypes from 'prop-types';

//component
function App() {
  const profiles = [
    {name: "Taro",   age: 15},
    {name: "Hanako", age: 5},
    {name: "Noname"}// 数値が入っていたらエラー
  ]
  return (
    <React.Fragment>
    {
      profiles.map((profiles, index) => {
        return <User name={profiles.name} age={profiles.age} key={index} />
      })
    }
    </React.Fragment>
  );
}

//props
const User = (props) => {
  return <div>Hi, I am {props.name}, and {props.age} years old!</div>
}

//型チェック
User.propTypes = {
  name: PropTypes.string,
  age : PropTypes.number.isRequired
  //isRequired ( [age] が存在しいないといけない場合)
  //今回の場合 [name:"Noname"] に [age] が設定されていない為、コンソールにエラーがでる
}

export default App;
