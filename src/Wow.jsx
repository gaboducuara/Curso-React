import PropTypes from 'prop-types'

export const Wow = ({ igor }) => {
  return (
    <>
        <h1>{igor}</h1>
    </>
  )
}

Wow.propTypes = {
    igor: PropTypes.string.isRequired
}

Wow.defaultProps = {
    igor:'no se encontro el nombre de bani'
}