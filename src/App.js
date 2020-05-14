import React from 'react';
import { Menu } from 'semantic-ui-react'
import Game from './Game';
import GameModes from './GameModes';

export default function App() {
  const [roles, setRoles] = React.useState();
  const audioRef = React.useRef();
  const prepareAndSetRoles = (roles) => {
    audioRef.current.src = null;
    audioRef.current.play();
    setRoles(roles);
  }

  return (
    <div className="App">
      <Menu inverted>
        <Menu.Item header>The Resistance</Menu.Item>
      </Menu>
      {
        roles ? <Game audioRef={audioRef} roles={roles} onEnd={setRoles} /> : <GameModes onPlay={prepareAndSetRoles} />
      }
      <audio ref={audioRef} />
    </div>
  );
}
