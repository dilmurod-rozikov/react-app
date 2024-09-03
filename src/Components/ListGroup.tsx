function ListGroup() {
    var items = [
        'New York',
        'Tashkent',
        'Texas',
        'Tokio',
        'Dubai',
        'Moscow',
        'London'
    ];
    
    return (
    <>
        <h1>Hello List</h1>
        { items.length === 0 ? <p>list is empty</p> : null }
        <ul className="list-group">
            {items.map((item, index) => <li className="list-group-item" key={item} 
            onClick={() => console.log(item, index+1)}>{item}</li>)}
        </ul>
    </>
  );
}

export default ListGroup;
