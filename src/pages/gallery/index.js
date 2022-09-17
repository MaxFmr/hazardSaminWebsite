import Head from 'next/head';
import HeaderTwo from '../../components/header/header-2';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import { useState } from 'react';
import { Fragment } from 'react';
import Image from 'next/image';

const Gallery = ({}) => {
  const [clicked, setClicked] = useState(false);
  const [imgId, setImgId] = useState();
  const photos = [];

  let photosGallery = [];

  for (let index = 1; index < 50; index++) {
    photosGallery.push({
      original: `https://maximekerlidou.fr/photos/samin/_${index}.jpeg`,
      thumbnail: `https://maximekerlidou.fr/photos/samin/_${index}.jpeg`,
    });
  }
  for (let index = 1; index < 50; index++) {
    photos.push({
      id: index,
      url: `https://maximekerlidou.fr/photos/samin/_${index}.jpeg`,
      alt: 'décoration peinture faite par peintures Hazard-Samin',
    });
  }
  const handleClick = (id) => {
    setClicked(!clicked);
    setImgId(id);
  };
  return (
    <Fragment>
      <Head>
        <title>Gallerie Photo</title>
        <meta
          name='description'
          content="Gallerie rassemblant l'ensembles des photos de chantier de l'entreprise Peintures Hazard-Samin"
        />
      </Head>
      <HeaderTwo />
      {clicked ? (
        <div>
          <button className=' ml-[80%] mt-16' onClick={() => setClicked(false)}>
            <Image
              src='/images/xmark-solid.svg'
              height={50}
              width={50}
              alt='closing logo'
            />
          </button>
          <ImageGallery
            items={photosGallery}
            useBrowserFullscreen={true}
            showThumbnails={false}
            startIndex={imgId}
          />
        </div>
      ) : (
        <div className=''>
          {photos.map((photo) => {
            const path = photo.url;
            return (
              <div
                className=''
                key={photo.id}
                onClick={() => {
                  handleClick(photo.id - 1);
                }}>
                <Image
                  src={path}
                  height={500}
                  width={500}
                  objectFit='contain'
                  alt={photo.alt + 'photo prise par Clément Bayard' + photo.id}
                />
              </div>
            );
          })}
        </div>
      )}
    </Fragment>
  );
};
export default Gallery;
