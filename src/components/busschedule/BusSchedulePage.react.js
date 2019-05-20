import React, { Component } from 'react'

import { Page, Grid, Alert, Form as TablerForm, Button } from 'tabler-react'
import SiteWrapper from '../../SiteWrapper.react'
import ReactTable from "react-table";
import "react-table/react-table.css";
export default class BusSchedulePage extends Component {
  constructor(props, context) {
    let m = new Date().getMinutes();
    if (m < 10) {
      m = '0' + m
    }

    super(props, context);
    this.state = {

      // if(h < 10) h = '0' + h; 
      // if(m < 10) m = '0' + m;
      minute: m,
      hours: new Date().getHours(),
      time: 0,



      nhours: '--',
      nminute: '--',
      ntime: 0,
      anminute: '--',
      anhours: '--',
      nprice: 0,


      nnhours: '--',
      nnminute: '--',
      nntime: 0,
      annminute: '--',
      annhours: '--',
      nnprice: 0,


      nnnhours: '--',
      nnnminute: '--',
      nnntime: 0,
      annnminute: '--',
      annnhours: '--',
      nnnprice: 0,

    };
  }
  runtime() {
    let m = new Date().getMinutes();
    if (m < 10) {
      m = '0' + m
    };


    this.setState({

      minute: m,
      hours: new Date().getHours(),
      time: 20,


    });

  }

