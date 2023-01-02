import * as React from "react";
import Api from "../../servidor/api.js"
import imgLog from '../assets/ah2c3-hrna4.001.jpeg'
import imgLin from '../assets/ah2c3-hrna4.002.png'
import axios from 'axios'
import { useState, useEffect, useRef } from 'react'
import './Doc.css'
import ReactToPrint from "react-to-print";

const ComponentToPrint = () => {
    const URI = Api

    const [ordenes, setOrden] = useState([]);

    const getOrdenes = async () => {
        const res = await axios.get(URI)
        console.log(res.data)
        //const result = res.data instanceof Array ? res.data : []
        setOrden(res.data)
        return;
      }

  return (
     <>
    <div>ComponentToPrint</div>
    <div className="document" >
            <p className="p__uno"></p>
            <p className="p__uno"></p>
            <table >
                <tbody><tr style={{ height: '32.3pt' }}>
                    <td rowSpan={2} style={{ width: '17.08%', borderStyle: 'solid', borderWidth: '0.75pt', paddingRight: '5.03pt', paddingLeft: '5.03pt', verticalAlign: 'top' }}>
                        <p className="p__dos"><span style={{ height: '0pt', display: 'block', position: 'absolute', zIndex: 0 }}><img src={imgLog} width="75pt" height="60" alt="" style={{ marginTop: '5.75pt', marginLeft: '7.3pt', AwLeftPos: '7.3pt', AwRelHpos: 'column', AwRelVpos: 'paragraph', AwTopPos: '5.75pt', AwWrapType: 'none', position: 'absolute' }} /></span><span >&nbsp;</span></p>
                    </td>
                    <td style={{ width: '45.24%', borderStyle: 'solid', borderWidth: '0.75pt', paddingRight: '5.03pt', paddingLeft: '5.03pt', verticalAlign: 'top' }}>
                        <p className="p__dos"><span >&nbsp;</span></p>
                        <p className="p__dos"><span >BOGOTA</span></p>
                    </td>
                    <td style={{ width: '37.68%', borderStyle: 'solid', borderWidth: '0.75pt', paddingRight: '5.03pt', paddingLeft: '5.03pt', verticalAlign: 'top' }}>
                        <p style={{ marginTop: '0pt', marginBottom: '0pt', textAlign: 'right', fontSize: '10pt' }}><span >Anexo Norma Nᵃ 088-89 </span></p>
                        <p style={{ marginTop: '0pt', marginBottom: '0pt', textAlign: 'right', fontSize: '10pt' }}><span >Forma 25-08 89</span></p>
                        <p style={{ marginTop: '0pt', marginBottom: '0pt', textAlign: 'right', fontSize: '10pt' }}><span >Consecutivo </span>
                            <span >N_CONSECUTIVO</span>
                        </p>
                    </td>
                </tr>
                    <tr style={{ height: '20.7pt' }}>
                        <td colSpan={2} style={{ borderStyle: 'solid', borderWidth: '0.75pt', paddingRight: '5.03pt', paddingLeft: '5.03pt', verticalAlign: 'top' }}>
                            <p style={{ marginTop: '0pt', marginBottom: '0pt', textAlign: 'center', fontSize: '10pt' }}><span style={{ fontFamily: '"Times New Roman"', fontWeight: 'bold' }}>ORDEN DE SALID</span><span style={{ fontFamily: '"Times New Roman"', fontWeight: 'bold' }}>A </span></p>
                        </td>
                    </tr>
                </tbody></table>
            <p className="p__dos"><a name="_Hlk47000084"><span >&nbsp;</span></a></p>
            <p className="p_dos"><a name="_Hlk89329548"><span >Fecha: </span><span >FECHA_RECEPCIÓNÁREA_CORRESPONDENCIA</span></a></p>
            <p className="p__dos"><span >&nbsp;</span></p>
            <p className="p__dos"><a name="_Hlk87338091" /><a name="_Hlk87604585"><span style={{ AwBookmarkEnd: '_Hlk47000084' }} /><span style={{ AwBookmarkEnd: '_Hlk89329548' }} /><span >El portador
                de la presente: </span><span style={{ fontFamily: '"Times New Roman"', textDecoration: 'underline' }}>
                </span><span style={{ fontFamily: '"Times New Roman"', textDecoration: 'underline' }}>
                </span><span > Identificado</span><span > con la C.C. No</span><span style={{ fontFamily: '"Times New Roman"', textDecoration: 'underline' }}> </span><span style={{ fontFamily: '"Times New Roman"', textDecoration: 'underline' }}>1</span><span style={{ fontFamily: '"Times New Roman"', textDecoration: 'underline' }}>.</span><span style={{ fontFamily: '"Times New Roman"', textDecoration: 'underline' }}>014</span><span style={{ fontFamily: '"Times New Roman"', textDecoration: 'underline' }}>.</span><span style={{ fontFamily: '"Times New Roman"', textDecoration: 'underline' }}>295</span><span style={{ fontFamily: '"Times New Roman"', textDecoration: 'underline' }}>.</span><span style={{ fontFamily: '"Times New Roman"', textDecoration: 'underline' }}>012</span><span style={{ fontFamily: '"Times New Roman"', textDecoration: 'underline' }}>.</span><span > </span><span >Realiza
                    entrega en </span><span >las dependencias de Caracol PISO7 los elementos relacionados a continuación:</span></a></p>
            <p style={{ marginTop: '0pt', marginBottom: '10pt', lineHeight: '115%', fontSize: '11pt' }}><a name="_Hlk113271667" /><a name="_Hlk108177278" /><a name="_Hlk108086898"><span style={{ fontFamily: '"Times New Roman"', fontSize: '10pt', fontWeight: 'bold' }}>Recibe: </span><span style={{ fontFamily: '"Times New Roman"', fontSize: '10pt' }}>Correspondencia</span><span style={{ fontFamily: '"Times New Roman"', fontSize: '10pt' }}>,</span><span style={{ fontFamily: '"Times New Roman"', fontSize: '10pt' }}> </span></a><a name="_Hlk89329621" /><a name="_Hlk88044633" /><a name="_Hlk90460178" /><a name="_Hlk92361505" /><a name="_Hlk94609246"><span style={{ AwBookmarkEnd: '_Hlk87338091' }} /><span style={{ AwBookmarkEnd: '_Hlk87604585' }} /><span style={{ fontFamily: '"Times New Roman"', fontSize: '10pt', fontWeight: 'bold' }}>Destino final</span><span style={{ fontFamily: '"Times New Roman"', fontSize: '10pt', fontWeight: 'bold' }}> </span>DESTINO<span style={{ fontFamily: '"Times New Roman"', fontSize: '10pt', fontWeight: 'bold' }}> </span><span style={{ fontFamily: '"Times New Roman"', fontSize: '10pt', fontWeight: 'bold' }}>Recibe:</span><span style={{ fontFamily: '"Times New Roman"', fontSize: '10pt' }}> </span><span style={{ fontFamily: '"Times New Roman"', fontSize: '10pt' }}>RECIBE </span><span style={{ fontFamily: '"Times New Roman"', fontSize: '10pt', fontWeight: 'bold' }}>Contacto:</span><span style={{ fontFamily: 'Calibri' }}> N_CONTACTO</span> </a></p>
            <table cellSpacing={0} cellPadding={0} style={{ width: '537.85pt', borderCollapse: 'collapse' }}>
                <tbody><tr style={{ height: '15.5pt' }}>
                    <td style={{ width: '75.4pt', borderStyle: 'solid', borderWidth: '0.75pt', paddingRight: '5.03pt', paddingLeft: '5.03pt', verticalAlign: 'top' }}>
                        <p style={{ marginTop: '0pt', marginBottom: '0pt', textAlign: 'center', fontSize: '11pt' }}><span style={{ AwBookmarkEnd: '_Hlk113271667' }} /><span style={{ AwBookmarkEnd: '_Hlk89329621' }} /><span style={{ AwBookmarkEnd: '_Hlk88044633' }} /><span style={{ fontFamily: 'Calibri', fontWeight: 'bold' }}>EQUIPO</span></p>
                    </td>
                    <td style={{ width: '49.2pt', borderStyle: 'solid', borderWidth: '0.75pt', paddingRight: '5.03pt', paddingLeft: '5.03pt', verticalAlign: 'top' }}>
                        <p style={{ marginTop: '0pt', marginBottom: '0pt', textAlign: 'center', fontSize: '11pt' }}><span style={{ fontFamily: 'Calibri', fontWeight: 'bold' }}>MARCA</span></p>
                    </td>
                    <td style={{ width: '152.25pt', borderStyle: 'solid', borderWidth: '0.75pt', paddingRight: '5.03pt', paddingLeft: '5.03pt', verticalAlign: 'top' }}>
                        <p style={{ marginTop: '0pt', marginBottom: '0pt', textAlign: 'center', fontSize: '11pt' }}><span style={{ fontFamily: 'Calibri', fontWeight: 'bold' }}>MODELO</span></p>
                    </td>
                    <td style={{ width: '85pt', borderStyle: 'solid', borderWidth: '0.75pt', paddingRight: '5.03pt', paddingLeft: '5.03pt', verticalAlign: 'top' }}>
                        <p style={{ marginTop: '0pt', marginBottom: '0pt', textAlign: 'center', fontSize: '11pt' }}><span style={{ fontFamily: 'Calibri', fontWeight: 'bold' }}>SERIAL</span></p>
                    </td>
                    <td style={{ width: '121.1pt', borderStyle: 'solid', borderWidth: '0.75pt', paddingRight: '5.03pt', paddingLeft: '5.03pt', verticalAlign: 'top' }}>
                        <p style={{ marginTop: '0pt', marginBottom: '0pt', textAlign: 'center', fontSize: '11pt' }}><span style={{ fontFamily: 'Calibri', fontWeight: 'bold' }}>PLACA INV</span></p>
                    </td>
                </tr>
                    <tr style={{ height: '16.3pt' }}>
                        <td style={{ width: '75.4pt', borderStyle: 'solid', borderWidth: '0.75pt', paddingRight: '5.03pt', paddingLeft: '5.03pt', verticalAlign: 'top' }}>
                            <p style={{ marginTop: '0pt', marginBottom: '0pt', textAlign: 'center', fontSize: '11pt' }}><span style={{ fontFamily: 'Calibri' }}>CLASE_DE_EQUIPO</span></p>
                        </td>
                        <td style={{ width: '49.2pt', borderStyle: 'solid', borderWidth: '0.75pt', paddingRight: '5.03pt', paddingLeft: '5.03pt', verticalAlign: 'top' }}>
                            <p style={{ marginTop: '0pt', marginBottom: '0pt', textAlign: 'center', fontSize: '11pt' }}><span style={{ fontFamily: 'Calibri' }}>MARCA</span></p>
                        </td>
                        <td style={{ width: '152.25pt', borderStyle: 'solid', borderWidth: '0.75pt', paddingRight: '5.03pt', paddingLeft: '5.03pt', verticalAlign: 'top' }}>
                            <p style={{ marginTop: '0pt', marginBottom: '0pt', textAlign: 'center', fontSize: '11pt' }}><span style={{ fontFamily: 'Calibri' }}> MODELO </span></p>
                        </td>
                        <td style={{ width: '85pt', borderStyle: 'solid', borderWidth: '0.75pt', paddingRight: '5.03pt', paddingLeft: '5.03pt', verticalAlign: 'top' }}>
                            <p style={{ marginTop: '0pt', marginBottom: '0pt', textAlign: 'center', fontSize: '11pt' }}><span style={{ fontFamily: 'Calibri' }}>SERIAL</span></p>
                        </td>
                        <td style={{ width: '121.1pt', borderStyle: 'solid', borderWidth: '0.75pt', paddingRight: '5.03pt', paddingLeft: '5.03pt', verticalAlign: 'top' }}>
                            <p style={{ marginTop: '0pt', marginBottom: '0pt', textAlign: 'center', fontSize: '11pt' }}><span style={{ fontFamily: 'Calibri' }}>IT-15956</span></p>
                        </td>
                    </tr>

                    <tr style={{ height: '15.5pt' }}>
                        <td colSpan={5} style={{ width: '526.3pt', borderStyle: 'solid', borderWidth: '0.75pt', paddingRight: '5.03pt', paddingLeft: '5.03pt', verticalAlign: 'top' }}>
                            <p style={{ marginTop: '0pt', marginBottom: '0pt', textAlign: 'center', fontSize: '11pt' }}><span style={{ fontFamily: 'Calibri' }}>Para evitar adiciones no autorizadas, trazar </span><span style={{ fontFamily: 'Calibri' }}>xxxx</span><span style={{ fontFamily: 'Calibri' }}> o rayas al
                                finalizar la relación</span></p>
                        </td>
                    </tr>
                </tbody></table>
            <p className="p__uno"><span >&nbsp;</span><span >&nbsp; </span><span style={{ AwBookmarkEnd: '_Hlk90460178' }} /><span > </span><span >&nbsp;</span><span > </span></p>
            <p className="p__uno"><span style={{ AwBookmarkEnd: '_Hlk108177278' }} /><span style={{ AwBookmarkEnd: '_Hlk92361505' }} /><span > </span><span style={{ AwBookmarkEnd: '_Hlk94609246' }} /><span > </span><span >&nbsp;</span><span > </span></p>
            <p style={{ marginTop: '0pt', marginLeft: '35.4pt', marginBottom: '0pt', fontSize: '10pt' }}><span style={{ AwBookmarkEnd: '_Hlk108086898' }} /><span >&nbsp;</span>
            </p>
            <p style={{ marginTop: '0pt', marginLeft: '35.4pt', marginBottom: '0pt', fontSize: '10pt' }}><span >&nbsp;</span></p>
            <p style={{ marginTop: '0pt', marginLeft: '35.4pt', marginBottom: '0pt', fontSize: '10pt' }}><span style={{ width: '163.35pt', display: 'inline-block', AwTabstopAlign: 'left', AwTabstopPos: '198.75pt' }}>&nbsp;</span><span >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></p>
            <p style={{ marginTop: '0pt', marginLeft: '35.4pt', marginBottom: '0pt', textIndent: '35.4pt', fontSize: '10pt' }}><span style={{ height: '0pt', display: 'block', position: 'absolute', zIndex: 6 }}><img src={imgLin} width={186} height={1} alt="" style={{ marginTop: '2.99pt', marginLeft: '122.9pt', AwLeftPos: '0pt', AwRelHpos: 'page', AwRelVpos: 'paragraph', AwTopPos: '3.37pt', AwWrapType: 'none', position: 'absolute' }} /></span><span style={{ height: '0pt', display: 'block', position: 'absolute', zIndex: 2 }}><img src={imgLin} width={186} height={1} alt="" style={{ marginTop: '2.93pt', marginLeft: '304.04pt', AwLeftPos: '375.21pt', AwRelHpos: 'column', AwRelVpos: 'paragraph', AwTopPos: '3.31pt', AwWrapType: 'none', position: 'absolute' }} /></span><span style={{ height: '0pt', display: 'block', position: 'absolute', zIndex: 1 }}><img src={imgLin} width={186} height={1} alt="" style={{ marginTop: '3.62pt', marginLeft: '-43.96pt', AwLeftPos: '27.22pt', AwRelHpos: 'column', AwRelVpos: 'paragraph', AwTopPos: '4pt', AwWrapType: 'none', position: 'absolute' }} /></span><span >&nbsp;</span></p>
            <p style={{ marginTop: '0pt', marginLeft: '35.4pt', marginBottom: '0pt', textIndent: '14.25pt', fontSize: '10pt' }}><span style={{ fontFamily: '"Times New Roman"', fontWeight: 'bold' }}>Firma del autorizado.</span><span style={{ fontFamily: '"Times New Roman"', fontWeight: 'bold' }}> </span><span style={{ width: '31.81pt', textIndent: '0pt', display: 'inline-block' }}>&nbsp;</span><span style={{ width: '35.4pt', textIndent: '0pt', display: 'inline-block' }}>&nbsp;</span><span style={{ fontFamily: '"Times New Roman"', fontWeight: 'bold' }}>Firma </span><span style={{ fontFamily: '"Times New Roman"', fontWeight: 'bold' }}>quien recibe</span><span style={{ fontFamily: '"Times New Roman"', fontWeight: 'bold' }}></span><span style={{ fontFamily: '"Times New Roman"', fontWeight: 'bold' }}>i</span><span style={{ fontFamily: '"Times New Roman"', fontWeight: 'bold' }}>a</span><span style={{ fontFamily: '"Times New Roman"', fontWeight: 'bold' }}>.</span><span style={{ width: '4pt', textIndent: '0pt', display: 'inline-block' }}>&nbsp;</span><span style={{ width: '35.4pt', textIndent: '0pt', display: 'inline-block' }}>&nbsp;</span><span style={{ width: '35.4pt', textIndent: '0pt', display: 'inline-block' }}>&nbsp;</span><span style={{ fontFamily: '"Times New Roman"', fontWeight: 'bold' }}>Firma de quien autoriza.</span></p>
            <p style={{ marginTop: '0pt', marginLeft: '35.4pt', marginBottom: '0pt', textIndent: '14.25pt', fontSize: '10pt' }}><span style={{ fontFamily: '"Times New Roman"', fontWeight: 'bold' }}>&nbsp;</span></p>
            <p style={{ marginTop: '0pt', marginLeft: '35.4pt', marginBottom: '0pt', textIndent: '14.25pt', fontSize: '10pt' }}><span style={{ fontFamily: '"Times New Roman"', fontWeight: 'bold' }}>&nbsp;</span></p>
            <p style={{ marginTop: '0pt', marginLeft: '35.4pt', marginBottom: '0pt', textIndent: '14.25pt', fontSize: '10pt' }}><span style={{ fontFamily: '"Times New Roman"', fontWeight: 'bold' }}>&nbsp;</span></p>
            <p style={{ marginTop: '0pt', marginLeft: '35.4pt', marginBottom: '0pt', textIndent: '14.25pt', fontSize: '10pt' }}><span style={{ fontFamily: '"Times New Roman"', fontWeight: 'bold' }}>&nbsp;</span></p>
            <table cellSpacing={0} cellPadding={0} style={{ width: '98.66%', borderCollapse: 'collapse' }}>
                <tbody><tr style={{ height: '32.3pt' }}>
                    <td rowSpan={2} style={{ width: '17.3%', borderStyle: 'solid', borderWidth: '0.75pt', paddingRight: '5.03pt', paddingLeft: '5.03pt', verticalAlign: 'top' }}>
                        <p className="p__dos"><span style={{ height: '0pt', display: 'block', position: 'absolute', zIndex: 5 }}><img src={imgLog} width={75} height={60} alt="Logotipo, nombre de la empresa

Descripción generada automáticamente" style={{ marginTop: '5.75pt', marginLeft: '7.3pt', AwLeftPos: '7.3pt', AwRelHpos: 'column', AwRelVpos: 'paragraph', AwTopPos: '5.75pt', AwWrapType: 'none', position: 'absolute' }} /></span>
                        </p>
                    </td>
                    <td style={{ width: '45.82%', borderStyle: 'solid', borderWidth: '0.75pt', paddingRight: '5.03pt', paddingLeft: '5.03pt', verticalAlign: 'top' }}>
                        <p className="p__dos"><span >&nbsp;</span></p>
                        <p className="p__dos"><span >BOGOTA</span></p>
                    </td>
                    <td style={{ width: '36.88%', borderStyle: 'solid', borderWidth: '0.75pt', paddingRight: '5.03pt', paddingLeft: '5.03pt', verticalAlign: 'top' }}>
                        <p style={{ marginTop: '0pt', marginBottom: '0pt', textAlign: 'right', fontSize: '10pt' }}><span >Anexo Norma Nᵃ 088-89 </span></p>
                        <p style={{ marginTop: '0pt', marginBottom: '0pt', textAlign: 'right', fontSize: '10pt' }}><span >Forma 25-08 89</span></p>
                        <p style={{ marginTop: '0pt', marginBottom: '0pt', textAlign: 'right', fontSize: '10pt' }}><span >Consecutivo </span><span >3</span><span >12</span><span >AC</span></p>
                    </td>
                </tr>
                    <tr style={{ height: '20.7pt' }}>
                        <td colSpan={2} style={{ borderStyle: 'solid', borderWidth: '0.75pt', paddingRight: '5.03pt', paddingLeft: '5.03pt', verticalAlign: 'top' }}>
                            <p style={{ marginTop: '0pt', marginBottom: '0pt', textAlign: 'center', fontSize: '10pt' }}><span style={{ fontFamily: '"Times New Roman"', fontWeight: 'bold' }}>ORDEN DE SALID</span><span style={{ fontFamily: '"Times New Roman"', fontWeight: 'bold' }}>A </span><span style={{ fontFamily: '"Times New Roman"', fontWeight: 'bold' }}>PARA SEGURIDAD</span></p>
                        </td>
                    </tr>
                </tbody></table>
            <p className="p__dos"><span >&nbsp;</span></p>
            <p className="p__dos"><span >Fecha:
            </span><span >FECHA_RECEPCIÓN_ÁREA_CORRESPONDENCIA</span></p>
            <p className="p_dos"><span >El portador de la presente: </span><span >RECIBE</span><span > Identificado con la C.C. </span><span >N°</span><span > </span><span >______</span><span >. </span><span >Realiza
                entrega en las dependencias de Caracol PISO 7 los elementos relacionados a continuación:</span><span style={{ fontFamily: '"Times New Roman"', fontWeight: 'bold' }}> </span></p>
            <p style={{ marginTop: '0pt', marginBottom: '10pt', lineHeight: '115%', fontSize: '11pt' }}><span style={{ fontFamily: '"Times New Roman"', fontSize: '10pt', fontWeight: 'bold' }}>Recibe: </span><span style={{ fontFamily: '"Times New Roman"', fontSize: '10pt' }}>Correspondencia</span><span style={{ fontFamily: '"Times New Roman"', fontSize: '10pt' }}>,</span><span style={{ fontFamily: '"Times New Roman"', fontSize: '10pt' }}> </span><span style={{ fontFamily: '"Times New Roman"', fontSize: '10pt', fontWeight: 'bold' }}>Destino final</span><span style={{ fontFamily: '"Times New Roman"', fontSize: '10pt', fontWeight: 'bold' }}> </span><span>DESTINO</span>
                <span style={{ fontFamily: '"Times New Roman"', fontSize: '10pt', fontWeight: 'bold' }}>&nbsp;</span><span style={{ fontFamily: '"Times New Roman"', fontSize: '10pt', fontWeight: 'bold' }}> </span><span style={{ fontFamily: '"Times New Roman"', fontSize: '10pt', fontWeight: 'bold' }}>&nbsp;</span><span style={{ fontFamily: '"Times New Roman"', fontSize: '10pt', fontWeight: 'bold' }}>1-121</span><span style={{ fontFamily: '"Times New Roman"', fontSize: '10pt', fontWeight: 'bold' }}> </span><span style={{ fontFamily: '"Times New Roman"', fontSize: '10pt', fontWeight: 'bold' }}>Recibe:</span><span style={{ fontFamily: '"Times New Roman"', fontSize: '10pt' }}> </span><span style={{ fontFamily: '"Times New Roman"', fontSize: '10pt' }}>RECIBE</span><span style={{ fontFamily: 'Calibri' }}> </span><span style={{ fontFamily: '"Times New Roman"', fontSize: '10pt', fontWeight: 'bold' }}>Contacto:</span><span style={{ fontFamily: 'Calibri' }}>N_CONTACTO </span></p>
            <table cellSpacing={0} cellPadding={0} style={{ width: '509.75pt', borderCollapse: 'collapse' }}>
                <tbody><tr style={{ height: '15pt' }}>
                    <td style={{ width: '76pt', borderTopStyle: 'solid', borderTopWidth: '0.75pt', borderRightStyle: 'solid', borderRightWidth: '0.75pt', borderLeftStyle: 'solid', borderLeftWidth: '0.75pt', paddingRight: '3.12pt', paddingLeft: '3.12pt', verticalAlign: 'middle', backgroundColor: '#ffffff' }}>
                        <p style={{ marginTop: '0pt', marginBottom: '0pt', textAlign: 'center', fontSize: '11pt' }}><span style={{ fontFamily: 'Calibri', fontWeight: 'bold' }}>EQUIPO</span></p>
                    </td>
                    <td style={{ width: '47pt', borderTopStyle: 'solid', borderTopWidth: '0.75pt', borderRightStyle: 'solid', borderRightWidth: '0.75pt', paddingRight: '3.12pt', paddingLeft: '3.5pt', verticalAlign: 'middle', backgroundColor: '#ffffff' }}>
                        <p style={{ marginTop: '0pt', marginBottom: '0pt', textAlign: 'center', fontSize: '11pt' }}><span style={{ fontFamily: 'Calibri', fontWeight: 'bold' }}>MARCA</span></p>
                    </td>
                    <td style={{ width: '150pt', borderTopStyle: 'solid', borderTopWidth: '0.75pt', borderRightStyle: 'solid', borderRightWidth: '0.75pt', paddingRight: '3.12pt', paddingLeft: '3.5pt', verticalAlign: 'middle', backgroundColor: '#ffffff' }}>
                        <p style={{ marginTop: '0pt', marginBottom: '0pt', textAlign: 'center', fontSize: '11pt' }}><span style={{ fontFamily: 'Calibri', fontWeight: 'bold' }}>MODELO</span></p>
                    </td>
                    <td style={{ width: '81pt', borderTopStyle: 'solid', borderTopWidth: '0.75pt', borderRightStyle: 'solid', borderRightWidth: '0.75pt', paddingRight: '3.12pt', paddingLeft: '3.5pt', verticalAlign: 'middle', backgroundColor: '#ffffff' }}>
                        <p style={{ marginTop: '0pt', marginBottom: '0pt', textAlign: 'center', fontSize: '11pt' }}><span style={{ fontFamily: 'Calibri', fontWeight: 'bold' }}>SERIAL</span></p>
                    </td>
                    <td style={{ width: '120pt', borderTopStyle: 'solid', borderTopWidth: '0.75pt', borderRightStyle: 'solid', borderRightWidth: '0.75pt', paddingRight: '3.12pt', paddingLeft: '3.5pt', verticalAlign: 'middle', backgroundColor: '#ffffff' }}>
                        <p style={{ marginTop: '0pt', marginBottom: '0pt', textAlign: 'center', fontSize: '11pt' }}><span style={{ fontFamily: 'Calibri', fontWeight: 'bold' }}>PLACA INV</span></p>
                    </td>
                </tr>
                    <tr style={{ height: '16.3pt' }}>
                        <td style={{ width: '75.4pt', borderStyle: 'solid', borderWidth: '0.75pt', paddingRight: '5.03pt', paddingLeft: '5.03pt', verticalAlign: 'top' }}>
                            <p style={{ marginTop: '0pt', marginBottom: '0pt', textAlign: 'center', fontSize: '11pt' }}><span style={{ fontFamily: 'Calibri' }}>CLASE_DE_EQUIPO</span></p>
                        </td>
                        <td style={{ width: '49.2pt', borderStyle: 'solid', borderWidth: '0.75pt', paddingRight: '5.03pt', paddingLeft: '5.03pt', verticalAlign: 'top' }}>
                            <p style={{ marginTop: '0pt', marginBottom: '0pt', textAlign: 'center', fontSize: '11pt' }}><span style={{ fontFamily: 'Calibri' }}>MARCA</span></p>
                        </td>
                        <td style={{ width: '152.25pt', borderStyle: 'solid', borderWidth: '0.75pt', paddingRight: '5.03pt', paddingLeft: '5.03pt', verticalAlign: 'top' }}>
                            <p style={{ marginTop: '0pt', marginBottom: '0pt', textAlign: 'center', fontSize: '11pt' }}><span style={{ fontFamily: 'Calibri' }}> MODELO</span></p>
                        </td>
                        <td style={{ width: '85pt', borderStyle: 'solid', borderWidth: '0.75pt', paddingRight: '5.03pt', paddingLeft: '5.03pt', verticalAlign: 'top' }}>
                            <p style={{ marginTop: '0pt', marginBottom: '0pt', textAlign: 'center', fontSize: '11pt' }}><span style={{ fontFamily: 'Calibri' }}>SERIAL</span></p>
                        </td>
                        <td style={{ width: '121.1pt', borderStyle: 'solid', borderWidth: '0.75pt', paddingRight: '5.03pt', paddingLeft: '5.03pt', verticalAlign: 'top' }}>
                            <p style={{ marginTop: '0pt', marginBottom: '0pt', textAlign: 'center', fontSize: '11pt' }}><span style={{ fontFamily: 'Calibri' }}>IT-15956</span></p>
                        </td>
                    </tr>
                    <tr style={{ height: '15pt' }}>
                        <td colSpan={5} style={{ width: '502pt', borderLeftStyle: 'solid', borderLeftWidth: '0.75pt', borderBottomStyle: 'solid', borderBottomWidth: '0.75pt', paddingRight: '3.5pt', paddingLeft: '3.12pt', verticalAlign: 'bottom' }}>
                            <p style={{ marginTop: '0pt', marginBottom: '0pt', textAlign: 'center', fontSize: '11pt' }}><span style={{ fontFamily: 'Calibri' }}>Para evitar adiciones no autorizadas, trazar </span><span style={{ fontFamily: 'Calibri' }}>xxxx</span><span style={{ fontFamily: 'Calibri' }}> o rayas al
                                finalizar la relación</span></p>
                        </td>
                    </tr>
                </tbody></table>
            <p className="p__uno"><span >&nbsp;</span><span >&nbsp;&nbsp;&nbsp;&nbsp; </span>
            </p>
            <p className="p__uno"><span >&nbsp;</span></p>
            <p className="p__uno"><span >&nbsp;</span></p>
            <p style={{ marginTop: '0pt', marginLeft: '35.4pt', marginBottom: '0pt', fontSize: '10pt' }}><span style={{ width: '163.35pt', display: 'inline-block', AwTabstopAlign: 'left', AwTabstopPos: '198.75pt' }}>&nbsp;</span><span >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></p>
            <p style={{ marginTop: '0pt', marginLeft: '35.4pt', marginBottom: '0pt', textIndent: '35.4pt', fontSize: '10pt' }}><span style={{ height: '0pt', display: 'block', position: 'absolute', zIndex: 3 }}><img src={imgLin} width={186} height={1} alt="" style={{ marginTop: '3.62pt', marginLeft: '-42.55pt', AwLeftPos: '28.63pt', AwRelHpos: 'column', AwRelVpos: 'paragraph', AwTopPos: '4pt', AwWrapType: 'none', position: 'absolute' }} /></span><span style={{ height: '0pt', display: 'block', position: 'absolute', zIndex: 4 }}><img src={imgLin} width={186} height={1} alt="" style={{ marginTop: '3.62pt', marginLeft: '300.59pt', AwLeftPos: '371.77pt', AwRelHpos: 'column', AwRelVpos: 'paragraph', AwTopPos: '4pt', AwWrapType: 'none', position: 'absolute' }} /></span><span >&nbsp;</span></p>
            <p style={{ marginTop: '0pt', marginLeft: '35.4pt', marginBottom: '0pt', textIndent: '14.25pt', fontSize: '10pt' }}><span style={{ fontFamily: '"Times New Roman"', fontWeight: 'bold' }}>Firma del autorizado.</span><span style={{ fontFamily: '"Times New Roman"', fontWeight: 'bold' }}> </span><span style={{ width: '31.81pt', textIndent: '0pt', display: 'inline-block' }}>&nbsp;</span><span style={{ width: '35.4pt', textIndent: '0pt', display: 'inline-block' }}>&nbsp;</span><span style={{ width: '35.4pt', textIndent: '0pt', display: 'inline-block' }}>&nbsp;</span><span style={{ width: '35.4pt', textIndent: '0pt', display: 'inline-block' }}>&nbsp;</span><span style={{ width: '35.4pt', textIndent: '0pt', display: 'inline-block' }}>&nbsp;</span><span style={{ width: '35.4pt', textIndent: '0pt', display: 'inline-block' }}>&nbsp;</span><span style={{ width: '35.4pt', textIndent: '0pt', display: 'inline-block' }}>&nbsp;</span><span style={{ fontFamily: '"Times New Roman"', fontWeight: 'bold' }}>Firma de quien autoriza.</span></p>

        </div>
    </>

    );
  }


export default ComponentToPrint;



