import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const PartList = (props) => (
  <tr>
    <td>{props.part.Reference}</td>
    <td>{props.part.Description}</td>
    <td>{props.part.Replacements}</td>
  </tr>
);

export default class TableList extends Component {
  constructor(props) {
    super(props);

    this.state = { part: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/part/")
      .then((response) => {
        this.setState({ part: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  partMapping() {
    return this.state.part.map((currentPart) => {
      return <PartList part={currentPart} key={currentPart._id} />;
    });
  }

  render() {
    return (
      <div>
        <h1>I am the table list component</h1>;
        <table>
          <thead>
            <tr>
              <th>Reference</th>
              <th>Description</th>
              <th>Replacement</th>
            </tr>
          </thead>
          <tbody>{this.partMapping()}</tbody>
        </table>
      </div>
    );
  }
}
