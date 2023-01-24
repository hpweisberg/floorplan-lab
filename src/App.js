import './App.css';
import Kitchen from './Kitchen';
import LivingRoom from './LivingRoom';
import Bedroom from './Bedroom';
import Bath from './Bath';


function App() {

  // const floorPlan = [
  //   {
  //     name: 'Kitchen',
  //   }, {
  //     name: 'LivingRoom',
  //   }, {
  //     name: 'Bedroom',
  //   }, {
  //     name: 'Bath',
  //   }
  // ]
  const size = ['Half', 'Full']
  const bedNum = [1,2,3]
  return (
    <div>
      <Kitchen/>
      <LivingRoom/>
      {bedNum.map(bedNum => 
      <Bedroom bedrooms={bedNum}/>
        )}
      {size.map(size =>
        <Bath size={size}/>
        )}
    </div>
  );
}

export default App;
