import React, { Component } from 'react'
import { Formik, Form } from 'formik'
import API from '../../utils/API'
import { Page, Grid, Alert, Form as TablerForm, Button } from 'tabler-react'
import SiteWrapper from '../../SiteWrapper.react'
import Time from 'react-time'
import { StyleSheet, View, Text } from 'react-native';
export default class BusSchedulePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
          //defauilt value of the date time
          date: '',
        };
      }
      componentDidMount() {
        var that = this;
        var date = new Date().getDate(); //Current Date
        var month = new Date().getMonth() + 1; //Current Month
        var year = new Date().getFullYear(); //Current Year
        var hours = new Date().getHours(); //Current Hours
        var min = new Date().getMinutes(); //Current Minutes
        var sec = new Date().getSeconds(); //Current Seconds
        that.setState({
          //Setting the value of the date time
          date:
            date + '/' + month + '/' + year + ' ' + hours + ':' + min + ':' + sec,
        });
      }
    render(){
        setInterval(function(){this.setState({curTime: new  Date().toLocaleString()});}.bind(this), 1000);
        return(
        <SiteWrapper>
         <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: 20,
          }}>
          Current Date Time
        </Text>
        <Text
          style={{
            fontSize: 20,
            marginTop: 16,
          }}>
          {this.state.date}
        </Text>
      </View>
        </SiteWrapper>
        )
        
    }
}