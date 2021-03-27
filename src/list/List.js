import React, { useState } from 'react';

import Add from './Add';
import Items from './Items';

import { addItem, addListItem, getItems, getListItems, removeListItem } from '../storage';


const List = () => {
    const [allItems, setAllItems] = useState(getItems());
    const [listItems, setListItems] = useState(getListItems());

    const add = (name) => {
        setAllItems(addItem(name));
        setListItems(addListItem(name));
    }

    const remove = (name) => {
        setListItems(removeListItem(name));
    }

    return (
        <>
            <Add
                add={add}
                allItems={allItems}
                />
            <Items
                remove={remove}
                items={listItems}
            />
        </>
    )
};

export default List;
