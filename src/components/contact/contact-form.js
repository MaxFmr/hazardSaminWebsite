import Link from 'next/link';
import emailjs from '@emailjs/browser';

import { useRef } from 'react';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { ColorRing } from 'react-loader-spinner';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

function ContactForm() {
  const form = useRef();
  const router = useRouter();

  const [loader, setLoader] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);

  const OpenModal = () => setIsOpen(true);
  const onCloseModal = () => setIsOpen(false);
  const sendEmail = (e) => {
    e.preventDefault();
    console.log(e);
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_APIKEY
      )
      .then(setLoader(true))
      .then(
        (result) => {
          OpenModal();
          setLoader(false);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <div className='contact-area md:pt-[145px] pt-[45px] border-[#595959] border-opacity-30 border-b md:pb-160 pb-[60px]'>
        <div className='container'>
          <Modal open={modalIsOpen} onClose={onCloseModal} center>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'justify',
                justifyContent: 'center',
              }}>
              <h2>Votre message a bien été envoyé.</h2>
              <p>
                Merci pour vôtre intérêt.
                <br />
                Nous allons vous recontacter dans les plus brefs délais.{' '}
              </p>
            </div>
          </Modal>

          <div className='lg:grid lg:grid-cols-5'>
            <div className='contact-info lg:col-span-2 lg:pr-[15px]'>
              <h2 className='text-[48px] left-[58px] md:pb-[55px] pb-[35px]'>
                Contact
              </h2>
              <h3 className='text-3xl leading-9 font-semibold'>
                AULNOY-
                <br />
                LEZ-VALENCIENNES,
              </h3>
              <ul className='text-[14px] leading-[27px] text-secondary pt-6'>
                <li className='pb-[15px] max-w-[270px]'>
                  7 RUE CHARLES CROS 59300 AULNOY- LEZ-VALENCIENNES
                </li>
                <li className='pb-[15px]'>
                  <Link href='tel: +33327439970'>
                    <a> 03 27 43 99 70</a>
                  </Link>
                </li>
                <li>
                  <Link href='mailto:	hazard.samin@gmail.com'>
                    <a>hazard.samin@gmail.com</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className='contact-form lg:col-span-3 max-md:pt-[50px]'>
              <h2 className='text-[18px] leading-[22px] uppercase md:mb-[75px] mb-[35px]'>
                Contactez-nous
              </h2>
              {!loader ? (
                <form ref={form} onSubmit={sendEmail}>
                  <div>
                    <div className='lm:flex'>
                      <input
                        className='w-full border-[#595959] border-opacity-30 border-b focus-visible:placeholder:text-black focus-visible:outline-0 focus-visible:border-black py-[15px] lm:mr-[20px]'
                        placeholder='Nom'
                        type='text'
                        id='name'
                        name='user_name'
                        required
                      />
                      <input
                        className='w-full border-[#595959] border-opacity-30 border-b focus-visible:placeholder:text-black focus-visible:outline-0 focus-visible:border-black py-[15px]'
                        placeholder='Email'
                        type='email'
                        id='email'
                        name='user_email'
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <textarea
                      className='w-full border-[#595959] border-opacity-30 border-b focus-visible:placeholder:text-black focus-visible:outline-0 focus-visible:border-black py-[15px] mt-[35px]'
                      placeholder='Votre message'
                      id='message'
                      rows='6'
                      required
                      name='message'></textarea>
                  </div>

                  <div className='mt-[55px]'>
                    <button className='boxed-btn text-[14px] leading-[30px]'>
                      Envoyer
                    </button>
                  </div>
                </form>
              ) : (
                <ColorRing
                  visible={true}
                  height='80'
                  width='80'
                  ariaLabel='blocks-loading'
                  wrapperStyle={{}}
                  wrapperClass='blocks-wrapper'
                  colors={[
                    '#e15b64',
                    '#f47e60',
                    '#f8b26a',
                    '#abbd81',
                    '#849b87',
                  ]}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactForm;
