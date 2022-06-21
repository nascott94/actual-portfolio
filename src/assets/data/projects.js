import { v4 as uuidv4 } from 'uuid';
import BathBomb from '../images/bathbomb.png';
import Warehouse from '../images/warehouse.png';
import SimpleSite from '../images/simplesite2.png';
import CovidTesting from '../images/covidtesting.png';
import HealthPortal from '../images/health-portal.png';
import Beet from '../images/beet.png';

const projects = [
  {
    id: uuidv4(),
    name: 'Telahealth Portal',
    desc: 'A telahealth portal that was made for a client, name has been changed, using React.',
    img: HealthPortal,
    link: 'https://telahealth-portal.netlify.app/',
  },
  {
    id: uuidv4(),
    name: 'Bath Bomb E-Commerce',
    desc: 'This application is a bath bomb e-commerce site using custom Shopify API.',
    img: BathBomb,
    link: 'https://bath-bombs-shopify-shop.netlify.app/',
  },
  {
    id: uuidv4(),
    name: 'Warehouse Management System',
    desc: 'A warehouse management application that allows the user to customize what inventory they would like to manage.',
    img: Warehouse,
    link: 'https://warehouse-manager-nw.herokuapp.com/',
  },
  {
    id: uuidv4(),
    name: 'BeetJuice Website',
    desc: 'A website that was made for an event and wedding band, made using React and Styled Components.',
    img: Beet,
    link: 'https://www.bookb33tju1c3.com/',
  },
  {
    id: uuidv4(),
    name: 'Covid Testing',
    desc: 'A site made for a covid testing business, made using React and NextJs.',
    img: CovidTesting,
    link: 'https://covidsitedanandnat.netlify.app',
  },
];

export default projects;
