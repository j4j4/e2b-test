import React from 'react';

interface PreviewProps {
  imageSrc: string;
}

const Preview: React.FC<PreviewProps> = ({ imageSrc }) => {
  return (
    <div id="preview-container" className="flex justify-center items-center h-screen">
      {imageSrc ? (
        <img id="generated-image" src={imageSrc} alt="Generated" className="max-w-lg max-h-lg" />
      ) : (
        <p className="text-center text-gray-500">No image to preview</p>
      )}
    </div>
  );
};

export default Preview;