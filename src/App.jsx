import './App.css'
import './login.css'
import Listado from './componentes/Listado';
import { useEffect, useState } from 'react';
import Buscador from './componentes/Buscador';
import Formulario from './componentes/Formulario';

function App() {

  const [data, setData] = useState([])
  const [dataFilter, setDataFilter] = useState(data)

  const [alert, setAlert] = useState({
    error: false,
    msg: '',
    color: '',
  });

  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=chicken')
      .then((response) => {
        return response.json()
      })
      .then((comidas) => {
        console.log(comidas.meals)
        setData(comidas.meals)
        setDataFilter(data)
      })
  }, [])


  /*postData("https://www.themealdb.com/api/json/v1/1/search.php?s=chicken").then((respuesta) => {
    console.log(respuesta.meals); // JSON data parsed by `data.json()` call
    const meals = (respuesta && respuesta.meals && Array.isArray(respuesta.meals)) ? respuesta.meals : [];
    setData({ meals })
    setDataFilter({ data })

    //return respuesta;
  });*/

  return (
    <>
      <Buscador data={data} datafilter={setDataFilter} />
      <Listado
        data={data}
        setData={setData}
        dataFilter={dataFilter}
        setDataFilter={setDataFilter} />
      {/*<Formulario
        data={data}
        setDatax={setData}
        dataFilter={dataFilter}
        setDataFilter={setDataFilter}
        alert={alert}
  setAlert={setAlert} />*/}

    </>
  )
}
export default App;
