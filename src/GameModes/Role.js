import React from 'react';
import { Label, Icon } from 'semantic-ui-react';

export default function GameModesRole({ onClick, active, children }) {
  return <Label style={{ marginBottom: '5px' }}
                as='a' color={active ? 'green' : 'grey'}
                onClick={onClick}>
    <Icon name={`circle ${active ? 'check' : 'outline'}`} />
    { children }
  </Label>
}
