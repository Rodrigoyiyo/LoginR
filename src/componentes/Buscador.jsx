const Buscador = ({ data, datafilter }) => {


    const inputHandler = (e) => {
        e.preventDefault();
        const buscarPalabra = e.target.value.toLowerCase();
        console.log('dataB',data)
        const resultado = data.filter((meal) =>
            
            meal.strMeal.toLowerCase().includes(buscarPalabra) || 
            meal.strCategory.toLowerCase().includes(buscarPalabra) ||
            meal.strArea.toLowerCase().includes(buscarPalabra)
        )

        datafilter(resultado)
    }


    return (
        <input
            className="form-control"
            type="text"
            placeholder="Buscador"
            onChange={inputHandler}>
        </input>
    )
};

export default Buscador