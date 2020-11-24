//React-Bootstrap
import React, { Component } from "react";
import { Row, Col, Table } from "react-bootstrap";
//Redux Store Connector
import { connect } from "react-redux";
//Page Components
import { getMaxValues } from "../../../redux/selectors/housingData";

export const MaxDataTable = ({ maxValues }) => {
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
            {maxValues ? (
              <tr>
                {Object.keys(maxValues).map((key) => {
                  return <td key={key}>{maxValues[key]}</td>;
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
  maxValues: getMaxValues(state),
});

export default connect(mapStateToProps)(MaxDataTable);
