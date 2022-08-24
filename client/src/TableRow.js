import { React, useState, useEffect } from "react";

function TableRow({ data }) {
  return (
    <tr>
      <td>{data.id}</td>
      <td>{data.grade}</td>
      <td>{data.com_spec}</td>
      <td>{data.net}</td>
      <td>{data.gross}</td>
      <td>{data.quantity}</td>
      <td>{data.pkgs}</td>
    </tr>
  );
}

export default TableRow;
