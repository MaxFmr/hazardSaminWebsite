import Link from 'next/link';
import Image from 'next/image';

function WhiteLogo() {
  return (
    <Link href='/'>
      <a className='inline-block align-middle h-20 w-20'>
        <Image
          src='/images/logo/logo.svg'
          alt='Logo Peintures Hazard Samin'
          width={150}
          height={150}
          layout='intrinsic'
        />
      </a>
    </Link>
  );
}

export default WhiteLogo;
