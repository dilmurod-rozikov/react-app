import ListGroup from "./Components/ListGroup";

function App()
{
  var items = [
    'New York',
    'Tashkent',
    'Texas',
    'Tokio',
    'Dubai',
    'Moscow',
    'London'
];
  return <div><ListGroup items={items} heading="Cities"></ListGroup></div>
}

export default App;