import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ConsultCard() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/assets/image3.png" />
      <Card.Body>
        <Card.Title>Evidence-based pet care advice for every pet lover</Card.Title>
        <Card.Text>
            virtual consultations and presentations, one-on-one consultations concerning individual pets, group presentations regarding general pet care (can be tailored to the needs of the group)
        </Card.Text>
        <Button variant="primary" href='#action6'>Connect to a Pexpert</Button>
      </Card.Body>
    </Card>
  );
}

export default ConsultCard;