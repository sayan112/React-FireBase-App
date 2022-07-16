import React, { useState } from "react";

export const ImgUpload = () => {
  const [file, setFile] = useState(null);
  const[error , setError]=useState(null);
  const types = ["image/png", "image/jpeg"];

  const Filehandeler = (e) => {
    var seletedfile = e.target.files[0];
    if (seletedfile && types.includes(seletedfile.type)) {
      setFile(seletedfile);
      setError("");
      console.log(file);
    } else {
      setFile(null);
       setError("Please select a png/jpeg img file 😢")
      console.log(file);
    }
  };
  return (
    <form>
      <label>
        <input type="file" onChange={Filehandeler} />
        <span>+</span>
      </label>
      <div className="output">
        {error && <div className="error"> {error} </div>}
        {file && <div className="filedisplay"> {file.name} </div>}
      </div>
    </form>
  );
};
