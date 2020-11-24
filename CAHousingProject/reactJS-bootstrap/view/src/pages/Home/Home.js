//React-Bootstrap
import React, { Component } from "react";
import {
  Row,
  Col,
  Card,
  Tab,
  Tabs,
  Alert,
  Spinner,
  Button,
  Jumbotron,
} from "react-bootstrap";
//Redux Store Connector
import { connect } from "react-redux";
//CSV Upload Dependancy
import CsvParse from "@vtex/react-csv-parse"; //https://github.com/vtex/react-csv-parse/blob/master/demo/src/index.js

//Page Elements
//import { fetchHousingData } from "../../redux/actions"; If we choose Database Route.
//Redux Store Components
//import { getHousingDataRecordsByVisibilityFilter } from "../../redux/selectors"; If we choose Database Route.

//CSV Application PRoute...
import CountDataTable from "./CountDataTable/CountDataTable";
import HalfDataTable from "./HalfDataTable/HalfDataTable";
import HousingDataTable from "./HousingDataTable/HousingDataTable";
import MaxDataTable from "./MaxDataTable/MaxDataTable";
import MeanDataTable from "./MeanDataTable/MeanDataTable";
import MinDataTable from "./MinDataTable/MinDataTable";
import QuarterDataTable from "./QuarterDataTable/QuarterDataTable";
import STDDataTable from "./STDDataTable/STDDataTable";
import ThreeQuarterDataTable from "./ThreeQuarterDataTable/ThreeQuarterDataTable";

//Web-App Icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalculator } from "@fortawesome/free-solid-svg-icons";
import { Container } from "react-bootstrap";

//User-Alert Notification Code
import AlertNotification from "./AlertNotification";

