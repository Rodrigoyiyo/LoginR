import { useState } from "react"
import Alert from "./Alert";


const Formulario = ({ data, setDatax, dataFilter, setDataFilter, alert, setAlert }) => {


    const [formularioData, setFormularioData] = useState({
        nombre: '',
        correo: '',
        edad: '',
        cargo: '',
        telefono: ''
    })



    const validarFormulario = (e) => {
        e.preventDefault();

        const { nombre, correo, edad, cargo, telefono } = formularioData;
        const validarInput = !nombre || !correo || !edad || !cargo || !telefono;
        const formatoEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
        const validarEmail = !formatoEmail.test(correo)

        if (validarInput) {

            setAlert({
                error: true,
                msg: 'Complete los campos',
                color: 'danger',
            })
            return
        }
        else {
            setAlert({
                error: false,
                msg: 'Colaborador agregado exitosamente',
                color: 'success',
            });
        }

        if (validarEmail) {
            setAlert({
                error: true,
                msg: 'email incorrecto',
                color: 'danger'
            })
            return
        }

        setDatax([...data, { ...formularioData, id: 8 }])
        setDataFilter([...dataFilter, { ...formularioData, id: 8 }])



        setFormularioData({
            nombre: '',
            correo: '',
            edad: '',
            cargo: '',
            telefono: ''

        });


        setTimeout(() => {
            setAlert({
                error: '',
                msg: '',
                color: '',
            })
        }, 5000);
    }

    const handlerChange = (e) => {
        setFormularioData({
            ...formularioData, [e.target.name]: e.target.value
        })
    }




    return (
        <>
            <div id="contenedor">
                <div id="central">
                    <div id="login">
                        <div className="titulo">
                            Nuevo colaborador
                        </div>
                        <form
                            id="loginform"
                            onSubmit={validarFormulario}>
                            <input
                                type="text"
                                name="nombre"
                                placeholder="nombre"
                                onChange={handlerChange}
                                value={formularioData.nombre} />

                            <input
                                type="email"
                                name="correo"
                                placeholder="email"
                                onChange={handlerChange}
                                value={formularioData.correo} />


                            <input
                                type="text"
                                name="edad"
                                placeholder="edad"
                                onChange={handlerChange}
                                value={formularioData.edad} />

                            <input
                                type="text"
                                name="cargo"
                                placeholder="cargo"
                                onChange={handlerChange}
                                value={formularioData.cargo} />


                            <input
                                type="text"
                                name="telefono"
                                placeholder="telefono"
                                onChange={handlerChange}
                                value={formularioData.telefono} />

                            <button
                                type="submit"
                                name="Ingresar">
                                Agregar
                            </button>
                        </form>
                        {alert.msg && <Alert color={alert.color} messagge={alert.msg} ></Alert>}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Formulario