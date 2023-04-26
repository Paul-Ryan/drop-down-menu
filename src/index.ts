import { setupDropdown } from './setupDropdown';

const { buildDropdownContainer, setupPage } = setupDropdown();

buildDropdownContainer('dropdown', [{name: 'hello', onClick: (e: Event) => console.log(e)}]);