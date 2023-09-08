import React from 'react'


const Listado = ({ data, setData, dataFilter, setDataFilter }) => {

    const borrarColaborador = (idComida) => {


        const comidas = data.filter(meal =>
            meal.idMeal !== idComida
        )
        setData(comidas)

        const comidasFiltradas = dataFilter.filter(colaborador =>
            colaborador.id !== idComida
        )
        setDataFilter(comidasFiltradas)

    }

    console.log(dataFilter)
    const bodyTabla = dataFilter.map((meal) => (
        <tr key={meal.idMeal}>
            <td>{meal.strMeal}</td>
            <td>{meal.strCategory}</td>
            <td>{meal.strArea}</td>
            <td>

                <button
                    className="btn btn-danger"
                    type="button"
                    onClick={e => borrarColaborador(colaborador.id)}
                >Borrar</button>
            </td>
        </tr>
    ));

    return (
        <div className="table-responsive">
            <table className="table table-striped my-4">
                <thead style={{ backgroundColor: "#3282b8", color: "#bbe1fa" }}>
                    <tr>
                        <th scope="col">Meal</th>
                        <th scope="col">Category</th>
                        <th scope="col">Area</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody className="table-primary  my-4">
                    {bodyTabla}
                </tbody>
            </table>
        </div>
    )
}



export default Listado