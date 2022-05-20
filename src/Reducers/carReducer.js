const carReducer = (state = [], action = {}) => {
  switch (action.type) {
    case 'GetCar':
      return action.car
    case 'SwitchAdded':
      const newItem = { ...action.item, added: !action.item.added }
      const newCar = [
        ...state.filter((m) => {
          return m !== action.item
        }),
        newItem,
      ].sort((a, b) => a.id - b.id)
      return newCar
    default:
      return state
  }
}

export const getCar = () => async (dispatch) => {
  const car = [
    {
      id: 1,
      name: 'Ferari',
      link:"https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/2018-ferrari-488-spider-gtr-4-0-s-p-1.jpg?itok=QZ-_Z-_n",
      descrition: 'Best Car',
      price: '12Cr',
      added: false,
      count: 0,
    },
    {
      id: 2,
      name: 'Lamborghini',
      link:'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/models/aventador/aventador-lp7004/aventador-lp7004-1.jpg',
      descrition: 'Best Car',
      price: '15Cr',
      added: false,
      count: 0,
    },
    {
      id: 3,
      name: 'Bugatti',
      link:'https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/2018-ferrari-488-spider-gtr-4-0-s-p-1.jpg?itok=QZ-_Z-_n',
      descrition: 'Best Car',
      price: '18Cr',
      added: false,
      count: 0,
    },
    {
      id: 4,
      name: 'Porsche',
      link:'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/models/aventador/aventador-lp7004/aventador-lp7004-1.jpg',
      descrition: 'Best Car',
      price: '10Cr',
      added: false,
      count: 0,
    },
    {
      id: 5,
      name: 'Audi',
      link:'https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/2018-ferrari-488-spider-gtr-4-0-s-p-1.jpg?itok=QZ-_Z-_n',
      descrition: 'Best Car',
      price: '8Cr',
      added: false,
      count: 0,
    },
  ]

  dispatch({
    type: 'GetCar',
    car,
  })
}

export const switchAdded = (item) => (dispatch) => {
  dispatch({
    type: 'SwitchAdded',
    item,
  })
}

export default carReducer
