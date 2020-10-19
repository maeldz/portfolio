import css3 from '../assets/css3.png';
import html5 from '../assets/html5.png';
import javascript from '../assets/javascript.png';
import react from '../assets/react.png';
import nodejs from '../assets/nodejs.png';
import postgresql from '../assets/postgresql.png';
import mongodb from '../assets/mongodb.png';
import grocery from '../assets/grocery.png';
import jobel from '../assets/jobel.png';
import coffeeShop from '../assets/coffee_shop.jpg';
import orix from '../assets/orix.png';
import interClone from '../assets/inter_clone.jpg';
import profilePicture from '../assets/profile.jpg';

const data = {
  personal: {
    name: 'Ismael Jesus',
    role: 'desenvolvedor full stack',
    description: 'Apaixonado por JavaScript e todo seu ecossistema.',
    image: profilePicture,
    cv:
      'https://drive.google.com/uc?id=1aVzfN-FSYVuSK8TTVZ6vbUN_0xy1NGwe&export=download',
  },
  about: {
    title: 'Conheça um pouco sobre mim',
    description:
      'Me chamo Ismael, atualmente tenho 23 anos, moro em Florianópolis/SC e sou programador JavaScript fullstack, atuo com as tecnologias mais modernas que cercam a linguagem, tais como ReactJS (web), React Native (mobile) e NodeJS (backend). \n\nNão lembro quando comecei a programar mas assim que tive meu primeiro computador já comecei a me aventurar com meus blogs e meus programinhas em Visual Basic. \n\nComecei a estudar JavaScript por volta de 1 ano atrás e desde então desenvolvi um desejo enorme de sempre aprender mais e estar por dentro do que há de novo no mundo desta fantástica linguagem. Atualmente desenvolvo projetos a fim de enriquecer meu portifólio e adquirir cada vez mais experiências.',
  },
  skills: [
    {
      name: 'css',
      level: 70,
      color: '#2966F3',
      image: css3,
    },
    {
      name: 'html',
      level: 90,
      color: '#EF652A',
      image: html5,
    },
    {
      name: 'javascript',
      level: 80,
      color: '#F7E018',
      image: javascript,
    },
    {
      name: 'react',
      level: 90,
      color: '#00DBFC',
      image: react,
    },
    {
      name: 'nodejs',
      level: 80,
      color: '#67C132',
      image: nodejs,
    },
    {
      name: 'postgresql',
      level: 60,
      color: '#336791',
      image: postgresql,
    },
    {
      name: 'mongodb',
      level: 60,
      color: '#069442',
      image: mongodb,
    },
  ],
  jobs: [
    {
      title: 'Grocery',
      description:
        'Projeto de ecommerce voltado para mercearias/verdureiras/supermercados. Consiste em backend, painel admin e app mobile.',
      tags: [
        'javascript',
        'react native',
        'reactjs',
        'mobile',
        'nodejs',
        'express',
        'postgresql',
      ],
      url: 'https://github.com/maeldz/grocery-mobile-react-native',
      image: grocery,
    },
    {
      title: 'CadJobel',
      description: 'App desenvolvido para a distribuidora de alimentos, Jobel.',
      tags: ['java', 'php', 'mysql'],
      url: 'https://github.com/maeldz/cadjobel',
      image: jobel,
    },
    {
      title: 'Coffee Shop',
      description: 'Projeto de uma loja de café usando animações.',
      tags: ['typescript', 'react native', 'expo', 'mobile'],
      url: 'https://github.com/maeldz/coffee-shop-react-native',
      image: coffeeShop,
    },
    {
      title: 'Orix Food App',
      description: 'Loja de comida.',
      tags: ['typescript', 'react native', 'expo', 'mobile'],
      url: 'https://github.com/maeldz/orix-food-app',
      image: orix,
    },
    {
      title: 'Inter Clone',
      description: 'UI clone do app do banco inter',
      tags: ['typescript', 'react native', 'expo', 'mobile'],
      url: 'https://github.com/maeldz/inter-clone',
      image: interClone,
    },
  ],
  contacts: {
    phone: '(48) 99632-8490',
    email: 'mael.dazareia@gmail.com',
    linkedin: 'https://linkedin.com/in/ismael-de-jesus',
    github: 'https://github.com/maeldz',
  },
};

export default data;
