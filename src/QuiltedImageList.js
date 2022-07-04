import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Lightbox } from 'react-modal-image';
import CardMedia from '@mui/material/CardMedia';

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

// https://stephane-monnot.github.io/react-vertical-timeline/#/?a=date-string-

export default function QuiltedImageList({
  itemData,
  handleImgClick,
  closeLightbox,
}) {
  const [showModal, setShowModal] = React.useState(false);
  const [urlToHugeImageFile, setUrlToHugeImageFile] = React.useState('');
  const closeLightbox1 = () => {
    console.log('closeLightbox called');
    setShowModal(false);
  };

  const handleImgClick1 = (item) => {
    console.log('img clicked ');
    console.log(item.target.src);
    setUrlToHugeImageFile(item.target.src);
    setShowModal(true);
  };

  return (
    <>
      <ImageList
        sx={{ width: 600, height: 450 }}
        variant="quilted"
        cols={4}
        rowHeight={121}
      >
        {itemData.map((item) => (
          <ImageListItem
            key={item.img}
            cols={item.cols || 1}
            rows={item.rows || 1}
          >
            {item.type == 'img' ? (
              <img
                {...srcset(item.img, 121, item.rows, item.cols)}
                alt={item.title}
                loading="lazy"
                onClick={(item) => handleImgClick(item)}
              />
            ) : (
              <CardMedia
                component="video"
                image={
                  'https://video-downloads.googleusercontent.com/AGQNM9Ib6uTv1_gUL-WWoblit4F9jGvphOo9364JMvKlJNWyirkIeaThqqxnKlVuJbvvFtp0aWE0euzRC5lnl3I6HJwVA_OUKuNl2HQmgMeBoT4_79bnk0Whz5wxmlL2IOqDoljbpx5prwnUxtLfx_G5OJJM0vltB9C_GARvfvxyNHx5rAr5lI4KGS3ZEmUsO36DW1RNxfnHvM4J_dxm-eZlSVqIZmGffxS7H56Ia5W-tE0KJb2HJvQ'
                }
                controls
              />
            )}
          </ImageListItem>
        ))}
      </ImageList>

      {showModal && (
        <Lightbox
          medium={urlToHugeImageFile}
          large={urlToHugeImageFile}
          alt=""
          onClose={closeLightbox}
        />
      )}
    </>
  );
}
