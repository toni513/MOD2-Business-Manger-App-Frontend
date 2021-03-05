import { Component } from "react";
import { Form, Button, ListGroup } from "react-bootstrap";

class LogList extends Component{
    constructor() {
        super();
        this.state = {
            todoLog: [] // default empty array
        }
    }
    // addLog: add a new task inside the state
    addLog = (event)=> {
        event.preventDefault(); // stop default 
        //console.log(event.target.taskTitle.value);
        const data = event.target,
        newLog = {
            taskTitle: data.taskTitle.value,
            date: data.date.value,
            time: data.time.value
        }
        //console.log(newTodo);
        // updating the array but not re-rendering
        this.state.todoLog.push(newLog);
        // updating state and re-render
        this.setState({
            todoLog: this.state.todoLog
        })
    }
    // delete todo from the array
    deleteLog = (event)=> {
        // splice(indexNumber, number of deletions)
        this.state.todoList.splice(event.target.value, 1)
        this.setState({
            todoLog: this.state.todoLog
        })
    }
    render() {
        console.log(this.state.todoLog)
        return(
            <>
            <Form onSubmit={this.addLog}>
                <Form.Group controlId="formBasicTaskTitle">
                    <Form.Label>Task Title:</Form.Label>
                    <Form.Control type="text" placeholder="Enter Miles" name="mileCounter"/>
                </Form.Group>
                <Form.Group controlId="formBasicDate">
                    <Form.Label>Miles date:</Form.Label>
                    <Form.Control type="date" placeholder="mm/dd/yyyy" name="date"/>
                </Form.Group>
                <Form.Group controlId="formBasicTime">
                    <Form.Label>Miles Time:</Form.Label>
                    <Form.Control type="time" placeholder="Enter the Time" name="time"/>
                </Form.Group>
                <Button type="submit" className="btn btn-success">
                    Add
                </Button>
            </Form>

            <ListGroup>
                {
                  this.state.todoList.map((task, index)=> {
                    return(
                      <ListGroup.Item key={index} variant="success">
                        {task.taskTitle} at {task.time}, Date: {task.date}
                        <Button type="button" variant="danger" onClick={this.deleteLog} value={index}>Delete</Button>
                      </ListGroup.Item>
                        )
                    })
                }
            </ListGroup>
            </>
        )
    }
}

export default LogList;