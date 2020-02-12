import React, { useState } from "react";
import styled from "styled-components";

const Standings = () => {
  return (
    <div>
      <Table>
        <thead>
          <th>Dog</th>
          <th>Qualified</th>
          <th>Time</th>
        </thead>
        <tbody>
          <tr>
            <td>Thor</td>
            <td className="symbol">Q</td>
            <td className="number">42.00</td>
          </tr>
          <tr>
            <td>Rylo</td>
            <td className="symbol"></td>
            <td className="number">60.00</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

const Table = styled.table`
  width: 80%;
  border: 1px solid black;
  td,
  th {
    border: 1px solid black;
    padding: 0.5rem;
  }
  .number {
    text-align: right;
  }
  .symbol {
    text-align: center;
  }
`;

export default Standings;
