import './App.css';
// import {useState, useEffect} from 'react'
import {connect} from 'react-redux'

function App(props) {

  console.log(props)
  // const [age, setAge] = useState(21)

  // const ageUp = () => {
  //   const newAge = age + 1
  //   setAge(newAge)
  // }

  // const ageDown = () => {
  //   const newAge = age - 1
  //   setAge(newAge)
  // }

  return (
    <div className="App">
      <header className="App-header">
        <div> Age <span>{props.age}</span></div>
        <button onClick={props.ageUp}>Age UP</button>
        <button onClick={props.ageDown}>Age DOWN</button>
      </header>
      <div>
        <ul>
          {
            props.history.map((el) => {
              return <li key={el.id} onClick={() => props.delItem(el.id)}>
                {el.age}
              </li>
            })
          }
        </ul>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return{
    age: state.age,
    history: state.history
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    ageUp: () => dispatch({type: "AGE_UP", value: 1}),
    ageDown: () => dispatch({type: "AGE_DOWN", value: 1}),
    delItem: (id) => dispatch({type: "DEL_ITEM", id: id})
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (App);