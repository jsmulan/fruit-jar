import { useFetchFruitData, Fruit } from '../utils/FetchFruit';
import JarToFill from './JarToFill';
import TableFruits from './TableFruits';
import { sortByParameter } from '../utils/GroupBy';
import { useState } from 'react';
import SimpleListFruits from './SimpleListFruits';
import GroupedListFruits from './GroupedListFruits';
import { Async } from 'react-async';

function FruitJar() {
    const [fruitsParam, setFruitsParam] = useState([] as Fruit[]);
    const [isListView, setIsListView] = useState(true);
    const [sortParam, setSortParam] = useState("id");
    const [selectedFruit, setSelectedFruit] = useState(new Map());

    function addFruit(fruit: Fruit) {
        if (selectedFruit.has(fruit.id)) {
            selectedFruit.set(fruit.id, {count: selectedFruit.get(fruit.id).count + 1, fruit: fruit});
        } else {
            selectedFruit.set(fruit.id, {count: 1, fruit: fruit});
        }
        setSelectedFruit(new Map(selectedFruit));
    }

    return (
        <Async promiseFn={useFetchFruitData}>
            {({ data, error, isLoading }) => {
                if (isLoading) return "Loading...";
                if (error) return `Something went wrong: ${error.message}`;
                if (data) {
                    setFruitsParam(data);
                    return (
                        <div className="w-[64rem] m-auto border-2 p-4 bg-white text-black rounded-2xl">
                            <div className="flex">
                                <label className="block text-left w-1/2 flex-auto">View Type:&nbsp;
                                    <select className="p-2 bg-slate-300 mb-4"
                                        onChange={e => {
                                            setIsListView(e.target.value === "list" ? true : false);
            
                                        }}>
                                        <option value="list">List</option>
                                        <option value="table">Table</option>
                                    </select>
                                </label>
                                <label className="block text-left w-1/2 flex-auto">Group by:&nbsp;
                                    <select className="p-2 bg-slate-300 mb-4"
                                        onChange={e => {
                                            setFruitsParam(
                                                [...sortByParameter(fruitsParam, e.target.value)]
                                            );
                                            setSortParam(e.target.value);
                                        }}>
                                        <option value="id">None</option>
                                        <option value="family">Family</option>
                                        <option value="order">Order</option>
                                        <option value="genus">Genus</option>
                                    </select>
                                </label>
                            </div>
                            <div className="flex">
                                <div className="flex-auto w-1/2 p-2">
                                    {isListView ?
                                        sortParam === "id" ?
                                        <SimpleListFruits fruits={fruitsParam} addFruit={addFruit} />
                                        :
                                        <GroupedListFruits fruits={fruitsParam} sortParam={sortParam} addFruit={addFruit} />
                                    : 
                                    <TableFruits fruits={fruitsParam} addFruit={addFruit} />
                                    }
                                </div>
                                <div className="flex-auto w-1/2 p-2">
                                    <JarToFill selectedFruit={selectedFruit} />
                                </div>
                            </div>
                        </div>
                    );
                }
            }}
        </Async>
    );
}

export default FruitJar;