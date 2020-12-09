//React-Bootstrap
import React, { Component } from 'react';
import { Alert, Col } from 'react-bootstrap';

class AlertNotification extends Component {

    render = () => {
        return (
            <Col>
                {this.props.countRecords && (
                    <Alert variant="success">Loaded: <b>{this.props.countRecords.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</b> records from the CSV File! <br />
                        Use the Tab Buttons above to see the data or statistics...
                    </Alert>
                )}
                {this.props.error && (
                        <pre>{JSON.stringify(this.props.error, null, 2)}</pre>
                )}
                {this.props.unloaded && (
                        <Alert variant="success">CSV file was removed.</Alert>
                )}
                {this.props.info && (
                        <Alert variant="info"><b>Use</b> the button on the left to upload your CSV file.</Alert>

                )}
                {this.props.loading && (
                        <Alert variant="primary"><b>Loading Data...</b></Alert>
                )}
                {this.props.unloading && (
                        <Alert variant="warning"><b>Unloading Data...</b></Alert>
                )}
            </Col>
        )
    }
}

export default AlertNotification;