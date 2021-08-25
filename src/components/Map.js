const Map = (props) => {
  return (
    <div className="map">
      <iframe
        width="100%"
        height="100%"
        frameBorder="0" style={{border:0}}
        src={`https://www.google.com/maps/embed/v1/view?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&center=${props.lat},${props.lon}&zoom=10`}
        allowFullScreen
        title="map">
      </iframe>
    </div>
  )
}

export default Map