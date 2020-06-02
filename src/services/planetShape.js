const planetShape = () => ({
  name: PropTypes.string.isRequired,
  rotation_period: PropTypes.string.isRequired,
  orbital_period: PropTypes.string.isRequired,
  diameter: PropTypes.string.isRequired,
  climate: PropTypes.string.isRequired,
  gravity: PropTypes.string.isRequired,
  terrain: PropTypes.string.isRequired,
  surface_water: PropTypes.string.isRequired,
  population: PropTypes.string.isRequired,
  residents: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  films: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  created: PropTypes.string.isRequired,
  edited: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
});

export default planetShape;
