import {useForm} from '../hooks/useForm';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';

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
        <Form onSubmit={onFormSubmit} className="panel panel-default">
            <h5>What do you want to do?</h5>
            
                <Form.Group>
                <Stack direction="horizontal" gap={1}>
                    <Form.Control
                        className="me-auto"
                        placeholder="Enter a task description here..."
                        name='description'
                        value={description}
                        required
                        onChange={onInputChange}
                    />
                
            
                <Button variant="primary">Add</Button>
                <div className="vr" />
                <Button variant="outline-secondary" onClick={() => onResetForm()}>Reset</Button>
                </Stack>
                </Form.Group>
           
        </Form>
  )
}

TodoAdd.propTypes = {
    onNewTodo : PropTypes.func.isRequired
}