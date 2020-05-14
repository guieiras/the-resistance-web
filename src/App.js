import React from 'react';
import { Menu } from 'semantic-ui-react'
import GameModes from './GameModes';

export default function App() {
  return (
    <div className="App">
      <Menu inverted>
        <Menu.Item header>The Resistance</Menu.Item>
      </Menu>
      <GameModes onPlay={console.log} />
    </div>
  );
}
