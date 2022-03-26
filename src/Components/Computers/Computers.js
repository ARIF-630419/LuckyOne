import React, { useEffect, useState } from 'react';
import './Computers.css'

const Computers = () => {
    const [computers, setComputers] = useState([]);

    useEffect(() => {
        fetch('computers.json')
            .then(res => res.json())
            .then(data => setComputers(data))
    }, [])


    return (
        <div>
            <h2>All Computer:{computers.length}</h2>
        </div>
    );
};


export default Computers;