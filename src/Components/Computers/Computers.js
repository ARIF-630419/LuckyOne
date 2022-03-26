import React, { useEffect, useState } from 'react';
import './Computers.css'
import Computer from '../Computer/Computer'

const Computers = () => {
    const [computers, setComputers] = useState([]);

    useEffect(() => {
        fetch('computers.json')
            .then(res => res.json())
            .then(data => setComputers(data))
    }, [])


    return (
        <div>
            <h2 className='computer-header'>Computer Store</h2>
            <div className='computers-container'>
                <div className='computers-information'>
                    {

                        computers.map(computer => <Computer
                            key={computer.id}
                            computer={computer}
                        ></Computer>)
                    }
                </div>
            </div>
        </div>
    );
};


export default Computers;