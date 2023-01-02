import React from 'react'
import axios from 'axios'
import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Api from "../../servidor/api"
import { Table, Button, ToastHeader, Toast, ToastBody, PaginationItem, PaginationLink, Pagination, Offcanvas, OffcanvasHeader, OffcanvasBody, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './Doc.css'
import {useReactToPrint} from 'react-to-print'
import ComponentToPrint from './ComponentToPrint'
import Sidebar from '../sidebar/Sidebar'
const URI = Api

const Showdb = () => {

  const componentRef = useRef()
  const [show, setShow] = useState(true);
  
  const handlePrint = useReactToPrint({
    
    content: () => componentRef.current,
    documentTitle:'orden-salida'
  })
  const [ordenes, setOrden] = useState([]);
  useEffect(() => {
    getOrdenes()
  }, [])

  const FuncionPrint = ()=>{
    handlePrint();
    mostrar();
  }

  const mostrar = () =>{
    document.getElementById('documento').style.display ='block'
  }
  //obetener datos de la base de datos
  const getOrdenes = async () => {
    const res = await axios.get(URI)
    console.log(res.data)
    const result = res.data instanceof Array ? res.data : []
    setOrden(result)
    return;
  }

  //Eliminar datos de la base de datos

  const deleteOrden = async (id) => {
    await axios.delete(`${URI}${id}`)
    getOrdenes()
  }

  //Vista del componente
  return (
    <>
      <div className=" container__form">
        <Toast className='width__listado'> <div className="p-3  rounded">
          <ToastHeader className='center__title'>
            <h3>Listado Registro de Salidas</h3>
          </ToastHeader>
          <ToastBody >
            <Table>
              <thead className='table__medides'>
                <tr className='table__medides'>

                  <th>N. Consecutivo</th>
                  <th>Entregado a</th>
                  <th>Enviado por</th>
                  <th>Fecha</th>
                  <th className='ultimo__espacio'>Action</th>
                </tr>
              </thead>
              <tbody>
                {ordenes.map((orde) => (
                  <tr key={orde.id} className='table__medides'>
                    <td> {orde.consecutivo} </td>
                    <td> {orde.usuario_orden} </td>
                    <td> {orde.equipo} </td>
                    <td> {orde.fecha_salida} </td>
                    <td>
                      <Link to={`/editar/${orde.id}`} className='btn btn-info'><i className="fa-solid fa-file-pen"></i></Link>
                      <button onClick={() => deleteOrden(orde.id)} className='btn btn-danger'><i className="fa-sharp fa-solid fa-trash"></i></button>
                      <button  className='btn btn-primary' onClick={FuncionPrint}><i className="fa-solid fa-print"></i></button></td>
                      <div style={{display:'none'}}>
                      <div ref={componentRef} id='documento'><ComponentToPrint/></div>
                    
                      </div>
                  </tr>
                ))}
              </tbody>
            </Table>
            {/* Paginacion */}
            <Pagination />

          </ToastBody>
        </div>
        </Toast>
      </div>
      <Link to='/crear' className='btn btn-primary'> Crear</Link>
      {/*
      
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
                <button onClick={() => deleteOrden(orde.id)} className='btn btn-danger'>Eliminar</button></td>
            </tr>
          ))}
        </tbody>
      </table>*/
      }
    </>

  )
}

export default Showdb