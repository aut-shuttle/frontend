import React, { Component } from 'react'
import { Formik, Form } from 'formik'
import API from '../../utils/API'
import { Page, Grid, Alert, Form as TablerForm, Button } from 'tabler-react'
import SiteWrapper from '../../SiteWrapper.react'

//Back end needs to be corrected to allow for either entries to be the same, or error checking needs to be added here for that

export default class ClosingAccountPage extends Component {
    
    closingaccount() {
        API.delete('/users/id');
        window.location.href = '/register';
    }
    
    render() {
        return(<div>
            <a href="#" onClick={this.closingaccount()}>closingaccount</a>
         </div>)
      
    }
}
