
import './App.css'
import UserContexProvider from './Contex/UserContexProvider'
import Login from './Components/Login'
import Profile from './Components/Profile'
function App() {
  return (
    <UserContexProvider>
      <h1 className="bg-amber-300 text-black text-center">React Contex learning process</h1>
      <Login />
      <Profile />
     
    </UserContexProvider>
  );
}


export default App
