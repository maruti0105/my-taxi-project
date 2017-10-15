import React, {Component} from 'react';
import taxiData from '../jsonfile/mytaxi';
import FilterableTable from 'react-filterable-table';// package to filter table

class Filter extends Component {
  render() {
    var post = taxiData.poiList;
    console.log(post)
    var fields = [
      {
        name: 'id',
        displayName: "Vehicle ID",
        inputFilterable: true,
        sortable: true,
        exactFilterable: true
      }, {
        name: 'state',
        displayName: "Vehicle State",
        inputFilterable: true,
        exactFilterable: true,
        sortable: true
      }, {
        name: 'type',
        displayName: "Vehicle type",
        inputFilterable: true,
        exactFilterable: true,
        sortable: true
      }
    ]
    return (
      <div>
        <br/>
        <FilterableTable namespace="Vehicle"
           initialSort="name" data={post}
           fields={fields}
           roRecordsMessage="There are no vehicles to display"
           noFilteredRecordsMessage="No vehicles match your filters!"/>
      </div>
    );
  }
}

export default Filter;
