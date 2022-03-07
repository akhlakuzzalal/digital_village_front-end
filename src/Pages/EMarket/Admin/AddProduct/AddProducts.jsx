import React, { useState } from 'react';

const AddProducts = () => {
  const [image, setImage] = useState(null);
  console.log(image);
  return (
    <div>
      <div className="relative overflow-hidden inline-block">
        <button className="border-2 border-primary text-white bg-secondary py-1 px-3 rounded-lg text-lg font-semibold">
          Upload NID
        </button>
        <input
          className="absolute left-0 top-0 opacity-0 text-8xl"
          required
          onChange={(e) => setImage(e.target.files[0])}
          accept="image/*"
          type="file"
          placeholder="Image"
        />
      </div>
    </div>
  );
};

export default AddProducts;
