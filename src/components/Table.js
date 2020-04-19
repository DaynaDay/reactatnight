
import React, { Component } from 'react';
import Table from 'react-bootstrap/Table'


class TableData extends Component {
  render () {
    return (
    
      <Table responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name </th>
            <th>Department</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>John</td>
            <td>Wick</td>
            <td>Accounting Department</td>
            <td>Senior Controller</td>

          </tr>
          <tr>
            <td>2</td>
            <td>Adam</td>
            <td>Young-Bosch</td>
            <td>Compositing Department</td>
            <td>Special Effects Artist</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Winston</td>
            <td>Duke</td>
            <td>Layout Department</td>
            <td>Animator</td>

          </tr>

          <tr>
            <td>4</td>
            <td>Candyce</td>
            <td>Fraser</td>
            <td>Storyboard Department</td>
            <td>Artist</td>

          </tr>
          <tr>
            <td>5</td>
            <td>Sebastian</td>
            <td>Crab</td>
            <td>Storyboard Department</td>
            <td>Artist</td>

          </tr>
          <tr>
            <td>6</td>
            <td>Valentine</td>
            <td>Archer</td>
            <td>Background Department</td>
            <td>Artist</td>

          </tr>
          <tr>
            <td>7</td>
            <td>Dillon</td>
            <td>Pickle</td>
            <td>Editing Department</td>
            <td>3D Modeler</td>

          </tr>
          <tr>
            <td>8</td>
            <td>Wind</td>
            <td>Chime</td>
            <td>Sound Department</td>
            <td>Pianist</td>

          </tr>
          <tr>
            <td>9</td>
            <td>Yusuke</td>
            <td>Yurameshi</td>
            <td>Sound Department</td>
            <td>Conductor</td>

          </tr>
          <tr>
            <td>10</td>
            <td>Tiger</td>
            <td>Lily</td>
            <td>Storyboard</td>
            <td>Cartoonist</td>

          </tr>
        </tbody>
      </Table>
    )}
}
export default TableData;