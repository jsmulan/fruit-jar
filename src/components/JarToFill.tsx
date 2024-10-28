import { PieChart } from "@mui/x-charts/PieChart";
import { Fruit } from "../utils/FetchFruit";
import { useState } from "react";

export default function JarToFill({selectedFruit}:
    {selectedFruit: Map<number, {fruit: Fruit, count: number}>}) {
        const [showPieChart, setShowPieChart] = useState(false);
        const fruitCalculatedData = Array.from(selectedFruit).map(([key, value]) => {
            return {
                id: key,
                count: value.count,
                calories: value.fruit.nutritions.calories,
                totalCalories: value.fruit.nutritions.calories * value.count,
                label: value.fruit.name
            }
        }
    );
    return (
        <div className="w-full">
            <h2 className="text-white text-2xl">Jar to Fill</h2>
            <table className="w-full mb-8">
                <thead>
                    <tr>
                        <th>Fruit</th>
                        <th>Count</th>
                        <th>Calories</th>
                        <th>Total Calories</th>
                    </tr>
                </thead>
                <tbody>
                    {fruitCalculatedData.map((fruit) => (
                        <tr key={fruit.id} className="even:bg-slate-300">
                            <td>{fruit.label}</td>
                            <td>{fruit.count}</td>
                            <td>{fruit.calories}</td>
                            <td>{fruit.totalCalories}</td>
                        </tr>
                    ))}
                </tbody>
                <tfoot className="bg-gray-300 font-bold">
                    <tr>
                        <td colSpan={3} className="text-right">Total Calories</td>
                        <td>{Array.from(selectedFruit).reduce((acc, [key, value]) => acc + value.fruit.nutritions.calories * value.count, 0)}</td>
                    </tr>
                </tfoot>
            </table>
            <button className="p-1 bg-white text-black font-bold" onClick={e => {setShowPieChart(!showPieChart)}}>{showPieChart? 'Hide': 'Show'} Pie Chart</button>

            <div className={`${showPieChart ? 'block' : 'hidden'}`}>
            <PieChart
                series={[
                    {
                    data: fruitCalculatedData.map((fruit) => (
                        { id: fruit.id, value: fruit.totalCalories, label: fruit.label }
                    )),
                    },
                ]}
                width={300}
                height={300}
                slotProps={{
                    legend: { hidden: true },
                  }}
            />
            </div>
        </div>
    );
}