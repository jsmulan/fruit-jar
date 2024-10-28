import { Fruit } from "../utils/FetchFruit";

export default function ListFruitRow({ fruit, addFruit }: { fruit: Fruit, addFruit: (fruit: Fruit) => void }) {
    return (
        <tr className="even:bg-slate-300">
            <td>{fruit.name}</td>
            <td>{fruit.family}</td>
            <td>{fruit.order}</td>
            <td>{fruit.genus}</td>
            <td>{fruit.nutritions.calories}</td>
            <td>
                <button
                    className="px-1 border-2 bg-slate-200  border-slate-400 rounded font-bold"
                    onClick={e => addFruit(fruit)}
                >
                    Add
                </button>
            </td>
        </tr>
    )
}