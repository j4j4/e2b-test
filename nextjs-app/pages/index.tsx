import React, { useState } from 'react';
import ImageGenerator from '../components/ImageGenerator';
import Preview from '../components/Preview';
import styles from '../styles/Home.module.css';

const Home: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);

  const handleImageGenerated = (generatedImage: string) => {
    setImage(generatedImage);
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Next.js Image Generator
        </h1>

        <p className={styles.description}>
          Enter your prompt below to generate an image
        </p>

        <ImageGenerator onImageGenerated={handleImageGenerated} />

        {image && <Preview image={image} />}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
};

export default Home;