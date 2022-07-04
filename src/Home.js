import React from 'react';
import { Chrono } from 'react-chrono';
import QuiltedImageList from './QuiltedImageList.js';
import dataItems from './data.js';
import CardMedia from '@mui/material/CardMedia';

const Home = ({ closeLightbox, handleImgClick }) => {
  const spinItemData = [
    {
      img: 'https://lh3.googleusercontent.com/qI1FKJxhJIPcaTESCO3KbFaU0q2BnPZ9-oJVpc7QekkpqucQ12qBvE0M6YmlyxQIMoOsRiz_GgKp5BNMuDnOr4NSfyofPKiaD5EMO2mZLchHbdpLZcYsOKAvwZy38WbC0CavPl5y=w2400',
      title: 'Aruna Bowling offspin',
      rows: 3,
      cols: 4,
      type: 'img',
    },
    {
      img: 'https://lh3.googleusercontent.com/K2uAu9uu5DbvbKKpe2AcBxzhZ1ArsNWDdX_Woqb6vYnFP9ctSfDlAS2FLfjjh6Wgu5FCKAdcdwRDNVBlmZCzwpL0Efy81-SI8uYl8ntfhCnwdGRs_J11HNJLvFPOU2tgxDpsDCJp=w2400',
      title: 'Legspinner in action',
      rows: 2,
      cols: 4,
      type: 'img',
    },
  ];

  const slogItemData = [
    {
      img: 'https://lh3.googleusercontent.com/x7Prz5rQ0C6PeV9CoHcblGMOWs2jevhIqnuDGmj_x2vOdO5ply_XMz4mwsSy-Y-t7drYt34Gwscmb5-0l9hrSJwAc1XhFAiAFhgRrE45uJMh4bimBFH_euA2QITOS_uKDnBNH2K2=w2400',
      title: 'down the track',
      rows: 3,
      cols: 4,
      type: 'img',
    },
    {
      img: 'https://lh3.googleusercontent.com/ZlcZ1fMtstcvVuOAaWpW4wQRgGH55iksJY_Y7pRf8Me2PEDxn74WItcU4Ey_lKPl45mBNtYiIZGjHRvTV4cYcFHaEBwpKK8AsYm8_qzLfMW49OFQCC-nbHCCmrBQOs0y6wEHqG5i=w2400',
      title: 'down on knee',
      rows: 3,
      cols: 4,
      type: 'img',
    },
    {
      img: 'https://lh3.googleusercontent.com/PhqTkDlapAKGhSMKdTk8oJbua6GCL9DthVJvHxhVWPYQYIFQloP86OH5AxJkzRDtCw3DRvd9uWKQgoUe_FPRKY3Y3cPAeZhnC7ApKBrSMWfpDnNfQtdjwDgyCXStJOSi3l-PTUkL=w2400',
      title: 'way down the pitch',
      rows: 3,
      cols: 4,
      type: 'img',
    },
  ];

  const videoItemData = [
    {
      img: 'https://lh3.googleusercontent.com/qI1FKJxhJIPcaTESCO3KbFaU0q2BnPZ9-oJVpc7QekkpqucQ12qBvE0M6YmlyxQIMoOsRiz_GgKp5BNMuDnOr4NSfyofPKiaD5EMO2mZLchHbdpLZcYsOKAvwZy38WbC0CavPl5y=w2400',
      title: 'Aruna Bowling offspin',
      rows: 3,
      cols: 4,
      type: 'video',
    },
  ];

  const imgVdData = [spinItemData, slogItemData, videoItemData];

  const items = dataItems.map((item, index) => {
    item.cardDetailedText = (
      <QuiltedImageList
        handleImgClick={handleImgClick}
        closeLightbox={closeLightbox}
        itemData={imgVdData[index]}
      />
    );

    return item;
  });

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Chrono
        items={items}
        slideShow
        mode="VERTICAL"
        slideShow={true}
        hideControls={true}
        useReadMore={false}
      />

      {/* <CardMedia
        component="video"
        image={
          'https://video-downloads.googleusercontent.com/AGQNM9Ib6uTv1_gUL-WWoblit4F9jGvphOo9364JMvKlJNWyirkIeaThqqxnKlVuJbvvFtp0aWE0euzRC5lnl3I6HJwVA_OUKuNl2HQmgMeBoT4_79bnk0Whz5wxmlL2IOqDoljbpx5prwnUxtLfx_G5OJJM0vltB9C_GARvfvxyNHx5rAr5lI4KGS3ZEmUsO36DW1RNxfnHvM4J_dxm-eZlSVqIZmGffxS7H56Ia5W-tE0KJb2HJvQ'
        }
        autoPlay
      />
      <video controls>
        <source
          src="https://video-downloads.googleusercontent.com/AGQNM9Ib6uTv1_gUL-WWoblit4F9jGvphOo9364JMvKlJNWyirkIeaThqqxnKlVuJbvvFtp0aWE0euzRC5lnl3I6HJwVA_OUKuNl2HQmgMeBoT4_79bnk0Whz5wxmlL2IOqDoljbpx5prwnUxtLfx_G5OJJM0vltB9C_GARvfvxyNHx5rAr5lI4KGS3ZEmUsO36DW1RNxfnHvM4J_dxm-eZlSVqIZmGffxS7H56Ia5W-tE0KJb2HJvQ"
          type="video/mp4"
        />
      </video> */}
    </div>
  );
};

export default Home;
