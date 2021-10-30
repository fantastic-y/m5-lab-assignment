import "./App.css";
import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemList: [
        {
          id: 1,
          image: "./products/cologne.jpg",
          desc: "Unisex Cologne",
          value: 1
        },
        {
          id: 2,
          image: "./products/iwatch.jpg",
          desc: "Apple iWatch",
          value: 1
        },
        {
          id: 3,
          image: "./products/mug.jpg",
          desc: "Unique Mug",
          value: 8
        },
        {
          id: 4,
          image: "./products/wallet.jpg",
          desc: "Mens Wallet",
          value: 5
        }
      ]
    };
  }

  render() {
    const tValue = this.state.itemList.map((Value) => {
      return Value.value;
    });
    let totalValue = 0;
    for (let i = 0; i < tValue.length; i++) {
      totalValue += tValue[i];
    }
    tValue.reduce((totalValue, tValue) => totalValue + tValue, 0);
    console.log(totalValue);

    let shoppingItem = <Shopping shoppinglists={this.state.itemList} />;

    return (
      <div className="App">
        <div id="header">
          <h1>Shop to React</h1>
          <div id="total-items">
            <FontAwesomeIcon icon={faShoppingCart} />
            <div id="total-value"> {totalValue} </div>
            items
          </div>
        </div>
        {shoppingItem}
      </div>
    );
  }
}

function Shopping(props) {
  return (
    <ListGroup>
      {props.shoppinglists.map((shoppinglist) => (
        <ListGroupItem key={shoppinglist.id}>
          <h5>{shoppinglist.desc}</h5>
          <img src={shoppinglist.image} alt="product img"></img>
          <span>{shoppinglist.value}</span>
          quantity
        </ListGroupItem>
      ))}
    </ListGroup>
  );
}

export default App;
