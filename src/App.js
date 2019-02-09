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
        type: 'Western',
        nondairy: true,
        vegetarian: false
      },
      {
        id: 2,
        name: 'Baked Sea bass with Lemon herb Potato',
        image: './images/Western/i104.jpg',
        type: 'Western',
        nondairy: true,
        vegetarian: false
      },
      {
        id: 3,
        name: 'Lamb Kebab with pilaf rice',
        image: './images/Western/i707.jpg',
        type: 'Western',
        nondairy: true,
        vegetarian: false
      },
      {
        id: 4,
        name: 'Spaghetti Bolognese',
        image: './images/Western/i176.jpg',
        type: 'Western',
        nondairy: true,
        vegetarian: false
      },
      {
        id: 5,
        name: 'Baked Marinated Seabass with Roasted Veggies and Sweet potato',
        image: './images/Western/i609.jpg',
        type: 'Western',
        nondairy: true,
        vegetarian: false
      },
      {
        id: 6,
        name: 'Pasta di Mare',
        image: './images/Western/i107.jpg',
        type: 'Western',
        nondairy: false,
        vegetarian: false
      },
      {
        id: 7,
        name: 'Lamb Navarin with pasta',
        image: './images/Western/i702.jpg',
        type: 'Western',
        nondairy: true,
        vegetarian: false
      },
      {
        id: 8,
        name: 'Baked Sea bass with Creamy Spinach and Potato',
        image: './images/Western/i269.jpg',
        type: 'Western',
        nondairy: false,
        vegetarian: false
      },
      {
        id: 9,
        name: 'BBQ Chicken Wrapped with Salad',
        image: './images/Western/i320.jpg',
        type: 'Western',
        nondairy: true,
        vegetarian: false
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
        type: 'Snacks',
        nondairy: false,
        vegetarian: true
      },
      {
        id: 20,
        name: 'The French Apple Cake',
        image: './images/snacks/6.jpg',
        type: 'Snacks',
        nondairy: true,
        vegetarian: true
      },
      {
        id: 21,
        name: 'Honey Banana Muffin',
        image: './images/snacks/572.jpg',
        type: 'Snacks',
        nondairy: true,
        vegetarian: false
      },
      {
        id: 22,
        name: 'Grandma\'s Chocolate Cake',
        image: './images/snacks/210.jpg',
        type: 'Snacks',
        nondairy: false,
        vegetarian: false
      },
      {
        id: 23,
        name: 'Yoghurt Cake',
        image: './images/snacks/417.jpg',
        type: 'Snacks',
        nondairy: false,
        vegetarian: false
      },
      {
        id: 24,
        name: 'Fresh Watermalon',
        image: './images/desserts/7.jpg',
        type: 'Desserts',
        nondairy: true,
        vegetarian: true
      },
      {
        id: 25,
        name: 'Fruit Jelly',
        image: './images/desserts/216.jpg',
        type: 'Desserts',
        nondairy: true,
        vegetarian: true
      },
      {
        id: 26,
        name: 'Pear with Blueberries',
        image: './images/desserts/14.jpg',
        type: 'Desserts',
        nondairy: true,
        vegetarian: true
      },
      {
        id: 27,
        name: 'Apple and Watermelon Cup',
        image: './images/desserts/2.jpg',
        type: 'Desserts',
        nondairy: true,
        vegetarian: true
      },
      {
        id: 28,
        name: 'Orange Fruit Salad',
        image: './images/desserts/563.jpg',
        type: 'Desserts',
        nondairy: true,
        vegetarian: true
      },
      {
        id: 29,
        name: 'Ginger Beef with Bok Choy and Jasmine Rice',
        image: './images/asian/i204.jpg',
        type: 'Asian',
        nondairy: false,
        vegetarian: false
      },
      {
        id: 30,
        name: 'Braised Soya Chicken with Potato and Rice',
        image: './images/asian/615.jpg',
        type: 'Asian',
        nondairy: false,
        vegetarian: false
      },
      {
        id: 31,
        name: 'Stir-fry Chicken, Sugar Pea and Carrot with Rice',
        image: './images/asian/614.jpg',
        type: 'Asian',
        nondairy: true,
        vegetarian: false
      },
      {
        id: 32,
        name: 'Marinated Grilled With Salmon Rice',
        image: './images/asian/48.jpg',
        type: 'Asian',
        nondairy: true,
        vegetarian: false
      },
      {
        id: 33,
        name: 'Beef Mechado with Rice',
        image: './images/asian/635.jpg',
        type: 'Asian',
        nondairy: true,
        vegetarian: false
      }
    ],
    displayOverlay: 'none',
    foodOverlay: {
      id: 0, name: '', image: '', type: ''
    },
    selectedType: 'western'
  }

  onChange = (e) => {
    this.setState({
      [e.target.id]: e.target.checked
    })
  }

  setDisplayOverlay = (food) => {
    this.setState({displayOverlay: 'block', foodOverlay: food})
  }

  closeOverlay = (food) => {
    this.setState({displayOverlay: 'none', foodOverlay: { id: 0, name: '', image: '', type: ''}})
  }

  setCard = (food) => {
    return (
      <div style={{margin: '5px'}} className="inner-card">
        <div id="image-container">
          <img src={food.image} alt={food.name} width="100%" height="130" style={{borderTopLeftRadius: '5px', borderTopRightRadius: '5px'}} />
          {
            food.id === this.state.foodOverlay.id ? <div className="centered" style={{fontWeight: 'bold'}}>IN YOUR MEAL PLAN</div> : null
          }
        </div>
        <div style={{padding: '9px', fontSize: '11px', color: 'rgba(192,192,192)'}}>
          <div style={{float: 'left'}}>{food.type}</div>
          <div style={{float: 'right'}}>
            {
              food.nondairy ?
              <img src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4Ij4KPGc+Cgk8Zz4KCQk8cGF0aCBkPSJNNDU2LjM1NCwzMzQuMzk2Yy0wLjQ5NS0wLjgyOC0xLjAxNi0xLjYyMS0xLjUzNi0yLjMyMWMtNS4xNzEtNy4yMjgtMTIuODYtMTIuMDA2LTIxLjYzMi0xMy40NDkgICAgYy04LjczLTEuNDQyLTE3LjU3OSwwLjYxNC0yNC43ODEsNS43ODZsLTk1LjQwMyw2OC4xMjJoLTk5LjY2OWMtNC43MDIsMC04LjUzMy0zLjgyMy04LjUzMy04LjUzM3MzLjgzMS04LjUzMyw4LjUzMy04LjUzM0gyNjguOCAgICBjMTYuNDY5LDAsMjkuODY3LTEzLjM5NywyOS44NjctMjkuODY3YzAtMC4wOTQtMC4wMDktMC44NzktMC4wMTctMC45NjRjLTAuNTI5LTE2LjQ2MS0xNC40MTMtMjkuMjk1LTMwLjUzMi0yOC45MDJoLTExMS4wMSAgICBjLTkuODM5LDAuMDg1LTE5LjQyMiwzLjYxLTI2Ljk3NCw5LjkwN2wtNDEuNzI4LDM0LjczMWMtMS45NDYsMS42My0zLjA3Miw0LjAyOC0zLjA3Miw2LjU2MnYxMDIuNCAgICBjMCw0LjcxOSwzLjgyMyw4LjUzMyw4LjUzMyw4LjUzM2gyMTEuNzIxYzEzLjg1OC0wLjAxNywyNy4zNTgtNC44OTgsMzguMDI1LTEzLjczbDEwMy40NS04NS40NzggICAgQzQ2MS4xMTYsMzY4LjY0OCw0NjUuMTk1LDM0OS4yMSw0NTYuMzU0LDMzNC4zOTZ6IE00MzYuNjg1LDM2NS4xMzNMMzMyLjc0LDQ1MC45ODdjLTcuNjI5LDYuMzE1LTE3LjI4LDkuNzk2LTI3LjE2Miw5LjgxM0gxMDIuNCAgICB2LTg5Ljg2NWwzOC42NjQtMzIuMTg4YzQuNTQtMy43OCwxMC4yODMtNS44OTcsMTYuMTItNS45NDhsMTExLjIwNi0wLjAwOGM3LjA3NC0wLjAwOSwxMi45NzksNS4zNDIsMTMuMjEsMTIuODA5ICAgIGMwLDcuMDU3LTUuNzQzLDEyLjgtMTIuOCwxMi44aC01NS40NjdjLTE0LjExNCwwLTI1LjYsMTEuNDg2LTI1LjYsMjUuNnMxMS40ODYsMjUuNiwyNS42LDI1LjZoMTAyLjQgICAgYzEuNzc1LDAsMy41MDctMC41NTUsNC45NzUtMS41ODdsOTcuNjM4LTY5LjcyNmMzLjUxNi0yLjUyNiw3Ljc5MS0zLjUwNywxMi4wNzUtMi44MjVjNC4yNzUsMC43MDgsOC4wMTMsMy4wMjksMTAuNTgxLDYuNjEzICAgIGMwLjI1NiwwLjM1LDAuNDg2LDAuNzA4LDAuNzA4LDEuMDc1QzQ0Ni4wMjksMzUwLjM3OSw0NDQuMDIzLDM1OS44NzYsNDM2LjY4NSwzNjUuMTMzeiIgZmlsbD0iIzAwMDAwMCIvPgoJPC9nPgo8L2c+CjxnPgoJPGc+CgkJPHBhdGggZD0iTTkzLjYxMSwzNDkuODY3SDB2MTcuMDY3aDg1LjA3N3YxMjhIMFY1MTJoOTMuNjExYzQuNzEsMCw4LjUzMy0zLjgxNCw4LjUzMy04LjUzM1YzNTguNCAgICBDMTAyLjE0NCwzNTMuNjgxLDk4LjMyMSwzNDkuODY3LDkzLjYxMSwzNDkuODY3eiIgZmlsbD0iIzAwMDAwMCIvPgoJPC9nPgo8L2c+CjxnPgoJPGc+CgkJPHBhdGggZD0iTTQyLjY2Nyw0MjYuNjY3Yy0xNC4xMTQsMC0yNS42LDExLjQ4Ni0yNS42LDI1LjZjMCwxNC4xMTQsMTEuNDg2LDI1LjYsMjUuNiwyNS42czI1LjYtMTEuNDg2LDI1LjYtMjUuNiAgICBDNjguMjY3LDQzOC4xNTMsNTYuNzgxLDQyNi42NjcsNDIuNjY3LDQyNi42Njd6IE00Mi42NjcsNDYwLjhjLTQuNzAyLDAtOC41MzMtMy44MjMtOC41MzMtOC41MzNjMC00LjcxLDMuODMxLTguNTMzLDguNTMzLTguNTMzICAgIGM0LjcwMiwwLDguNTMzLDMuODIzLDguNTMzLDguNTMzQzUxLjIsNDU2Ljk3Nyw0Ny4zNjksNDYwLjgsNDIuNjY3LDQ2MC44eiIgZmlsbD0iIzAwMDAwMCIvPgoJPC9nPgo8L2c+CjxnPgoJPGc+CgkJPHBhdGggZD0iTTUwMy40NjcsMjY0LjUzM0g4LjUzM2MtNC43MSwwLTguNTMzLDMuODE0LTguNTMzLDguNTMzYzAsMzIuOTMsMjYuNzk1LDU5LjczMyw1OS43MzMsNTkuNzMzaDM5Mi41MzMgICAgYzMyLjkzLDAsNTkuNzMzLTI2LjgwMyw1OS43MzMtNTkuNzMzQzUxMiwyNjguMzQ4LDUwOC4xODYsMjY0LjUzMyw1MDMuNDY3LDI2NC41MzN6IE00NTIuMjY3LDMxNS43MzNINTkuNzMzICAgIGMtMjAuNjA4LDAtMzcuODQ1LTE0LjY4Ni00MS44MDUtMzQuMTMzaDQ3Ni4xNDNDNDkwLjExMiwzMDEuMDQ3LDQ3Mi44NzUsMzE1LjczMyw0NTIuMjY3LDMxNS43MzN6IiBmaWxsPSIjMDAwMDAwIi8+Cgk8L2c+CjwvZz4KPGc+Cgk8Zz4KCQk8cGF0aCBkPSJNMjU2LDQyLjY2N2MtMTIyLjMzNCwwLTIyMS44NjcsOTkuNTMzLTIyMS44NjcsMjIxLjg2N3Y4LjUzM2MwLDQuNzE5LDMuODIzLDguNTMzLDguNTMzLDguNTMzaDQyNi42NjcgICAgYzQuNzE5LDAsOC41MzMtMy44MTQsOC41MzMtOC41MzN2LTguNTMzQzQ3Ny44NjcsMTQyLjE5OSwzNzguMzQyLDQyLjY2NywyNTYsNDIuNjY3eiBNNTEuMiwyNjQuNTMzICAgIGMwLTExMi45MjIsOTEuODc4LTIwNC44LDIwNC44LTIwNC44czIwNC44LDkxLjg3OCwyMDQuOCwyMDQuOEg1MS4yeiIgZmlsbD0iIzAwMDAwMCIvPgoJPC9nPgo8L2c+CjxnPgoJPGc+CgkJPHBhdGggZD0iTTExNS42NDQsMTQwLjAwNmMtNS45NjUsNi43MDctMTEuNDk0LDEzLjg4NC0xNi40MzUsMjEuMzQybDE0LjIyNSw5LjQyOWM0LjUwNi02Ljc5Myw5LjU0LTEzLjMzOCwxNC45NjctMTkuNDM5ICAgIEwxMTUuNjQ0LDE0MC4wMDZ6IiBmaWxsPSIjMDAwMDAwIi8+Cgk8L2c+CjwvZz4KPGc+Cgk8Zz4KCQk8cGF0aCBkPSJNMjU2LDc2LjhjLTQ3LjkyMywwLjAyNi05My41NTEsMTguMTMzLTEyOC40NjksNTAuOTYxbDExLjY5MSwxMi40MzNjMzEuNzQ0LTI5Ljg1LDczLjIyNC00Ni4zMDIsMTE2Ljc4Ny00Ni4zMjdMMjU2LDc2LjggICAgeiIgZmlsbD0iIzAwMDAwMCIvPgoJPC9nPgo8L2c+CjxnPgoJPGc+CgkJPHJlY3QgeD0iMjMwLjQiIHdpZHRoPSI1MS4yIiBoZWlnaHQ9IjE3LjA2NyIgZmlsbD0iIzAwMDAwMCIvPgoJPC9nPgo8L2c+CjxnPgoJPGc+CgkJPHJlY3QgeD0iMjQ3LjQ2NyIgeT0iOC41MzMiIHdpZHRoPSIxNy4wNjciIGhlaWdodD0iNDIuNjY3IiBmaWxsPSIjMDAwMDAwIi8+Cgk8L2c+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg=="
              style={{margin: '5px'}} alt="" />
              : null
            }
            {
              food.vegetarian ?
              <img src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxMS45OTcgNTExLjk5NyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTExLjk5NyA1MTEuOTk3OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjE2cHgiIGhlaWdodD0iMTZweCI+CjxnPgoJPGc+CgkJPGc+CgkJCTxwYXRoIGQ9Ik01MTAuNjQ2LDI2MS40NjlDNDY4LjAwMywxODUuMTM0LDM5Ny45LDEzOC40NTYsMzE1LjczMywxMjkuODA2Yy00MS4xOTUtNTIuMDMtMTcwLjQ1Ni02NS4yMTEtMTc2LjAzNS02NS43NTQgICAgIGMtMy42MzUtMC4zNzUtNy4yOTIsMS4yMDgtOS41MjEsNC4xNjdjLTIuMjQsMi45MzgtMi43OTIsNi44MzMtMS40NTgsMTAuMjgxYzEyLjY3MywzMi44OTYsMjUuNjU2LDcwLjMxMywyOS4wOTIsODUuNjIxICAgICBjLTIzLjQ3MywxMC43NDEtNDMuOTksMjIuMTYzLTU3LjIxNywzMS42ODFjLTI4LjY4OC00NS44OTYtODcuMjUtNDYuNDY5LTg5LjkyNy00Ni40NjlDNC43NzEsMTQ5LjMzMywwLDE1NC4xMDQsMCwxNjAgICAgIGMwLDYxLjgwMiwyMS41NDIsOTIuODIzLDM1Ljk0OCwxMDYuNjY3QzIxLjU0MiwyODAuNTEsMCwzMTEuNTMxLDAsMzczLjMzM0MwLDM3OS4yMjksNC43NzEsMzg0LDEwLjY2NywzODQgICAgIGMyLjY3NywwLDYxLjI0LTAuNTczLDg5LjkyNy00Ni40NjljMTcuNTczLDEyLjY0Niw0Ny45NTcsMjguNjM3LDgxLjE1OSw0MS45MzFjLTcuMzM3LDExLjg2Ny0xMS4wODYsMzAuNzQyLTExLjA4Niw1Ny44NzEgICAgIGMwLDUuODk2LDQuNzcxLDEwLjY2NywxMC42NjcsMTAuNjY3YzMuMTcyLDAsNzUuNzA4LTAuNjI5LDExMS44MzItNDMuMDAzYzkxLjg3LTEuNzc1LDE3MC45NzgtNDkuODkxLDIxNy40OC0xMzMuMTMzICAgICBDNTEyLjQ0OCwyNjguNjM1LDUxMi40NDgsMjY0LjY5OCw1MTAuNjQ2LDI2MS40Njl6IE0xNTQuOTA2LDg3LjQxN2MzNS44NDEsNS4xODgsOTQuNjgyLDE3Ljk1MiwxMjcuOTM0LDQwLjc5OSAgICAgYy0zMC42NiwxLjE5OC02OS43OCwxMi43OS0xMDUuMjQzLDI3LjMzNkMxNzIuODc1LDEzNi44MDIsMTYyLjM5OCwxMDcuNTA5LDE1NC45MDYsODcuNDE3eiBNMTkyLjI1LDQyNi4wNTIgICAgIGMxLjQyMS0yOS42NzEsOC4yNjctMzcuMjU0LDEwLjE4Ni0zOC44MDZjMjAuNzg2LDcuMjk2LDQxLjg0NiwxMy4wOTQsNjAuOTY5LDE2LjAwNCAgICAgQzI0MC4yNjYsNDE5LjUzMSwyMDguNzIzLDQyNC41OTgsMTkyLjI1LDQyNi4wNTJ6IE0yMDEuMTk4LDM4Ni44NTRsMC4wMDQtMC4wMjljMC4wMjksMC4wMSwwLjA1OSwwLjAxOCwwLjA4NywwLjAyOSAgICAgQzIwMS4yMjksMzg2Ljg0NiwyMDEuMjYyLDM4Ni44NjMsMjAxLjE5OCwzODYuODU0eiBNMjg4LDM4NGMtNjIuMzMzLDAtMTY0LjI1LTUxLjE3Ny0xODMuMTI1LTcwLjQ5ICAgICBjLTIuMDIxLTIuMDczLTQuNzgxLTMuMjA4LTcuNjI1LTMuMjA4Yy0wLjY0NiwwLTEuMzAyLDAuMDYzLTEuOTQ4LDAuMTc3Yy0zLjQ5LDAuNjQ2LTYuNDM4LDMtNy44NDQsNi4yNiAgICAgYy0xNC4zOTYsMzMuMzg1LTQ4LjI1LDQyLjUtNjUuODQ0LDQ0Ljk5YzMuMzMzLTY2Ljg0NCwzNC45NjktODQuNzA4LDM2LjU5NC04NS41NzNjMy41MS0xLjgwMiw1LjY3Ny01LjQzOCw1LjcyOS05LjM4NSAgICAgYzAuMDUyLTMuOTktMi4xODgtNy43MDgtNS43MTktOS41ODNjLTEuNDI3LTAuNzYtMzMuMjUtMTguNS0zNi42MDQtODUuNTIxYzE3LjU4MywyLjU3Myw1MS41NjIsMTEuODIzLDY1Ljg0NCw0NC45MjcgICAgIGMxLjQwNiwzLjI2LDQuMzU0LDUuNjE1LDcuODQ0LDYuMjZjMy41MjEsMC42NTYsNy4wOTQtMC40OSw5LjU3My0zLjAzMWMxOC44NzUtMTkuMzEzLDEyMC43OTItNzAuNDksMTgzLjEyNS03MC40OSAgICAgYzg0LjIxOSwwLDE1Ny4xNjcsNDIuNjc3LDIwMS4wNDIsMTE3LjMzM0M0NDUuMTY3LDM0MS4zMjMsMzcyLjIxOSwzODQsMjg4LDM4NHoiIGZpbGw9IiMwMDAwMDAiLz4KCQkJPHBhdGggZD0iTTMyMCwyNjYuNjY2YzAtNDkuMDgzLDE5LjM2NS03OS4xNDYsMTkuNTYzLTc5LjQ0OGMzLjIyOS00LjkxNywxLjg3NS0xMS41MjEtMy4wMjEtMTQuNzcxICAgICBjLTQuODk2LTMuMjI5LTExLjUtMS45MDYtMTQuNzUsMi45NjljLTAuOTQ4LDEuNDE3LTIzLjEyNSwzNS4zMzMtMjMuMTI1LDkxLjI1YzAsNTUuOTE3LDIyLjE3Nyw4OS44MzMsMjMuMTI1LDkxLjI1ICAgICBjMi4wNTIsMy4wODMsNS40MzgsNC43NSw4Ljg4NSw0Ljc1YzIuMDMxLDAsNC4wODMtMC41ODMsNS45MDYtMS43OTJjNC45MDYtMy4yNzEsNi4yMjktOS44ODUsMi45NTgtMTQuNzkyICAgICBDMzM5LjM0NCwzNDUuNzkyLDMyMCwzMTYuMTk4LDMyMCwyNjYuNjY2eiIgZmlsbD0iIzAwMDAwMCIvPgoJCQk8cGF0aCBkPSJNMjkzLjg3NSwxNzIuNDQ4Yy00LjkwNi0zLjIyOS0xMS40OS0xLjkwNi0xNC43NSwyLjk2OUMyNzguMTc3LDE3Ni44MzMsMjU2LDIxMC43NSwyNTYsMjY2LjY2NiAgICAgYzAsMjkuODY1LDYuNDM3LDUzLjMzMywxMS44NDQsNjcuNzZjMS42MDQsNC4yODEsNS42NjcsNi45MjcsOS45OSw2LjkyN2MxLjI0LDAsMi41MS0wLjIxOSwzLjc0LTAuNjc3ICAgICBjNS41MjEtMi4wNjMsOC4zMTMtOC4yMDgsNi4yNS0xMy43MjljLTQuNzgxLTEyLjc4MS0xMC40OS0zMy42MTUtMTAuNDktNjAuMjgxYzAtNDkuMDgzLDE5LjM2NS03OS4xNDYsMTkuNTYzLTc5LjQ0OCAgICAgQzMwMC4xMjUsMTgyLjMwMiwyOTguNzcxLDE3NS42OTgsMjkzLjg3NSwxNzIuNDQ4eiIgZmlsbD0iIzAwMDAwMCIvPgoJCQk8Y2lyY2xlIGN4PSIzODMuOTk5IiBjeT0iMjM0LjY2NSIgcj0iMjEuMzMzIiBmaWxsPSIjMDAwMDAwIi8+CgkJPC9nPgoJPC9nPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo="
                style={{margin: '5px'}} alt="" />
              : null
            }
          </div>
        </div>
        <div style={{padding: '9px', fontSize: '11px', minHeight: '31px'}}>
          <span style={{}}>{food.name}</span>
        </div>
        <div align="right" style={{padding: '5px'}}>
          {
            this.state.foodOverlay.id === food.id ?
              <button style={{backgroundColor: 'rgba(192,192,192)'}} onClick={this.closeOverlay}>REMOVE</button> :
              <button style={{backgroundColor: 'rgb(255,255,102)'}} onClick={() => this.setDisplayOverlay(food)}>SELECT</button>
          }
        </div>
      </div>
    )
  }

  selectType = (e) => {
    this.setState({selectedType: e.target.value})
  }

  render() {
    return (
      <div style={{margin: '30px 0px'}}>
        <div style={{textAlign:'center'}}>
          <select onChange={this.selectType}>
            <option value="western">Western</option>
            <option value="asian">Asian</option>
            <option value="vegetarian">Vegetarian</option>
          </select>
        </div>
        <div>
          <div className="grid-container">
            <div className="grid-100" style={{padding: '5px 20px'}}><b>Wednesday 13, February 2019</b></div>
            {
              this.state.foods.map(food => {
                if ((food.type === 'Western' && this.state.selectedType === 'western') || (food.type === 'Asian' && this.state.selectedType === 'asian') || (food.type === 'Vegetarian' && this.state.selectedType === 'vegetarian') || (food.type === 'Desserts') || (food.type === 'Snacks'))
                  return (
                    <div key={food.id} className="card grid-20 mobile-grid-50">{this.setCard(food)}</div>
                  )
                else
                  return null
              })
            }
          </div>
        </div>
        <div id="overlay" style={{display: this.state.displayOverlay}}>
          <div id="inner-overlay" className="grid-20 mobile-grid-50" style={{margin: 'auto', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', position:'absolute'}}>
            <div className="card">
              {
                this.setCard(this.state.foodOverlay)
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
