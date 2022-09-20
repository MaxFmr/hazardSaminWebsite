import * as AiIcons from 'react-icons/ai';
import Image from 'next/image';
import Link from 'next/link';

function Footer() {
  return (
    <footer className='footer-area md:pt-[120px] pt-[60px]'>
      <div className='footer-top'>
        <div className='custom-container'>
          <div className='lm:grid xl:grid-cols-5 lm:grid-cols-12 xl:gap-x-[30px] gap-[30px]'>
            <div className='max-lg:col-span-12'>
              <div className='footer-logo'>
                <Image
                  src='/images/logo/logo.svg'
                  alt='Logo'
                  width={70}
                  height={70}
                />
              </div>
            </div>
            <div className='fixed-lg:col-span-3 fixed-md:col-span-4 fixed-lm:col-span-6 max-sm:pt-[35px]'>
              <div className='footer-widget-item'>
                <h2 className='title'>Contact</h2>
                <ul className='contact-info mt-[25px]'>
                  <li>7 RUE CHARLES CROS 59300 AULNOY-LEZ-VALENCIENNES</li>
                  <li>
                    <Link href='mailto:hello@Rusticstudio.co'>
                      <a className='hover:text-black transition-all'>
                        hazard.samin@gmail.com
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href='tel:+0084-912-3548-073'>
                      <a className='hover:text-black transition-all'>
                        03 27 43 99 70
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className='fixed-lg:col-span-3 fixed-md:col-span-2 fixed-lm:col-span-6 max-sm:pt-[30px]'>
              <div className='footer-widget-item'>
                <h2 className='title'>Rubriques</h2>
                <ul className='footer-list mt-[25px]'>
                  <li>
                    <Link href='/about'>A propos</Link>
                  </li>
                  <li>
                    <Link href='/contact'>Contact</Link>
                  </li>
                  <li>
                    <Link href='/projects'>Projets</Link>
                  </li>
                  <li>
                    <Link href='/legal'>Mentions légales</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className='fixed-lg:col-span-3 fixed-md:col-span-3 fixed-lm:col-span-6 max-sm:pt-[30px]'></div>
          </div>
        </div>
      </div>
      <div className='footer-bottom'>
        <div className='custom-container'>
          <div className='inner-container border-[#dfdfdf] border-t md:mt-[95px] mt-[50px] py-9'>
            <div className='md:grid md:grid-cols-12 flex flex-col'>
              <div className='md:col-span-4 max-lm:order-last max-lm:pt-[10px]'>
                <div className='copyright flex-wrap md:justify-start justify-center md:mb-0 mb-[10px]'>
                  © 2022 <span className='mx-1'>Artisan du web</span>
                  Site web développé et déployé à Cambrai par
                  <Link href='https://www.maximekerlidou.fr'>
                    <a target='_blank'>
                      <span> -</span>
                      <span>Maxime KERLIDOU</span>
                    </a>
                  </Link>
                  © 2022 <span className='mx-1'>Clément Bayard</span>
                  Photographie et vidéos faites à Valenciennes par Clément
                  Bayard
                  <Link href='https://www.bayardclement.fr'>
                    <a target='_blank'>
                      <span> -</span>
                      <span>Clément Bayard</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className='md:col-span-6'>
              <ul className='footer-social-link md:mb-0 mb-[10px]'></ul>
            </div>
            <div className='md:col-span-2'></div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
