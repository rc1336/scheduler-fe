import React, { Component } from 'react';
import axios from 'axios'
import { Link } from "react-router-dom";
import { API_URL } from '../../config/const'

const styles = {
    textDecoration: 'none'
}

class WeeklyAvailability extends Component {
    state = {
        weeklyAvailability: [],
    };

    async componentDidMount() {
        axios.get(API_URL + '/weeklyavailability')
            .then((item) => {
                console.log(item)
                this.setState({ weeklyAvailability: item.data, })
            })
    }

    render() {
        const weeklyAvailability = this.state.weeklyAvailability.map(item => {
            return (
                <div key={item.id}>
                    <p>Employee Number: {item.employee}</p>
                    <ul>
                        <li>Mon AM: <span className='bold-span'> {item.mon_am}</span></li>
                        <li>Tues AM: <span className='bold-span'> {item.tue_am}</span></li>
                        <li>Wed AM: <span className='bold-span'> {item.wed_am}</span></li>
                        <li>Thur AM: <span className='bold-span'> {item.thu_am}</span></li>
                        <li>Fri AM: <span className='bold-span'> {item.fri_am}</span></li>
                        <li>Sat AM: <span className='bold-span'> {item.sat_am}</span></li>
                        <li>Sun AM: <span className='bold-span'> {item.sun_am}</span></li>
                        <li>Mon Aft: <span className='bold-span'> {item.mon_aft}</span></li>
                        <li>Tue Aft: <span className='bold-span'> {item.tue_aft}</span></li>
                        <li>Wed Aft: <span className='bold-span'> {item.wed_aft}</span></li>
                        <li>Thu Aft: <span className='bold-span'> {item.thu_aft}</span></li>
                        <li>Fri Aft: <span className='bold-span'> {item.fri_aft}</span></li>
                        <li>Sat Aft: <span className='bold-span'> {item.sat_aft}</span></li>
                        <li>Sun Aft: <span className='bold-span'> {item.sun_aft}</span></li>
                        <li>Mon PM: <span className='bold-span'> {item.mon_pm}</span></li>
                        <li>Tue PM: <span className='bold-span'> {item.tue_pm}</span></li>
                        <li>Wed PM: <span className='bold-span'> {item.wed_pm}</span></li>
                        <li>Thu PM: <span className='bold-span'> {item.thu_pm}</span></li>
                        <li>Fri PM: <span className='bold-span'> {item.fri_pm}</span></li>
                        <li>Sat PM: <span className='bold-span'> {item.sat_pm}</span></li>
                        <li>Sun PM: <span className='bold-span'> {item.sun_pm}</span></li>
                    </ul>
                </div>
            )
        })
        return (

            <div className='componentStyle'>
                <h2 className='headerStyle'>Weekly Availability <Link className='linkStyle' style={styles} to="/availability/new">+</Link></h2>
                {weeklyAvailability}
            </div>
        );
    }
}


export default WeeklyAvailability;