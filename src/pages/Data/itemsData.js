import coffee from '../../assets/pics/coffee.jpg';
import juice from '../../assets/pics/juice.jpg';
import tea from '../../assets/pics/tea.jpg';
import Lemonade from '../../assets/pics/lemonade.jpg';
import water from '../../assets/pics/water.jpg';

import caesar from '../../assets/pics/caesar.jpg';
import greek from '../../assets/pics/greek.jpg';
import strawberry from '../../assets/pics/strawberry.jpg';
import salmon from '../../assets/pics/salmon.jpg';
import avocado from '../../assets/pics/avocado.jpg';

import alfredo from '../../assets/pics/alfredo.jpg';
import bolognese from '../../assets/pics/bolognese.jpg';
import carbonaro from '../../assets/pics/carbonara.jpg';
import tomato from '../../assets/pics/tomato.jpg';
import creamy from '../../assets/pics/creamy.jpg';

const item = { 
  drinks: [
    {
        id: '1',
        image: coffee,
        price: '2',
        name: 'Coffee',
        customizable: ['None', 'Sugar']
      },
      {
        id: '2',
        image: juice,
        price: '3',
        name: 'Juice',
        customizable: ['None','Ice']
      },
      {
        id: '3',
        image: tea,
        price: '2',
        name: 'Iced Tea',
        customizable: ['None','Sugar']
      },
      {
        id: '4',
        image: Lemonade,
        price: '3',
        name: 'Lemonade',
        customizable: ['None','Ice']
      },
      {
        id: '5',
        image: water,
        price: '1',
        name: 'Water',
        customizable: ['None','Ice']
      },
    ],
    salads: [
    {
        id: '6',
        image: caesar,
        price: '5',
        name: 'Caesar Salad'
      },
      {
        id: '7',
        image: avocado,
        price: '6',
        name: 'Avocado Salad',
      },
      {
        id: '8',
        image: greek,
        price: '5',
        name: 'Greek Salad',
      },
      {
        id: '9',
        image: strawberry,
        price: '7',
        name: 'Strawberry Salad',
      },
      {
        id: '10',
        image: salmon,
        price: '14',
        name: 'Salmon Salad',
      },
    ],
    mainDishes: [
    {
        id: '11',
        image: alfredo,
        price: '12',
        name: 'Fettuccine Alfredo',
      },
      {
        id: '12',
        image: tomato,
        price: '11',
        name: 'Tomato Pasta',
      },
      {
        id: '13',
        image: bolognese,
        price: '15',
        name: 'Bolognese Pasta',
      },
      {
        id: '14',
        image: carbonaro,
        price: '13',
        name: 'Carbonaro Pasta',
      },
      {
        id: '15',
        image: creamy,
        price: '12',
        name: 'Salmon creamy Pasta',
      },
    ]
  };

export default item;