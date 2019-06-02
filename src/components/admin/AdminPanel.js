import React, { Component } from 'react'
import API from '../../utils/API'
import { Page, Grid, Card, Button, Alert } from 'tabler-react'
import SiteWrapper from '../../SiteWrapper.react'
import QrReader from 'react-qr-reader'
import * as V from 'victory';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryTooltip,
VictoryPie, VictoryArea, VictoryClipContainer, VictoryLabel, VictoryScatter,
VictoryLine } from 'victory';

const data = [
    {quarter: 1, earnings: 13000},
    {quarter: 2, earnings: 16500},
    {quarter: 3, earnings: 14250},
    {quarter: 4, earnings: 19000}
  ];

  

export default class QRReaderPage extends Component {
	constructor(props) {
		super(props)
		this.state = {
			tagonmessage: '',
			delay: 500,
			passenger: '',
            bus: [],
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
                <Card>Admin Dashboard WIP</Card>
                </Grid.Col>
                </Grid.Col>
                </Grid.Row>
					<Grid.Row>
						<Grid.Col width={20}>
							<Grid.Col md={10} lg={6}>
								<Grid.Row cards deck>
									<Grid.Col md={20}>
										<Card
											body={
												<center>
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
                                                    tickFormat={(x) => (`${x / 100}`)}
                                                    />
                                              <VictoryBar 
                                                labelComponent={<VictoryTooltip/>}
                                                data={[
                                                    {x: 2, y: 5, label: "Monday"},
                                                    {x: 4, y: -6, label: "Tuesday"},
                                                    {x: 6, y: 4, label: "Wednesday"},
                                                    {x: 8, y: -5, label: "Thursday"},
                                                    {x: 10, y: 7, label: "Friday"}
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

												</center>     
                                            }/>
                                            <Card>
                                            <VictoryPie
                                            animate={{
                                                duration: 2000
                                              }}
                                              colorScale={["tomato", "orange", "gold", "cyan", "navy" ]}
                                              innerRadius={10}
                                              labelRadius={90}
                                              padAngle={3}
                                            theme={VictoryTheme.material}
                                            style={{ labels: { fill: "white", fontSize: 10, fontWeight: "bold" } }}
                                            	
                                            data={[
                                                { x: "Scan On", y: 35 },
                                                { x: "Scan Off", y: 40 },
                                                { x: "Ticket", y: 55 }
                                            ]}
                                            />
                                            </Card>
                                            <Card>
                                            <VictoryChart
                                            >
                                            <VictoryArea
                                             animate={{
                                                duration: 2000
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
                                            </Card>
                                            <Card>
                                            

                                            <VictoryChart maxDomain={8}
                                              animate={{
                                                duration: 2000,
                                                onLoad: { duration: 1000 }
                                              }}>
                                           <VictoryScatter
                                            labelComponent={<VictoryTooltip/>}
                                            groupComponent={<VictoryClipContainer/>}
                                            bubbleProperty="amount"
                                            maxBubbleSize={25}
                                            minBubbleSize={5}
                                            style={{ labels: { fill: "white", fontSize: 13},
                                            data: { fill: "#c43a31" } }}
                                            labels={(datum) => datum.y}
                                            labelComponent={<VictoryLabel dy={18}/>}
                                            data={[
                                                { x: 1, y: 2, amount: 30, labelTwo: "Test" },
                                                { x: 2, y: 3, amount: 40, labelTwo: "Test" },
                                                { x: 3, y: 5, amount: 25, labelTwo: "Test" },
                                                { x: 4, y: 4, amount: 10, labelTwo: "Test" },
                                                { x: 5, y: 7, amount: 45, labelTwo: "Test" }
                                            ]}
                                            events={[{
                                                target: "data",
                                                eventHandlers: {
                                                  onMouseOver: () => {
                                                    return [
                                                        {
                                                            target: "data",
                                                            mutation: () => ({style: {fill: "cyan", width: 25}})
                                                          },
                                                    {
                                                        target: "labelTwo",
                                                        mutation: () => ({ active: true })
                                                      }
                                                    ];
                                                  },
                                                  onMouseOut: () => {
                                                    return [
                                                        {
                                                            target: "data",
                                                            mutation: () => ({style: {fill: "cyan", width: 25}})
                                                          },
                                                   {
                                                        target: "labelTwo",
                                                        mutation: () => ({ active: false })
                                                      }
                                                    ];
                                                  }
                                                }
                                              }]}
                                            />
                                            </VictoryChart>
                                            </Card>
                                            <Card>
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
                                            </Card>
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
