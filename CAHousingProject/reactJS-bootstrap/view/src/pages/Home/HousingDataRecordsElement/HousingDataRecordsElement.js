﻿import React, { Component } from "react";
import HousingDataRecordRowElement from "./HousingDataRecordRowElement/HousingDataRecordRowElement";
import { Table } from "react-bootstrap";

class HousingDataRecordsElement extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const records = this.props.housingDataRecords;
        return (
            <Table striped bordered hover size="sm" className="mt-5">
                <thead>
                    <tr>
                        <th>ID#</th>
                    </tr>
                </thead>
                <tbody>
                    {records && records.length
                        ? records.map((record, index) => {
                            return <HousingDataRecordRowElement key={record.id} record={record} />;
                        }) : <tr><td>No Records Found or...</td><td>No Records at all or...</td><td>Codeflow is broken...</td><td>Try Adding a Record...</td></tr>
                    }
                </tbody>
            </Table>
        )
    }
}

export default HousingDataRecordsElement;