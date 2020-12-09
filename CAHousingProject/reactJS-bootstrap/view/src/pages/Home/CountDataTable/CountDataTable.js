//React-Bootstrap
import React, { Component } from 'react';
import { Row, Col, Table} from 'react-bootstrap';
//Redux Store Connector
import { connect } from "react-redux";
//Page Components
import CountDataRecord from "./CountDataRecord/CountDataRecord";

class CountDataTable extends Component {

    constructor(props) {
        super(props);
        this.state = {
            longitudeTotal: 0,
            latitudeTotal: 0,
            ageTotal: 0,
            roomsTotal: 0,
            bedsTotal: 0,
            holdsTotal: 0,
            incomeTotal: 0,
            valueTotal: 0,
            populationTotal: 0,
            OceanProxTotal: null
        }
    }

    ageSum = () => {
        if (this.props.housingData != null) {
            for (var i = 0; i <= this.props.housingData.length - 1; i++) {
                this.state.ageTotal += parseFloat(this.props.housingData[i].housing_median_age);
            }
            return this.state.ageTotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
        return null;
    }

    bedsSum = () => {
        if (this.props.housingData != null) {
            for (var i = 0; i <= this.props.housingData.length - 1; i++) {
                if (this.props.housingData[i].total_bedrooms === "") {
                    this.state.bedsTotal += 0.0
                } else {
                    this.state.bedsTotal += parseFloat(this.props.housingData[i].total_bedrooms);
                }
            }
            return this.state.bedsTotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
        return null;
    }

    holdsSum = () => {
        if (this.props.housingData != null) {
            for (var i = 0; i <= this.props.housingData.length - 1; i++) {
                this.state.holdsTotal += parseFloat(this.props.housingData[i].households);
            }
            return this.state.holdsTotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
        return null;
    }

    incomeSum = () => {        
        if (this.props.housingData != null) {            
            for (var i = 0; i <= this.props.housingData.length - 1; i++) {
                this.state.incomeTotal += parseFloat(this.props.housingData[i].median_income);
            }            
            return this.state.incomeTotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
        return null;
    }

    latitudeSum = () => {
        if (this.props.housingData != null) {
            for (var i = 0; i <= this.props.housingData.length - 1; i++) {
                this.state.latitudeTotal += parseFloat(this.props.housingData[i].latitude);
            }
            return this.state.latitudeTotal.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
        return null;
    }

    longitudeSum = () => {        
        if (this.props.housingData != null) {
            for (var i = 0; i <= this.props.housingData.length - 1; i++) {
                this.state.longitudeTotal += parseFloat(this.props.housingData[i].longitude);
            }
            return this.state.longitudeTotal.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
        return null;
    }

    populationSum = () => {
        if (this.props.housingData != null) {
            for (var i = 0; i <= this.props.housingData.length - 1; i++) {
                this.state.populationTotal += parseFloat(this.props.housingData[i].population);
            }
            return this.state.populationTotal.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
        return null;
    }

    roomsSum = () => {
        if (this.props.housingData != null) {
            for (var i = 0; i <= this.props.housingData.length - 1; i++) {
                this.state.roomsTotal += parseFloat(this.props.housingData[i].total_rooms);
            }
            return this.state.roomsTotal.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
        return null;
    }

    valueSum = () => {
        if (this.props.housingData != null) {
            for (var i = 0; i <= this.props.housingData.length - 1; i++) {
                this.state.valueTotal += parseFloat(this.props.housingData[i].median_house_value);
            }
            return this.state.valueTotal.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
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
                            { this.props.housingData && this.props.housingData.length ?
                                <CountDataRecord
                                    longitude={this.longitudeSum()}
                                    latitude={this.latitudeSum()}
                                    age={this.ageSum()}
                                    rooms={this.roomsSum()}
                                    bedrooms={this.bedsSum()}
                                    holds={this.holdsSum()}
                                    income={this.incomeSum()}
                                    value={this.valueSum()}
                                    population={this.populationSum()}
                                /> : <tr></tr>
                            }
                        </tbody>                        
                    </Table>
                </Col>
            </Row>            
        )
    }
}

const mapStateToProps = (state) => ({
    //sumValues: getSumValues(state),
});

export default connect(mapStateToProps)(CountDataTable);