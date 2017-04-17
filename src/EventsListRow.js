import TiCss3 from 'react-icons/lib/ti/css3';
import FaCodepen from 'react-icons/lib/fa/codepen'
import React from 'react';

export const EventsListRow = ({name, date, js, css}) => (
    <tr>
        <td>{date.getDate()}/{date.getMonth()+1}/{date.getFullYear()}</td>
        <td>{name}</td>
        <td>{(js) ? <FaCodepen/>: null}</td>
        <td>{(css) ? <TiCss3/> : null}</td>
    </tr>
);