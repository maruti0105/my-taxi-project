import React, {Component} from 'react';
import taxiData from '../jsonfile/mytaxi';
import {Table} from 'react-bootstrap';

class Mytaxi extends Component {
  render() {
    const post = taxiData.poiList.map(data => {
      return (
        <tr key={data.id}>
          <td>{data.state}</td>
          <td>{data.id}</td>
          <td>{data.type}</td>
          <td>{data.coordinate.latitude}</td>
          <td>{data.coordinate.longitude}</td>
        </tr>
      )
    })
    return (
      <Table striped bordered condensed hover>
        <thead>
          <tr>
            <th>Vehicle State</th>
            <th>Vehicle ID</th>
            <th>Vehicle type
            </th>
            <th>Vehicle latitude
            </th>
            <th>Vehicle longitude
            </th>
          </tr>
        </thead>
        <tbody>
          {post}
        </tbody>
      </Table>
    );
  }
}

export default Mytaxi;