import { dataLoaded } from "../../redux/actions/index";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
      countRecords: null,
      error: null,
      loading: null,
      unloaded: null,
      unloading: null,
      info: null,
      resultsDataTabBtn: true, //button is disabled when true
      allDataTabBtn: true, //button is disabled when true
      active: null,
    };
  }

  componentDidMount = () => {
    //Beginning State for the User.
    this.setState({ info: true }); //Alert Information about the Program (Directions).
  };

  handleData = (data) => {
    //Changes State Properties to Alert the User.
    this.setState({ loading: true, unloaded: false, info: false });
    //Wait a second, then change state properties and Alert the User an Update.
    setTimeout(() => {
      this.setState({
        data,
        countRecords: Object.keys(data).length,
        loading: false,
        resultsDataTabBtn: false,
        allDataTabBtn: false,
      });
      this.props.dataLoaded(data)
    }, 1000);
  };

  handleError = (error) => {
    this.setState({ error, loading: false }); //Change to Error State...
  };

  unloadCSVAlertNotification = () => {
    //Show the Unloading <Alert /> to the User.
    setTimeout(() => {
      this.setState({
        unloading: true,
        info: null,
        countRecords: null,
        resultsDataTabBtn: true,
        allDataTabBtn: true,
      });
    }, 50);
    //Empty any Data (records) or errors from this Component.
    setTimeout(() => {
      this.setState({ data: null, error: null });
      document.getElementById("csv-parse").value = "";
      this.setState({ unloading: null, unloaded: true });
    }, 950);
    //Switch from Unloaded to Complete.
    setTimeout(() => {
      this.setState({ unloaded: false });
    }, 3200);
    //Revert back to normal Settings.
    setTimeout(() => {
      this.setState({ info: true });
    }, 3299);
  };

  render() {
    //this.props.fetchHousingData();//Redux Call to Our DataBase.
    const keys = [
      "longitude",
      "latitude",
      "housing_median_age",
      "total_rooms",
      "total_bedrooms",
      "households",
      "median_income",
      "median_house_value",
      "population",
      "ocean_proximity",
    ];

    //...
    return (
      <Row className="mt-5 top-section-row">
        <Col>
          <Jumbotron fluid className="jumbotron-section">
            <Container>
              <h1 className="text-center mb-5 main-section-text">
                Housing Prediction App
              </h1>
            </Container>
          </Jumbotron>
          <Card id="main-card">
            <Card.Body>
              <Row>
                <Col>
                  <Tabs defaultActiveKey="upload-data">
                    <Tab eventKey="upload-data" title="Upload CSV">
                      <Row className="mt-3">
                        <Col xs="1" md="1" lg="1" className="float-right">
                          {this.state.loading ? (
                            <Spinner
                              animation="grow"
                              role="status"
                              variant="primary"
                              className="mt-3"
                            >
                              <span className="sr-only">Loading...</span>
                            </Spinner>
                          ) : null}
                        </Col>
                        <Col xs md lg="5" className="float-left pt-2">
                          <CsvParse
                            keys={keys}
                            onDataUploaded={this.handleData}
                            className="main-card"
                            onError={this.handleError}
                            render={(onChange) => (
                              <Button
                                className="upload-button"
                                id="csv-parse"
                                type="file"
                                accept=".csv"
                                pattern="^.+\.(xlsx|xls|csv)$"
                                onChange={onChange}
                                as="input"
                                size="sm"
                              />
                            )}
                          />
                          {this.state.countRecords && (
                            <Button
                              variant="danger"
                              size="sm"
                              className="mt-3 upload-button-danger"
                              onClick={this.unloadCSVAlertNotification}
                            >
                              Unload CSV File
                            </Button>
                          )}
                        </Col>

                        <AlertNotification
                          countRecords={this.state.countRecords}
                          error={this.state.error}
                          info={this.state.info}
                          loading={this.state.loading}
                          unloading={this.state.unloading}
                          unloaded={this.state.unloaded}
                        />
                      </Row>
                    </Tab>
                    <Tab
                      eventKey="results-data"
                      title="Result Tables"
                      disabled={this.state.resultsDataTabBtn}
                    >
                      <Row className="mt-5">
                        <Col>
                          <h1>
                            <FontAwesomeIcon icon={faCalculator} /> <b>Sum</b>
                          </h1>
                          <CountDataTable housingData={this.state.data} />
                          <h1>
                            <FontAwesomeIcon icon={faCalculator} /> <b>Mean</b>
                          </h1>
                          <MeanDataTable housingData={this.state.data} />
                          <h1>
                            <FontAwesomeIcon icon={faCalculator} /> <b>STD</b>
                          </h1>
                          <STDDataTable housingData={this.state.data} />
                          <h1>
                            <FontAwesomeIcon icon={faCalculator} /> <b>Min</b>
                          </h1>
                          <MinDataTable housingData={this.state.data} />
                          <h1>
                            <FontAwesomeIcon icon={faCalculator} /> <b>Max</b>
                          </h1>
                          <MaxDataTable housingData={this.state.data} />
                          <h1>
                            <FontAwesomeIcon icon={faCalculator} /> <b>Half</b>
                          </h1>
                          <HalfDataTable housingData={this.state.data} />
                          <h1>
                            <FontAwesomeIcon icon={faCalculator} /> <b>Quarter</b>
                          </h1>
                          <QuarterDataTable housingData={this.state.data} />
                          <h1>
                            <FontAwesomeIcon icon={faCalculator} /> <b>Three Quarter</b>
                          </h1>
                          <ThreeQuarterDataTable housingData={this.state.data} />
                        </Col>
                      </Row>
                    </Tab>
                    <Tab
                      eventKey="all-data"
                      title="Show All Data"
                      disabled={this.state.allDataTabBtn}
                    >
                      <HousingDataTable housingData={this.state.data} />
                    </Tab>
                  </Tabs>
                </Col>
              </Row>
            </Card.Body>
            {this.state.countRecords && (
              <Card.Footer>
                <Row>
                  <Col>
                    <Alert variant="secondary" className="float-right">
                      <b>
                        {this.state.countRecords
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                      </b>{" "}
                      total records.
                    </Alert>
                  </Col>
                </Row>
              </Card.Footer>
            )}
          </Card>
        </Col>
      </Row>
    );
  }
}
/* Database Route
const mapStateToProps = state => {
    const { visibilityFilter } = state;
    const housingDataRecords = getHousingDataRecordsByVisibilityFilter(state, visibilityFilter);
    return { housingDataRecords };    
};
*/

export default connect(null, { dataLoaded })(Home);
