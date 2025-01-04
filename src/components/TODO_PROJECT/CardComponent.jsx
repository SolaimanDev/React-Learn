import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function CardComponent(props) {
  const {title,description,id} = props.task;

  const removeHandler = (title) => {
    console.log(title);
    props.onTaskRemove(title);
  };

  return (
    <Card>
      <Card.Body>
        <Card.Title>{title} {id}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        {/* Use an arrow function to pass the parameter */}
        <Button variant="primary" onClick={() => removeHandler(id)}>Remove</Button>
      </Card.Body>
    </Card>
  );
}

export default CardComponent;
