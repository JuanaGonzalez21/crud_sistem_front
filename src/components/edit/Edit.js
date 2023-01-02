import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Api from '../../servidor/api'
import { Link } from 'react-router-dom'
import { Form, FormGroup, Label, Input, FormText, Col, Row } from "reactstrap"
import { ToastHeader, Toast, ToastBody } from 'reactstrap';
const Edit = () => {
  const [ticket_problema, setTicket_problema] = useState('');
  const [ticket_envio, setTicket_envio] = useState('');
  const [fecha_llegada_correspondencia, setFecha_llegada_correspondencia] = useState('');
  const [n_guia, setN_guia] = useState('');
  const [fecha_salida, setFecha_salida] = useState('');
  const [destino, setDestino] = useState('');
  const [usuario_orden, setUsuario_orden] = useState('');
  const [n_contacto, setN_contacto] = useState('');
  const [agente_envia, setAgente_envia] = useState('');
  const [consecutivo, setConsecutivo] = useState('');
  const [n_consecutivo, setN_consecutivo] = useState('');
  const [area_envia, setArea_envia] = useState('');
  const [equipo, setEquipo] = useState('');
  const [marca, setMarca] = useState('');
  const [modelo, setModelo] = useState('');
  const [serial, setSerial] = useState('');
  const [placa, setPlaca] = useState('');
  const navigate = useNavigate()
  
  const {id} = useParams()

  const update = async (e)=> {
    e.preventDefault()
    await axios.put(Api + id,{
      ticket_problema: ticket_problema,
        ticket_envio: ticket_envio,
        fecha_llegada_correspondencia: fecha_llegada_correspondencia,
        n_guia: n_guia,
        fecha_salida: fecha_salida,
        destino: destino,
        usuario_orden: usuario_orden,
        n_contacto: n_contacto,
        agente_envia: agente_envia,
        consecutivo: consecutivo,
        n_consecutivo: n_consecutivo,
        area_envia: area_envia,
        equipo: equipo,
        marca: marca,
        modelo: modelo,
        serial: serial,
        placa: placa
    })
    navigate('/')
  }

  useEffect(() => {
    getOrderById()
  }, []);

  const getOrderById= async () => {
    const res =await axios.get(Api+id)
    setTicket_envio(res.data.ticket_envio)
    setTicket_problema(res.data.ticket_problema)
    setFecha_llegada_correspondencia(res.data.fecha_llegada_correspondencia)
    setN_guia(res.data.n_guia)
    setFecha_salida(res.data.fecha_salida)
    setDestino(res.data.destino)
    setUsuario_orden(res.data.usuario_orden)
    setN_contacto(res.data.n_contacto)
    setAgente_envia(res.data.agente_envia)
    setConsecutivo(res.data.consecutivo)
    setN_consecutivo(res.data.n_consecutivo)
    setArea_envia(res.data.area_envia)
    setEquipo(res.data.equipo)
    setMarca(res.data.marca)
    setModelo(res.data.modelo)
    setSerial(res.data.serial)
    setPlaca(res.data.placa)
  }
  
  return (
    <>
    <div className=" container__form">
        <Toast className='width__listado'>
          <div className="">
            <ToastBody className="espace__none" >
              <div className="container__form">
                <Form onSubmit={update}> <Row>
                  <div className="title__crear">
                    <h3> Registro de ordenes de salida</h3>
                    <div className="end__crear">
                      <div className="end__crear">
                        <h5>Consecutivo: </h5>
                        <h6>
                          <input className="input__crear" value={consecutivo}
                            onChange={(e) => setConsecutivo(e.target.value)}
                            type='text' />
                        </h6>
                      </div>
                      <div>
                        <h5>N_Consecutivo:</h5>
                        <h6><input className="input__crear" value={n_consecutivo}
                          onChange={(e) => setN_consecutivo(e.target.value)}
                          type='text' /></h6>
                      </div>
                      <div>
                        <h5>Fecha:</h5>
                        <h6><input className="input__crear" value={fecha_salida}
                          onChange={(e) => setFecha_salida(e.target.value)}
                          type='date' /></h6>
                      </div>
                    </div>
                  </div>
                </Row>
                  <Row>
                    <Col md={4}>
                      <FormGroup switch>
                        <Label for="exampleEmail"> Se entrega a: </Label>
                        <Input className="input__crear" value={usuario_orden}
                          onChange={(e) => setUsuario_orden(e.target.value)}
                          type='text' />
                      </FormGroup>
                    </Col>

                    <Col md={4}>
                      <FormGroup>
                        <Label for="examplePassword">
                          Entrega:
                        </Label>
                        <Input className="input__crear" value={agente_envia}
                          onChange={(e) => setAgente_envia(e.target.value)}
                          type='select' >
                          <option></option>
                          <option>Andres Cepeda</option>
                          <option>Duvan Gonzalez</option>
                          <option>Rafael Mindiola</option>
                          <option>Yeimi Wilches</option>
                          <option>Tatiana Mendoza</option>

                        </Input>
                      </FormGroup>
                    </Col>
                  </Row>
                  <FormGroup>
                    <Row>
                      <Col md={3}>
                        <Label for="exampleAddress">Equipo: </Label>
                        <Input className="input__crear" value={equipo}
                          onChange={(e) => setEquipo(e.target.value)}
                          type='text' />                                                    </Col>
                      <Col md={2}>
                        <Label for="exampleAddress">Marca:</Label>
                        <Input className="input__crear" value={marca}
                          onChange={(e) => setMarca(e.target.value)}
                          type='text' />                                                    </Col>
                      <Col md={2}>
                        <Label for="exampleAddress">Modelo</Label>
                        <Input className="input__crear" value={modelo}
                          onChange={(e) => setModelo(e.target.value)}
                          type='text' />                                                    </Col><Col md={2}>
                        <Label for="exampleAddress">Serial</Label>
                        <Input className="input__crear" value={serial}
                          onChange={(e) => setSerial(e.target.value)}
                          type='text' />                                                    </Col><Col md={3}>
                        <Label for="exampleAddress">Placa</Label>
                        <Input className="input__crear" value={placa}
                          onChange={(e) => setPlaca(e.target.value)}
                          type='text' />                                                    </Col>
                    </Row>
                  </FormGroup>
                  <FormGroup  >
                    <div >
                      <Row >
                        <Col md={3}>
                          <Label for="exampleAddress2">
                            Destino
                          </Label>
                          <Input className="input__crear" value={destino}
                            onChange={(e) => setDestino(e.target.value)}
                            type='text' />                                                        </Col>

                        <Col md={3}>
                          <Label for="exampleAddress2">
                            Número de contacto
                          </Label>
                          <Input className="input__crear" value={n_contacto}
                            onChange={(e) => setN_contacto(e.target.value)}
                            type='text' />                                                        </Col>
                        <Col md={3}>
                          <Label for="exampleAddress2">
                            Número de guía
                          </Label>
                          <Input className="input__crear" value={n_guia}
                            onChange={(e) => setN_guia(e.target.value)}
                            type='text' />                                                        </Col>

                        <Col md={4}>
                          <Label for="exampleAddress2">
                            Fecha de envio:
                          </Label>
                          <Input className="input__crear" value={fecha_llegada_correspondencia}
                            onChange={(e) => setFecha_llegada_correspondencia(e.target.value)}
                            type='date' />                                                        </Col>

                        <Col md={4}>
                          <Label for="exampleAddress2">
                            Área que envia
                          </Label>
                          <Input className="input__crear" value={area_envia}
                            onChange={(e) => setArea_envia(e.target.value)}
                            type='text' />                                                        </Col>

                      </Row>
                    </div>
                  </FormGroup>
                  <FormGroup >
                    <Row >
                      <Col md={4}>
                        <Label for="exampleAddress2">
                          Ticket Raíz
                        </Label>
                        <Input className="input__crear" value={ticket_problema}
                          onChange={(e) => setTicket_problema(e.target.value)}
                          type='text' />                                                    </Col><Col md={4}>
                        <Label for="exampleAddress2">
                          Ticket de envio
                        </Label>
                        <Input className="input__crear" value={ticket_envio}
                          onChange={(e) => setTicket_envio(e.target.value)}
                          type='text' />                                                    </Col>

                    </Row>
                  </FormGroup>


                  <button type='submit' className='btn btn-primary'> Subir</button>
                </Form>
              </div>
            </ToastBody>
            <Link to={'/'} className='btn btn-info'>Volver</Link>
          </div>
        </Toast>
      </div >
    {/* 
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
      */}
    </>
    
  )
}

export default Edit