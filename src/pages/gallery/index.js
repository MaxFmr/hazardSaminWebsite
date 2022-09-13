import Head from 'next/head';
import { Fragment } from 'react';
import HeaderTwo from '../../components/header/header-2';

const Gallery = () => {
  return (
    <Fragment>
      <Head>
        <title>Gallerie</title>
      </Head>
      <HeaderTwo />
      <div>Gallery</div>
    </Fragment>
  );
};

export default Gallery;
