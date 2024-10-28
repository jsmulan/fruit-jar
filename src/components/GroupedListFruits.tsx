import React from 'react';
import { Fruit } from '../utils/FetchFruit';
import ListFruitRow from './ListFruitRow' // Import the FruitListing component
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

export default function GroupedListFruits({ fruits, sortParam, addFruit }:
    { fruits: Fruit[], sortParam: string, addFruit: (fruit: Fruit) => void }) {
    var groupedFruits = new Map();
    fruits.forEach(fruit => {
        if (!groupedFruits.has(fruit[sortParam])) {
            groupedFruits.set(fruit[sortParam] as string, []);
        }
        groupedFruits.get(fruit[sortParam]).push(fruit);
    });


    return (
        <div>
            {Array.from(groupedFruits.values()).map((group) => (
                <Accordion>
                    <AccordionSummary className='bg-slate-600'>
                        <div className='text-xl'>
                            {group[0][sortParam]}
                        </div>
                    </AccordionSummary>
                    <AccordionDetails>
                        <ul>
                            {group.map((fruit: Fruit) => (
                                <ListFruitRow key={fruit.name} fruit={fruit} addFruit={addFruit} />
                            ))}
                        </ul>
                    </AccordionDetails>
                </Accordion>
            ))}
        </div>
    );
}