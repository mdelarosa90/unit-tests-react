import React from 'react'
import PropTypes from 'prop-types';

const PrimeraApp = ({saludo, subtitulo }) => {
    // const saludo = 'Hola mundo';
    return (
        <React.Fragment>
            {/* <pre>{JSON.stringify(saludo, null, 3)}</pre> */}
            <h1>Hola Mundo</h1>
            <h2>{saludo}</h2>
            <p>{subtitulo}</p>
        </React.Fragment>
    )
}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
    subtitulo: 'Soy un subtítulo'
}

export default PrimeraApp
