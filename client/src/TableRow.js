import { React, useState, useEffect } from "react";

function TableRow({ data, user, updateCoilsOnDeleteCoil }) {
  return (
    <tr>
      <td>{data.id}</td>
      <td>{data.grade}</td>
      <td>{data.com_spec}</td>
      <td>{data.net}</td>
      <td>{data.gross}</td>
      <td>{data.quantity}</td>
      <td>{data.pkgs}</td>
      {user.isAdmin ? (
        <td>
          <button className="pointer">✏️</button>
        </td>
      ) : null}
      {user.isAdmin ? (
        <td>
          {" "}
          <button
            className="pointer"
            onClick={function handleDelete(event) {
              event.stopPropagation();
              fetch(`/coils/${data.id}`, {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
              })
                .then((resp) => resp.json())
                .then((data) => updateCoilsOnDeleteCoil(data));
            }}
          >
            🗑️
          </button>
        </td>
      ) : null}
    </tr>
  );
}

export default TableRow;
