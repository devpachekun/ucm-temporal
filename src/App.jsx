import { BrowserRouter, Routes, Route } from "react-router-dom";
import Agendar from "./components/paginas/PagAgendar";
import AdmAgendar from "./components/paginas/AdmAgendar";
import Login from "./components/paginas/login";
import PageError from "./components/paginas/page-error";
import AdmInformes from "./components/paginas/AdmInformes";
import { createContext, useEffect, useState } from "react";


export const LoginContext = createContext({});

function App() {
    const [loggedIn, setLoggedIn] = useState(
        localStorage.access ? true : false
    );

  useEffect(() => {
    function refreshTokens() {
        if (localStorage.refresh) {
            const url = 'https://api-v3-espaciosucm.onrender.com/api/v3/login/user/refresh-token/';
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    refresh: localStorage.getItem('refresh'),
                }),
            })
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    console.log('xd',data.access)
                    localStorage.access = data.access;
                    localStorage.refresh = data.refresh;
                    setLoggedIn(true);
                });
        }
    }

    const minute = 1000 * 60;
    refreshTokens();
    setInterval(refreshTokens, minute * 5);
}, []);

function changeLoggedIn(value) {
    setLoggedIn(value);
    
    if (value === false) {
        localStorage.clear();
    }

function getUser(){

}

}

  return (
  <LoginContext.Provider value={[loggedIn, changeLoggedIn]}>
  <BrowserRouter>
          <Routes>
              <Route path="/user/agendar" element={<Agendar />} />
              <Route path="/user/mis-reservas" element={<Agendar />} />
              <Route path="/adm/agendar" element={<AdmAgendar/>} />
              <Route path="/adm/informes" element={<AdmInformes/>} />
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<Login />} />
              <Route path="/404" element={<PageError  />} />
              <Route path="*" element={<PageError />} />
          </Routes>
  </BrowserRouter>
</LoginContext.Provider>
)
}

export default App;
