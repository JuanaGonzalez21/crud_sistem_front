import React from 'react'
import axios, { formToJSON } from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Api from "../../servidor/api"

const URI = "http://localhost:8000/forms"

const Showdb = () => {
  const [ordenes, setOrden] = useState([]);
  useEffect(() => {
    getOrdenes()
  }, [])

  //obetener datos de la base de datos
  const getOrdenes = async () => {
    const res = await axios.get(URI)
    setOrden(res.data || [])
    return;
  }

  //Eliminar datos de la base de datos

  const deleteOrden = async (id) => {
    await axios.delete(`${URI}/${id}`)
    getOrdenes()
  }

  //Vista del componente
  return (
    <>
    <Link to='/crear' className='btn btn-primary'> Crear</Link>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Numero de orden</th>
            <th scope="col">Agente que envia</th>
            <th scope="col">Area que envia</th>
            <th scope="col">Consecutivo</th>
          </tr>
        </thead>
        <tbody>
          {ordenes.map((orde) => (
            <tr key={orde.id}>
              <td> {orde.id} </td>
              <td> {orde.n_consecutivo} </td>
              <td> {orde.agente_envia} </td>
              <td> {orde.area_envia} </td> 
              <td> {orde.consecutivo} </td> 
              <td>
              <Link to={`/editar/${orde.id}`} className='btn btn-info'>Editar</Link>
              <button onClick={()=> deleteOrden(orde.id)} className='btn btn-danger'>Eliminar</button></td>   
            </tr>
          ))}
        </tbody>
      </table>
    </>

  )
}

export default Showdb