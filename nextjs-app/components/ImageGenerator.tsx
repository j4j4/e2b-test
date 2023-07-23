import React, { useState } from 'react';
import axios from 'axios';

const ImageGenerator: React.FC = () => {
  const [prompt, setPrompt] = useState('');

  const generateImage = async () => {
    try {
      const response = await axios.post('/api/image', { prompt });
      const { data } = response;
      if (data && data.image) {
        const event = new CustomEvent('imageGenerated', { detail: data.image });
        window.dispatchEvent(event);
      }
    } catch (error) {
      console.error('Error generating image:', error);
    }
  };

  return (
    <div className="image-generator">
      <input
        id="user-prompt"
        type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter a prompt for image generation"
      />
      <button onClick={generateImage} className="btn btn-primary">
        Generate Image
      </button>
    </div>
  );
};

export default ImageGenerator;