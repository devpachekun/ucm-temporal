import React, {useContext, useState } from "react";
import campus1 from '../assets/campus.png'

//import AuthContext from "./context/authContext";



export default function Tabla() {
  const [RNombre, setNombre] = useState(' ');
  const [RCorreo, setCorreo] = useState(' ');
  const [Eleccion, setEleccion] = useState(' ');
  const [HoraInicio, setHoraInicio] = useState(' ');
  const [HoraFin, setHoraFin] = useState(' ');
  const [selectedDate, setSelectedDate] = useState(null);
  //const [options, setOptions] = useState([]);
  const [CampoTexto, setCampoTexto] = useState(' ');

  return (
    <div className="relative flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 via-teal-300 to-blue-300">
      <form 
        className="bg-white shadow-md rounded p-4 mt-4 mb-5 w-full md:w-1/2 lg:w-1/3 "
      >
        <div className="text-xl">
          <label className="block text-gray-800 text-xl font-bold mb-4">Datos</label>
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-2/5 mb-3 md:pr-3">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Nombre"
                value={RNombre}
                onChange={(ev) => setNombre(ev.target.value)}
              />
            </div>
            <div className="w-full md:w-3/5">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-white-200 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                type="email"
                placeholder="Correo"
                value={RCorreo}
                onChange={(ev) => setCorreo(ev.target.value)}
                pattern="^[a-zA-Z0-9._%+-]+@(alu.ucm\.cl|ucm\.cl)$"
              />
            </div>
          </div>
          <br />
          <div>
            <label className="block text-gray-800 text-xl font-bold mb-4">Cancha</label>
            <select
              className="py-2 px-2 pr-8 block w-full border rounded w-full text-xl focus:outline-none focus:shadow-outline dark:bg-slate-300 dark:text-gray-400"
              label="Seleccione"
              name="eleccion"
              value={Eleccion}
              onChange={(e) => setEleccion(e.target.value)}
            >
            </select>
          </div>
          <div className="my-4">
            <label className="block text-gray-800 text-xl font-bold mb-2">Espacios deportivos:</label>
            <img
              src={campus1}
              alt="Imagen de espacios deportivos"
              className="max-w-xs h-auto"
            />
          </div>
          <div className="my-4">
            <label className="block text-gray-800 text-xl font-bold mb-2">¿Necesita equipo?</label>
            <div className="flex">
              <input
                type="radio"
                value="Si" 
                name="equipo1"
                //onChange={() => setTipoEquipo("Si")} // Guardar el tipo de equipo como "Si"
              />
              <label className="ml-2">Si</label>
              <input
                className='ml-2'
                type="radio"
                value="No"
                name="equipo2"
                //onChange={() => setTipoEquipo("No")} // Guardar el tipo de equipo como "No"
              />
              <label className="ml-2">No</label>
            </div>
          </div>
          <div className="my-4">
            <label className="block text-gray-800 text-xl font-bold mb-2">Seleccione una fecha:</label>
            <input
              type="date"
              value={selectedDate}
              name="date"
              onChange={(e) => setSelectedDate(e.target.value)}
              min={new Date().toISOString().split("T")[0]}
            />
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 mb-3 md:pr-3">
              <select
                className="py-2 px-2 pr-8 block w-full border rounded w-full text-xl focus:outline-none focus:shadow-outline dark:bg-slate-300 dark:text-gray-400"
                value={HoraInicio}
                name="horainicio"
                onChange={(e) => setHoraInicio(e.target.value)}
              >
                <option value="">Hora de inicio</option>
                {Array.from({ length: 15 }, (_, i) => {
                  const hora = `${i + 8}:00`;
                  return (
                    <option key={i} value={hora}>
                      {hora}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="w-full md:w-1/2">
              <select
                className="py-2 px-2 pr-8 block w-full border rounded w-full text-xl focus:outline-none focus:shadow-outline dark:bg-slate-300 dark:text-gray-400"
                value={HoraFin}
                name="horafin"
                onChange={(e) => setHoraFin(e.target.value)}
              >
                <option value="">Hora de fin</option>
                {Array.from({ length: 15 }, (_, i) => {
                  const hora = `${i + 9}:00`;
                  return (
                    <option key={i} value={hora}>
                      {hora}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <textarea
            value={CampoTexto}
            name="campotexto"
            onChange={(e) => setCampoTexto(e.target.value)}
            placeholder="Ingrese datos adicionales de ser necesario" // Texto de marcador de posición
            className="resize-none w-full h-16 mt-4 p-2 border rounded text-gray-700 focus:outline-none focus:shadow-outline"
          />
          <div className="flex flex-col md:flex-row items-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold my-2 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Enviar
            </button>
            <button
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-2 md:mt-0 ml-0 md:ml-2 focus-shadow-outline"
              type="button"
            >
              Limpiar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}