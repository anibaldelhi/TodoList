import {useForm} from '../hooks/useForm';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

export const TodoAdd = ({onNewTodo}) => {
    const { description, onInputChange, onResetForm} = useForm({
        description : ''
    });

    const onFormSubmit = (event) =>{
        event.preventDefault();
        if(description.length <= 1) return;
        
        const newTodo = {
            id: new Date().getTime(),
            description: description,
            done: false
        }
        onNewTodo(newTodo);
        onResetForm();
    }
  
    return (
        <Container>
            <h3>Todo Add</h3>
            <Form onSubmit={onFormSubmit}>
                <Form.Group>
                    <Form.Label>What do you want to do?</Form.Label>
                    <Form.Control
                            className="me-auto"
                            placeholder="Enter a task description here..."
                            name='description'
                            value={description}
                            required
                            onChange={onInputChange}
                        />
                        <br/>
                    <Stack className="col-md-4 mx-auto" gap={1}>
                        <Button type="submit" variant="primary">Add</Button>
                        <Button variant="outline-secondary" onClick={() => onResetForm()}>Reset</Button>
                    </Stack>
                </Form.Group>
            
            </Form>
        </Container>
  )
}

TodoAdd.propTypes = {
    onNewTodo : PropTypes.func.isRequired
}