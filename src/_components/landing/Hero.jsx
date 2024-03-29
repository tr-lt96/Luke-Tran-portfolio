import Image from 'next/image'
import LandingSection from './LandingSection';
import { fontSecondary } from '@/_utils/fonts';

const titles = ["Data Analyst", "Data Scientist", "Data Engineer"]
export default function Hero() {
  return (
    <div className="m-auto h-screen w-full relative">
      <div className="flex justify-center h-full items-center">

        <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-0 opacity-10'>
          <Image src="/hero-img.png" alt="" width={300} height={300} />
        </div>

        <LandingSection>
          <div className='z-10 flex flex-col w-full items-center justify-center gap-y-4'>
            <Image src="/hero-img.png" alt="" width={200} height={200} />
            <div className="text-3xl md:text-[48px] font-semibold leading-tight">Hi, I&apos;m Luke Tran</div>
            <div className={`flex flex-row ${fontSecondary.className} text-p-cinnabar uppercase`}>
              {titles.map((title) => (
                <h3 key={`hero-${title}`} className="font-normal border-r border-solid border-white last:border-0 px-2 md:px-4">{title}</h3>
              ))}
            </div>
          </div>
        </LandingSection>

      </div>
    </div>
  );
}
