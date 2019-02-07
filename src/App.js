import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import './unsemantic-grid-responsive-tablet.css';

class App extends Component {
  state = {
    western: true,
    asian: true,
    vegetarian: true,
    snack: true,
    dessert: true,
    foods: [
      {
        id: 1,
        name: 'Chargrilled Beef Wrap with Cajun sauce',
        image: './images/Western/i543.jpg',
        type: 'Western'
      },
      {
        id: 2,
        name: 'Baked Sea bass with Lemon herb Potato',
        image: './images/Western/i104.jpg',
        type: 'Western'
      },
      {
        id: 3,
        name: 'Lamb Kebab with pilaf rice',
        image: './images/Western/i707.jpg',
        type: 'Western'
      },
      {
        id: 4,
        name: 'Spaghetti Bolognese',
        image: './images/Western/i176.jpg',
        type: 'Western'
      },
      {
        id: 5,
        name: 'Baked Marinated Seabass with Roasted Veggies and Sweet potato',
        image: './images/Western/i609.jpg',
        type: 'Western'
      },
      {
        id: 6,
        name: 'Pasta di Mare',
        image: './images/Western/i107.jpg',
        type: 'Western'
      },
      {
        id: 7,
        name: 'Lamb Navarin with pasta',
        image: './images/Western/i702.jpg',
        type: 'Western'
      },
      {
        id: 8,
        name: 'Baked Sea bass with Creamy Spinach and Potato',
        image: './images/Western/i269.jpg',
        type: 'Western'
      },
      {
        id: 9,
        name: 'BBQ Chicken Wrapped with Salad',
        image: './images/Western/i320.jpg',
        type: 'Western'
      },
      // {
      //   id: 10,
      //   name: 'Beef Burger with Baked Potato',
      //   image: './images/Western/i296.jpg',
      //   type: 'Western'
      // },
      // {
      //   id: 11,
      //   name: 'Homemade Beef Lasagna',
      //   image: './images/Western/i241.jpg',
      //   type: 'Western'
      // },
      // {
      //   id: 12,
      //   name: 'Salmon Mac and Cheese',
      //   image: './images/Western/i160.jpg',
      //   type: 'Western'
      // },
      // {
      //   id: 13,
      //   name: 'Smoked BBQ Chicken with Butter Rice',
      //   image: './images/Western/i333.jpg',
      //   type: 'Western'
      // },
      // {
      //   id: 14,
      //   name: 'Homemade Bangers and Mash',
      //   image: './images/Western/i282.jpg',
      //   type: 'Western'
      // },
      // {
      //   id: 15,
      //   name: 'Spaghetti Bolognese',
      //   image: './images/Western/i111.jpg',
      //   type: 'Western'
      // },
      // {
      //   id: 16,
      //   name: 'Rosemary Lemon Chicken with Sweet Potato',
      //   image: './images/Western/i279.jpg',
      //   type: 'Western'
      // },
      // {
      //   id: 17,
      //   name: 'Fish Blanquette with Pilaf rice',
      //   image: './images/Western/i283.jpg',
      //   type: 'Western'
      // },
      // {
      //   id: 18,
      //   name: 'Beef Burger with Baked Potatoes',
      //   image: './images/Western/i710.jpg',
      //   type: 'Western'
      // },
      {
        id: 19,
        name: 'White Chocolate Cookie',
        image: './images/snacks/164.jpg',
        type: 'Snacks'
      },
      {
        id: 20,
        name: 'The French Apple Cake',
        image: './images/snacks/6.jpg',
        type: 'Snacks'
      },
      {
        id: 21,
        name: 'Honey Banana Muffin',
        image: './images/snacks/572.jpg',
        type: 'Snacks'
      },
      {
        id: 22,
        name: 'Grandma\'s Chocolate Cake',
        image: './images/snacks/210.jpg',
        type: 'Snacks'
      },
      {
        id: 23,
        name: 'Yoghurt Cake',
        image: './images/snacks/417.jpg',
        type: 'Snacks'
      },
      {
        id: 24,
        name: 'Fresh Watermalon',
        image: './images/desserts/7.jpg',
        type: 'Desserts'
      },
      {
        id: 25,
        name: 'Fruit Jelly',
        image: './images/desserts/216.jpg',
        type: 'Desserts'
      },
      {
        id: 26,
        name: 'Pear with Blueberries',
        image: './images/desserts/14.jpg',
        type: 'Desserts'
      },
      {
        id: 27,
        name: 'Apple and Watermelon Cup',
        image: './images/desserts/2.jpg',
        type: 'Desserts'
      },
      {
        id: 28,
        name: 'Orange Fruit Salad',
        image: './images/desserts/563.jpg',
        type: 'Desserts'
      },
      {
        id: 29,
        name: 'Ginger Beef with Bok Choy and Jasmine Rice',
        image: './images/asian/i204.jpg',
        type: 'Asian'
      },
      {
        id: 30,
        name: 'Braised Soya Chicken with Potato and Rice',
        image: './images/asian/615.jpg',
        type: 'Asian'
      },
      {
        id: 31,
        name: 'Stir-fry Chicken, Sugar Pea and Carrot with Rice',
        image: './images/asian/614.jpg',
        type: 'Asian'
      },
      {
        id: 32,
        name: 'Marinated Grilled With Salmon Rice',
        image: './images/asian/48.jpg',
        type: 'Asian'
      },
      {
        id: 33,
        name: 'Beef Mechado with Rice',
        image: './images/asian/635.jpg',
        type: 'Asian'
      }
    ]
  }

  onChange = (e) => {
    this.setState({
      [e.target.id]: e.target.checked
    })
  }

  render() {
    var obj = {
      western: this.state.western,
      asian: this.state.asian,
      vegetarian: this.state.vegetarian
    }
    return (
      <div>
        <div>
          <label htmlFor="western">Western</label>
          <input type="checkbox" id="western" checked={this.state.western} onChange={this.onChange} />
          <label htmlFor="asian">Asian</label>
          <input type="checkbox" id="asian" checked={this.state.asian} onChange={this.onChange} />
          <label htmlFor="vegetarian">Vegetarian</label>
          <input type="checkbox" id="vegetarian" checked={this.state.vegetarian} onChange={this.onChange} />
        </div>
        <div>
          Wednesday 13, February 2019
          <div className="grid-container">
            {
              this.state.foods.map(food => {
                if ((food.type === 'Western' && this.state.western) || (food.type === 'Asian' && this.state.asian) || (food.type === 'Vegetarian' && this.state.vegetarian) || (food.type === 'Desserts') || (food.type === 'Snacks'))
                  return <Card food={food} types={obj} key={food.id} />
                else
                  return null
              })
            }
          </div>
        </div>
      </div>
    );
  }
}

const Card = (props) => {
  let { food } = props;
  return (
    <div className="card grid-20 mobile-grid-50">
      <div style={{margin: '5px'}} className="inner-card" >
        <img src={food.image} alt={food.name} width="100%" height="150" />
        <div style={{padding: '3px', fontSize: '12px'}}>
          {food.type}
        </div>
        <div style={{padding: '3px', fontSize: '11px', minHeight: '29px'}}>
          <span style={{}}>{food.name}</span>
        </div>
        <div align="right" style={{padding: '5px'}}>
          <button style={{backgroundColor: 'yellow', border: 'none'}}>SELECT</button>
        </div>
      </div>
    </div>
  )
}

export default App;
