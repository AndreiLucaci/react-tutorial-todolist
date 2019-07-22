// Objective: Fill in the boilerplate Reat code required to render an unorder list <ul> to the page
// The list should contain 3 list itmes (<li>) with anything that you want.

import React from 'react';

export default () => {
    const items = [];

    ["anything", "that", "i want"].forEach(x => items.push(<li>{x}</li>));

    return (
        <ul>
            {items}
        </ul>
    );
};

