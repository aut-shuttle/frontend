import React, { Component } from 'react'
import QrReader from 'react-qr-scanner'

export default class QRScanner extends Component {
	constructor(props) {
		super(props)
		this.state = {
			delay: 100,
			result: 'No result'
		}

		this.handleScan = this.handleScan.bind(this)
	}
	handleScan(data) {
		if (data !== null) {
			this.setState({
				result: data
			})
			console.log(this.state.result)
		}
	}
	handleError(err) {
		//console.error(err)
	}
	render() {
		const previewStyle = {
			height: 240,
			width: 320
		}

		return (
			<div>
				<QrReader
					delay={this.state.delay}
					style={previewStyle}
					onError={this.handleError}
					onScan={this.handleScan}
				/>
				<p>{this.state.result}</p>
			</div>
		)
	}
}
