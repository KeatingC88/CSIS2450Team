﻿import React from "react";
import { connect } from "react-redux";

const HousingDataRecord = ({ record, index }) => (
    <tr>
        <td>
            {index.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </td>
        <td>
            {record.longitude}
        </td>
        <td>
            {record.latitude}
        </td>
        <td>
            {record.housing_median_age}
        </td>
        <td>
            {record.total_rooms}
        </td>
        <td>
            {record.total_bedrooms}
        </td>
        <td>
            {record.population}
        </td>
        <td>
            {record.households}
        </td>
        <td>
            {record.median_income}
        </td>
        <td>
            {record.median_house_value}
        </td>
        <td>
            {record.ocean_proximity}
        </td>
    </tr>
);

export default connect(
    null
)(HousingDataRecord);