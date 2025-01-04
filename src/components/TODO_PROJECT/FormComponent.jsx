import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useState } from 'react';
function FormComponent(props) {
const [taskData,setTaskData] = useState(
  {title: '',
    description: ''}
  
);
const onTask=props.onTask

  const addTodoHandler = (e) => {
    e.preventDefault();
    console.log(taskData);
    onTask(taskData);
    setTaskData({
      title: '',
      description: ''
    })
  }
  const handleChange = (e) => {
    setTaskData({ ...taskData, [e.target.name]: e.target.value });
  };




  return (
    <Card>
     
      <Card.Body>
        <Form onSubmit={addTodoHandler}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" name='title' value={taskData.title} placeholder="ENTER TITLE" onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" name='description' value={taskData.description} rows={3} onChange={handleChange} />
      </Form.Group>
      <Button variant="primary" type="submit">Add</Button>
    </Form>
      </Card.Body>
    </Card>
  );
}

export default FormComponent;