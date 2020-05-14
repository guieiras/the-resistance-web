export default function getTrailFromRoles(source) {
  applyTimerOnSource(source);
  return (roles) => {
    const trail = [];
    trail.push(source.everyoneClose);
    trail.push(roles.includes('blind') ? source.spyOpenWithBlind : source.spyOpen);
    trail.push(source.spyClose);
    if (roles.includes('commander')) {
      trail.push(source.commanderOpen);
      trail.push(roles.includes('invisible') ? source.commanderRevealWithInvisible : source.commanderReveal);
      trail.push(source.commanderClose);
    }
    if (roles.includes('bodyguard')) {
      trail.push(source.bodyguardOpen);
      if(roles.includes('fake')) {
        trail.push(source.bodyguardRevealWithFake, source.bodyguardCloseWithFake)
      } else {
        trail.push(source.bodyguardReveal, source.bodyguardClose)
      }
    }
    trail.push(source.everyoneOpen);
    return trail;
  }
}

function applyTimerOnSource(source) {
  source.everyoneClose.timer = 2000
  source.spyOpen.timer = 5000
  source.spyOpenWithBlind.timer = 5000
  source.spyClose.timer = 2000
  source.commanderOpen.timer = 2000
  source.commanderReveal.timer = 5000
  source.commanderRevealWithInvisible.timer = 5000
  source.commanderClose.timer = 2000
  source.bodyguardOpen.timer = 2000
  source.bodyguardReveal.timer = 4000
  source.bodyguardRevealWithFake.timer = 4000
  source.bodyguardClose.timer = 2000
  source.bodyguardCloseWithFake.timer = 2000
  source.everyoneOpen.timer = 0
}
