import React from "react";

type NameTagProps = {
    name: string;
}

function CommonTypes(props:NameTagProps) {
    return (
        <main>
            <header>
                <h4>
                Hello my Name is :  
                </h4>
            </header>
            <section className='displayName'>
                <p>{props.name}</p>
            </section>
        </main>
    )
}

export default CommonTypes

/*
// basic
type NameTagProps2 = {
    name: string;
    count: number;
    enabled:boolean
}
// array of string
type GroceryListProps = {
    items: string[],
    staus: 'loading' | 'error' | 'success'
}
// objects
type ObjectExampleProps = {
    anObject: object; // usefull as a placeholder
    anotherObj: {}; // can have any properties and values

    item: {
        id:string;
        title: string
    };

    items: {
        id: string;
        title: string;
    }[]; // an array of objects of a certain shape
}

// inheritance
type Item = {
    id:string;
    title: string;
};
type ItemsInherExample ={
    item: Item;
    items: Item[];
}

// key, value pairs
type ItemHash = {
    [key:string]: Item;
}
type Dictionary = {
    [key:number]: string;
}
// // equiv syntax, not recommended
// Record<string, Item>
// Record<number, string

// Void Functions and Methods
type ContExampleProps = {
    // Does not take any arguments. Does not return a value.
    onHover: () => void;
    // Takes a number and ret void
    onChange: (id: number) => void;
    // Takes a click event and ret non
    onClick(event: React.MouseEvent<HTMLButtonElement>): void
}

// Value Returning Functions
const Add = (a:number, b:number): number =>{
    return a + b;
}

// Optional Props : You just put a question mark.
type OptionalProps = {
    requiredProp: boolean;
    optionalProp?: string;
}*/