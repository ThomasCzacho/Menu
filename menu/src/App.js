import React, { useState } from 'react';
import Menu from '/workspace/Menu/menu/src/Components/Menu.js';
import Categories from '/workspace/Menu/menu/src/Components/Categories.js';
import items from '/workspace/Menu/menu/src/Components/data.js';
import Header from './Components/Header';

function App() {
  return (
    <div>
      <div><Header></Header>
      </div>
      <Menu></Menu>
  </div>
  )
}

export default App;