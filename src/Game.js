import React from 'react';
import { Card, Grid, Image } from 'semantic-ui-react';
import getSourceDataFromRoles from './lib/actions'
import ptBR from './lib/actions/pt-BR'
const Actions = getSourceDataFromRoles(ptBR);

export default function Game({ audioRef, roles, onEnd }) {
  const trail = React.useRef();
  const [currentAction, setCurrentAction] = React.useState({});
  function nextAction() {
    if (trail.current.length > 0) {
      const [item] = trail.current.splice(0, 1);
      const listener = () => {
        audioRef.current.removeEventListener('ended', listener);
        setTimeout(nextAction, item.timer);
      };
      setCurrentAction(item);
      audioRef.current.addEventListener('ended', listener);
      audioRef.current.src = item.audio;
      audioRef.current.play();
    } else {
      onEnd();
    }
  }

  React.useEffect(() => {
    trail.current = [...Actions(roles)];
    nextAction();
  }, [roles]);

  return <Grid verticalAlign='middle' columns={2} centered>
    <Grid.Row>
      <Grid.Column>
        <Card>
          <Image src={currentAction.image} wrapped ui={false} />
          <Card.Content>
            <Card.Header style={{ textAlign: 'center' }}>
              {currentAction.text}
            </Card.Header>
          </Card.Content>
        </Card>
      </Grid.Column>
    </Grid.Row>
  </Grid>
}
