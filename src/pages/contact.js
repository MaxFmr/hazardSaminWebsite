import Head from 'next/head';
import { Fragment } from 'react';
import HeaderTwo from '../components/header/header-2';
import GoogleMap from '../components/contact/google-map';
import ContactForm from '../components/contact/contact-form';

function ContactPage() {
  return (
    <Fragment>
      <Head>
        <title>Contactez-nous</title>
        <meta
          name='description'
          content='Retrouvez les informations de contact de l’entreprise Peintures Hazard-Samin, téléphone, formulaire de contact, adresse : 7 Rue Charles Cros, 59300 Aulnoy-Lez-Valenciennes.'
        />
      </Head>
      <HeaderTwo />
      <GoogleMap />
      <ContactForm />
    </Fragment>
  );
}

export default ContactPage;
