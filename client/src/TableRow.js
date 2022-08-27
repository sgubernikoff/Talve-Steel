import { React, useState } from "react";
import EditRowForm from "./EditRowForm";

function TableRow({
  data,
  user,
  updateCoilsOnDeleteCoil,
  updateCoilsOnEditCoil,
  errorAnimation,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({});

  function handleDelete() {
    fetch(`/coils/${data.id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    })
      .then((resp) => resp.json())
      .then((data) => updateCoilsOnDeleteCoil(data));
  }
  function handleEdit() {
    fetch(`/coils/${data.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    }).then((resp) => {
      if (resp.ok)
        resp.json().then((data) => {
          setIsEditing(false);
          updateCoilsOnEditCoil(data);
        });
      else
        resp.json().then((data) => {
          console.log(data.errors);
          errorAnimation();
        });
    });
  }
  return (
    <tr>
      {isEditing ? (
        <EditRowForm setFormData={setFormData} data={data} />
      ) : (
        <>
          <td>{data.id}</td>
          <td>{data.grade}</td>
          <td>{data.com_spec}</td>
          <td>{data.net}</td>
          <td>{data.gross}</td>
          <td>{data.quantity}</td>
          <td>{data.pkgs}</td>
        </>
      )}
      {user.isAdmin ? (
        !isEditing ? (
          <>
            <td>
              <button className="pointer" onClick={() => setIsEditing(true)}>
                ✏️
              </button>
            </td>
            <td>
              {" "}
              <button className="pointer" onClick={() => handleDelete()}>
                🗑️
              </button>
            </td>
          </>
        ) : (
          <>
            <td>
              <button
                className="pointer"
                onClick={() => {
                  handleEdit();
                }}
              >
                ✅
              </button>
            </td>
            <td>
              {" "}
              <button className="pointer" onClick={() => setIsEditing(false)}>
                ❌
              </button>
            </td>
          </>
        )
      ) : null}
    </tr>
  );
}

export default TableRow;
