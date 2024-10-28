import { Fruit } from "./FetchFruit";

export function sortByParameter(fruits: Fruit[], sortParam: string | null): Fruit[] {
    switch (sortParam) {
       
        //Trim comparisons as Japanese Persimmon (id 101) has a leading space in the family and order
        case 'family':
            return fruits.sort((a, b) => a.family.trim().localeCompare(b.family.trim()));
        case 'order':
            return fruits.sort((a, b) => a.order.trim().localeCompare(b.order.trim()));
        case 'genus':
            return fruits.sort((a, b) => a.genus.trim().localeCompare(b.genus.trim()));
        default:
            return fruits.sort((a, b) => a.id - b.id);
    }
}
