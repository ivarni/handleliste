import React from 'react';

const Items = (props) => (
    <ol>
        {props.items.map((item, index) => (
            <li key={index}>
                {item}
                <button onClick={() => props.remove(item)}>
                    x
                </button>
            </li>
        ))}
    </ol>
)

export default Items;
