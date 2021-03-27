const addItem = (name) => {
    const allItems = JSON.parse(window.localStorage.getItem('allItems') || '[]');
    window.localStorage.setItem('allItems', JSON.stringify(Array.from(new Set(allItems.concat(name)))));
    return getItems();
}

const getItems = () => JSON.parse(window.localStorage.getItem('allItems') || '[]');

const addListItem = (name) => {
    const listItems = JSON.parse(window.localStorage.getItem('listItems') || '[]');
    window.localStorage.setItem('listItems', JSON.stringify(Array.from(new Set(listItems.concat(name)))));
    return getListItems();
}

const removeListItem = (name) => {
    const listItems = getListItems();
    window.localStorage.setItem('listItems', JSON.stringify(listItems.filter(n => n !== name)));
    return getListItems();
}

const getListItems = () => JSON.parse(window.localStorage.getItem('listItems') || '[]');

export {
    addItem,
    addListItem,
    getItems,
    getListItems,
    removeListItem,
};
