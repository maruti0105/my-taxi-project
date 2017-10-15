import React, {Component} from 'react';
import carData from '../jsonfile/car2go';
import {Table} from 'react-bootstrap';

class Car2go extends Component {
  render() {
    const post = carData.placemarks.map(data => {
      return (
        <tr key={data.id}>
          <td>{data.name}</td>
          <td>{data.id}</td>
          <td>{data.fuel}</td>
          <td>{data.interior}</td>
          <td>{data.vin}</td>
          <td>{data.exterior}</td>
        </tr>
      )
    })
    return (
      <Table striped bordered condensed hover>
        <thead>
          <tr>
            <th>Vehicle Name</th>
            <th>Vehicle ID
            </th>
            <th>Fuel Balance</th>
            <th>Vehicle Interior
            </th>
            <th>Vehicle Vin
            </th>
            <th>Vehicle Exterior
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

export default Car2go;
