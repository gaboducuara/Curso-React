import PropTypes  from 'prop-types'

export const FirtsApp = ( {
  title, 
  subTitle,
  name,
  lastName
} ) => {

  return (
    <>  
        <h1 data-testid="test-title">{title}</h1>
        <h2>{subTitle}</h2>
        <h2>{subTitle}</h2>
        <h3>{name}</h3>
        <h3>{lastName}</h3>
    </>  
  )
}
// LOS PROPTYPES
FirtsApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle:PropTypes.string.isRequired,
  name:PropTypes.string.isRequired,
  lastName:PropTypes.string.isRequired,
}

FirtsApp.defaultProps = {
  // title: 'NO HAY TITULO',
  subTitle:'No hay Subtitulo',
  name:'Gabriel',
  lastName:'Mancilla Ducuara'
}