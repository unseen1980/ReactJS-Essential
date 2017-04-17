import React from 'react';
import {EventsListRow} from './EventsListRow';

export const EventsList = ({days}) => (
    <table className="table">
        <thead>
            <tr>
                <th>Date</th>
                <th>Name</th>
                <th>JS</th>
                <th>CSS</th>
            </tr>
        </thead>
        <tbody>
            {days.map((day, i) => (<EventsListRow key={i} {...day}/>))}
        </tbody>
    </table>
);