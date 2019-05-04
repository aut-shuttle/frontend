import * as React from "react";
import { Stats } from "fs";


import SiteWrapper from "../../SiteWrapper.react";


import {
    Page,
    Grid,
    StatsCard,
    Card,
    Profile,
    Table,
    ProgressCard,
    Button,
    NavLink
    
  } from "tabler-react";


function ViewProfilePage() {
      return(
          <SiteWrapper>
              <Page.Content>
                    <Grid.Row>
                        <Grid.Col width={20}>
                            <Grid.Col  md={10} lg={6}>
                                <Profile 
                                    name = "Thea Miguel" 
                                    avatarURL = "./images/avatarthea.jpg" 
                                    backgroundURL = "./images/aut.jpg" 
                                    bio = "Bachelor of Computer and Information Sciences" >
                                </Profile>

                                <Grid.Row cards deck>
                                    <Grid.Col md={20}>
                                        <Card body="Student ID: 16946424" />
                                        <Card body="Email: krk0465@autuni.ac.nz"/>
                                        
                                    </Grid.Col>
                                </Grid.Row>
                                <Button.List>
                                    <Button link ="/journeypage" block color="yellow" >Journeys</Button>
                                    <Button block color="green">Profile Settings</Button>
                                </Button.List>
                            </Grid.Col>
                        </Grid.Col>
                    </Grid.Row>
              </Page.Content>
          </SiteWrapper>


      )

}

export default ViewProfilePage;