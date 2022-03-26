import React from 'react';
import './Bonus.css'

const Bonus = () => {
    return (
        <div className='bonus-part'>
            <h3>1. What is the difference between state and props in React?</h3>
            <h4>props:</h4>
            <p>1. Props are read-only.</p>
            <p>2. Props are immutable.</p>
            <p>3. Props are used to communicate between components.</p>
            <p>4. Props make components reusable.</p>
            <p>5. Props are external and controlled by whatever renders the component.</p>
            <h4>state:</h4>
            <p>1. State changes can be asynchronous.</p>
            <p>2. State is mutable.</p>
            <p>3. States can be used for rendering dynamic changes with the component.</p>
            <p>4. State cannot make components reusable.</p>
            <p>5. The State is internal and controlled by the React Component itself.</p>

            <h3>2. How react works?</h3>
            <p>Ans: React is a declarative programming language. Imagine the following code written as an app to demonstrate what we mean by declarative code. Imagine a screen with a navbar, a header, a filter, and a list, similar to the one below. This is because each line of code defines what each app part is. If there are numerous state changes, React does not commit them one after the other. React, on the other hand, walks through its virtual DOM, makes a list of the modifications that need to be made to the actual DOM, and then performs everything in one go. React, to put it another way, performs batch updates.</p>

        </div>
    );
};

export default Bonus;