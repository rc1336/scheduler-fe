import React, { Component } from 'react';
import axios from 'axios'
import { Link } from "react-router-dom";
import { API_URL } from '../../config/const'
import './Unavailability.css'

const styles = {
    textDecoration: 'none'
}

class UnavailabilityCreate extends Component {
    constructor() {
        super();
        this.state = {
            employee: '',
            date: '',
            am: "",
            aft: "",
            pm: "",
            employees: []
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    componentDidMount() {
        axios.get(API_URL + '/employees').then(
          (response) => {
          this.setState({
            employees: response.data
          })
        })
      }
    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
        console.log(this.state);
    };

    onSubmit = e => {
        e.preventDefault();
        console.log("Unavailability request has been created");

        axios.post(API_URL + "/unavailability", this.state).then(result => {
            console.log(result)
            this.props.history.push("/unavailability");
        });
    };

    render() {
        const { employee, date, am, aft, pm } = this.state;
        let employees = this.state.employees
        return (
            <div className='componentStyle'>
                <h1 className='headerStyle'>Time Off Request Form:</h1>
                <form className='itemStyle'onSubmit={this.onSubmit}>

                    <label>Team Member:</label>
                    <select name="employee" value=       {employee} onChange={this.onChange}>
                        {employees.map(cv =>
                            <option key={cv.id} value={cv.id}>{cv.full_name}</option>
                        )}
                    </select>
                    <br />

                    <label>Date:</label>
                    <input
                        type="Date"
                        name="date"
                        value={date}
                        onChange={this.onChange}
                    />
                    <br />

                    <label>Morning Availability:</label>
                    <select name="am" value={am} onChange={this.onChange}>
                        <option name='am' value='available'>I AM available</option>
                        <option name='am' value='unavailable'>I am NOT available</option>
                    </select>
                    <br />

                    <label>Afternoon Availability:</label>
                    <select name="aft" value={aft} onChange={this.onChange}>
                        <option name='aft' value='available'>I AM available</option>
                        <option name='aft' value='unavailable'>I am NOT available</option>
                    </select>
                    <br />

                    <label>Evening Availability:</label>
                    <select name="pm" value={pm} onChange={this.onChange}>
                        <option name='pm' value='available'>I AM available</option>
                        <option name='aft' value='unavailable'>I am NOT available</option>
                    </select>
                    <br />

                    <button type="submit">Submit</button>
                </form>
                <Link className='linkStyle' style={styles} to="/unavailability">
                    <h3 className="toStyle">View Time Off Requests</h3>
                </Link>
            </div>
        );
    }
}

export default UnavailabilityCreate;