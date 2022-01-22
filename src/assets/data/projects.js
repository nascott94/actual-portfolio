import { v4 as uuidv4 } from 'uuid';
import BathBomb from '../images/bathbomb.png';
import Warehouse from '../images/warehouse.png';
import NoteTaker from '../images/notetaker.png';
import SimpleSite from '../images/simplesite2.png';
import CovidTesting from '../images/covidtesting.png';

const projects = [
  {
    id: uuidv4(),
    name: 'Warehouse Management System',
    desc: 'A warehouse management application that allows the user to customize what inventory they would like to manage.',
    img: Warehouse,
  },
  {
    id: uuidv4(),
    name: 'Bath Bomb E-Commerce',
    desc: 'This application is a bath bomb e-commerce site using custom Shopify API.',
    img: BathBomb,
  },
  {
    id: uuidv4(),
    name: 'Note Taker',
    desc: 'An app that allows the user to make and edit notes.',
    img: NoteTaker,
  },
  {
    id: uuidv4(),
    name: 'SimpleWebsite',
    desc: 'A simple website for an agency using a template.',
    img: SimpleSite,
  },
  {
    id: uuidv4(),
    name: 'Covid Testing',
    desc: 'A site made for a covid tesing business, still in the design and system building process.',
    img: CovidTesting,
  },
];

export default projects;
