import './App.css';
import ControlledComponent from '../ControlledComponent/ControlledComponent';
import NumberList from '../NumberList/NumberList';
import Post from '../Post/Post';
import UncontrolledComponent from '../UncontrolledComponent/UncontrolledComponent';
import HooksExample from './../HooksExample/HooksExample';

function App() {

  const obj = [{
    id: 1,
    text: "AAA"
  },
  {
    id: 2,
    text: "BBB",
  },
  {
    id: 3,
    text: "CCC",
  }
  ]
  return (
    <div className="">
      <h4>List and Keys</h4>

      <h5>Example1</h5>
      <NumberList objData={obj} />

      <h5>Example2</h5>
      <Post />
      <hr />

      <h4>Controlled Component</h4>
      <ControlledComponent />
      <hr />

      <h4>Uncontrolled Component</h4>
      <UncontrolledComponent />
      <hr />

      <h4>Hooks Example UseState</h4>
      <HooksExample />
    </div>
  );
}

export default App;
