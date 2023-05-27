import "./App.css";
import Nav from "./components/Nav/Nav";
import Cards from "./components/Cards/Cards";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Form  from "./components/Form/Form";
import Filters from "./components/Filters/Filters";
import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCharacter } from "./redux/actions";

function App() {
  const {characters} = useSelector(state => state);
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const EMAIL = 'ejemplo@gmail.com';
  const PASSWORD = 'unaPassword';
  

  const onSearch = (input) => {
    dispatch(getCharacter(input))
  };

  const login = (userData) => {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
       setAccess(true);
       navigate('/home');
    }
 }

  useEffect( () => {
    !access && navigate('/');
  }, [access]);
  


  return (
    <>
      <Nav onSearch={onSearch} />
      <Routes>
        <Route path="/" element={<Form login= {login} access= {access}/>}/>
        <Route path="home"  element={<Cards characters={characters}/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="detail/:idParam" element={<Detail/>}/>
      </Routes>
    </>
  );
}

export default App;
