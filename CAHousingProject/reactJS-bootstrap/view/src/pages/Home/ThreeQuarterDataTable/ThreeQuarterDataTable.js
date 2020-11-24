//React-Bootstrap
import React, { Component } from "react";
import { Row, Col, Table } from "react-bootstrap";
//Redux Store Connector
import { connect } from "react-redux";
//Page Components
import { getThreeQuarterValues } from "../../../redux/selectors/housingData";

export const QuarterDataTable = ({ threeeQuarterValues }) => {
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
            {threeeQuarterValues ? (
              <tr>
                {Object.keys(threeeQuarterValues).map((key) => {
                  return <td key={key}>{threeeQuarterValues[key]}</td>;
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
  threeeQuarterValues: getThreeQuarterValues(state),
});

export default connect(mapStateToProps)(QuarterDataTable);
