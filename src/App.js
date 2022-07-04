import React from 'react';
import './style.css';
import Home from './Home.js';
import VertHome from './VertHome.js';
import QuiltedImageList from './QuiltedImageList.js';
import { Lightbox } from 'react-modal-image';

export default function App() {
  const [showModal, setShowModal] = React.useState(false);
  const [urlToHugeImageFile, setUrlToHugeImageFile] = React.useState('');
  const urlToHugeImageFile1 =
    'https://lh3.googleusercontent.com/qI1FKJxhJIPcaTESCO3KbFaU0q2BnPZ9-oJVpc7QekkpqucQ12qBvE0M6YmlyxQIMoOsRiz_GgKp5BNMuDnOr4NSfyofPKiaD5EMO2mZLchHbdpLZcYsOKAvwZy38WbC0CavPl5y=w2400';

  const handleImgClick = (item) => {
    console.log('img clicked ');
    console.log(item.target.src);
    setUrlToHugeImageFile(item.target.src);
    setShowModal(true);
  };

  const closeLightbox = () => {
    console.log('closeLightbox called');
    setShowModal(false);
  };

  return (
    <div>
      <h1>Hello 🍃 ක්‍රිකට් කොම්ල්ලෝ🤘</h1>
      <p>Scroll down to see some magic happen :)</p>
      <Home closeLightbox={closeLightbox} handleImgClick={handleImgClick} />
      {/* <VertHome /> */}
      {showModal && (
        <Lightbox
          medium={urlToHugeImageFile}
          large={urlToHugeImageFile}
          alt=""
          onClose={closeLightbox}
        />
      )}
    </div>
  );
}
