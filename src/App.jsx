/* eslint-disable jsx-a11y/label-has-associated-control */
import Button from './components/elements/Button/Button';
import Header from './components/elements/Header/Header';
import { ICONS, IMAGES } from './config';

const App = () => {
  return (
    <div className="bg-primary-blue w-full min-h-screen">
      <Header />
      <div className="max-lg:flex max-lg:flex-col grid grid-cols-12 gap-[77px] max-lg:pb-5 pb-[216px]">
        <div className="col-span-6 max-lg:px-5 max-lg:pt-5 pt-[130px] pl-[100px]">
          <h1 className="text-white text-[55px] font-bold">Focus On Your Startup, We Take Care Of All Your Legal</h1>
          <p className="pt-5 pb-10 text-white font-normal text-lg">Lorem ipsum dolor funding documen investo can be difficult  and frustated but here we are taking care all of dolor si amet money bigger.</p>
          <Button className="!bg-yellow-FABE2F !text-brown-42330E mb-[70px]" title="Get Started" variant="full" />
          <hr />
          <div className="flex max-lg:flex-col items-center gap-[50px] mt-16">
            <img loading="lazy" src={IMAGES.NETFLIX} alt="netflix" width={147} height={40} />
            <img loading="lazy" src={IMAGES.VERIZON} alt="verizon" width={147} height={40} />
            <img loading="lazy" src={IMAGES.GOOGLE} alt="google" width={147} height={40} />
          </div>
        </div>
        <div className="col-span-6 relative max-lg:h-[700px]">
          <div className="border-2 border-white max-lg:w-[calc(100%-30px)] max-lg:h-[600px] w-[calc(100%-30px)] h-[calc(100%-30px)] absolute top-[30px] rounded-bl-[300px]" />
          <img loading="lazy" className="absolute max-lg:w-[calc(100%-50px)] max-lg:h-[600px] w-[calc(100%-30px)] h-[calc(100%-30px)] top-0 right-0 z-10 rounded-bl-[300px] object-cover" src={IMAGES.BANNER1} alt="banner" />
          <div className="absolute bg-white rounded-full w-[120px] h-[120px] max-lg:left-0 max-lg:bottom-60 bottom-10 left-9 flex flex-col items-center justify-center gap-[6px] z-10">
            <div className="rounded-full flex items-center justify-center w-[55px] h-[55px] bg-light-green-E9F8EC">
              <img loading="lazy" src={ICONS.LOCK} alt="lock" width={24} height={24} />
            </div>
            <p className="text-blue-171D2C font-medium text-sm">Trusted</p>
          </div>
          <div className="absolute bg-white rounded-[40px] w-[322px] h-auto max-lg:bottom-0 max-lg:right-10 -bottom-20 right-20 p-6 z-10">
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((val) => <img loading="lazy" src={ICONS.STAR} alt="star" width={28} height={28} key={val} />)}
            </div>
            <p className="text-blue-171D2C text-lg font-normal pt-[20px] pb-[17px]">Startup Law just make all our missions went easier.</p>
            <p className="text-blue-171D2C text-lg font-medium pb-[3px]">Anna Bellani</p>
            <span className="font-normal text-sm text-gray-9095A1">CEO of DoyanMakan</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center pb-[253px]">
        <h1 className="font-bold text-[42px] text-white pb-[50px] max-md:px-5 max-md:text-center">Our Achievements</h1>
        <div className="flex max-md:flex-col items-center gap-[50px]">
          <div className="flex flex-col items-center">
            <h1 className="font-semibold text-[62px] text-white">12M</h1>
            <p className="font-normal text-gray-B1BAD1 text-[22px]">Startup Success</p>
          </div>
          <div className="h-[130px] border-l border-gray-525B74 max-md:hidden" />
          <div className="flex flex-col items-center">
            <h1 className="font-semibold text-[62px] text-white">350%</h1>
            <p className="font-normal text-gray-B1BAD1 text-[22px]">Company Growth</p>
          </div>
          <div className="h-[130px] border-l border-gray-525B74 max-md:hidden" />
          <div className="flex flex-col items-center">
            <h1 className="font-semibold text-[62px] text-white">8M</h1>
            <p className="font-normal text-gray-B1BAD1 text-[22px]">Global Investors</p>
          </div>
        </div>
      </div>
      <div className="max-lg:flex max-lg:flex-col grid grid-cols-12 gap-20 max-lg:pb-5 pb-[216px]">
        <div className="col-span-6 relative max-lg:h-[400px]">
          <div className="border-2 border-white max-lg:w-full w-[619px] max-lg:h-[460px] h-[700px] absolute top-[32px] right-0 rounded-[60px]" />
          <img loading="lazy" className="absolute max-lg:top-0 top-3 right-5 z-10 rounded-[60px] object-cover max-lg:w-full w-[619px] max-lg:h-[460px] h-[700px]" src={IMAGES.BANNER2} alt="banner" />
          <div className="absolute bg-white max-lg:-top-56 -top-20 max-lg:left-2 left-20 rounded-[40px] w-[322px] min-h-14 p-6 z-10">
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((val) => <img loading="lazy" src={ICONS.STAR} alt="star" width={28} height={28} key={val} />)}
            </div>
            <p className="text-blue-171D2C text-lg font-normal pt-[20px] pb-[17px]">We are able to catching up the Q1 and Q2 report. Amazing.</p>
            <p className="text-blue-171D2C text-lg font-medium pb-[3px]">Saiya Naha</p>
            <span className="font-normal text-sm text-gray-9095A1">PM of Barrakuda Axel</span>
          </div>
        </div>
        <div className="col-span-6 pt-16 max-lg:px-5 flex flex-col justify-center items-center">
          <h1 className="font-bold text-white text-[42px]">Your Startup Would Grow Faster</h1>
          <div className="mt-[50px]">
            <div className="flex flex-wrap items-center gap-[30px] mb-10">
              <div className="rounded-full w-[80px] h-[80px] bg-blue-1E78FF flex items-center justify-center">
                <img loading="lazy" src={ICONS.GLOBE} alt="globe" width={38} height={38} />
              </div>
              <div className="flex flex-col flex-wrap">
                <p className="font-semibold text-2xl text-white">Act Global</p>
                <span className="font-normal text-[22px] text-gray-B1BAD1">We lorem ipsum doc printed namun tak jauh beda kok</span>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-[30px] mb-10">
              <div className="rounded-full w-[80px] h-[80px] bg-pink-FF1EC0 flex items-center justify-center">
                <img loading="lazy" src={ICONS.FEATHER} alt="feather" width={38} height={38} />
              </div>
              <div className="flex flex-col flex-wrap">
                <p className="font-semibold text-2xl text-white">Legal</p>
                <span className="font-normal text-[22px] text-gray-B1BAD1">Everything is being tracked and secured with bitte</span>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-[30px] mb-10">
              <div className="rounded-full w-[80px] h-[80px] bg-purple-731EFF flex items-center justify-center">
                <img loading="lazy" src={ICONS.AWARD} alt="award" width={38} height={38} />
              </div>
              <div className="flex flex-col flex-wrap">
                <p className="font-semibold text-2xl text-white">Rewards</p>
                <span className="font-normal text-[22px] text-gray-B1BAD1">Providing best funding of growing capital here</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-md:flex max-md:flex-col grid grid-cols-12 max-md:py-5 py-[150px]">
        <div className="col-span-6 max-md:pt-5 pt-[133px] max-md:px-5 px-20">
          <h1 className="text-white font-bold text-[42px] mb-5">
            Request Demo
            <br />
            {' '}
            For Your Business
          </h1>
          <p className="text-gray-B1BAD1 font-normal text-lg">Lorem ipsum dolor funding documen investo can be difficult  and frustated but here we are taking care all of dolor si amet money bigger.</p>
          <div className="flex max-md:flex-col flex-wrap items-center gap-[50px] mt-[100px]">
            <img loading="lazy" src={IMAGES.NETFLIX} alt="netflix" width={147} height={40} />
            <img loading="lazy" src={IMAGES.VERIZON} alt="verizon" width={147} height={40} />
            <img loading="lazy" src={IMAGES.GOOGLE} alt="google" width={147} height={40} />
          </div>
        </div>
        <div className="col-span-6 max-md:px-5 px-20 max-md:pt-5">
          <div className="w-full h-auto bg-white rounded-[30px] p-[30px]">
            <div className="mb-[26px]">
              <label htmlFor="name">Name</label>
              <input className="rounded-[50px] w-full h-[50px] border text-blue-171D2C border-white-E7EAEF pl-6 py-3 mt-2" type="text" placeholder="Angga Shayna" name="name" />
            </div>
            <div className="mb-[26px]">
              <label htmlFor="name">Email Address</label>
              <input className="rounded-[50px] w-full h-[50px] border text-blue-171D2C border-white-E7EAEF pl-6 py-3 mt-2" type="text" placeholder="anggaforshayna@kit.com" name="name" />
            </div>
            <div className="mb-[26px]">
              <label htmlFor="name">Phone</label>
              <input className="rounded-[50px] w-full h-[50px] border text-blue-171D2C border-white-E7EAEF pl-6 py-3 mt-2" type="text" placeholder="+1 (290) 800 400" name="name" />
            </div>
            <div className="mb-[26px]">
              <label htmlFor="name">Company</label>
              <input className="rounded-[50px] w-full h-[50px] border text-blue-171D2C border-white-E7EAEF pl-6 py-3 mt-2" type="text" placeholder="Shayna Eourpe" name="name" />
            </div>
            <div className="mb-[26px]">
              <label htmlFor="name">Employees</label>
              <input className="rounded-[50px] w-full h-[50px] border text-blue-171D2C border-white-E7EAEF pl-6 py-3 mt-2" type="text" placeholder="180" name="name" />
            </div>
            <Button className="w-full" title="Request Now" variant="full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