  componentDidMount() {
    setInterval(this.runtime.bind(this), 1000);
  }
  comparenc() {
    //6
    if (this.state.hours == 6) {
      if (this.state.minute < 45) {
        this.state.nhours = this.state.hours;
        this.state.nminute = 45;
        this.state.anminute = 0 + '0';
        this.state.anhours = this.state.hours + 1;
        this.state.ntime = 15;
        this.state.nprice = 2.5;

        this.state.nnhours = this.state.hours + 1;
        this.state.nnminute = 0 + '0';
        this.state.annminute = 20;
        this.state.annhours = this.state.hours + 1;
        this.state.nntime = this.state.time;
        this.state.nnprice = 2.5;

        this.state.nnnhours = this.state.hours + 1;
        this.state.nnnminute = 30;
        this.state.annnminute = 50;
        this.state.annnhours = this.state.hours + 1;
        this.state.nnntime = this.state.time;
        this.state.nnnprice = 2.5;
      } else {
        this.state.nhours = this.state.hours + 1;
        this.state.nminute = 0 + '0';
        this.state.anminute = 20;
        this.state.anhours = this.state.hours + 1;
        this.state.ntime = this.state.time;
        this.state.nprice = 2.5;

        this.state.nnhours = this.state.hours + 1;
        this.state.nnminute = 30;
        this.state.annminute = 50;
        this.state.annhours = this.state.hours + 1;
        this.state.nntime = this.state.time;
        this.state.nnprice = 2.5;

        this.state.nnnhours = this.state.hours + 2;
        this.state.nnnminute = 0 + '0';
        this.state.annnminute = 20;
        this.state.annnhours = this.state.hours + 2;
        this.state.nnntime = this.state.time;
        this.state.nnnprice = 2.5;
      }
    }
    //7-17
    else if (this.state.hours >= 7 && this.state.hours < 17) {
      if (this.state.minute >= 30) {
        this.state.nhours = this.state.hours + 1;
        this.state.nminute = 0 + '0';
        this.state.anminute = 20;
        this.state.anhours = this.state.hours + 1;
        this.state.ntime = this.state.time;
        this.state.nprice = 2.5;

        this.state.nnhours = this.state.hours + 1;
        this.state.nnminute = 30;
        this.state.annminute = 50;
        this.state.annhours = this.state.hours + 1;
        this.state.nntime = this.state.time;
        this.state.nnprice = 2.5;

        this.state.nnnhours = this.state.hours + 2;
        this.state.nnnminute = 0 + '0';
        this.state.annnminute = 20;
        this.state.annnhours = this.state.hours + 2;
        this.state.nnntime = this.state.time;
        this.state.nnnprice = 2.5;
      } else {
        this.state.nhours = this.state.hours;
        this.state.nminute = 30;
        this.state.anminute = 50;
        this.state.anhours = this.state.hours;
        this.state.ntime = this.state.time;
        this.state.nprice = 2.5;

        this.state.nnhours = this.state.hours + 1;
        this.state.nnminute = 0 + '0';
        this.state.annminute = 20;
        this.state.annhours = this.state.hours + 1;
        this.state.nntime = this.state.time;
        this.state.nnprice = 2.5;

        this.state.nnnhours = this.state.hours + 1;
        this.state.nnnminute = 30;
        this.state.annnminute = 50;
        this.state.annnhours = this.state.hours + 1;
        this.state.nnntime = this.state.time;
        this.state.nnnprice = 2.5;
      }
    }

    //17
    else if (this.state.hours == 17) {
      if (this.state.minute >= 30) {
        this.state.nhours = this.state.hours + 1;
        this.state.nminute = 0 + '0';
        this.state.anminute = 20;
        this.state.anhours = this.state.hours + 1;
        this.state.ntime = this.state.time;
        this.state.nprice = 2.5;

        this.state.nnhours = this.state.hours + 1;
        this.state.nnminute = 30;
        this.state.annminute = 50;
        this.state.annhours = this.state.hours + 1;
        this.state.nntime = this.state.time;
        this.state.nnprice = 2.5;

        this.state.nnnhours = this.state.hours + 2;
        this.state.nnnminute = 30;
        this.state.annnminute = 50;
        this.state.annnhours = this.state.hours + 2;
        this.state.nnntime = this.state.time;
        this.state.nnnprice = 2.5;
      } else {
        this.state.nhours = this.state.hours;
        this.state.nminute = 30;
        this.state.anminute = 50;
        this.state.anhours = this.state.hours;
        this.state.ntime = this.state.time;
        this.state.nprice = 2.5;

        this.state.nnhours = this.state.hours + 1;
        this.state.nnminute = 0 + '0';
        this.state.annminute = 20;
        this.state.annhours = this.state.hours + 1;
        this.state.nntime = this.state.time;
        this.state.nnprice = 2.5;

        this.state.nnnhours = this.state.hours + 1;
        this.state.nnnminute = 30;
        this.state.annnminute = 50;
        this.state.annnhours = this.state.hours + 1;
        this.state.nnntime = this.state.time;
        this.state.nnnprice = 2.5;
      }
    }
    //18
    else if (this.state.hours == 18) {
      if (this.state.minute >= 30) {
        this.state.nhours = this.state.hours + 1;
        this.state.nminute = 30;
        this.state.anminute = 50;
        this.state.anhours = this.state.hours + 1;
        this.state.ntime = this.state.time;
        this.state.nprice = 2.5;


        this.state.nnhours = this.state.hours + 2;
        this.state.nnminute = 30;
        this.state.annminute = 50;
        this.state.annhours = this.state.hours + 2;
        this.state.nntime = this.state.time;
        this.state.nnprice = 2.5;

        this.state.nnnhours = '--';
        this.state.nnnminute = '--';
        this.state.annnminute = '--';
        this.state.annnhours = '--';
        this.state.nnntime = 0;
        this.state.nnnprice = 0;

      } else {
        this.state.nhours = this.state.hours;
        this.state.nminute = 30;
        this.state.anminute = 50;
        this.state.anhours = this.state.hours;
        this.state.ntime = this.state.time;
        this.state.nprice = 2.5;

        this.state.nnhours = this.state.hours + 1;
        this.state.nnminute = 30;
        this.state.annminute = 50;
        this.state.annhours = this.state.hours + 1;
        this.state.nntime = this.state.time;
        this.state.nnprice = 2.5;

        this.state.nnnhours = this.state.hours + 2;
        this.state.nnnminute = 30;
        this.state.annnminute = 50;
        this.state.annnhours = this.state.hours + 2;
        this.state.nnntime = this.state.time;
        this.state.nnnprice = 2.5;
      }
    }
    //19
    else if (this.state.hours == 19) {
      if (this.state.minute >= 30) {
        this.state.nhours = this.state.hours + 1;
        this.state.nminute = 30;
        this.state.anminute = 50;
        this.state.anhours = this.state.hours + 1;
        this.state.ntime = this.state.time;
        this.state.nprice = 2.5;
        this.state.nprice = 2.5;

        this.state.nnhours = '--';
        this.state.nnminute = '--';
        this.state.annminute = '--';
        this.state.annhours = '--';
        this.state.nntime = 0;
        this.state.nnprice = 0;

        this.state.nnnhours = '--';
        this.state.nnnminute = '--';
        this.state.annnminute = '--';
        this.state.annnhours = '--';
        this.state.nnntime = 0;
        this.state.nnnprice = 0;

      } else {
        this.state.nhours = this.state.hours;
        this.state.nminute = 30;
        this.state.anminute = 50;
        this.state.anhours = this.state.hours;
        this.state.ntime = this.state.time;
        this.state.nprice = 2.5;

        this.state.nnhours = this.state.hours + 1;
        this.state.nnminute = 30;
        this.state.annminute = 50;
        this.state.annhours = this.state.hours + 1;
        this.state.nntime = this.state.time;
        this.state.nnprice = 2.5;

        this.state.nnnhours = '--';
        this.state.nnnminute = '--';
        this.state.annnminute = '--';
        this.state.annnhours = '--';
        this.state.nnntime = 0;
        this.state.nnnprice = 0;
      }
    }


    //20
    else if (this.state.hours == 20) {
      if (this.state.minute >= 30) {
        this.state.nhours = '--';
        this.state.nminute = '--';
        this.state.anminute = '--';
        this.state.anhours = '--';
        this.state.ntime = 0;
        this.state.nprice = 0;


        this.state.nnhours = '--';
        this.state.nnminute = '--';
        this.state.annminute = '--';
        this.state.annhours = '--';
        this.state.nntime = 0;
        this.state.nnprice = 0;

        this.state.nnnhours = '--';
        this.state.nnnminute = '--';
        this.state.annnminute = '--';
        this.state.annnhours = '--';
        this.state.nnntime = 0;
        this.state.nnnprice = 0;

      } else {
        this.state.nhours = this.state.hours;
        this.state.nminute = 30;
        this.state.anminute = 50;
        this.state.anhours = this.state.hours;
        this.state.ntime = this.state.time;
        this.state.nprice = 2.5;

        this.state.nnhours = '--';
        this.state.nnminute = '--';
        this.state.annminute = '--';
        this.state.annhours = '--';
        this.state.nntime = 0;
        this.state.nnprice = 0;

        this.state.nnnhours = '--';
        this.state.nnnminute = '--';
        this.state.annnminute = '--';
        this.state.annnhours = '--';
        this.state.nnntime = 0;
        this.state.nnnprice = 0;
      }
    }
    //>20
    else if (this.state.hours > 20) {
      this.state.nhours = '--';
      this.state.nminute = '--';
      this.state.anminute = '--';
      this.state.anhours = '--';
      this.state.ntime = 0;
      this.state.nprice = 0;


      this.state.nnhours = '--';
      this.state.nnminute = '--';
      this.state.annminute = '--';
      this.state.annhours = '--';
      this.state.nntime = 0;
      this.state.nnprice = 0;

      this.state.nnnhours = '--';
      this.state.nnnminute = '--';
      this.state.annnminute = '--';
      this.state.annnhours = '--';
      this.state.nnntime = 0;
      this.state.nnnprice = 0;
    }

    //   >=0 <6
    else if (this.state.hours >= 0 && this.state.hours < 6) {
      this.state.nhours = '--';
      this.state.nminute = '--';
      this.state.anminute = '--';
      this.state.anhours = '--';
      this.state.ntime = 0;
      this.state.nprice = 0;


      this.state.nnhours = '--';
      this.state.nnminute = '--';
      this.state.annminute = '--';
      this.state.annhours = '--';
      this.state.nntime = 0;
      this.state.nnprice = 0;

      this.state.nnnhours = '--';
      this.state.nnnminute = '--';
      this.state.annnminute = '--';
      this.state.annnhours = '--';
      this.state.nnntime = 0;
      this.state.nnnprice = 0;
    }

  }



