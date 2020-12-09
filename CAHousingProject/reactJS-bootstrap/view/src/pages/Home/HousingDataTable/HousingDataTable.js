//React-Bootstrap
import React, { Component } from 'react';
import { Row, Col, Table} from 'react-bootstrap';
//Redux Store Connector
import { connect } from "react-redux";
//Page Components
import HousingDataRecord from "./HousingDataRecord/HousingDataRecord";


class HousingDataTable extends Component {
    
    render() {
        
        const records = this.props.housingData;
        
        //...
        return (            
            <Row>
                <Col>                    
                    <Table striped bordered hover size="sm" className="mt-5">
                        <thead>
                            <tr>
                                <th>ID#</th>
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
                            {
                                records && records.length
                                    ? records.map((record, index = 1) => {                                    
                                    return <HousingDataRecord key={index} record={record} index={index} />;
                                }) : <tr></tr>
                            }
                        </tbody>
                    </Table>
                </Col>
            </Row>            
        )
    }
}

export default connect(null)(HousingDataTable);