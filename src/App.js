import "./App.css";
import Nav from "./components/Nav/Nav";
import Cards from "./components/Cards/Cards";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Form  from "./components/Form/Form";
import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

function App() {
  const [characters, setCharacters] = useState([]);
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const EMAIL = 'ejemplo@gmail.com';
  const PASSWORD = 'unaPassword';
  

  const onSearch = (input) => {
    fetch(`https://rickandmortyapi.com/api/character/${input}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          if (characters.some((character) => character.id === data.id)) {
            window.alert("This character already exists");
          } else {
            setCharacters([data, ...characters]);
          }
        } else window.alert("The character doesn't exists");
      });
  };

  

  const handleDelete = (id) => {
    setCharacters(characters.filter((character) => character.id !== id));
  };


  const login = (userData) => {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
       setAccess(true);
       navigate('/home');
    }
 }

  useEffect( () => {
    !access && navigate('/');
    console.log(access);
  }, [access]);
  


  return (
    <>
      <Nav onSearch={onSearch} />
      <Routes>
        <Route path="/" element={<Form login= {login} access= {access}/>}/>
        <Route path="home" element={<Cards characters={characters} onDelete={handleDelete} />}/>
        <Route path="about" element={<About/>}/>
        <Route path="detail/:idParam" element={<Detail/>}/>
      </Routes>
    </>
  );
}

export default App;
