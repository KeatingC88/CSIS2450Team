﻿//React-Bootstrap
import React, { Component } from 'react';
import { Row, Col, Card, Table } from 'react-bootstrap';
//Redux Store Connector
import { connect } from "react-redux";
//Page Components
import STDDataRecord from "./STDDataRecord/STDDataRecord";


class STDDataTable extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const records = this.props.housingData;
        //...
        return (
            <Table striped bordered hover size="sm" className="mt-5">
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
                        <th>Ocean Prox</th>
                    </tr>
                </thead>
                <tbody>
                    {records && records.length
                        ? records.map((record, index) => {
                            return <STDDataRecord key={record.id} record={record} />;
                        }) : <tr><td>No Records Found</td></tr>
                    }
                </tbody>
            </Table>
        )
    }
}

export default connect(null)(STDDataTable);