import { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import './overflowalert.css'

const OverflowAlert = () => {
    const [data, setData] = useState("");
    const [val, setVal] = useState("Upload image to predict");
    
    const [filename, setFilename] = useState("No file Uploaded")
  
    useEffect(() => {
      fetch("http://localhost:5000")
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setData(data.message);
        });
    }, []);
    const [file, setFile] = useState(null);
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      const formData = new FormData();
      formData.append("file", file);
  
      try {
        axios.post("http://localhost:5000/upload", formData).then((res) => {
          console.log(res.data.message);
          setVal(res.data.message);
        });
        alert("File uploaded successfully");
      } catch (error) {
        console.error(error);
      }
  
    };
    const handleFileUpload = (event) => {
      const file = event.target.files[0];
      setFilename(file.name);
    };
  
    return (
        <div className="overflow">
            {/* <Button>Check Overflow and send alert</Button> */}
        <p>
          Upload the image file to detect.
        </p>
        <form onSubmit={handleSubmit}>
            <span >Select a file</span>
            <input type="file"  name="file"  className="hidden" onChange={(e) => {setFile(e.target.files[0]); handleFileUpload(e) }}/>
        <span className="text-white">File Uploaded : {filename}</span>
  
        <div>
          <button type="submit">
            PREDICT
          </button>
        </div>
        </form>
  
        <div>
          <span>
            Detected Image is : {val}
          </span>
        </div>
      </div>
    );
}

export default OverflowAlert
