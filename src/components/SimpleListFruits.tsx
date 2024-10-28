import React from 'react';
import { Fruit } from '../utils/FetchFruit';
import ListFruitRow from './ListFruitRow' // Import the FruitListing component

export default function SimpleListFruits({ fruits, addFruit }:
    { fruits: Fruit[], addFruit: (fruit: Fruit) => void }) {

    return (
        <ul className='list-none'>
            {fruits.map((fruit: Fruit, index, fruits) => (
                <React.Fragment key={fruit.name}>
                    <ListFruitRow key={fruit.name} fruit={fruit} addFruit={addFruit} />
                </React.Fragment>
            ))}
        </ul>
    );
}