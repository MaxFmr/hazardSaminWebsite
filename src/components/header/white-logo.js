import Link from 'next/link';
import Image from 'next/image';

function WhiteLogo() {
  return (
    <Link href='/'>
      <a className='inline-block align-middle leading-[1]'>
        <Image
          src='/images/logo/logo.svg'
          alt='Logo'
          width={150}
          height={150}
        />
      </a>
    </Link>
  );
}

export default WhiteLogo;
