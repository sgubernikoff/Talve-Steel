import React, { useState, useEffect } from "react";

function EditRowForm({ setFormData }) {
  const [grade, setGrade] = useState("");
  const [com_spec, setComSpec] = useState("");
  const [net, setNet] = useState("");
  const [gross, setGross] = useState("");
  const [quantity, setQuantity] = useState("");
  const [pkgs, setPkgs] = useState("");

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
    <tr>
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
    </tr>
  );
}

export default EditRowForm;
