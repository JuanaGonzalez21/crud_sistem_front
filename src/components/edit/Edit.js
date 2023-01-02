import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Api from '../../servidor/api'
import { Link } from 'react-router-dom'

const Edit = () => {
  const [n_consecutivo, setN_consecutivo] = useState('');
  const [consecutivo, setConsecutivo] = useState('');
  const [agente_envia, setAgente_envia] = useState('');
  const [area_envia, setArea_envia] = useState('');
  const navigate = useNavigate()
  
  const {id} = useParams()

  const update = async (e)=> {
    e.preventDefault()
    await axios.put(Api + id,{
      n_consecutivo : n_consecutivo,
      consecutivo : consecutivo,
      agente_envia : agente_envia,
      area_envia : area_envia
    })
    navigate('/')
  }

  useEffect(() => {
    getOrderById()
  }, []);

  const getOrderById= async () => {
    const res =await axios.get(Api+id)
    setN_consecutivo(res.data.n_consecutivo)
    setConsecutivo(res.data.consecutivo)
    setAgente_envia(res.data.agente_envia)
    setArea_envia(res.data.area_envia)
  }
  
  return (
    <>
    <div>      
      <h3>Actualizar orden de salida</h3>
      <form onSubmit={update}>
          <label className='form-label'>n_consecutivo</label>
          <input 
            value={n_consecutivo}
            onChange={(e)=> setN_consecutivo(e.target.value)}
            type='text'>  
          </input>
          <label className='form-label'>consecutivo</label>
          <input 
            value={consecutivo}
            onChange={(e)=> setConsecutivo(e.target.value)}
            type='number'>
  </input>
          <label className='form-label'>Agente</label>
          <input 
            value={agente_envia}
            onChange={(e)=> setAgente_envia(e.target.value)}
            type='text'>
          </input>
          <label className='form-label'>Areas</label>
          <input 
            value={area_envia}
            onChange={(e)=> setArea_envia(e.target.value)}
            type='text'>
          </input>
          <button type='submit' className='btn btn-primary'> Subir</button>
      </form>
      <Link to={'/'} className='btn btn-info'>Volver</Link>
      </div>
    </>
    
  )
}

export default Edit