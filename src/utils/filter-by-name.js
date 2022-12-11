export const filterByName = (contacts, filter) =>
contacts.filter(({name}) => name.toLowerCase().includes(filter.toLowerCase().trim())) || "There's no such contact in the list";