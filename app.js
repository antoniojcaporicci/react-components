// TODO
// // Create 2 components for grocery list
// Inside app.js, create a GroceryList component that contains an unordered list of 2 grocery items. Render this component to the div tag in index.html with an id of app
//ReactDOM.render(<App />, document.getElementById("actual-dom-element-where-I-want-to-render-my-component"));

var App = () => (
  <div>
    <h2>My Grocery List</h2>
    <GroceryList groceries={['kale', 'cucumber']}/>
  </div>
)

var GroceryList = (props) => (
  <ul>
    {props.groceries.map(grocery =>
      <GroceryListItem item={grocery} />
    )}
  </ul>
)

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      bold: false
    }
  }

  onListItemHover() {
    this.setState({
      bold: true
    })
  }


  render() {
    let style
    if (this.state.bold) {
      style = {'fontWeight': 'bold'}
    } else {
      style = {'fontWeight': 'none'}
    }


    return (
      <li style={style} onMouseEnter={this.onListItemHover.bind(this)}>{this.props.item}</li>
    )
  }
}


ReactDOM.render(<App />, document.getElementById("app"));
