import React, { useState, useEffect } from "react";

const StepEight = ({ formData, setFormData }) => {
  const [images, setImages] = useState(Array(5).fill(null));
  const [imagesFile, setImagesFile] = useState(Array(5).fill(null));

  const updateImageCountInLocalStorage = (imagesArray) => {
    const imageCount = imagesArray.filter(img => img !== null).length;
    localStorage.setItem('droppedImageCount', imageCount);
  };


  // Function to handle file drop
  const handleDrop = (index, e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const newImages = [...images];
        newImages[index] = reader.result;
        setImages(newImages);

        // Update imagesFile state with the selected file
        const newImagesFile = [...imagesFile];
        newImagesFile[index] = file;
        setImagesFile(newImagesFile);

        // Update formData with the new images array
        setFormData({ 
          ...formData, 
          images: newImages,
          imagesFile: newImagesFile 
        });

        updateImageCountInLocalStorage(newImages);
      };
      reader.readAsDataURL(file);
    }
  };

  // Function to handle file input change
  const handleInputChange = (index, e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const newImages = [...images];
        newImages[index] = reader.result;
        setImages(newImages);

        // Update imagesFile state with the selected file
        const newImagesFile = [...imagesFile];
        newImagesFile[index] = file;
        setImagesFile(newImagesFile);

        // Update formData with the new images array
        setFormData({ 
          ...formData, 
          images: newImages,
          imagesFile: newImagesFile 
        });

        updateImageCountInLocalStorage(newImages);
      };
      reader.readAsDataURL(file);
    }
  };

  // Effect to save images array to local storage
  useEffect(() => {
    if (images.filter(img => img !== null).length > 0) {
      localStorage.setItem('uploadedImages', JSON.stringify(images));
      localStorage.setItem('uploadedImagesFile', JSON.stringify(imagesFile));
    }
  }, [images, imagesFile]);

  // Effect to retrieve images array from local storage
  useEffect(() => {
    const savedImages = JSON.parse(localStorage.getItem('uploadedImages'));
    const savedImagesFile = JSON.parse(localStorage.getItem('uploadedImagesFile'));

    if (savedImages) {
      setImages(savedImages);
    }
    if (savedImagesFile) {
      setImagesFile(savedImagesFile);
    }
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center mb-[5rem]">
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative bg-gray-200 border border-dashed border-gray-400 rounded-md overflow-hidden flex justify-center items-center md:w-[200px] md:h-[200px] sm:w-[120px] sm:h-[120px]"
            onDrop={(e) => handleDrop(index, e)}
            onDragOver={(e) => e.preventDefault()}
          >
            {image ? (
              <img
                src={image}
                alt={`Preview ${index}`}
                className="object-cover w-full h-full"
              />
            ) : (
              <span className="text-gray-400 md:text-md sm:text-sm text-center">Drop or Select Image</span>
            )}
            <input
              type="file"
              accept="image/*"
              className="absolute inset-0 opacity-0 cursor-pointer"
              onChange={(e) => handleInputChange(index, e)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepEight;
