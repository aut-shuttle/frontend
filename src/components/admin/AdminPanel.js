import React, { Component } from 'react'
	import { Page, Grid, Card, Button, Alert, colors } from 'tabler-react'
	import SiteWrapper from '../../SiteWrapper.react'
	import * as V from 'victory';
	import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryTooltip,
	VictoryPie, VictoryArea, VictoryClipContainer, VictoryLabel, VictoryScatter,
	VictoryLine } from 'victory';
	import C3Chart from "react-c3js";
	import API from '../../utils/API'
	
	const data = [
	    {quarter: 20, earnings: 13000},
	    {quarter: 40, earnings: 16500},
	    {quarter: 60, earnings: 14250},
	    {quarter: 80, earnings: 19000}
	  ];
	
	  const cards = [
	    {
	      title: "Top Up Amounts",
	      data: {
	        columns: [
	// each columns data
	          ["data1", 2, 8, 6, 7, 14, 11, 8],
	          ["data2", 12, 22, 31, 25, 16, 25, 30],
	        ],
	        type: "line", // default type of chart
	        colors: {
	          data1: colors.orange,
	          data2: colors.blue,
	          data3: colors.green,
	        },
	        names: {
	// name of each serie
	          data1: "AUT Staff",
	          data2: "AUT Students",
	        },
	      },
	      axis: {
	        x: {
	          type: "category",
	// name of each category
	          categories: ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"],
	        },
	      },
	    },
	  ];
	
	  const pieData = [
	    {
	      title: "Website Usage This Week",
	      data: {
	        columns: [
	          // each columns data
	          ["data1", 63],
	          ["data2", 44],
	          ["data3", 12],
	          ["data4", 14],
	        ],
	        type: "pie", // default type of chart
	        colors: {
	          data1: colors["blue-darker"],
	          data2: colors["blue"],
	          data3: colors["blue-light"],
	          data4: colors["blue-lighter"],
	        },
	        names: {
	          // name of each serie
	          data1: "AUT Students",
	          data2: "Drivers",
	          data3: "Admin",
	          data4: "Staff",
	        },
	      },
	      axis: {},
	    },
	  ];
	
	
	
	export default class AdminPanel extends Component {
		constructor(props) {
			super(props)
			this.state = {
	     user: { first_name: '', balance: ''},  
			}
	    }
	
	    componentDidMount() {
	      if (localStorage.getItem('token')) {
	        API.get('/profile/')
	          .then(res => {
	            this.setState({ isFetching: true })
	            this.setState({ user: res.data })
	          })
	          .then(this.setState({ isFetching: false }))
	          .catch(err => {
	            console.log(err)
	          })
	      } else {
	
	      }
	    }
	
	
		handleError(err) {
			console.error(err)
	    }
	
	
	
		render() {
			const previewStyle = {
				height: 200,
				width: 200
			}
	
			return (
				<SiteWrapper>
					<Page.Content>
	              <Grid.Row>
	              <Grid.Col width={50}>
	              <Grid.Col md={100} lg={50}>
	                <Card>
	                <Card.Header>
	                 <Card.Title>Admin Analytic Dashboard</Card.Title>
	                 </Card.Header>
	                 <Card.Body>
	                   <h3>Welcome {this.state.user.first_name}.</h3> This is your Admin Dashboard. 
	                   View the latest analytical data and up to date information.
	                 </Card.Body>
	                </Card>
	                </Grid.Col>
	                </Grid.Col>
	                </Grid.Row>
	                                      <Grid.Row>
	                                        <Grid.Col width={50}>
	                                          <Grid.Col md={100} lg={50}>
	                                            <Grid.Row cards deck>
	                                              <Grid.Col md={20}>
	
	
	                                            <Grid.Row cards deck>
	                                            <Grid.Col md={6}>
	                                            <Card>
	                                            <Card.Header>
	                                            <Card.Title>Trips Taken This Week</Card.Title>
	                                          </Card.Header>
	                                            <Card.Body>
	                                            <VictoryChart
	                                                theme={VictoryTheme.material}
	                                                >
	                                                <VictoryLine
	                                                    style={{
	                                                    data: { stroke: "#c43a31" },
	                                                    parent: { border: "1px solid #ccc"}
	                                                    }}
	                                                    animate={{
	                                                        duration: 5000,
	                                                        onLoad: { duration: 5000 }
	                                                      }}
	                                                    data={[
	                                                    { x: 1, y: 2 },
	                                                    { x: 2, y: 3 },
	                                                    { x: 3, y: 5 },
	                                                    { x: 4, y: 4 },
	                                                    { x: 5, y: 7 }
	                                                    ]}
	                                                />
	                                                </VictoryChart>
	                                              </Card.Body>
	                                              </Card>
	                                              </Grid.Col>
	                                              <Grid.Col md={6}>
	                                              <Card>
	                                              <Card.Header>
	                                            <Card.Title>Total Passenger Count</Card.Title>
	                                            </Card.Header>
	                                                <Card.Body>
	                                                <VictoryChart>
	                                            <VictoryArea
	                                             animate={{
	                                                duration: 2000,
	                                                onLoad: { duration: 3000 }
	                                              }}
	                                              theme={VictoryTheme.material}
	                                              groupComponent={<VictoryClipContainer clipPadding={{ top: 5, right: 10 }}/>}
	                                              style={{ data: { stroke: "#c43a31", strokeWidth: 15, strokeLinecap: "round" } }}
	                                              colorScale={["tomato", "orange", "gold", "cyan", "navy" ]}
	                                                data={[
	                                                { x: 1, y: 2, y0: 0 },
	                                                { x: 2, y: 3, y0: 1 },
	                                                { x: 3, y: 5, y0: 1 },
	                                                { x: 4, y: 4, y0: 2 },
	                                                { x: 5, y: 6, y0: 2 }
	                                                ]}
	                                                labels={(datum) => datum.y}
	                                                labelComponent={<VictoryLabel renderInPortal dy={-20}/>}
	                                            />
	                                            </VictoryChart>
	                                                </Card.Body>
	                                                </Card>
	                                              </Grid.Col>
	
	
	
	
	
	
	                                            </Grid.Row>
	
	                                            <Grid.Row cards deck>
	                                            {cards.map((chart, i) => (
	                                            <Grid.Col key={i} md={12}>
	                                            <Card title={chart.title}>
	
	                                            <Card.Body>
	                                              <C3Chart
	                                              data={chart.data}
	                                              axis={chart.axis}
	                                              legend={{
	                                                show: false, //hide legend
	                                              }}
	                                              padding={{
	                                                bottom: 0,
	                                                top: 0,
	                                              }}
	                                              />
	
	                                              </Card.Body>
	                                              </Card>
	                                              </Grid.Col>
	                                              ))}
	
	
	                                              <Grid.Col md={6} >
	                                              <Card>
	                                              <Card.Header>
	                                            <Card.Title>In Depth Total Passenger Count</Card.Title>
	                                            </Card.Header>
	                                                <Card.Body>
	                                                <VictoryChart
	                                                    animate={{duration: 700}}
	                                                    domainPadding={20}
	                                                    theme={VictoryTheme.material}	
	                                                    domain={{ x: [0, 11], y: [0, 10] }}
	                                                    >
	                                                    <VictoryAxis
	                                                    />
	                                                    <VictoryAxis
	                                                    dependentAxis              
	
	                                                    />
	                                              <VictoryBar 
	                                                labelComponent={<VictoryTooltip/>}
	                                                data={[
	                                                    {x: 2, y: 7, label: "Monday"},
	                                                    {x: 4, y: 12, label: "Tuesday"},
	                                                    {x: 6, y: 4, label: "Wednesday"},
	                                                    {x: 8, y: 6, label: "Thursday"},
	                                                    {x: 10, y: 8, label: "Friday"}
	                                                  ]}
	                                                  style={{
	                                                    data: {fill: "tomato", width: 20}
	                                                  }}
	                                                  events={[{
	                                                    target: "data",
	                                                    eventHandlers: {
	                                                      onMouseOver: () => {
	                                                        return [
	                                                          {
	                                                            target: "data",
	                                                            mutation: () => ({style: {fill: "cyan", width: 25}})
	                                                          }, {
	                                                            target: "labels",
	                                                            mutation: () => ({ active: true })
	                                                          }
	                                                        ];
	                                                      },
	                                                      onMouseOut: () => {
	                                                        return [
	                                                          {
	                                                            target: "data",
	                                                            mutation: () => {}
	                                                          }, {
	                                                            target: "labels",
	                                                            mutation: () => ({ active: false })
	                                                          }
	                                                        ];
	                                                      }
	                                                    }
	                                                  }]}
	                                                />
	
	                                               </VictoryChart>
	                                                </Card.Body>
	                                                </Card>
	
	                                              </Grid.Col>
	
	                                              {pieData.map((chart, i) => (
	                                            <Grid.Col key={i} md={6}>
	                                            <Card title={chart.title}>
	
	                                            <Card.Body>
	                                              <C3Chart
	                                              data={chart.data}
	                                              axis={chart.axis}
	                                              legend={{
	                                                show: false, //hide legend
	                                              }}
	                                              padding={{
	                                                bottom: 0,
	                                                top: 0,
	                                              }}
	                                              />
	
	                                              </Card.Body>
	                                              </Card>
	                                              </Grid.Col>
	                                              ))}
	
	
	
	
	                                            </Grid.Row>
	
										</Grid.Col>
									</Grid.Row>    
								</Grid.Col>
							</Grid.Col>
						</Grid.Row>
	
					</Page.Content>
				</SiteWrapper>
			)
		}
	}