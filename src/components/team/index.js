import Image from 'next/image';
import Link from 'next/link';
import * as FaIcons from 'react-icons/fa';

function Team({ teamItems }) {
  const teamMemberImage = `relative before:hover:absolute before:opacity-[0.5] before:duration-500 before:pointer-events-none before:z-[1]`;
  return (
    <div className='team-area md:py-155 py-[55px] border-[#dfdfdf] border-b'>
      <div className='container'>
        <h2 className='lm:text-[42px] text-[32px] lm:leading-[50px] mb-[60px]'>
          Profressionels et Passionnés
        </h2>
        <div className='grid sm:grid-cols-12 lg:gap-x-[70px] fixed-md:gap-x-[30px] gap-[30px]'>
          {teamItems?.map((teamItem, i) => {
            const TwitterIcon = FaIcons[teamItem?.twitterIcon];
            const FacebookIcon = FaIcons[teamItem?.facebookIcon];
            const InstagramIcon = FaIcons[teamItem?.instagramIcon];
            const LinkedinIcon = FaIcons[teamItem?.linkedinIcon];
            return (
              <div
                className='md:col-span-4 fixed-lm:col-span-6 fixed-sm:col-span-6'
                key={i}>
                <div className='team-member overflow-hidden group'>
                  <div className={teamMemberImage}>
                    {/* <Link href='/about'> */}
                    <a>
                      <Image
                        src={teamItem?.image}
                        alt={teamItem?.title}
                        width={343}
                        height={409}
                        layout='responsive'
                        objectFit='contain'
                        quality={70}
                        priority
                      />
                    </a>
                    {/* </Link> */}
                    {/* <div className='team-social-wrap duration-500 absolute bottom-[15px] right-[-175px] z-[1] group-hover:right-[20px]'>
                      <ul className='team-social flex bg-white p-[15px] rounded-[2px] text-[#999999]'>
                        <li className='duration-300 hover:text-black mr-[20px]'>
                          <Link href='https://twitter.com/'>
                            <a target='_blank'>
                              <TwitterIcon />
                            </a>
                          </Link>
                        </li>
                        <li className='duration-300 hover:text-black mr-[20px]'>
                          <Link href='https://facebook.com/'>
                            <a>
                              <FacebookIcon />
                            </a>
                          </Link>
                        </li>
                        <li className='duration-300 hover:text-black mr-[20px]'>
                          <Link href='https://www.instagram.com/'>
                            <a>
                              <InstagramIcon />
                            </a>
                          </Link>
                        </li>
                        <li className='duration-300 hover:text-black'>
                          <Link href='https://linkedin.com/'>
                            <a>
                              <LinkedinIcon />
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </div> */}
                  </div>
                  <div className='team-member-content pt-[25px] ml-8'>
                    <h3>
                      <Link href='/about'>
                        <a className='transition-all hover:text-[#caac6b] text-[24px] leading-[31px]'>
                          {teamItem?.memberName}
                        </a>
                      </Link>
                    </h3>
                    <span className='designation text-secondary leading-6 block text-[14px] mt-[5px]'>
                      {teamItem?.designation}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Team;
