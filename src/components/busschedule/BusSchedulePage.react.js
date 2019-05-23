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
    //6
    if (this.state.hours == 6) {
      if (this.state.minute >= 20) {
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
        this.state.annnminute = 40;
        this.state.annnhours = this.state.hours + 2;
        this.state.nnntime = 40;
        this.state.nnnprice = 3.3;
      } else {
        this.state.nhours = this.state.hours;
        this.state.nminute = 20;
        this.state.anminute = 45;
        this.state.anhours = this.state.hours;
        this.state.ntime = 25;
        this.state.nprice = 3.3;

        this.state.nnhours = this.state.hours + 1;
        this.state.nnminute = 0 + '0';
        this.state.annminute = 40;
        this.state.annhours = this.state.hours + 1;
        this.state.nntime = 40;
        this.state.nnprice = 3.3;

        this.state.nnnhours = this.state.hours + 1;
        this.state.nnnminute = 30;
        this.state.annnminute = 10;
        this.state.annnhours = this.state.hours + 2;
        this.state.nnntime = 40;
        this.state.nnnprice = 3.3;
      }
    }
    //7
    else if (this.state.hours == 7) {
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
        this.state.annnminute = 40;
        this.state.annnhours = this.state.hours + 2;
        this.state.nnntime = 40;
        this.state.nnnprice = 3.3;
      } else {
        this.state.nhours = this.state.hours;
        this.state.nminute = 30;
        this.state.anminute = 10;
        this.state.anhours = this.state.hours+1;
        this.state.ntime = 40;
        this.state.nprice = 3.3;

        this.state.nnhours = this.state.hours+1 ;
        this.state.nnminute = 0+'0';
        this.state.annminute = 40;
        this.state.annhours = this.state.hours + 1;
        this.state.nntime = 40;
        this.state.nnprice = 3.3;

        this.state.nnnhours = this.state.hours + 1;
        this.state.nnnminute = 30;
        this.state.annnminute = 10;
        this.state.annnhours = this.state.hours + 2;
        this.state.nnntime = 40;
        this.state.nnnprice = 3.3;
      }
    }
    else if (this.state.hours == 8) {
      if (this.state.minute >= 30) {
        this.state.nhours = this.state.hours + 1;
        this.state.nminute = 0 + '0';
        this.state.anminute = 40;
        this.state.anhours = this.state.hours + 1;
        this.state.ntime = 40;
        this.state.nprice = 3.3;

        this.state.nnhours = this.state.hours + 1;
        this.state.nnminute = 30;
        this.state.annminute = 0+'0';
        this.state.annhours = this.state.hours + 2;
        this.state.nntime = 30;
        this.state.nnprice = 3.3;

        this.state.nnnhours = this.state.hours + 2;
        this.state.nnnminute = 0+'0';
        this.state.annnminute = 30;
        this.state.annnhours = this.state.hours + 2;
        this.state.nnntime = 30;
        this.state.nnnprice = 3.3;
      } else {
        this.state.nhours = this.state.hours;
        this.state.nminute = 30;
        this.state.anminute = 10;
        this.state.anhours = this.state.hours+1;
        this.state.ntime = 40;
        this.state.nprice = 3.3;

        this.state.nnhours = this.state.hours+1 ;
        this.state.nnminute = 0+'0';
        this.state.annminute = 40;
        this.state.annhours = this.state.hours + 1;
        this.state.nntime = 40;
        this.state.nnprice = 3.3;

        this.state.nnnhours = this.state.hours + 1;
        this.state.nnnminute = 30;
        this.state.annnminute = 0+'0';
        this.state.annnhours = this.state.hours + 2;
        this.state.nnntime = 30;
        this.state.nnnprice = 3.3;
      }
    }
    //9
    else if (this.state.hours == 9) {
      if (this.state.minute >= 30) {
        this.state.nhours = this.state.hours + 1;
        this.state.nminute = 0 + '0';
        this.state.anminute = 30;
        this.state.anhours = this.state.hours + 1;
        this.state.ntime = 30;
        this.state.nprice = 3.3;

        this.state.nnhours = this.state.hours + 1;
        this.state.nnminute = 30;
        this.state.annminute = 0+'0';
        this.state.annhours = this.state.hours + 2;
        this.state.nntime = 30;
        this.state.nnprice = 3.3;

        this.state.nnnhours = this.state.hours + 2;
        this.state.nnnminute = 0+'0';
        this.state.annnminute = 30;
        this.state.annnhours = this.state.hours + 2;
        this.state.nnntime = 30;
        this.state.nnnprice = 3.3;
      } else {
        this.state.nhours = this.state.hours;
        this.state.nminute = 30;
        this.state.anminute = 0+'0';
        this.state.anhours = this.state.hours+1;
        this.state.ntime = 30;
        this.state.nprice = 3.3;

        this.state.nnhours = this.state.hours+1 ;
        this.state.nnminute = 0+'0';
        this.state.annminute = 30;
        this.state.annhours = this.state.hours + 1;
        this.state.nntime = 30;
        this.state.nnprice = 3.3;

        this.state.nnnhours = this.state.hours + 1;
        this.state.nnnminute = 30;
        this.state.annnminute = 0+'0';
        this.state.annnhours = this.state.hours + 2;
        this.state.nnntime = 30;
        this.state.nnnprice = 3.3;
      }
    }
    //10-11
    else if (this.state.hours ==10 || this.state.hours==11) {
      if (this.state.minute >= 30) {
        this.state.nhours = this.state.hours + 1;
        this.state.nminute = 0 + '0';
        this.state.anminute = 30;
        this.state.anhours = this.state.hours + 1;
        this.state.ntime = 30;
        this.state.nprice = 3.3;

        this.state.nnhours = this.state.hours + 1;
        this.state.nnminute = 30;
        this.state.annminute = 0+'0';
        this.state.annhours = this.state.hours + 2;
        this.state.nntime = 30;
        this.state.nnprice = 3.3;

        this.state.nnnhours = this.state.hours + 2;
        this.state.nnnminute = 0+'0';
        this.state.annnminute = 30;
        this.state.annnhours = this.state.hours + 2;
        this.state.nnntime = 30;
        this.state.nnnprice = 3.3;
      } else {
        this.state.nhours = this.state.hours;
        this.state.nminute = 30;
        this.state.anminute = 0+'0';
        this.state.anhours = this.state.hours+1;
        this.state.ntime = 30;
        this.state.nprice = 3.3;

        this.state.nnhours = this.state.hours+1 ;
        this.state.nnminute = 0+'0';
        this.state.annminute = 30;
        this.state.annhours = this.state.hours + 1;
        this.state.nntime = 30;
        this.state.nnprice = 3.3;

        this.state.nnnhours = this.state.hours + 1;
        this.state.nnnminute = 30;
        this.state.annnminute = 0+'0';
        this.state.annnhours = this.state.hours + 2;
        this.state.nnntime = 30;
        this.state.nnnprice = 3.3;
      }
    }
    //12
    else if (this.state.hours == 12) {
      if (this.state.minute >= 30) {
        this.state.nhours = this.state.hours + 1;
        this.state.nminute = 0 + '0';
        this.state.anminute = 30;
        this.state.anhours = this.state.hours + 1;
        this.state.ntime = 30;
        this.state.nprice = 3.3;

        this.state.nnhours = this.state.hours + 1;
        this.state.nnminute = 30;
        this.state.annminute = 0+'0';
        this.state.annhours = this.state.hours + 2;
        this.state.nntime = 30;
        this.state.nnprice = 3.3;

        this.state.nnnhours = this.state.hours + 2;
        this.state.nnnminute = 0+'0';
        this.state.annnminute = 40;
        this.state.annnhours = this.state.hours + 2;
        this.state.nnntime = 40;
        this.state.nnnprice = 3.3;
      } else {
        this.state.nhours = this.state.hours;
        this.state.nminute = 30;
        this.state.anminute = 0+'0';
        this.state.anhours = this.state.hours+1;
        this.state.ntime = 30;
        this.state.nprice = 3.3;

        this.state.nnhours = this.state.hours+1 ;
        this.state.nnminute = 0+'0';
        this.state.annminute = 30;
        this.state.annhours = this.state.hours + 1;
        this.state.nntime = 30;
        this.state.nnprice = 3.3;

        this.state.nnnhours = this.state.hours + 1;
        this.state.nnnminute = 30;
        this.state.annnminute = 0+'0';
        this.state.annnhours = this.state.hours + 2;
        this.state.nnntime = 30;
        this.state.nnnprice = 3.3;
      }
    }
    //13
    else if (this.state.hours == 13) {
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
        this.state.annnminute = 40;
        this.state.annnhours = this.state.hours + 2;
        this.state.nnntime = 40;
        this.state.nnnprice = 3.3;
      } else {
        this.state.nhours = this.state.hours;
        this.state.nminute = 30;
        this.state.anminute = 0+'0';
        this.state.anhours = this.state.hours+1;
        this.state.ntime = 30;
        this.state.nprice = 3.3;

        this.state.nnhours = this.state.hours+1 ;
        this.state.nnminute = 0+'0';
        this.state.annminute = 40;
        this.state.annhours = this.state.hours + 1;
        this.state.nntime = 40;
        this.state.nnprice = 3.3;

        this.state.nnnhours = this.state.hours + 1;
        this.state.nnnminute = 30;
        this.state.annnminute = 10;
        this.state.annnhours = this.state.hours + 2;
        this.state.nnntime = 40;
        this.state.nnnprice = 3.3;
      }
    }
    //14 15
    else if (this.state.hours == 14 || this.state.hours==15) {
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
        this.state.annnminute = 40;
        this.state.annnhours = this.state.hours + 2;
        this.state.nnntime = 40;
        this.state.nnnprice = 3.3;
      } else {
        this.state.nhours = this.state.hours;
        this.state.nminute = 30;
        this.state.anminute = 10;
        this.state.anhours = this.state.hours+1;
        this.state.ntime = 40;
        this.state.nprice = 3.3;

        this.state.nnhours = this.state.hours+1 ;
        this.state.nnminute = 0+'0';
        this.state.annminute = 40;
        this.state.annhours = this.state.hours + 1;
        this.state.nntime = 40;
        this.state.nnprice = 3.3;

        this.state.nnnhours = this.state.hours + 1;
        this.state.nnnminute = 30;
        this.state.annnminute = 10;
        this.state.annnhours = this.state.hours + 2;
        this.state.nnntime = 40;
        this.state.nnnprice = 3.3;
      }
    }
    //16
    else if (this.state.hours == 16) {
      if (this.state.minute >= 30) {
        this.state.nhours = this.state.hours + 1;
        this.state.nminute = 0 + '0';
        this.state.anminute = 40;
        this.state.anhours = this.state.hours + 1;
        this.state.ntime = 40;
        this.state.nprice = 3.3;

        this.state.nnhours = this.state.hours + 1;
        this.state.nnminute = 30;
        this.state.annminute = 0+'0';
        this.state.annhours = this.state.hours + 2;
        this.state.nntime = 30;
        this.state.nnprice = 3.3;

        this.state.nnnhours = this.state.hours + 2;
        this.state.nnnminute = 0+'0';
        this.state.annnminute = 40;
        this.state.annnhours = this.state.hours + 2;
        this.state.nnntime = 40;
        this.state.nnnprice = 3.3;
      } else {
        this.state.nhours = this.state.hours;
        this.state.nminute = 30;
        this.state.anminute = 10;
        this.state.anhours = this.state.hours+1;
        this.state.ntime = 40;
        this.state.nprice = 3.3;

        this.state.nnhours = this.state.hours+1 ;
        this.state.nnminute = 0+'0';
        this.state.annminute = 40;
        this.state.annhours = this.state.hours + 1;
        this.state.nntime = 40;
        this.state.nnprice = 3.3;

        this.state.nnnhours = this.state.hours + 1;
        this.state.nnnminute = 30;
        this.state.annnminute = 0+'0';
        this.state.annnhours = this.state.hours + 2;
        this.state.nnntime = 30;
        this.state.nnnprice = 3.3;
      }
    }
    //17
    else if (this.state.hours == 17) {
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
        this.state.nminute = 30;
        this.state.anminute = 0+'0';
        this.state.anhours = this.state.hours+1;
        this.state.ntime = 30;
        this.state.nprice = 3.3;

        this.state.nnhours = this.state.hours + 1;
        this.state.nnminute = 0 + '0';
        this.state.annminute = 40;
        this.state.annhours = this.state.hours + 1;
        this.state.nntime = 40;
        this.state.nnprice = 3.3;

        this.state.nnnhours = this.state.hours + 1;
        this.state.nnnminute = 30;
        this.state.annnminute = 10;
        this.state.annnhours = this.state.hours + 2;
        this.state.nnntime =40;
        this.state.nnnprice = 3.3;
      }
    }
    //18
    else if (this.state.hours == 18) {
      if (this.state.minute >= 30) {
        this.state.nhours = this.state.hours + 1;
        this.state.nminute = 0 + '0';
        this.state.anminute = 30;
        this.state.anhours = this.state.hours + 1;
        this.state.ntime = 30;
        this.state.nprice = 3.3;

        this.state.nnhours = this.state.hours + 2;
        this.state.nnminute = 0+'0';
        this.state.annminute = 30;
        this.state.annhours = this.state.hours + 2;
        this.state.nntime = 30;
        this.state.nnprice = 3.3;

        this.state.nnnhours = this.state.hours + 3;
        this.state.nnnminute = 10;
        this.state.annnminute = 35;
        this.state.annnhours = this.state.hours + 3;
        this.state.nnntime = 25;
        this.state.nnnprice = 3.3;
      } else {
        this.state.nhours = this.state.hours;
        this.state.nminute = 30;
        this.state.anminute = 10;
        this.state.anhours = this.state.hours+1;
        this.state.ntime = 40;
        this.state.nprice = 3.3;

        this.state.nnhours = this.state.hours+1 ;
        this.state.nnminute = 0+'0';
        this.state.annminute = 30;
        this.state.annhours = this.state.hours + 1;
        this.state.nntime = 30;
        this.state.nnprice = 3.3;

        this.state.nnnhours = this.state.hours + 2;
        this.state.nnnminute = 0+'0';
        this.state.annnminute = 30;
        this.state.annnhours = this.state.hours + 2;
        this.state.nnntime = 30;
        this.state.nnnprice = 3.3;
      }
    }
    //19
    else if (this.state.hours == 19) {
        this.state.nhours = this.state.hours+1;
        this.state.nminute = 0+'0';
        this.state.anminute = 30;
        this.state.anhours = this.state.hours+1;
        this.state.ntime = 30;
        this.state.nprice = 3.3;

        this.state.nnhours = this.state.hours+2;
        this.state.nnminute = 10;
        this.state.annminute = 35;
        this.state.annhours = this.state.hours +2;
        this.state.nntime = 25;
        this.state.nnprice = 3.3;

        this.state.nnnhours = '--';
        this.state.nnnminute = '--';
        this.state.annnminute = '--';
        this.state.annnhours = '--';
        this.state.nnntime = 0;
        this.state.nnnprice = 0;
    }
    //20
    else if (this.state.hours == 20) {
      this.state.nhours = this.state.hours+1;
      this.state.nminute = 10;
      this.state.anminute = 35;
      this.state.anhours = this.state.hours+1;
      this.state.ntime = 25;
      this.state.nprice = 3.3;

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
    else if(this.state.hours==21){
      if(this.state.minute<10){
      this.state.nhours = this.state.hours;
      this.state.nminute = 10;
      this.state.anminute = 35;
      this.state.anhours = this.state.hours;
      this.state.ntime = 25;
      this.state.nprice = 3.3;

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

      }else{
        this.state.nhours = '--';
        this.state.nminute = '--';
        this.state.anminute ='--';
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
    // >22
    else if(this.state.hours>=22){
      this.state.nhours = '--';
      this.state.nminute = '--';
      this.state.anminute ='--';
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
    //0-6
    else if(this.state.hours>=0 &&this.state.hours<6){
      this.state.nhours = '--';
      this.state.nminute = '--';
      this.state.anminute ='--';
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

  comparesc(){
    //6
    if(this.state.hours==6){
     if(this.state.minute<30){
      this.state.nhours = this.state.hours;
      this.state.nminute = 30;
      this.state.anminute = 0+'0';
      this.state.anhours = this.state.hours+1;
      this.state.ntime = 30;
      this.state.nprice = 3.3;

      this.state.nnhours = this.state.hours;
      this.state.nnminute = 45;
      this.state.annminute = 25;
      this.state.annhours = this.state.hours + 1;
      this.state.nntime = 40;
      this.state.nnprice = 3.3;

      this.state.nnnhours = this.state.hours + 1;
      this.state.nnnminute = 15;
      this.state.annnminute = 55;
      this.state.annnhours = this.state.hours + 1;
      this.state.nnntime = 40;
      this.state.nnnprice = 3.3;
     }else if(this.state.minute>=30 &&this.state.minute<45){
      this.state.nhours = this.state.hours;
      this.state.nminute = 45;
      this.state.anminute = 25;
      this.state.anhours = this.state.hours+1;
      this.state.ntime = 40;
      this.state.nprice = 3.3;

      this.state.nnhours = this.state.hours+1;
      this.state.nnminute = 15;
      this.state.annminute = 55;
      this.state.annhours = this.state.hours + 1;
      this.state.nntime = 40;
      this.state.nnprice = 3.3;

      this.state.nnnhours = this.state.hours + 1;
      this.state.nnnminute = 45;
      this.state.annnminute = 25;
      this.state.annnhours = this.state.hours + 2;
      this.state.nnntime = 40;
      this.state.nnnprice = 3.3;

     }else if(this.state.minute>=45){
      this.state.nhours = this.state.hours+1;
      this.state.nminute = 15;
      this.state.anminute = 55;
      this.state.anhours = this.state.hours+1;
      this.state.ntime = 40;
      this.state.nprice = 3.3;

      this.state.nnhours = this.state.hours+1;
      this.state.nnminute = 45;
      this.state.annminute = 25;
      this.state.annhours = this.state.hours + 2;
      this.state.nntime = 40;
      this.state.nnprice = 3.3;

      this.state.nnnhours = this.state.hours + 2;
      this.state.nnnminute = 15;
      this.state.annnminute = 55;
      this.state.annnhours = this.state.hours + 2;
      this.state.nnntime = 40;
      this.state.nnnprice = 3.3;
     }
    }
    //7
    else  if(this.state.hours==7){
      if(this.state.minute<15){
       this.state.nhours = this.state.hours;
       this.state.nminute = 15;
       this.state.anminute = 55;
       this.state.anhours = this.state.hours;
       this.state.ntime = 40;
       this.state.nprice = 3.3;
 
       this.state.nnhours = this.state.hours;
       this.state.nnminute = 45;
       this.state.annminute = 25;
       this.state.annhours = this.state.hours + 1;
       this.state.nntime = 40;
       this.state.nnprice = 3.3;
 
       this.state.nnnhours = this.state.hours + 1;
       this.state.nnnminute = 15;
       this.state.annnminute = 55;
       this.state.annnhours = this.state.hours + 1;
       this.state.nnntime = 40;
       this.state.nnnprice = 3.3;
      }else if(this.state.minute>=15 &&this.state.minute<45){
       this.state.nhours = this.state.hours;
       this.state.nminute = 45;
       this.state.anminute = 25;
       this.state.anhours = this.state.hours+1;
       this.state.ntime = 40;
       this.state.nprice = 3.3;
 
       this.state.nnhours = this.state.hours+1;
       this.state.nnminute = 15;
       this.state.annminute = 55;
       this.state.annhours = this.state.hours + 1;
       this.state.nntime = 40;
       this.state.nnprice = 3.3;
 
       this.state.nnnhours = this.state.hours + 1;
       this.state.nnnminute = 45;
       this.state.annnminute = 25;
       this.state.annnhours = this.state.hours + 2;
       this.state.nnntime = 40;
       this.state.nnnprice = 3.3;
 
      }else if(this.state.minute>=45){
       this.state.nhours = this.state.hours+1;
       this.state.nminute = 15;
       this.state.anminute = 55;
       this.state.anhours = this.state.hours+1;
       this.state.ntime = 40;
       this.state.nprice = 3.3;
 
       this.state.nnhours = this.state.hours+1;
       this.state.nnminute = 45;
       this.state.annminute = 25;
       this.state.annhours = this.state.hours + 2;
       this.state.nntime = 40;
       this.state.nnprice = 3.3;
 
       this.state.nnnhours = this.state.hours + 2;
       this.state.nnnminute = 15;
       this.state.annnminute = 55;
       this.state.annnhours = this.state.hours + 2;
       this.state.nnntime = 40;
       this.state.nnnprice = 3.3;
      }
     }
     //8
     else  if(this.state.hours==8){
      if(this.state.minute<15){
       this.state.nhours = this.state.hours;
       this.state.nminute = 15;
       this.state.anminute = 55;
       this.state.anhours = this.state.hours;
       this.state.ntime = 40;
       this.state.nprice = 3.3;
 
       this.state.nnhours = this.state.hours;
       this.state.nnminute = 45;
       this.state.annminute = 25;
       this.state.annhours = this.state.hours + 1;
       this.state.nntime = 40;
       this.state.nnprice = 3.3;
 
       this.state.nnnhours = this.state.hours + 1;
       this.state.nnnminute = 15;
       this.state.annnminute = 55;
       this.state.annnhours = this.state.hours + 1;
       this.state.nnntime = 40;
       this.state.nnnprice = 3.3;
      }else if(this.state.minute>=15 &&this.state.minute<45){
       this.state.nhours = this.state.hours;
       this.state.nminute = 45;
       this.state.anminute = 25;
       this.state.anhours = this.state.hours+1;
       this.state.ntime = 40;
       this.state.nprice = 3.3;
 
       this.state.nnhours = this.state.hours+1;
       this.state.nnminute = 15;
       this.state.annminute = 55;
       this.state.annhours = this.state.hours + 1;
       this.state.nntime = 40;
       this.state.nnprice = 3.3;
 
       this.state.nnnhours = this.state.hours + 1;
       this.state.nnnminute = 45;
       this.state.annnminute = 15;
       this.state.annnhours = this.state.hours + 2;
       this.state.nnntime = 30;
       this.state.nnnprice = 3.3;
 
      }else if(this.state.minute>=45){
       this.state.nhours = this.state.hours+1;
       this.state.nminute = 15;
       this.state.anminute = 55;
       this.state.anhours = this.state.hours+1;
       this.state.ntime = 40;
       this.state.nprice = 3.3;
 
       this.state.nnhours = this.state.hours+1;
       this.state.nnminute = 45;
       this.state.annminute = 15;
       this.state.annhours = this.state.hours + 2;
       this.state.nntime = 30;
       this.state.nnprice = 3.3;
 
       this.state.nnnhours = this.state.hours + 2;
       this.state.nnnminute = 15;
       this.state.annnminute = 45;
       this.state.annnhours = this.state.hours + 2;
       this.state.nnntime = 30;
       this.state.nnnprice = 3.3;
      }
     }
    //9
    else if(this.state.hours==9){
      if(this.state.minute<15){
       this.state.nhours = this.state.hours;
       this.state.nminute = 15;
       this.state.anminute = 55;
       this.state.anhours = this.state.hours;
       this.state.ntime = 40;
       this.state.nprice = 3.3;
 
       this.state.nnhours = this.state.hours;
       this.state.nnminute = 45;
       this.state.annminute = 15;
       this.state.annhours = this.state.hours + 1;
       this.state.nntime = 30;
       this.state.nnprice = 3.3;
 
       this.state.nnnhours = this.state.hours + 1;
       this.state.nnnminute = 15;
       this.state.annnminute = 45;
       this.state.annnhours = this.state.hours + 1;
       this.state.nnntime = 30;
       this.state.nnnprice = 3.3;
      }else if(this.state.minute>=15 &&this.state.minute<45){
       this.state.nhours = this.state.hours;
       this.state.nminute = 45;
       this.state.anminute = 15;
       this.state.anhours = this.state.hours+1;
       this.state.ntime = 30;
       this.state.nprice = 3.3;
 
       this.state.nnhours = this.state.hours+1;
       this.state.nnminute = 15;
       this.state.annminute = 45;
       this.state.annhours = this.state.hours + 1;
       this.state.nntime = 30;
       this.state.nnprice = 3.3;
 
       this.state.nnnhours = this.state.hours + 1;
       this.state.nnnminute = 45;
       this.state.annnminute = 15;
       this.state.annnhours = this.state.hours + 2;
       this.state.nnntime = 30;
       this.state.nnnprice = 3.3;
 
      }else if(this.state.minute>=45){
       this.state.nhours = this.state.hours+1;
       this.state.nminute = 15;
       this.state.anminute = 45;
       this.state.anhours = this.state.hours+1;
       this.state.ntime = 30;
       this.state.nprice = 3.3;
 
       this.state.nnhours = this.state.hours+1;
       this.state.nnminute = 45;
       this.state.annminute = 15;
       this.state.annhours = this.state.hours + 2;
       this.state.nntime = 30;
       this.state.nnprice = 3.3;
 
       this.state.nnnhours = this.state.hours + 2;
       this.state.nnnminute = 15;
       this.state.annnminute = 45;
       this.state.annnhours = this.state.hours + 2;
       this.state.nnntime = 30;
       this.state.nnnprice = 3.3;
      }
     }
     //10-12
     else  if(this.state.hours>=10 &&this.state.hours<=12){
      if(this.state.minute<15){
       this.state.nhours = this.state.hours;
       this.state.nminute = 15;
       this.state.anminute = 45;
       this.state.anhours = this.state.hours;
       this.state.ntime = 30;
       this.state.nprice = 3.3;
 
       this.state.nnhours = this.state.hours;
       this.state.nnminute = 45;
       this.state.annminute = 15;
       this.state.annhours = this.state.hours + 1;
       this.state.nntime = 30;
       this.state.nnprice = 3.3;
 
       this.state.nnnhours = this.state.hours + 1;
       this.state.nnnminute = 15;
       this.state.annnminute = 45;
       this.state.annnhours = this.state.hours + 1;
       this.state.nnntime = 30;
       this.state.nnnprice = 3.3;
      }else if(this.state.minute>=15 &&this.state.minute<45){
       this.state.nhours = this.state.hours;
       this.state.nminute = 45;
       this.state.anminute = 15;
       this.state.anhours = this.state.hours+1;
       this.state.ntime = 30;
       this.state.nprice = 3.3;
 
       this.state.nnhours = this.state.hours+1;
       this.state.nnminute = 15;
       this.state.annminute = 45;
       this.state.annhours = this.state.hours + 1;
       this.state.nntime = 30;
       this.state.nnprice = 3.3;
 
       this.state.nnnhours = this.state.hours + 1;
       this.state.nnnminute = 45;
       this.state.annnminute = 15;
       this.state.annnhours = this.state.hours + 2;
       this.state.nnntime = 30;
       this.state.nnnprice = 3.3;
 
      }else if(this.state.minute>=45){
       this.state.nhours = this.state.hours+1;
       this.state.nminute = 15;
       this.state.anminute = 45;
       this.state.anhours = this.state.hours+1;
       this.state.ntime = 30;
       this.state.nprice = 3.3;
 
       this.state.nnhours = this.state.hours+1;
       this.state.nnminute = 45;
       this.state.annminute = 15;
       this.state.annhours = this.state.hours + 2;
       this.state.nntime = 30;
       this.state.nnprice = 3.3;
 
       this.state.nnnhours = this.state.hours + 2;
       this.state.nnnminute = 15;
       this.state.annnminute = 45;
       this.state.annnhours = this.state.hours + 2;
       this.state.nnntime = 30;
       this.state.nnnprice = 3.3;
      }
     }
     //13
     else  if(this.state.hours==13){
      if(this.state.minute<15){
       this.state.nhours = this.state.hours;
       this.state.nminute = 15;
       this.state.anminute = 45;
       this.state.anhours = this.state.hours;
       this.state.ntime = 30;
       this.state.nprice = 3.3;
 
       this.state.nnhours = this.state.hours;
       this.state.nnminute = 45;
       this.state.annminute = 15;
       this.state.annhours = this.state.hours + 1;
       this.state.nntime = 30;
       this.state.nnprice = 3.3;
 
       this.state.nnnhours = this.state.hours + 1;
       this.state.nnnminute = 15;
       this.state.annnminute = 45;
       this.state.annnhours = this.state.hours + 1;
       this.state.nnntime = 30;
       this.state.nnnprice = 3.3;
      }else if(this.state.minute>=15 &&this.state.minute<45){
       this.state.nhours = this.state.hours;
       this.state.nminute = 45;
       this.state.anminute = 15;
       this.state.anhours = this.state.hours+1;
       this.state.ntime = 30;
       this.state.nprice = 3.3;
 
       this.state.nnhours = this.state.hours+1;
       this.state.nnminute = 15;
       this.state.annminute = 45;
       this.state.annhours = this.state.hours + 1;
       this.state.nntime = 30;
       this.state.nnprice = 3.3;
 
       this.state.nnnhours = this.state.hours + 1;
       this.state.nnnminute = 45;
       this.state.annnminute = 25;
       this.state.annnhours = this.state.hours + 2;
       this.state.nnntime = 40;
       this.state.nnnprice = 3.3;
 
      }else if(this.state.minute>=45){
       this.state.nhours = this.state.hours+1;
       this.state.nminute = 15;
       this.state.anminute = 45;
       this.state.anhours = this.state.hours+1;
       this.state.ntime = 30;
       this.state.nprice = 3.3;
 
       this.state.nnhours = this.state.hours+1;
       this.state.nnminute = 45;
       this.state.annminute = 25;
       this.state.annhours = this.state.hours + 2;
       this.state.nntime = 40;
       this.state.nnprice = 3.3;
 
       this.state.nnnhours = this.state.hours + 2;
       this.state.nnnminute = 15;
       this.state.annnminute = 55;
       this.state.annnhours = this.state.hours + 2;
       this.state.nnntime = 40;
       this.state.nnnprice = 3.3;
      }
     }
     //14
     else  if(this.state.hours==14){
      if(this.state.minute<15){
       this.state.nhours = this.state.hours;
       this.state.nminute = 15;
       this.state.anminute = 45;
       this.state.anhours = this.state.hours;
       this.state.ntime = 30;
       this.state.nprice = 3.3;
 
       this.state.nnhours = this.state.hours;
       this.state.nnminute = 45;
       this.state.annminute = 25;
       this.state.annhours = this.state.hours + 1;
       this.state.nntime = 40;
       this.state.nnprice = 3.3;
 
       this.state.nnnhours = this.state.hours + 1;
       this.state.nnnminute = 15;
       this.state.annnminute = 55;
       this.state.annnhours = this.state.hours + 1;
       this.state.nnntime = 40;
       this.state.nnnprice = 3.3;
      }else if(this.state.minute>=15 &&this.state.minute<45){
       this.state.nhours = this.state.hours;
       this.state.nminute = 45;
       this.state.anminute = 25;
       this.state.anhours = this.state.hours+1;
       this.state.ntime = 40;
       this.state.nprice = 3.3;
 
       this.state.nnhours = this.state.hours+1;
       this.state.nnminute = 15;
       this.state.annminute = 55;
       this.state.annhours = this.state.hours + 1;
       this.state.nntime = 40;
       this.state.nnprice = 3.3;
 
       this.state.nnnhours = this.state.hours + 1;
       this.state.nnnminute = 45;
       this.state.annnminute = 25;
       this.state.annnhours = this.state.hours + 2;
       this.state.nnntime = 40;
       this.state.nnnprice = 3.3;
 
      }else if(this.state.minute>=45){
       this.state.nhours = this.state.hours+1;
       this.state.nminute = 15;
       this.state.anminute = 55;
       this.state.anhours = this.state.hours+1;
       this.state.ntime = 40;
       this.state.nprice = 3.3;
 
       this.state.nnhours = this.state.hours+1;
       this.state.nnminute = 45;
       this.state.annminute = 25;
       this.state.annhours = this.state.hours + 2;
       this.state.nntime = 40;
       this.state.nnprice = 3.3;
 
       this.state.nnnhours = this.state.hours + 2;
       this.state.nnnminute = 15;
       this.state.annnminute = 55;
       this.state.annnhours = this.state.hours + 2;
       this.state.nnntime = 40;
       this.state.nnnprice = 3.3;
      }
     }
     //15
     else  if(this.state.hours==15){
      if(this.state.minute<15){
       this.state.nhours = this.state.hours;
       this.state.nminute = 15;
       this.state.anminute = 55;
       this.state.anhours = this.state.hours;
       this.state.ntime = 40;
       this.state.nprice = 3.3;
 
       this.state.nnhours = this.state.hours;
       this.state.nnminute = 45;
       this.state.annminute = 25;
       this.state.annhours = this.state.hours + 1;
       this.state.nntime = 40;
       this.state.nnprice = 3.3;
 
       this.state.nnnhours = this.state.hours + 1;
       this.state.nnnminute = 15;
       this.state.annnminute = 55;
       this.state.annnhours = this.state.hours + 1;
       this.state.nnntime = 40;
       this.state.nnnprice = 3.3;
      }else if(this.state.minute>=15 &&this.state.minute<45){
       this.state.nhours = this.state.hours;
       this.state.nminute = 45;
       this.state.anminute = 25;
       this.state.anhours = this.state.hours+1;
       this.state.ntime = 40;
       this.state.nprice = 3.3;
 
       this.state.nnhours = this.state.hours+1;
       this.state.nnminute = 15;
       this.state.annminute = 55;
       this.state.annhours = this.state.hours + 1;
       this.state.nntime = 40;
       this.state.nnprice = 3.3;
 
       this.state.nnnhours = this.state.hours + 1;
       this.state.nnnminute = 45;
       this.state.annnminute = 25;
       this.state.annnhours = this.state.hours + 2;
       this.state.nnntime = 40;
       this.state.nnnprice = 3.3;
 
      }else if(this.state.minute>=45){
       this.state.nhours = this.state.hours+1;
       this.state.nminute = 15;
       this.state.anminute = 55;
       this.state.anhours = this.state.hours+1;
       this.state.ntime = 40;
       this.state.nprice = 3.3;
 
       this.state.nnhours = this.state.hours+1;
       this.state.nnminute = 45;
       this.state.annminute = 25;
       this.state.annhours = this.state.hours + 2;
       this.state.nntime = 40;
       this.state.nnprice = 3.3;
 
       this.state.nnnhours = this.state.hours + 2;
       this.state.nnnminute = 15;
       this.state.annnminute = 55;
       this.state.annnhours = this.state.hours + 2;
       this.state.nnntime = 40;
       this.state.nnnprice = 3.3;
      }
     }
     //16
     else  if(this.state.hours==16){
      if(this.state.minute<15){
       this.state.nhours = this.state.hours;
       this.state.nminute = 15;
       this.state.anminute = 55;
       this.state.anhours = this.state.hours;
       this.state.ntime = 40;
       this.state.nprice = 3.3;
 
       this.state.nnhours = this.state.hours;
       this.state.nnminute = 45;
       this.state.annminute = 25;
       this.state.annhours = this.state.hours + 1;
       this.state.nntime = 40;
       this.state.nnprice = 3.3;
 
       this.state.nnnhours = this.state.hours + 1;
       this.state.nnnminute = 15;
       this.state.annnminute = 55;
       this.state.annnhours = this.state.hours + 1;
       this.state.nnntime = 40;
       this.state.nnnprice = 3.3;
      }else if(this.state.minute>=15 &&this.state.minute<45){
       this.state.nhours = this.state.hours;
       this.state.nminute = 45;
       this.state.anminute = 25;
       this.state.anhours = this.state.hours+1;
       this.state.ntime = 40;
       this.state.nprice = 3.3;
 
       this.state.nnhours = this.state.hours+1;
       this.state.nnminute = 15;
       this.state.annminute = 55;
       this.state.annhours = this.state.hours + 1;
       this.state.nntime = 40;
       this.state.nnprice = 3.3;
 
       this.state.nnnhours = this.state.hours + 1;
       this.state.nnnminute = 45;
       this.state.annnminute = 25;
       this.state.annnhours = this.state.hours + 2;
       this.state.nnntime = 40;
       this.state.nnnprice = 3.3;
 
      }else if(this.state.minute>=45){
       this.state.nhours = this.state.hours+1;
       this.state.nminute = 15;
       this.state.anminute = 55;
       this.state.anhours = this.state.hours+1;
       this.state.ntime = 40;
       this.state.nprice = 3.3;
 
       this.state.nnhours = this.state.hours+1;
       this.state.nnminute = 45;
       this.state.annminute = 25;
       this.state.annhours = this.state.hours + 2;
       this.state.nntime = 40;
       this.state.nnprice = 3.3;
 
       this.state.nnnhours = this.state.hours + 2;
       this.state.nnnminute = 45;
       this.state.annnminute = 15;
       this.state.annnhours = this.state.hours + 3;
       this.state.nnntime = 30;
       this.state.nnnprice = 3.3;
      }
     }
     //17
     else  if(this.state.hours==17 ){
      if(this.state.minute<15){
       this.state.nhours = this.state.hours;
       this.state.nminute = 15;
       this.state.anminute = 55;
       this.state.anhours = this.state.hours;
       this.state.ntime = 40;
       this.state.nprice = 3.3;
 
       this.state.nnhours = this.state.hours;
       this.state.nnminute = 45;
       this.state.annminute = 25;
       this.state.annhours = this.state.hours + 1;
       this.state.nntime = 40;
       this.state.nnprice = 3.3;
 
       this.state.nnnhours = this.state.hours + 1;
       this.state.nnnminute = 45;
       this.state.annnminute = 15;
       this.state.annnhours = this.state.hours + 2;
       this.state.nnntime = 30;
       this.state.nnnprice = 3.3;
      }else if(this.state.minute>=15 &&this.state.minute<45){
       this.state.nhours = this.state.hours;
       this.state.nminute = 45;
       this.state.anminute = 25;
       this.state.anhours = this.state.hours+1;
       this.state.ntime = 40;
       this.state.nprice = 3.3;
 
       this.state.nnhours = this.state.hours+1;
       this.state.nnminute = 45;
       this.state.annminute = 15;
       this.state.annhours = this.state.hours + 2;
       this.state.nntime = 30;
       this.state.nnprice = 3.3;
 
       this.state.nnnhours = this.state.hours +2;
       this.state.nnnminute = 15;
       this.state.annnminute = 45;
       this.state.annnhours = this.state.hours + 2;
       this.state.nnntime = 30;
       this.state.nnnprice = 3.3;
 
      }else if(this.state.minute>=45){
       this.state.nhours = this.state.hours+1;
       this.state.nminute = 45;
       this.state.anminute = 15;
       this.state.anhours = this.state.hours+2;
       this.state.ntime = 30;
       this.state.nprice = 3.3;
 
       this.state.nnhours = this.state.hours+2;
       this.state.nnminute = 15;
       this.state.annminute = 45;
       this.state.annhours = this.state.hours + 2;
       this.state.nntime = 30;
       this.state.nnprice = 3.3;
 
       this.state.nnnhours = this.state.hours + 3;
       this.state.nnnminute = 15;
       this.state.annnminute = 45;
       this.state.annnhours = this.state.hours + 3;
       this.state.nnntime = 30;
       this.state.nnnprice = 3.3;
      }
     }
     //18
     else  if(this.state.hours==18){
       if(this.state.minute<45){
        this.state.nhours = this.state.hours;
        this.state.nminute = 45;
        this.state.anminute = 15;
        this.state.anhours = this.state.hours+1;
        this.state.ntime = 30;
        this.state.nprice = 3.3;
  
        this.state.nnhours = this.state.hours+1;
        this.state.nnminute = 15;
        this.state.annminute = 45;
        this.state.annhours = this.state.hours + 1;
        this.state.nntime = 30;
        this.state.nnprice = 3.3;
  
        this.state.nnnhours = this.state.hours + 2;
        this.state.nnnminute = 15;
        this.state.annnminute = 45;
        this.state.annnhours = this.state.hours + 2;
        this.state.nnntime = 30;
        this.state.nnnprice = 3.3;
       }else{
        this.state.nhours = this.state.hours+1;
        this.state.nminute = 15;
        this.state.anminute = 45;
        this.state.anhours = this.state.hours+1;
        this.state.ntime = 30;
        this.state.nprice = 3.3;
  
        this.state.nnhours = this.state.hours+2;
        this.state.nnminute = 15;
        this.state.annminute = 45;
        this.state.annhours = this.state.hours + 2;
        this.state.nntime = 30;
        this.state.nnprice = 3.3;
  
        this.state.nnnhours = '--';
        this.state.nnnminute = '--';
        this.state.annnminute = '--';
        this.state.annnhours = '--';
        this.state.nnntime = 0;
        this.state.nnnprice = 0;
       }
     }
     //19
     else  if(this.state.hours==19){
      if(this.state.minute<15){
       this.state.nhours = this.state.hours;
       this.state.nminute = 15;
       this.state.anminute = 45;
       this.state.anhours = this.state.hours;
       this.state.ntime = 30;
       this.state.nprice = 3.3;
 
       this.state.nnhours = this.state.hours+1;
       this.state.nnminute = 15;
       this.state.annminute = 45;
       this.state.annhours = this.state.hours + 1;
       this.state.nntime = 30;
       this.state.nnprice = 3.3;
 
       this.state.nnnhours = '--';
       this.state.nnnminute = '--';
       this.state.annnminute = '--';
       this.state.annnhours = '--';
       this.state.nnntime = 0;
       this.state.nnnprice = 0;
      }else{
       this.state.nhours = this.state.hours+1;
       this.state.nminute = 15;
       this.state.anminute = 45;
       this.state.anhours = this.state.hours+1;
       this.state.ntime = 30;
       this.state.nprice = 3.3;
 
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
    //20
    else  if(this.state.hours==20){
      if(this.state.minute<15){
       this.state.nhours = this.state.hours;
       this.state.nminute = 15;
       this.state.anminute = 45;
       this.state.anhours = this.state.hours;
       this.state.ntime = 30;
       this.state.nprice = 3.3;
 
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
      }else{
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
    //>20
    else if (this.state.hours>=0 && this.state.hours<6) {
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
            <option value="" selected disabled hidden>Choose Route</option>
            <option onClick={() => { this.comparenc() }} >Deport North-Arrive City</option>
            <option onClick={() => { this.comparecn() }}>Deport City-Arrive North</option>
            <option onClick={() => { this.comparecs() }}>Deport City-Arrive South</option>
            <option onClick={() => { this.comparesc() }}>Deport South-Arrive City</option>
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