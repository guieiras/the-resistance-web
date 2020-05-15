import everyoneClose from '../../assets/pt-BR/everyone/close.mp3';
import everyoneOpen from '../../assets/pt-BR/everyone/open.mp3';
import spyClose from '../../assets/pt-BR/spy/close.mp3';
import spyOpen from '../../assets/pt-BR/spy/open.mp3';
import spyOpenWithBlind from '../../assets/pt-BR/spy/open_with_blind.mp3';
import commanderClose from '../../assets/pt-BR/commander/close.mp3';
import commanderOpen from '../../assets/pt-BR/commander/open.mp3';
import commanderReveal from '../../assets/pt-BR/commander/reveal.mp3';
import commanderRevealWithInvisible from '../../assets/pt-BR/commander/reveal_with_invisible.mp3';
import bodyguardClose from '../../assets/pt-BR/bodyguard/close.mp3';
import bodyguardOpen from '../../assets/pt-BR/bodyguard/open.mp3';
import bodyguardReveal from '../../assets/pt-BR/bodyguard/reveal.mp3';
import bodyguardRevealWithFake from '../../assets/pt-BR/bodyguard/reveal_with_fake.mp3';
import bodyguardCloseWithFake from '../../assets/pt-BR/bodyguard/close_with_fake.mp3';

import bodyguard from '../../assets/pt-BR/images/bodyguard.png';
import commander from '../../assets/pt-BR/images/commander.png';
import everyone from '../../assets/pt-BR/images/everyone.png';
import spy from '../../assets/pt-BR/images/spy.png';

export default ({
  everyoneClose: {
    audio: everyoneClose,
    text: 'Todos, fechem os olhos!',
    image: everyone
  },
  everyoneOpen: {
    audio: everyoneOpen,
    text: 'Todos, abram os olhos!',
    image: everyone
  },
  spyClose: {
    audio: spyClose,
    text: 'Espiões, fechem os olhos.',
    image: spy
  },
  spyOpen: {
    audio: spyOpen,
    text: 'Espiões, abram os olhos e se reconheçam.',
    image: spy
  },
  spyOpenWithBlind: {
    audio: spyOpenWithBlind,
    text: 'Espiões, exceto o Agente Cego, abram os olhos e se reconheçam',
    image: spy
  },
  commanderClose: {
    audio: commanderClose,
    text: 'Comandante, feche os olhos e espiões abaixem o polegar.',
    image: commander
  },
  commanderOpen: {
    audio: commanderOpen,
    text: 'Comandante, abra os olhos.',
    image: commander
  },
  commanderReveal: {
    audio: commanderReveal,
    text: 'Espiões, levantem o polegar.',
    image: commander
  },
  commanderRevealWithInvisible: {
    audio: commanderRevealWithInvisible,
    text: 'Espiões, exceto o Agente Invisível, levantem o polegar.',
    image: commander
  },
  bodyguardClose: {
    audio: bodyguardClose,
    text: 'Guarda-costas, feche os olhos. Comandante abaixe o polegar.',
    image: bodyguard
  },
  bodyguardOpen: {
    audio: bodyguardOpen,
    text: 'Guarda-costas, abra os olhos.',
    image: bodyguard
  },
  bodyguardReveal: {
    audio: bodyguardReveal,
    text: 'Comandante, levante o polegar.',
    image: bodyguard
  },
  bodyguardRevealWithFake: {
    audio: bodyguardRevealWithFake,
    text: 'Comandante e Comandante Falso, levantem o polegar.',
    image: bodyguard
  },
  bodyguardCloseWithFake: {
    audio: bodyguardCloseWithFake,
    text: 'Guarda-costas feche os olhos. Comandante e Comandante Falso, abaixem o polegar.',
    image: bodyguard
  }
});
