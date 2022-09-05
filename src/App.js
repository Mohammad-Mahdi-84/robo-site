import React from "react";
import CardList from "./CardList";
import SearchBox from "./searchBox";
import ErrorBoundry from "./ErrorBundry";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      robo: [],
      Searchfield: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((user) => this.setState({ robo: user }));
  }
  onSearchChange = (event) => {
    this.setState({ Searchfield: event.target.value });
  };
  render() {
    const fiterRobots = this.state.robo.filter((robot) =>
      robot.name.toLowerCase().includes(this.state.Searchfield.toLowerCase())
    );
    if (this.state.robo.length === 0) {
      return <h1>LODING</h1>;
    } else {
      if (fiterRobots.length === 0) {
        return (
          <div className="tc">
            <div className="scroll tc">
              <h1>Robo Friends</h1>
              <SearchBox searchChange={this.onSearchChange} />
            </div>
            <h2>there isn't any {this.state.Searchfield}</h2>
          </div>
        );
      }
      return (
        <div className="tc">
          <div className="scroll tc">
            <h1>Robo Friends</h1>
            <SearchBox searchChange={this.onSearchChange} />
          </div>
          <ErrorBoundry>

            <CardList robots={fiterRobots} />
          </ErrorBoundry>
        </div>
      );
    }
  }
}

export default App;
