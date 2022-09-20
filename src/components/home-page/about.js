import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link';

function About() {
  const router = useRouter();
  const subTitle = `text-[14px] leading-[32px] text-secondary uppercase`;
  const title = `lm:text-[42px] lm:leading-[50px] text-[32px] text-black mb-[35px] lg:max-w-[460px]`;
  const desc = `text-[14px] leading-[25px] text-secondary mb-[10px] lg:max-w-[490px] text-align: justify`;
  const aboutImage = `flex  justify-end relative w-[130px] self-center md:w-[250px] lg:w-[390px] lg:ml-40`;
  return (
    <div id='about' className='about-area md:pt-[150px] pt-[50px]'>
      <div className='container max-lg:max-w-full fixed-lg:pr-0'>
        <div className='lg:grid lg:grid-cols-2 max-md:flex max-md:flex-col-reverse'>
          <div className='about-content max-md:pt-10'>
            <span className={subTitle}>A propos</span>
            <h2 className={title}>Plus de 40 ans d’expérience</h2>
            <div>
              <h3 className='text-secondary text-2xl mb-10'>
                Pour une prestation haut-de-gamme <br /> Quelle que soit
                l’ambition de notre client.
              </h3>
              <p className={desc}>
                Fondée en 1971 par Robert Hazard, l’entreprise a été reprise en
                2012 par Serge Samin. Grâce à une équipe habitée par le goût de
                l’excellence et du travail de qualité, Peintures Hazard-Samin
                est aujourd’hui un acteur reconnu du marché de la décoration
                intérieure et peintures extérieures dans le Valenciennois.
                L’équipe est aujourd’hui composée d’un gérant, un apprenti, 5
                peintres et une secrétaire.
              </p>
              <div className='mt-10 text-align: justify'>
                <h4 className='mb-3'>
                  <strong>L’entreprise vous propose :</strong>
                </h4>
                <ul className='list-disc ml-4 mb-14'>
                  <li>
                    La décoration intérieure : peintures et tous types de
                    revêtements de sols et murs.
                  </li>
                  <li>La peinture et décoration extérieure.</li>
                  <li>
                    L’Aménagements intérieurs, l’ameublement sur-mesure,
                    installation, menuiserie...
                  </li>
                </ul>
              </div>
            </div>

            {router.pathname === '/about' && (
              <div className='border-solid border-2 flex flex-col text-center items-center align-middle p-5 mt-10'>
                <h2 className={title}>Conseil en décoration</h2>

                <p>
                  Pour tout devis signé, l’entreprise vos offre la prestation
                  d’une décoratrice professionnelle. Cette prestation implique,
                  la construction de plans, le choix des couleurs, des
                  matériaux, la proposition d’aménagements si besoin.
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
            <video
              className='object-cover self-center'
              autoPlay
              muted
              loop
              src='https://www.maximekerlidou.fr/videos/samin/pinceau.mp4'
              alt='Service Image'
              width={390}
              height={760}
              playsInline
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
