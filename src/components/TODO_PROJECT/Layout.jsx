import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from './FormComponent';
import Card from './CardComponent';
import { useState } from 'react';

function ContainerFluidBreakpointExample() {
  const [tasks, setTasks] = useState([]);

  const newTask = (task) => {
    task.id = Math.floor(Math.random() * 10) + 1;
    setTasks([...tasks, task]);
    console.log(tasks);
  };
  const removeTask = (id) => {
    const index = tasks.findIndex((task) => task.id === id);
    if (index > -1) { 
        tasks.splice(index, 1); 
        setTasks([...tasks]);
    }

  };

  return (
    <Container>
      <Row>
        <Col>
        <div className="main-layout">
        <h1>TODO APP</h1>
        <Form onTask={newTask}/>
        {tasks.map((task, index) => (
          <Card key={index} task={task} onTaskRemove={removeTask}/>
        ))}
        
        </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ContainerFluidBreakpointExample;