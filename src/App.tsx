import './App.css'
import data from './data';
import Listing from './Listing';

function App() {
  return (
    <div>
      <Listing data={data} />
    </div>
  )
}

export default App
