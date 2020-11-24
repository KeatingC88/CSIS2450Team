//React-Bootstrap
import React, { Component } from "react";
import { Row, Col, Table } from "react-bootstrap";
//Redux Store Connector
import { connect } from "react-redux";
//Page Components

import { getHalfValues } from "../../../redux/selectors/housingData";

export const HalfDataTable = ({ halfValues }) => {
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
            {halfValues ? (
              <tr>
                {Object.keys(halfValues).map((key) => {
                  return <td key={key}>{halfValues[key]}</td>;
                })}
              </tr>
            ) : (
              <tr>
                <td>No Records Found</td>
              </tr>
            )}
          </tbody>
        </Table>
      </Col>
    </Row>
  );
};

const mapStateToProps = (state) => ({
  halfValues: getHalfValues(state),
});

export default connect(mapStateToProps)(HalfDataTable);
