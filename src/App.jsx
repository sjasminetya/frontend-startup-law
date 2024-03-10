/* eslint-disable jsx-a11y/label-has-associated-control */
import Button from './components/elements/Button/Button';
import Header from './components/elements/Header/Header';
import { ICONS, IMAGES } from './config';

const App = () => {
  return (
    <div className="bg-primary-blue w-full min-h-screen">
      <Header />
      <div className="grid grid-cols-12 gap-[77px] pb-[216px]">
        <div className="col-span-6 pt-[130px] pl-[100px]">
          <h1 className="text-white text-[55px] font-bold">Focus On Your Startup, We Take Care Of All Your Legal</h1>
          <p className="pt-5 pb-10 text-white font-normal text-lg">Lorem ipsum dolor funding documen investo can be difficult  and frustated but here we are taking care all of dolor si amet money bigger.</p>
          <Button className="!bg-yellow-FABE2F !text-brown-42330E mb-[70px]" title="Get Started" variant="full" />
          <hr />
          <div className="flex items-center gap-[50px] mt-16">
            <img src={IMAGES.NETFLIX} alt="netflix" width={147} height={40} />
            <img src={IMAGES.VERIZON} alt="verizon" width={147} height={40} />
            <img src={IMAGES.GOOGLE} alt="google" width={147} height={40} />
          </div>
        </div>
        <div className="col-span-6 relative">
          <div className="border-2 border-white w-[calc(100%-30px)] h-[calc(100%-30px)] absolute top-[30px] rounded-bl-[300px]" />
          <img className="absolute w-[calc(100%-30px)] h-[calc(100%-30px)] top-0 right-0 z-10 rounded-bl-[300px] object-cover" src={IMAGES.BANNER1} alt="banner" />
          <div className="absolute bg-white rounded-full w-[120px] h-[120px] bottom-10 left-9 flex flex-col items-center justify-center gap-[6px] z-10">
            <div className="rounded-full flex items-center justify-center w-[55px] h-[55px] bg-light-green-E9F8EC">
              <img src={ICONS.LOCK} alt="lock" width={24} height={24} />
            </div>
            <p className="text-blue-171D2C font-medium text-sm">Trusted</p>
          </div>
          <div className="absolute bg-white rounded-[40px] w-[322px] h-auto -bottom-20 right-20 p-6 z-10">
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((val) => <img src={ICONS.STAR} alt="star" width={28} height={28} key={val} />)}
            </div>
            <p className="text-blue-171D2C text-lg font-normal pt-[20px] pb-[17px]">Startup Law just make all our missions went easier.</p>
            <p className="text-blue-171D2C text-lg font-medium pb-[3px]">Anna Bellani</p>
            <span className="font-normal text-sm text-gray-9095A1">CEO of DoyanMakan</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center pb-[253px]">
        <h1 className="font-bold text-[42px] text-white pb-[50px]">Our Achievements</h1>
        <div className="flex items-center gap-[50px]">
          <div className="flex flex-col items-center">
            <h1 className="font-semibold text-[62px] text-white">12M</h1>
            <p className="font-normal text-gray-B1BAD1 text-[22px]">Startup Success</p>
          </div>
          <div className="h-[130px] border-l border-gray-525B74" />
          <div className="flex flex-col items-center">
            <h1 className="font-semibold text-[62px] text-white">350%</h1>
            <p className="font-normal text-gray-B1BAD1 text-[22px]">Company Growth</p>
          </div>
          <div className="h-[130px] border-l border-gray-525B74" />
          <div className="flex flex-col items-center">
            <h1 className="font-semibold text-[62px] text-white">8M</h1>
            <p className="font-normal text-gray-B1BAD1 text-[22px]">Global Investors</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-[100px] pb-[216px]">
        <div className="col-span-6 relative">
          <div className="border-2 border-white w-[619px] h-[700px] absolute top-[32px] right-0 rounded-[60px]" />
          <img className="absolute top-3 right-5 z-10 rounded-[60px] object-cover" src={IMAGES.BANNER2} alt="banner" width={619} height={700} />
          <div className="absolute bg-white -top-20 left-20 rounded-[40px] w-[322px] h-auto p-6 z-10">
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((val) => <img src={ICONS.STAR} alt="star" width={28} height={28} key={val} />)}
            </div>
            <p className="text-blue-171D2C text-lg font-normal pt-[20px] pb-[17px]">We are able to catching up the Q1 and Q2 report. Amazing.</p>
            <p className="text-blue-171D2C text-lg font-medium pb-[3px]">Saiya Naha</p>
            <span className="font-normal text-sm text-gray-9095A1">PM of Barrakuda Axel</span>
          </div>
        </div>
        <div className="col-span-6 pt-16 pr-28 flex flex-col justify-center items-center">
          <h1 className="font-bold text-white text-[42px]">Your Startup Would Grow Faster</h1>
          <div className="mt-[50px]">
            <div className="flex gap-[30px] mb-10">
              <div className="rounded-full w-[80px] h-[80px] bg-blue-1E78FF flex items-center justify-center">
                <img src={ICONS.GLOBE} alt="globe" width={38} height={38} />
              </div>
              <div>
                <p className="font-semibold text-2xl text-white">Act Global</p>
                <span className="font-normal text-[22px] text-gray-B1BAD1">We lorem ipsum doc printed namun tak jauh beda kok</span>
              </div>
            </div>
            <div className="flex gap-[30px] mb-10">
              <div className="rounded-full w-[80px] h-[80px] bg-pink-FF1EC0 flex items-center justify-center">
                <img src={ICONS.FEATHER} alt="feather" width={38} height={38} />
              </div>
              <div>
                <p className="font-semibold text-2xl text-white">Legal</p>
                <span className="font-normal text-[22px] text-gray-B1BAD1">Everything is being tracked and secured with bitte</span>
              </div>
            </div>
            <div className="flex gap-[30px] mb-10">
              <div className="rounded-full w-[80px] h-[80px] bg-purple-731EFF flex items-center justify-center">
                <img src={ICONS.AWARD} alt="award" width={38} height={38} />
              </div>
              <div>
                <p className="font-semibold text-2xl text-white">Rewards</p>
                <span className="font-normal text-[22px] text-gray-B1BAD1">Providing best funding of growing capital here</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-[150px] py-[150px]">
        <div className="col-span-6 pt-[133px] pl-48 pr-32">
          <h1 className="text-white font-bold text-[42px] mb-5">
            Request Demo
            <br />
            {' '}
            For Your Business
          </h1>
          <p className="text-gray-B1BAD1 font-normal text-lg">Lorem ipsum dolor funding documen investo can be difficult  and frustated but here we are taking care all of dolor si amet money bigger.</p>
          <div className="flex items-center gap-[50px] mt-[100px]">
            <img src={IMAGES.NETFLIX} alt="netflix" width={147} height={40} />
            <img src={IMAGES.VERIZON} alt="verizon" width={147} height={40} />
            <img src={IMAGES.GOOGLE} alt="google" width={147} height={40} />
          </div>
        </div>
        <div className="col-span-6 pr-60">
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
