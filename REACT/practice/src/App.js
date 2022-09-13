import './App.css';
import Clock from './components/Clock/Clock'

function formatDate(date) {
  return date.toLocaleDateString();
}

function Avatar(props) {
  return (
    <img className='avatar'
      src={props.userAvatar.avatarUrl}
      alt={props.userAvatar.name} />
  )
}

function UserInfo(props){
  return (
    <div className="UserInfo">
      <Avatar userAvatar={props.user} />

      <div className="UserInfo-name">
        {props.user.name}
      </div>
  </div>
  )
}


function App(props) {
  return (
    <div className="Comment">
     <Clock />
     <Clock />
     <Clock />
      <UserInfo user={props.author} />
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}

export default App;
