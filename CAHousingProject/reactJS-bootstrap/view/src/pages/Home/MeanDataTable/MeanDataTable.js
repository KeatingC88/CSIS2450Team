//React-Bootstrap
import React, { Component } from 'react';
import { Row, Col, Table } from 'react-bootstrap';
//Redux Store Connector
import { connect } from "react-redux";
//Page Components
import MeanDataRecord from "./MeanDataRecord/MeanDataRecord";


class MeanDataTable extends Component {

    constructor(props) {
        super(props);
        this.state = {

            longitudeMean: 0,
            latitudeMean: 0,
            ageMean: 0,
            roomsMean: 0,
            bedsMean: 0,
            holdsMean: 0,
            incomeMean: 0,
            valueMean: 0,
            populationMean: 0,
            OceanProxMean: null
        }
    }

    ageMean = () => {
        if (this.props.housingData != null) {
            for (var i = 0; i <= this.props.housingData.length - 1; i++) {
                this.state.ageMean += parseInt(this.props.housingData[i].housing_median_age);
            }
            var mean = this.state.ageMean / Object.keys(this.props.housingData).length;
            return mean.toFixed(2);
        }
        return null;
    }

    bedsMean = () => {
        if (this.props.housingData != null) {
            for (var i = 0; i <= this.props.housingData.length - 1; i++) {
                if (this.props.housingData[i].total_bedrooms !== "") {
                    this.state.bedsMean += parseFloat(this.props.housingData[i].total_bedrooms);
                }
            }
            var mean = this.state.bedsMean / Object.keys(this.props.housingData).length;
            return mean.toFixed(2);
        }
        return null;
    }

    holdsMean = () => {
        if (this.props.housingData != null) {
            for (var i = 0; i <= this.props.housingData.length - 1; i++) {
                this.state.holdsMean += parseFloat(this.props.housingData[i].households);
            }
            var mean = this.state.holdsMean / Object.keys(this.props.housingData).length;
            return mean.toFixed(2);
        }
        return null;
    }

    incomeMean = () => {
        if (this.props.housingData != null) {
            for (var i = 0; i <= this.props.housingData.length - 1; i++) {
                this.state.incomeMean += parseFloat(this.props.housingData[i].median_income);
            }
            var mean = this.state.incomeMean / Object.keys(this.props.housingData).length;
            return mean.toFixed(2);
        }
        return null;
    }

    latitudeMean = () => {
        if (this.props.housingData != null) {
            for (var i = 0; i <= this.props.housingData.length - 1; i++) {
                this.state.latitudeMean += parseFloat(this.props.housingData[i].latitude);
            }
            var mean = this.state.latitudeMean / Object.keys(this.props.housingData).length;
            return mean.toFixed(2);
        }
        return null;
    }

    longitudeMean = () => {
        if (this.props.housingData != null) {
            for (var i = 0; i <= this.props.housingData.length - 1; i++) {
                
                    this.state.longitudeMean += parseFloat(this.props.housingData[i].longitude);
                    
            }
            var mean = this.state.longitudeMean / Object.keys(this.props.housingData).length;
            return mean.toFixed(2);
        }
        return null;
    }

    populationMean = () => {
        if (this.props.housingData != null) {
            for (var i = 0; i <= this.props.housingData.length - 1; i++) {
                this.state.populationMean += parseFloat(this.props.housingData[i].population);
            }
            var mean = this.state.populationMean / Object.keys(this.props.housingData).length;
            return mean.toFixed(2);
        }
        return null;
    }

    roomsMean = () => {
        if (this.props.housingData != null) {
            for (var i = 0; i <= this.props.housingData.length - 1; i++) {
                this.state.roomsMean += parseFloat(this.props.housingData[i].total_rooms);
            }
            var mean = this.state.roomsMean / Object.keys(this.props.housingData).length;
            return mean.toFixed(2);
        }
        return null;
    }

    valueMean = () => {
        if (this.props.housingData != null) {
            for (var i = 0; i <= this.props.housingData.length - 1; i++) {
                this.state.valueMean += parseFloat(this.props.housingData[i].median_house_value);
            }
            var mean = this.state.valueMean / Object.keys(this.props.housingData).length;
            return mean.toFixed(2);
        }
        return null;
    }

    render() {
        //...
        return (
            <Row>
                <Col>
                    <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>Longitude</th>
                                <th>Latitude</th>
                                <th>Age</th>
                                <th>Rooms</th>
                                <th>Beds</th>
                                <th>Holds</th>
                                <th>Income</th>
                                <th>Value</th>
                                <th>Population</th>
                            </tr>
                        </thead>
                        <tbody>                            
                            {this.props.housingData && this.props.housingData.length ?
                                <MeanDataRecord
                                    longitude={this.longitudeMean()}
                                    latitude={this.latitudeMean()}
                                    age={this.ageMean()}
                                    rooms={this.roomsMean()}
                                    bedrooms={this.bedsMean()}
                                    holds={this.holdsMean()}
                                    income={this.incomeMean()}
                                    value={this.valueMean()}
                                    population={this.populationMean()}
                                /> : <tr></tr>
                            }
                        </tbody>
                    </Table>
                </Col>
            </Row>            
        )
    }
}

export default connect(null)(MeanDataTable);