import Image from 'next/image';

const BigLogo = () => {
  return (
    <Image
      src='/images/logo/logo.svg'
      alt='Logo Peintures hazard Samin'
      width={200}
      height={200}
    />
  );
};

export default BigLogo;
