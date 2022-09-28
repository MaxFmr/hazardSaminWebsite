import Link from 'next/link';
import Image from 'next/image';

function DarkLogo() {
  return (
    <Link href='/'>
      <a className='inline-block align-middle leading-[1]'>
        <Image
          src='/images/logo/logo.svg'
          alt='Logo Peintures Hazard Samin'
          width={150}
          height={150}
        />
      </a>
    </Link>
  );
}

export default DarkLogo;
