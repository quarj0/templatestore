import React, { useState } from "react";

const TemplateUpload = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null);
  const [file, setFile] = useState(null);
  const [isFree, setIsFree] = useState(true);
  const [price, setPrice] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFile(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a FormData object to send the form data with files
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("image", image);
    formData.append("file", file);
    formData.append("is_free", isFree);
    formData.append("price", price);

    // Send the form data to the backend API
    fetch(`${process.env.REACT_APP_API_URL}/upload/template/`, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the backend
        console.log(data);
        // Reset the form fields after successful upload
        setTitle("");
        setDescription("");
        setCategory("");
        setImage(null);
        setFile(null);
        setIsFree(true);
        setPrice("");
      })
      .catch((error) => {
        // Handle errors if any
        console.error("Error:", error);
      });
  };

  return (
    <div>
      <h1>Upload Template</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Category:</label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Image:</label>
          <input
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
            required
          />
        </div>
        <div>
          <label>File:</label>
          <input type="file" onChange={handleFileChange} required />
        </div>
        <div>
          <label>Is Free:</label>
          <input
            type="checkbox"
            checked={isFree}
            onChange={(e) => setIsFree(e.target.checked)}
          />
        </div>
        {!isFree && (
          <div>
            <label>Price:</label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>
        )}
        <div>
          <button type="submit">Upload Template</button>
        </div>
      </form>
    </div>
  );
};

export default TemplateUpload;
