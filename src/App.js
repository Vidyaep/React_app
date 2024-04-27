import React from 'react';
import Card from 'react-bootstrap/Card';
import './App.css';
import img from './image/image.jpeg';

  const cards = [ {
    image: img,title: 'Nature',
    description: 'a beautiful image of evening after sunset', id: '0',
  },
  {
    image: img,title: 'Sunset',
    description: 'a beautiful image of evening after sunset', id: '1',
  },
  {
    image: img,title: 'Nature',
    description: 'a beautiful image of evening after sunset', id: '2',
  },
];

function App() {
  return (
    <>
     <h2 style={{marginLeft:'550px',marginTop:'80px',color:'cyan'}}>Cards</h2>
    {cards.map(function(cs) {
      return (
        <div key={cs.id} style={{display:'inline-block',lineHeight:'30px'}}>
        <Card style={{ width: '26rem',marginLeft:'20px' }}>
        <Card.Img src={cs.image}></Card.Img>
        <Card.Body>
          <Card.Title>{cs.title}</Card.Title>
          <Card.Text>{cs.description}
          </Card.Text>
        </Card.Body>
      </Card>
      </div>
      )
    })}
    </>
  );
};

export default App;