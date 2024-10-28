import { Fruit } from "../utils/FetchFruit";

export default function ListFruitRow({ fruit, addFruit }: { fruit: Fruit, addFruit: (fruit: Fruit) => void }) {
    return (
        <li className="mb-1 h-6 text-sm align-middle">
            {fruit.name} ({fruit.nutritions.calories} cal)&nbsp;
            <button
                className="text-xs px-1 border-2 bg-slate-200  border-slate-400 rounded font-bold float-right"
                onClick={e => addFruit(fruit)}
            >
                Add
            </button>
        </li>
    )
}