  comparecn() {
    //7-18
    if (this.state.hours >= 7 && this.state.hours < 18) {
      if (this.state.minute >= 30) {
        this.state.nhours = this.state.hours + 1;
        this.state.nminute = 0 + '0';
        this.state.anminute = 20;
        this.state.anhours = this.state.hours + 1;
        this.state.ntime = this.state.time;
        this.state.nprice = 2.5;

        this.state.nnhours = this.state.hours + 1;
        this.state.nnminute = 30;
        this.state.annminute = 50;
        this.state.annhours = this.state.hours + 1;
        this.state.nntime = this.state.time;
        this.state.nnprice = 2.5;

        this.state.nnnhours = this.state.hours + 2;
        this.state.nnnminute = 0 + '0';
        this.state.annnminute = 20;
        this.state.annnhours = this.state.hours + 2;
        this.state.nnntime = this.state.time;
        this.state.nnnprice = 2.5;
      } else {
        this.state.nhours = this.state.hours;
        this.state.nminute = 30;
        this.state.anminute = 50;
        this.state.anhours = this.state.hours;
        this.state.ntime = this.state.time;
        this.state.nprice = 2.5;

        this.state.nnhours = this.state.hours + 1;
        this.state.nnminute = 0 + '0';
        this.state.annminute = 20;
        this.state.annhours = this.state.hours + 1;
        this.state.nntime = this.state.time;
        this.state.nnprice = 2.5;

        this.state.nnnhours = this.state.hours + 1;
        this.state.nnnminute = 30;
        this.state.annnminute = 50;
        this.state.annnhours = this.state.hours + 1;
        this.state.nnntime = this.state.time;
        this.state.nnnprice = 2.5;
      }
    }
    //18
    else if (this.state.hours == 18) {
      if (this.state.minute >= 30) {
        this.state.nhours = this.state.hours + 1;
        this.state.nminute = 0 + '0';
        this.state.anminute = 20;
        this.state.anhours = this.state.hours + 1;
        this.state.ntime = this.state.time;
        this.state.nprice = 2.5;

        this.state.nnhours = this.state.hours + 2;
        this.state.nnminute = 0 + '0';
        this.state.annminute = 20;
        this.state.annhours = this.state.hours + 2;
        this.state.nntime = this.state.time;
        this.state.nnprice = 2.5;

        this.state.nnnhours = this.state.hours + 3;
        this.state.nnnminute = 10;
        this.state.annnminute = 30;
        this.state.annnhours = this.state.hours + 3;
        this.state.nnntime = this.state.time;
        this.state.nnnprice = 2.5;
      } else {
        this.state.nhours = this.state.hours;
        this.state.nminute = 30;
        this.state.anminute = 50;
        this.state.anhours = this.state.hours;
        this.state.ntime = this.state.time;
        this.state.nprice = 2.5;

        this.state.nnhours = this.state.hours + 1;
        this.state.nnminute = 0 + '0';
        this.state.annminute = 20;
        this.state.annhours = this.state.hours + 1;
        this.state.nntime = this.state.time;
        this.state.nnprice = 2.5;

        this.state.nnnhours = this.state.hours + 2;
        this.state.nnnminute = 0 + '0';
        this.state.annnminute = 20;
        this.state.annnhours = this.state.hours + 2;
        this.state.nnntime = this.state.time;
        this.state.nnnprice = 2.5;
      }
    }
    //19
    else if (this.state.hours == 19) {
      this.state.nhours = this.state.hours + 1;
      this.state.nminute = 0 + '0';
      this.state.anminute = 20;
      this.state.anhours = this.state.hours + 1;
      this.state.ntime = this.state.time;
      this.state.nprice = 2.5;

      this.state.nnhours = this.state.hours + 2;
      this.state.nnminute = 10;
      this.state.annminute = 30;
      this.state.annhours = this.state.hours + 2;
      this.state.nntime = this.state.time;
      this.state.nnprice = 2.5;

      this.state.nnnhours = '--';
      this.state.nnnminute = '--';
      this.state.annnminute = '--';
      this.state.annnhours = '--';
      this.state.nnntime = 0;
      this.state.nnnprice = 0;
    }
    //20
    else if (this.state.hours == 20) {
      this.state.nhours = this.state.hours + 1;
      this.state.nminute = 10;
      this.state.anminute = 30;
      this.state.anhours = this.state.hours + 1;
      this.state.ntime = this.state.time;
      this.state.nprice = 2.5;

      this.state.nnhours = '--';
      this.state.nnminute = '--';
      this.state.annminute = '--';
      this.state.annhours = '--';
      this.state.nntime = 0;
      this.state.nnprice = 0;

      this.state.nnnhours = '--';
      this.state.nnnminute = '--';
      this.state.annnminute = '--';
      this.state.annnhours = '--';
      this.state.nnntime = 0;
      this.state.nnnprice = 0;
    }
    //21
    else if (this.state.hours == 21) {
      if (this.state.minute < 10) {
        this.state.nhours = this.state.hours;
        this.state.nminute = 10;
        this.state.anminute = 30;
        this.state.anhours = this.state.hours;
        this.state.ntime = this.state.time;
        this.state.nprice = 2.5;

        this.state.nnhours = '--';
        this.state.nnminute = '--';
        this.state.annminute = '--';
        this.state.annhours = '--';
        this.state.nntime = 0;
        this.state.nnprice = 0;

        this.state.nnnhours = '--';
        this.state.nnnminute = '--';
        this.state.annnminute = '--';
        this.state.annnhours = '--';
        this.state.nnntime = 0;
        this.state.nnnprice = 0;
      } else {
        this.state.nhours = '--';
        this.state.nminute = '--';
        this.state.anminute = '--';
        this.state.anhours = '--';
        this.state.ntime = 0;
        this.state.nprice = 0;

        this.state.nnhours = '--';
        this.state.nnminute = '--';
        this.state.annminute = '--';
        this.state.annhours = '--';
        this.state.nntime = 0;
        this.state.nnprice = 0;

        this.state.nnnhours = '--';
        this.state.nnnminute = '--';
        this.state.annnminute = '--';
        this.state.annnhours = '--';
        this.state.nnntime = 0;
        this.state.nnnprice = 0;
      }

    }
    //>21
    else if (this.state.hours > 21) {
      this.state.nhours = '--';
      this.state.nminute = '--';
      this.state.anminute = '--';
      this.state.anhours = '--';
      this.state.ntime = 0;
      this.state.nprice = 0;

      this.state.nnhours = '--';
      this.state.nnminute = '--';
      this.state.annminute = '--';
      this.state.annhours = '--';
      this.state.nntime = 0;
      this.state.nnprice = 0;

      this.state.nnnhours = '--';
      this.state.nnnminute = '--';
      this.state.annnminute = '--';
      this.state.annnhours = '--';
      this.state.nnntime = 0;
      this.state.nnnprice = 0;
    }
    //>0 <7
    else if (this.state.hours > 0 && this.state.hours < 7) {
      this.state.nhours = '--';
      this.state.nminute = '--';
      this.state.anminute = '--';
      this.state.anhours = '--';
      this.state.ntime = 0;
      this.state.nprice = 0;

      this.state.nnhours = '--';
      this.state.nnminute = '--';
      this.state.annminute = '--';
      this.state.annhours = '--';
      this.state.nntime = 0;
      this.state.nnprice = 0;

      this.state.nnnhours = '--';
      this.state.nnnminute = '--';
      this.state.annnminute = '--';
      this.state.annnhours = '--';
      this.state.nnntime = 0;
      this.state.nnnprice = 0;
    }

  }
  comparecs(){
    //17
    if (this.state.hours == 17) {
      if (this.state.minute >= 30) {
        this.state.nhours = this.state.hours + 1;
        this.state.nminute = 0 + '0';
        this.state.anminute = 40;
        this.state.anhours = this.state.hours + 1;
        this.state.ntime = 40;
        this.state.nprice = 3.3;

        this.state.nnhours = this.state.hours + 1;
        this.state.nnminute = 30;
        this.state.annminute = 10;
        this.state.annhours = this.state.hours + 2;
        this.state.nntime = 40;
        this.state.nnprice = 3.3;

        this.state.nnnhours = this.state.hours + 2;
        this.state.nnnminute = 0+'0';
        this.state.annnminute = 30;
        this.state.annnhours = this.state.hours + 2;
        this.state.nnntime = 30;
        this.state.nnnprice = 3.3;
      } else {
        this.state.nhours = this.state.hours;
        this.state.nminute = 0+'0';
        this.state.anminute = 40;
        this.state.anhours = this.state.hours;
        this.state.ntime = 40;
        this.state.nprice = 3.3;

        this.state.nnhours = this.state.hours + 1;
        this.state.nnminute = 0 + '0';
        this.state.annminute = 20;
        this.state.annhours = this.state.hours + 1;
        this.state.nntime = this.state.time;
        this.state.nnprice = 2.5;

        this.state.nnnhours = this.state.hours + 2;
        this.state.nnnminute = 0 + '0';
        this.state.annnminute = 20;
        this.state.annnhours = this.state.hours + 2;
        this.state.nnntime = this.state.time;
        this.state.nnnprice = 2.5;
      }
    }
  }
  render() {
    const data = [
      {
        deport: this.state.nhours + ':' + this.state.nminute,
        arrive: this.state.anhours + ':' + this.state.anminute,
        duration: this.state.ntime,
        price: this.state.nprice,
      },
      {
        deport: this.state.nnhours + ':' + this.state.nnminute,
        arrive: this.state.annhours + ':' + this.state.annminute,
        duration: this.state.nntime,
        price: this.state.nnprice,
      },
      {
        deport: this.state.nnnhours + ':' + this.state.nnnminute,
        arrive: this.state.annnhours + ':' + this.state.annnminute,
        duration: this.state.nnntime,
        price: this.state.nnnprice,
      },
    ]

    const columns = [
      {
        Header: 'Deport',
        accessor: 'deport'

      },
      {
        Header: 'Arrive',
        accessor: 'arrive'
      },
      {
        Header: 'Duration',
        accessor: 'duration'
      },
      {
        Header: 'Price',
        accessor: 'price'
      }
    ]


    return (
      <SiteWrapper>

        <Page.Content

          title={
            'Current Time：' + this.state.hours + ':' + this.state.minute
          }>
          <select>
            <option value="" selected disabled hidden>Choose here</option>
            <option onClick={() => { this.comparenc() }} >Deport North-Arrive City</option>
            <option onClick={() => { this.comparecn() }}>Deport City-Arrive North</option>
            <option onClick={() => { this.comparecs() }}>Deport City-Arrive South</option>
            <option value="audi">Deport South-Arrive City</option>
          </select>

        </Page.Content>
        <div>
          <ReactTable
            data={data}
            columns={columns}
            defaultPageSize={3}
          />
        </div >

      </SiteWrapper >

    )

  }
}