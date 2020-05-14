import everyoneClose from '../../assets/pt-BR/everyone/close.mp3';
import everyoneOpen from '../../assets/pt-BR/everyone/open.mp3';
import spyClose from '../../assets/pt-BR/spy/close.mp3';
import spyOpen from '../../assets/pt-BR/spy/open.mp3';
import spyOpenWithBlind from '../../assets/pt-BR/spy/open_with_blind.mp3';
import commanderClose from '../../assets/pt-BR/commander/close.mp3';
import commanderOpen from '../../assets/pt-BR/commander/close.mp3';
import commanderReveal from '../../assets/pt-BR/commander/reveal.mp3';
import commanderRevealWithInvisible from '../../assets/pt-BR/commander/reveal_with_invisible.mp3';
import bodyguardClose from '../../assets/pt-BR/bodyguard/close.mp3';
import bodyguardOpen from '../../assets/pt-BR/bodyguard/close.mp3';
import bodyguardReveal from '../../assets/pt-BR/bodyguard/reveal.mp3';
import bodyguardRevealWithFake from '../../assets/pt-BR/bodyguard/reveal_with_fake.mp3';
import bodyguardCloseWithFake from '../../assets/pt-BR/bodyguard/close_with_fake.mp3';

export default ({
  everyoneClose: {
    audio: everyoneClose,
    text: 'Todos, fechem os olhos!',
  },
  everyoneOpen: {
    audio: everyoneOpen,
    text: 'Todos, abram os olhos!',
  },
  spyClose: {
    audio: spyClose,
    text: 'Espiões, fechem os olhos.',
  },
  spyOpen: {
    audio: spyOpen,
    text: 'Espiões, abram os olhos e se reconheçam.',
  },
  spyOpenWithBlind: {
    audio: spyOpenWithBlind,
    text: 'Espiões, exceto o Agente Cego, abram os olhos e se reconheçam',
  },
  commanderClose: {
    audio: commanderClose,
    text: 'Comandante, feche os olhos e espiões abaixem o polegar.',
  },
  commanderOpen: {
    audio: commanderOpen,
    text: 'Comandante, abra os olhos.',
  },
  commanderReveal: {
    audio: commanderReveal,
    text: 'Espiões, levantem o polegar.',
  },
  commanderRevealWithInvisible: {
    audio: commanderRevealWithInvisible,
    text: 'Espiões, exceto o Agente Invisível, levantem o polegar.',
  },
  bodyguardClose: {
    audio: bodyguardClose,
    text: 'Guarda-costas, feche os olhos. Comandante abaixe o polegar.',
  },
  bodyguardOpen: {
    audio: bodyguardOpen,
    text: 'Guarda-costas, abra os olhos.',
  },
  bodyguardReveal: {
    audio: bodyguardReveal,
    text: 'Comandante, levante o polegar.',
  },
  bodyguardRevealWithFake: {
    audio: bodyguardRevealWithFake,
    text: 'Comandante e Comandante Falso, levantem o polegar.',
  },
  bodyguardCloseWithFake: {
    audio: bodyguardCloseWithFake,
    text: 'Guarda-costas feche os olhos. Comandante e Comandante Falso, abaixem o polegar.',
  }
});
