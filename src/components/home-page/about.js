import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link';

function About() {
  const router = useRouter();
  const subTitle = `text-[18px] leading-[32px] text-secondary uppercase`;
  const title = `lm:text-[42px] lm:leading-[50px] text-[32px] text-black mb-[35px] lg:max-w-[460px]`;
  const desc = `text-[14px] leading-[25px] text-secondary mb-[80px] lg:max-w-[490px]`;
  const aboutImage = `flex justify-end relative sm:before:bg-pattern-1 sm:before:absolute sm:before:h-[336px] sm:before:w-[336px] sm:before:top-[75px] sm:before:left-[85px]`;
  return (
    <div id='about' className='about-area md:pt-[150px] pt-[50px]'>
      <div className='container max-lg:max-w-full fixed-lg:pr-0'>
        <div className='lg:grid lg:grid-cols-2 max-md:flex max-md:flex-col-reverse'>
          <div className='about-content max-md:pt-10'>
            <span className={subTitle}>A propos</span>
            <h2 className={title}>Plus de 12 ans d'expérience</h2>
            <h3 className='text-secondary text-2xl mb-12'>
              Pour une prestation haut-de-gamme <br /> Quel que soit l'ambition
              de notre client.
            </h3>
            <p className={desc}>
              Fondée en 1971 par Robert Hazard, l’entreprise a été reprise en
              2010 par Serge Samin. Habitée par le goût de l’excellence et du
              travail de qualité, Peintures Hazard-Samin est aujourd’hui un
              acteur reconnu du marché de la décoration intérieure et peinture
              extérieure dans le Valenciennois.
            </p>
            {router.pathname === '/about' && (
              <div>
                <h2 className={title}>Conseil en décoration</h2>
                <p className={desc}>
                  Pour tout devis signé, l'entreprise vos offres la prestation
                  d'une décoratrice professionnelle. Cette prestation implique,
                  la construction de plans, le choix des couleurs, des
                  matériaux, la proposition d'aménagements si besoin.
                </p>
              </div>
            )}

            {router.pathname === '/' && (
              <Link href='/about'>
                <a className='boxed-btn text-[18px] leading-[30px]'>
                  En savoir plus
                </a>
              </Link>
            )}
          </div>
          <div className={aboutImage}>
            <Image
              src='/images/about/1.jpg'
              alt='Service Image'
              width={390}
              height={760}
              quality={70}
              layout='fixed'
              objectFit='cover'
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
