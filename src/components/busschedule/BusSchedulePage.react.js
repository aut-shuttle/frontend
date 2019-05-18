import React, { Component } from 'react'

import { Page, Grid, Alert, Form as TablerForm, Button } from 'tabler-react'
import SiteWrapper from '../../SiteWrapper.react'


export default class BusSchedulePage extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }
  compare() {
    
  }


  render() {

    return (
      <SiteWrapper>
        <Page.Content
          title={
            'Current Time：' + this.state.date.toLocaleTimeString()
          }>
          <Button
            block
            color="warning"
            type="Back"
            onClick={this.compare()}
          >
            Back
										</Button>
        </Page.Content>

      </SiteWrapper>
    )

  }
}