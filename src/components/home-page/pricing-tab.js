import * as AiIcons from 'react-icons/ai';
import { useState } from 'react';
import Link from 'next/link';

function PricingTab({ pricingItems }) {
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <div className='pricing-area md:pt-155 pt-[45px]'>
            <div className='container'>
                <div className='pb-[20px]'>
                    <h2 className='lm:text-[42px] lm:leading-[50px] text-[32px] text-center'>
                        Start Your Dream With An Affordable
                    </h2>
                </div>
                <ul className='pricing-tab flex justify-center max-sm:flex-wrap pb-[65px]'>
                    <li
                        className={
                            toggleState === 1 ? 'monthly active' : 'monthly'
                        }
                        onClick={() => toggleTab(1)}
                    >
                        <span className='cursor-pointer text-[#999999] text-[14px]'>
                            Billed Monthly
                        </span>
                        <span className='round'></span>
                    </li>
                    <li
                        className={
                            toggleState === 2 ? 'yearly active' : 'yearly'
                        }
                        onClick={() => toggleTab(2)}
                    >
                        <span className='cursor-pointer text-[#999999] text-[14px]'>
                            Billed Annually
                        </span>
                    </li>
                </ul>
                <div className='pricing-content'>
                    <div
                        className={
                            toggleState === 1
                                ? 'common monthly active'
                                : 'common monthly'
                        }
                    >
                        <div className='grid lg:grid-cols-4 md:grid-cols-2 lg:gap-0 gap-[15px]'>
                            {pricingItems?.map((pricingItem, i) => {
                                const Icon = AiIcons[pricingItem?.icon];
                                return (
                                    <div
                                        className='pricing-item animate-fadeInUp'
                                        key={i}
                                    >
                                        <span className='title'>
                                            {pricingItem?.monthlyPlan}
                                        </span>
                                        <div className='flex'>
                                            <span className='price'>
                                                {pricingItem?.monthlyPrice}
                                            </span>
                                            <span className='text-[20px] leading-[47px] ml-[10px]'>
                                                / Month
                                            </span>
                                        </div>
                                        <p className='desc'>
                                            {pricingItem?.monthlyExcerpt}
                                        </p>

                                        <ul className='price-list relative min-h-[210px]'>
                                            {pricingItem?.monthlyPricingList?.map(
                                                (item, i) => (
                                                    <li
                                                        key={i}
                                                        className='block'
                                                    >
                                                        <span className='icon'>
                                                            <Icon />
                                                        </span>
                                                        {item}
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                        <Link href='/about'>
                                            <a className='boxed-outline-btn'>
                                                Get Started Now
                                            </a>
                                        </Link>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div
                        className={
                            toggleState === 2
                                ? 'common yearly active'
                                : 'common yearly'
                        }
                    >
                        <div className='grid lg:grid-cols-4 md:grid-cols-2 lg:gap-0 gap-[15px]'>
                            {pricingItems?.map((pricingItem, i) => {
                                const Icon = AiIcons[pricingItem?.icon];
                                return (
                                    <div
                                        className='pricing-item animate-fadeInUp'
                                        key={i}
                                    >
                                        <span className='title'>
                                            {pricingItem?.annualPlan}
                                        </span>
                                        <div className='flex'>
                                            <span className='price'>
                                                {pricingItem?.annualPrice}
                                            </span>
                                            <span className='text-[20px] leading-[47px] ml-[10px]'>
                                                / Year
                                            </span>
                                        </div>
                                        <p className='desc'>
                                            {pricingItem?.annualExcerpt}
                                        </p>

                                        <ul className='price-list relative min-h-[210px]'>
                                            {pricingItem?.annualPricingList?.map(
                                                (item, i) => (
                                                    <li
                                                        key={i}
                                                        className='block'
                                                    >
                                                        <span className='icon'>
                                                            <Icon />
                                                        </span>
                                                        {item}
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                        <Link href='/about'>
                                            <a className='boxed-outline-btn'>
                                                Get Started Now
                                            </a>
                                        </Link>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
                <div className='contact-info text-center text-secondary leading-[1.4] text-[18px] pt-[55px]'>
                    You have a large team?
                    <Link href='/contact'>
                        <a className='underline text-[#0099ff] m-[5px]'>
                            Contact us
                        </a>
                    </Link>
                    for information about more enterprise options
                </div>
            </div>
        </div>
    );
}

export default PricingTab;
