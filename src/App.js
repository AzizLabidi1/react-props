import './App.css';
import Profile from './profile/Profile';

const handleName  = (fullName) => { 
  alert( "hello " + fullName);
};
function App() {
  return (
    <>
    
    <div className= "main">
     <Profile fullName="aziz" profession="Software engineer" bio="basketball player" handleName={handleName}><img src="/images/photocv.jpg"/></Profile> 
    </div>
    </>
  );
};

export default App;
