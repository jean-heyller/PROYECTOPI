import './App.css';
import Form from './components/Form/Form';


import Tarjetas from './components/Tarjetas/Tarjetas';
const dog = [{
  image: "https://cdn2.thedogapi.com/images/BJa4kxc4X.jpg",
  name: "Affenpinscher",
  temperament: "Stubborn, Curious, Playful, Adventurous, Active, Fun-loving",
  weigth:  "9 - 11.5"
},
{
  image: "https://cdn2.thedogapi.com/images/BJa4kxc4X.jpg",
  name: "Affenpinscher",
  temperament: "Stubborn, Curious, Playful, Adventurous, Active, Fun-loving",
  weigth:  "9 - 11.5"
},
{
  image: "https://cdn2.thedogapi.com/images/hMyT4CDXR.jpg",
  name: "Affenpinscher",
  temperament: "Stubborn, Curious, Playful, Adventurous, Active, Fun-loving",
  weigth:  "9 - 11.5"
}    
]
function App() {
  return (
    <div className="App">
      <h1>Henry Dogs</h1>
      < Tarjetas dogs={dog}></Tarjetas>
    </div>
  );
}

export default App;
