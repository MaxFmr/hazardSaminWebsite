import Link from 'next/link';

function Breadcrumb(props) {
  const { activePage, pageTitle } = props;
  return (
    <div className='breadcrumb-area md:pt-155 pt-[55px]'>
      <div className='container'>
        <ul className='flex text-[18px] leading-6 uppercase'>
          <li className='relative after:pr-[15px] after:ml-[15px] after:content-["/"] text-[#999999]'>
            <Link href='/'>Accueil</Link>
          </li>
          <li>
            <Link href='/projects'>{activePage}</Link>
          </li>
        </ul>
        <h1 className='lm:text-[60px] text-[36px] lm:leading-[60px] mt-[45px] mb-12'>
          {pageTitle}
        </h1>
      </div>
    </div>
  );
}

export default Breadcrumb;
