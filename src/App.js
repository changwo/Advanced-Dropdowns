import React from 'react';
import NavBar from "./components/Navbar";
import NavItem from "./components/Navbar/NavItem";
import { ReactComponent as BellIcon } from './icons/bell.svg';
import { ReactComponent as MessengerIcon } from './icons/messenger.svg';
import { ReactComponent as PlusIcon } from './icons/plus.svg';
import { ReactComponent as CaretIcon } from './icons/caret.svg';
import { ReactComponent as BoltIcon } from './icons/bolt.svg';
import DropDownMenu from "./components/Navbar/DropDownMenu";

const App = () => {

  return (
      <NavBar>
          <NavItem icon={<PlusIcon/>}/>
          <NavItem icon={<BellIcon/>}/>
          <NavItem icon={<MessengerIcon/>}/>
          <NavItem icon={<CaretIcon/>}>
              <DropDownMenu/>
          </NavItem>
      </NavBar>
  );
}
export default App;
