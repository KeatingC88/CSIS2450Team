//React-Bootstrap
import React, { Component } from 'react';
import { Row, Col, Table } from 'react-bootstrap';
//Math Library: https://mathjs.org/docs/reference/functions/std.html
import { std } from 'mathjs'
//Redux Store Connector
import { connect } from "react-redux";
//Page Components
import STDDataRecord from "./STDDataRecord/STDDataRecord";


class STDDataTable extends Component {

    constructor(props) {
        super(props);
        this.state = {
            longitudeSTD: [],
            latitudeSTD: [],
            ageSTD: [],
            roomsSTD: [],
            bedsSTD: [],
            holdsSTD: [],
            incomeSTD: [],
            valueSTD: [],
            populationSTD: [],
            OceanProxSTD: null
        }
    }

    ageSTD = () => {
        if (this.props.housingData != null) {
            for (var i = 0; i <= this.props.housingData.length - 1; i++) {
                if (this.props.housingData[i].housing_median_age !== "")
                    this.state.ageSTD.push(parseFloat(this.props.housingData[i].housing_median_age));
            }
            return std(this.state.ageSTD, "uncorrected").toFixed(2);
        }
        return null;
    }

    bedsSTD = () => {
        if (this.props.housingData != null) {
            for (var i = 0; i <= this.props.housingData.length - 1; i++) {
                if (this.props.housingData[i].total_bedrooms !== "")
                    this.state.bedsSTD.push(parseFloat(this.props.housingData[i].total_bedrooms));
            }
            return std(this.state.bedsSTD, "uncorrected").toFixed(2);
        }
        return null;
    }

    holdsSTD = () => {
        if (this.props.housingData != null) {
            for (var i = 0; i <= this.props.housingData.length - 1; i++) {
                if (this.props.housingData[i].households !== "")
                    this.state.holdsSTD.push(parseFloat(this.props.housingData[i].households));
            }
            return std(this.state.holdsSTD, "uncorrected").toFixed(2);
        }
        return null;
    }

    incomeSTD = () => {
        if (this.props.housingData != null) {
            for (var i = 0; i <= this.props.housingData.length - 1; i++) {
                if (this.props.housingData[i].median_income !== "")
                    this.state.incomeSTD.push(parseFloat(this.props.housingData[i].median_income));
            }
            return std(this.state.incomeSTD, "uncorrected").toFixed(2);
        }
        return null;
    }

    latitudeSTD = () => {
        if (this.props.housingData != null) {
            for (var i = 0; i <= this.props.housingData.length - 1; i++) {
                if (this.props.housingData[i].latitude !== "")
                    this.state.latitudeSTD.push(parseFloat(this.props.housingData[i].latitude));
            }
            return std(this.state.latitudeSTD, "uncorrected").toFixed(2);
        }
        return null;
    }

    longitudeSTD = () => {
        if (this.props.housingData != null) {
            for (var i = 0; i <= this.props.housingData.length - 1; i++) {
                if (this.props.housingData[i].longitude !== "")
                    this.state.longitudeSTD.push(parseFloat(this.props.housingData[i].longitude));
            }
            return std(this.state.longitudeSTD, "uncorrected").toFixed(2);
        }
        return null;
    }

    populationSTD = () => {
        if (this.props.housingData != null) {
            for (var i = 0; i <= this.props.housingData.length - 1; i++) {
                if (this.props.housingData[i].population !== "")
                    this.state.populationSTD.push(parseFloat(this.props.housingData[i].population));
            }
            return std(this.state.populationSTD, "uncorrected").toFixed(2);
        }
        return null;
    }

    roomsSTD = () => {
        if (this.props.housingData != null) {
            for (var i = 0; i <= this.props.housingData.length - 1; i++) {
                if (this.props.housingData[i].total_rooms !== "")
                    this.state.roomsSTD.push(parseFloat(this.props.housingData[i].total_rooms));
            }
            return std(this.state.roomsSTD, "uncorrected").toFixed(2);
        }
        return null;
    }

    valueSTD = () => {
        if (this.props.housingData != null) {
            for (var i = 0; i <= this.props.housingData.length - 1; i++) {
                if (this.props.housingData[i].median_house_value !== "")
                    this.state.valueSTD.push(parseFloat(this.props.housingData[i].median_house_value));
            }
            return std(this.state.valueSTD, "uncorrected").toFixed(2);
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
                                <STDDataRecord
                                    longitude={this.longitudeSTD()}
                                    latitude={this.latitudeSTD()}
                                    age={this.ageSTD()}
                                    rooms={this.roomsSTD()}
                                    bedrooms={this.bedsSTD()}
                                    holds={this.holdsSTD()}
                                    income={this.incomeSTD()}
                                    value={this.valueSTD()}
                                    population={this.populationSTD()}
                                /> : <tr></tr>
                            }
                        </tbody>
                    </Table>
                </Col>
            </Row>
        )
    }
}

export default connect(null)(STDDataTable);