import React, { Component } from "react";
import { Button } from 'react-bootstrap';
import history from './../history';
import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="lander">
          <h1>Home page</h1>
          <p>A simple app for UPS quote submission</p>
          <form>
            <Button variant="btn btn-success" onClick={() => history.push('./webform')}>Click button to view webform</Button>
          </form>
        </div>
      </div>
    );
  }
}