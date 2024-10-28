import { Fruit } from '../utils/FetchFruit';
import TableFruitRow from './TableFruitRow' // Import the FruitListing component

export default function TableFruits({ fruits, addFruit }: { fruits: Fruit[], addFruit: (fruit: Fruit) => void }) {
    return (
        <table className="text-xs">
            <thead>
                <tr className='text-xl'>
                    <th>Name</th>
                    <th>Family</th>
                    <th>Order</th>
                    <th>Genus</th>
                    <th>Calories</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {fruits.map((fruit: Fruit) => (
                    <TableFruitRow key={fruit.name} fruit={fruit} addFruit={addFruit} />
                ))}
            </tbody>
        </table>
    );
}