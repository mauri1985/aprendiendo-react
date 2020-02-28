import React from 'react';
import Button from '@material-ui/core/Button';

class Usuario extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            name: '',
            surname: '',
            email: '',
            username: '',
            password: '',
            birthdate: new Date(),
            country: '',
            accept: true
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    
    handleInputChange(event){
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
        console.log(name + ": " + value);
    }

    // handleSubmit(event){
    //     alert('Name submited: ' + this.state.name)
    //     event.preventDefault();
    // }

    render(){
        return(
            <form>
                <label>
                    Name:
                    <input 
                        name="name"
                        type="text" 
                        value={this.state.name} 
                        onChange={this.handleInputChange} 
                    />
                </label>
                <br />
                    <label>
                    Lista:
                    <select name="Country" onChange={this.handleInputChange}>
                        <option value="UY">UY</option>
                        <option value="BR">BR</option>
                        <option value="AR">AR</option>
                    </select>
                </label>
                <br />
                <label>
                    Acepta terminos y condiciones?:
                    <input 
                        type="checkbox" 
                        name="accept"
                        checked={this.state.accept}
                        onChange={this.handleInputChange}
                    />
                </label>
                <label>
                    Fecha de nacimiento:
                    <input 
                        name="birthdate"
                        type="date"
                        value={this.state.birthdate}
                        onChange={this.handleInputChange}
                    />
                </label>
                <br />
                <input type="file" />
                <br />
                <input type="submit" value="Submit" />
                <br/>
                <Button variant="contained" color="primary" type="submit">
                    Submit
                </Button>
            </form>
        );
    }
}

export default Usuario;