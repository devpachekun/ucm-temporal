import { useContext, useState} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { LoginContext } from '../../App';

export default function Login() {
  const [loggedIn, setLoggedIn] = useContext(LoginContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const location = useLocation();
  const navigate = useNavigate();

  

  function login(e) {
      e.preventDefault();
      const url = 'https://api-v3-espaciosucm.onrender.com/api/v3/login/';
      fetch(url, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email:username,
            password:password
          }),
      })
          .then((response) => {
              return response.json();
          })
          .then((data) => {
              sessionStorage.setItem('access', data.access);
              sessionStorage.setItem('refresh', data.refresh);
              setLoggedIn(true);
              navigate(
                  location?.state?.previousUrl
                      ? location.state.previousUrl
                      : '/user/agendar'
              );
          });
  }
  return (
      <div className="h-screen relative flex flex-col justify-center min-w-367 w-auto shadow-mt overflow-hidden bg-cover bg-[url(/src/assets/campus1.png)]">
        <div className="w-full p-8 m-auto shadow-2xl shadow-black-500 md:shadow-2xl md:shadow-black-500  rounded-md  mx-auto  lg:max-w-xl ">
        <h1 className="text-3xl font-semibold text-center text-blue-600">
            Iniciar Sesion
          </h1>
          <form className="mt-6 bg-green-560" onSubmit={login}>
            <div className="mb-2">
              <label htmlFor="email" className="block text-xl font-semibold text-gray-800">
                Correo
              </label>
              <input
                type="email"
                name='username'
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                placeholder='...@alu.ucm.cl'
                className="text-xl block w-full px-4 py-2 mt-2 text-black-700 bg-white border rounded-md focus:border-blue-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-2">
              <label htmlFor="password" className="block text-xl font-semibold text-gray-800">
                Contraseña
              </label>
              <input
                type="password"
                name='password'
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder='Contraseña'
                className="text-xl block w-full px-4 py-2 mt-2 text-black-700 bg-white border rounded-md focus:border-blue-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mt-6">
              <button type="submit" className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-600 text-xl rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-700">
                Acceder
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }