import { Map, Marker } from "pigeon-maps"

const Maps = () => {
  return (
    <Map height={300} defaultCenter={[50.879, 4.6997]} defaultZoom={11}>
      <Marker width={50} anchor={[50.879, 4.6997]} />
    </Map>
  );
};

export default Maps;