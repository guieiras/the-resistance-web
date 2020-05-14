import React from 'react';
import { Card, Button } from 'semantic-ui-react';
import Role from './GameModes/Role';

export default function GameModes({ onPlay }) {
  const [roles, setRoles] = React.useState({ commandant: true, assassin: true });
  const toggleRole = (role) => {
    return () => {
      const clone = Object.assign({}, roles);
      clone[role] = !clone[role];
      setRoles(clone);
    }
  }
  const selectedRoles = () => {
    return Object.keys(roles).filter((role) => roles[role]);
  }

  return <div className="GameModes">
    <Card fluid>
      <Card.Content>
        <Card.Header>Modo Padrão</Card.Header>
        <Card.Description>Apenas espiões</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button basic color='green' onClick={() => onPlay([])}>
          Jogar
        </Button>
      </Card.Content>
    </Card>
    <Card fluid>
      <Card.Content>
        <Card.Header>Modo Comandante</Card.Header>
        <Card.Description>
          Selecione as funções que deseja usar:
          <div style={{ marginTop: '10px' }}>
            <Role active={roles.commandant}>Comandante</Role>
            <Role active={roles.assassin}>Assassino</Role>
            <Role active={roles.invisible} onClick={toggleRole('invisible')}>
              Agente Invisível
            </Role>
            <Role active={roles.blind} onClick={toggleRole('blind')}>
              Agente Cego
            </Role>
            <Role active={roles.bodyguard} onClick={toggleRole('bodyguard')}>
              Guarda-costas
            </Role>
          </div>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button basic color='green' onClick={() => { onPlay(selectedRoles()) }}>
          Jogar
        </Button>
      </Card.Content>
    </Card>
  </div>
}
