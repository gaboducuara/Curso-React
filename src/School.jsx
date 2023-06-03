import PropTypes from 'prop-types'

export const School = ({name}) => {
  return (
    <>
        <h1>{name}</h1>
    </>
  )
}

School.propTypes = {
    name:PropTypes.string.isRequired
}

School.defaultProps = {
    name: 'El colegio no tiene nombre'
}