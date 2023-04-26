/*
data: 
const headers = [header1, header2, header3]
const listItems = {name: string, onClick: (e: event) => void}[]
*/

interface listItem {
    name: string
    onClick: (e: Event) => void
}

export const setupDropdown = () => {
  const main = document.querySelector("#main");

  const setupPage = () => {
    if (main) main.innerHTML = "<h1>fart</h1>";
  };

  const buildDropdownContainer = (header: string, listItems: listItem[] ) => {
    const dropdown = document.createElement("ol");
    dropdown.className = "dropdown";


    dropdown.innerText = header;
    dropdown.appendChild
    if (main) main.appendChild(dropdown);
    
    listItems.forEach(({name, onClick}) => {
      const newListItem = document.createElement("li");
      const itemName = document.createTextNode(name);
      newListItem.appendChild(itemName);
      dropdown.appendChild(newListItem);
    })
  };

  return { buildDropdownContainer, setupPage };
};
