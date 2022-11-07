import { useState } from "react";

export default function useArray(defaultValue: any) {
    const [array, setArray] = useState(defaultValue);

    function push(element: any) {
        setArray((arr: any) => [...arr, element]);
    }

    function filter(callback: any) {
        setArray((arr: any) => arr.filter(callback));
    }

    function update(index: any, newElement: any) {
        setArray((arr: any) => [
            ...arr.slice(0, index), 
            newElement, 
            ...arr.slice(index + 1, arr.length - 1)
        ])
    }

    function remove(index: any) {
        setArray((arr: any) => [
            ...arr.slice(0, index), 
            ...arr.slice(index + 1, arr.length - 1)
        ])
    }

    function clear() {
        setArray([]);
    }

    return { array, set: setArray, push, filter, remove, update, clear }
}
 