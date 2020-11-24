//React-Bootstrap
import React, { Component } from "react";
import { Row, Col, Table } from "react-bootstrap";
//Redux Store Connector
import { connect } from "react-redux";
//Page Components
import { getQuarterValues } from "../../../redux/selectors/housingData";

export const QuarterDataTable = ({ quarterValues }) => {
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
            {quarterValues ? (
              <tr>
                {Object.keys(quarterValues).map((key) => {
                  return <td key={key}>{quarterValues[key]}</td>;
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
  quarterValues: getQuarterValues(state),
});

export default connect(mapStateToProps)(QuarterDataTable);
