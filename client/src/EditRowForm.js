import React, { useState, useEffect } from "react";

function EditRowForm({ setFormData, data }) {
  const [grade, setGrade] = useState(data.grade);
  const [com_spec, setComSpec] = useState(data.com_spec);
  const [net, setNet] = useState(data.net);
  const [gross, setGross] = useState(data.gross);
  const [quantity, setQuantity] = useState(data.quantity);
  const [pkgs, setPkgs] = useState(data.pkgs);

  console.log(grade, com_spec, net, gross, quantity, pkgs);

  const formData = {
    grade: grade,
    com_spec: com_spec,
    net: net,
    gross: gross,
    quantity: quantity,
    pkgs: pkgs,
  };

  useEffect(() => {
    setFormData(formData);
  }, [grade, com_spec, net, gross, quantity, pkgs]);

  return (
    <>
      <td></td>
      <td>
        <input
          type="text"
          value={grade}
          onChange={(e) => setGrade(e.target.value)}
        ></input>
      </td>
      <td>
        <input
          type="text"
          value={com_spec}
          onChange={(e) => setComSpec(e.target.value)}
        ></input>
      </td>
      <td>
        <input
          type="number"
          value={net}
          onChange={(e) => setNet(e.target.value)}
        ></input>
      </td>
      <td>
        <input
          type="number"
          value={gross}
          onChange={(e) => setGross(e.target.value)}
        ></input>
      </td>
      <td>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        ></input>
      </td>
      <td>
        <input
          type="number"
          value={pkgs}
          onChange={(e) => setPkgs(e.target.value)}
        ></input>
      </td>
    </>
  );
}

export default EditRowForm;
