import Footer from '../components/Footer';
import logo from '../assets/image/logo.png';
import headerPhoto from '../assets/image/headerLanding.png';
import section1 from '../assets/image/sectionLanding2.png';
import { ButtonPurple, ButtonWhite } from '../components/Button';
import tick from '../assets/image/tickLogo.png';
import tick2 from '../assets/image/tickYellow.png';
import section2 from '../assets/image/sectionLanding.png';
import cardPhoto1 from '../assets/image/card1.png';
import cardPhoto2 from '../assets/image/card2.png';
import cardPhoto3 from '../assets/image/card3.png';
import { Link } from 'react-router-dom';

const SLIDES = [
  {
    imgSrc: `${cardPhoto1}`,
    title: 'Harry Styles',
    label: 'CEO',
    text: 'Peworld telah membantu kami menemukan talenta terbaik dengan cepat dan efisien.'
  },
  {
    imgSrc: `${cardPhoto2}`,
    title: 'Niall Horan',
    label: 'Manajer HR',
    text: 'Sangat terbantu dengan jaringan profesional luas dan pendekatan personalisasi peworld.'
  },
  {
    imgSrc: `${cardPhoto3}`,
    title: 'Louis Tomlinson',
    label: 'CTO',
    text: 'Dukungan berkelanjutan dari peworld benar-benar luar biasa.'
  }
];

const LandingPage = () => {
  return (
    <main>
      {/* Media Screen LG - 2xl */}
      <div className="hidden lg:block lg:mx-5 2xl:mx-20 ">
        <nav className="flex items-center justify-between px-5 mt-10 lg:mx-5">
          <img src={logo} alt="" width={150} />
          <div className="flex space-x-10">
            <Link to={'/login/worker'}>
              <ButtonWhite text="Masuk Untuk Pekerja" />
            </Link>
            <Link to={'/login/recruiter'}>
              <ButtonPurple text="Masuk Untuk Perekrut" />
            </Link>
          </div>
        </nav>
        <section className=" my-20 lg:mx-12 2xl:mx-28">
          <header className="flex justify-between items-center w-full">
            <div className="lg:flex flex-col justify-between">
              <h1 className="text-[#1F2A36] lg:text-4xl 2xl:text-6xl 2xl:leading-normal">
                Talenta terbaik negeri <br /> untuk perubahan <br />
                revolusi 4.0
              </h1>
              <h3 className="mt-5 lg:text-xl 2xl:text-lg 2xl:font-normal">
                Bergabunglah dengan kami untuk menciptakan masa depan cerah <br />
                di era teknologi yang berkembang saat ini.
              </h3>
              <button
                type="submit"
                className="mt-12 w-52 h-16 rounded-md bg-[#5E50A1] text-white hover:bg-[#483d7e] transition duration-300 ease-in-out active:scale-75 ">
                Mulai Dari Sekarang
              </button>
            </div>
            <div className="">
              <img src={headerPhoto} alt="" width={700} className="lg:w-[450px] 2xl:w-[700px]" />
            </div>
          </header>
          <section className="mt-24 flex justify-between">
            <div>
              <img src={section1} alt="" className="lg:w-[450px] 2xl:w-[700px]" />
            </div>
            <div className="mt-10 lg:mr-0 lg:flex flex-col justify-start lg:space-y-7 2xl:space-y-14">
              <h1 className="font-semibold lg:text-[3vh] 2xl:text-5xl 2xl:leading-tight">
                Kenapa harus mencari talent <br />
                di Peworld
              </h1>
              <div className="flex space-x-5 items-center">
                <img src={tick} alt="" width={24} />
                <p className="text-base text-[#46505C] font-normal">Kandidat Terbaik</p>
              </div>
              <div className="flex space-x-5 items-center">
                <img src={tick} alt="" width={24} />
                <p className="text-base text-[#46505C] font-normal">Proses Rekrutmen Efisien</p>
              </div>
              <div className="flex space-x-5 items-center">
                <img src={tick} alt="" width={24} />
                <p className="text-base text-[#46505C] font-normal">Pendekatan Personalisasi</p>
              </div>
              <div className="flex space-x-5 items-center">
                <img src={tick} alt="" width={24} />
                <p className="text-base text-[#46505C] font-normal">Jaringan Profesional Luas</p>
              </div>
            </div>
          </section>
          <section className="flex justify-around mt-24">
            <div className="lg:mt-10 2xl:mt-20">
              <h1 className="font-semibold lg:text-4xl 2xl:text-5xl text-[#1F2A36]">
                Skill Talent
              </h1>
              <p className="font-normal pt-3 lg:text-base 2xl:text-lg">
                Menjadi wadah para talenta dengan beragam kompetensi dan pengalaman yang dibutuhkan
                perusahaan.
              </p>
              <div className="flex space-x-20 pt-10">
                <div className="space-y-5">
                  <div className="flex items-center space-x-4">
                    <img src={tick2} alt="" width={24} />
                    <p className="text-base text-[#46505C] font-normal">Java</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <img src={tick2} alt="" width={24} />
                    <p className="text-base text-[#46505C] font-normal">Kotlin</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <img src={tick2} alt="" width={24} />
                    <p className="text-base text-[#46505C] font-normal">PHP</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <img src={tick2} alt="" width={24} />
                    <p className="text-base text-[#46505C] font-normal">JavaScript</p>
                  </div>
                </div>
                <div className="space-y-5">
                  <div className="flex items-center space-x-4">
                    <img src={tick2} alt="" width={24} />
                    <p className="text-base text-[#46505C] font-normal">Golang</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <img src={tick2} alt="" width={24} />
                    <p className="text-base text-[#46505C] font-normal">C++</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <img src={tick2} alt="" width={24} />
                    <p className="text-base text-[#46505C] font-normal">Ruby</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <img src={tick2} alt="" width={24} />
                    <p className="text-base text-[#46505C] font-normal">10+ Bahasa lainnya</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img src={section2} alt="" width={650} />
            </div>
          </section>
          <section className="mt-28 space-y-24">
            <div className="flex justify-center">
              <h1 className="font-semibold text-4xl text-[#1F2A36]">Their opinion about peworld</h1>
            </div>
            <div className="flex justify-center space-x-8 ">
              {SLIDES.map((data, index) => (
                <div
                  key={index}
                  className="w-[339px] h-[437px] flex flex-col items-center shadow-xl">
                  <div className="">
                    <img
                      src={data.imgSrc}
                      alt=""
                      width={120}
                      className="outline outline-offset-1 outline-[#FBB0175E] outline-8 rounded-full"
                    />
                  </div>
                  <div className="flex flex-col items-center text-center pt-5 gap-2">
                    <h1 className="font-semibold text-3xl text-[#1F2A36]">{data.title}</h1>
                    <h2 className="text-lg font-normal text-[#9EA0A5]">{data.label}</h2>
                    <p className="w-[187px] font-normal text-lg text-[#46505C]">{data.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
          <section className="flex items-center justify-between lg:w-full 2xl:w-[1150px] h-[227px] bg-[#5E50A1] mt-60 mb-32 2xl:mx-48 rounded-tl-[40px] rounded-tr-[8px] rounded-bl-[8px] rounded-br-[40px]">
            <div className="ml-20">
              <h1 className="text-4xl font-semibold text-white leading-normal">
                Temukan talenta <br /> terbaikmu di sini
              </h1>
            </div>
            <div className="mr-20 w-[210px] h-[63.11px] shadow-md rounded-md bg-white flex justify-center hover:bg-light-grey">
              <button className="font-bold text-base text-[#796EAF]">Mulai Dari Sekarang</button>
            </div>
          </section>
        </section>
      </div>

      {/* Media Screen SM - MD*/}
      <div className="lg:hidden mx-2 w-full ">
        <nav className="flex items-center justify-between mt-5 px-2 md:px-5 ">
          <img src={logo} alt="" width={150} />
          <div className="flex items-center space-x-2">
            <ButtonWhite
              text="Masuk Untuk Pekerja"
              className={'w-20 text-[8px] h-10 flex items-center md:w-40 md:text-xs'}
            />
            <ButtonPurple
              text="Masuk Untuk Perekrut"
              className={'w-20 text-[8px] h-11 flex items-center md:w-40 md:text-xs'}
            />
          </div>
        </nav>
        <section className=" my-20 mx-5 md:mx-10 ">
          <header className="sm:flex flex-col justify-between w-full">
            <div className="md:flex md:items-center ">
              <h1 className="text-[#1F2A36] text-3xl sm:leading-9 md:text-3xl">
                Talenta terbaik negri <br /> untuk perubahan revolusi 4.0
              </h1>
              <div className="md:flex justify-center">
                <img src={headerPhoto} alt="" width={300} className="md:w-[400px]" />
              </div>
            </div>
            <p className="text-lg font-normal md:mt-10">
              Bergabunglah dengan kami untuk menciptakan masa depan cerah <br />
              di era teknologi yang berkembang saat ini.
            </p>
            <button
              type="submit"
              className="mt-9 md:mt-5 w-52 h-16 rounded-md bg-[#5E50A1] text-white hover:bg-[#483d7e] transition duration-300 ease-in-out active:scale-75 ">
              Mulai Dari Sekarang
            </button>
          </header>
          <section className="mt-24 flex flex-col justify-between ">
            <div className="md:flex md:justify-center">
              <img src={section1} alt="" width={400} className="md:w-[500px]" />
            </div>
            <div className="mt-5 md:mt-10">
              <h1 className="text-3xl font-semibold mb-9 md:text-center">
                Kenapa harus mencari tallent di peworld
              </h1>
              <div className="space-y-5 md:space-y-0 md:flex md:items-center ">
                <div className="flex space-x-5 items-center">
                  <img src={tick} alt="" width={24} />
                  <p className="text-base text-[#46505C] font-normal">Kandidat Terbaik</p>
                </div>
                <div className="flex space-x-5 items-center">
                  <img src={tick} alt="" width={24} />
                  <p className="text-base text-[#46505C] font-normal">Proses Rekrutmen Efisien</p>
                </div>
                <div className="flex space-x-5 items-center">
                  <img src={tick} alt="" width={24} />
                  <p className="text-base text-[#46505C] font-normal">Pendekatan Personalisasi</p>
                </div>
                <div className="flex space-x-5 items-center">
                  <img src={tick} alt="" width={24} />
                  <p className="text-base text-[#46505C] font-normal">
                    Lorem ipsum dolor sit amet.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="flex flex-col justify-around mt-20 md:mt-32">
            <div className="">
              <h1 className="font-semibold text-3xl text-[#1F2A36] md:text-start">Skill Tallent</h1>
              <p className="font-normal text-lg pt-3 md:text-start">
                Menjadi wadah para talenta dengan beragam kompetensi dan pengalaman yang dibutuhkan
                perusahaan.
              </p>
              <div className="flex space-x-20 pt-8 md:justify-start">
                <div className="space-y-5">
                  <div className="flex items-center space-x-4">
                    <img src={tick2} alt="" width={24} />
                    <p className="text-base text-[#46505C] font-normal">Java</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <img src={tick2} alt="" width={24} />
                    <p className="text-base text-[#46505C] font-normal">Kotlin</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <img src={tick2} alt="" width={24} />
                    <p className="text-base text-[#46505C] font-normal">PHP</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <img src={tick2} alt="" width={24} />
                    <p className="text-base text-[#46505C] font-normal">JavaScript</p>
                  </div>
                </div>
                <div className="space-y-5">
                  <div className="flex items-center space-x-4">
                    <img src={tick2} alt="" width={24} />
                    <p className="text-base text-[#46505C] font-normal">Golang</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <img src={tick2} alt="" width={24} />
                    <p className="text-base text-[#46505C] font-normal">C++</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <img src={tick2} alt="" width={24} />
                    <p className="text-base text-[#46505C] font-normal">Ruby</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <img src={tick2} alt="" width={24} />
                    <p className="text-sm text-[#46505C] font-normal">10+ Bahasa lainnya</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-16 flex justify-center md:justify-end md:pt-5">
              <img src={section2} alt="" width={300} className="md:w-[400px] " />
            </div>
          </section>
          <section className="flex flex-col items-center mt-28 space-y-24">
            <div className=" flex justify-center">
              <h1 className="font-semibold text-center text-4xl text-[#1F2A36]">
                Their opinion about peworld
              </h1>
            </div>
            <div className="flex flex-col items-center space-y-5 m-10 ">
              {SLIDES.map((item, index) => (
                <div
                  key={index}
                  className="h-[437px] md:w-11/12 flex flex-col items-center shadow-xl">
                  <div className="">
                    <img
                      src={item.imgSrc}
                      alt=""
                      width={120}
                      className="outline outline-offset-1 outline-[#FBB0175E] outline-8 rounded-full"
                    />
                  </div>
                  <div className="flex flex-col items-center text-center pt-5 gap-2 p-3">
                    <h1 className="font-semibold text-3xl text-[#1F2A36]">{item.title}</h1>
                    <h2 className="text-lg font-normal text-[#9EA0A5]">{item.label}</h2>
                    <p className=" font-normal text-lg text-[#46505C]">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
          <section className="flex flex-col items-center justify-around h-[227px] bg-[#5E50A1] mt-32 mb-32 rounded-tl-[40px] rounded-tr-[8px] rounded-bl-[8px] rounded-br-[40px]">
            <div className="">
              <h1 className="text-3xl font-semibold text-white leading-normal">
                Temukan talenta <br /> terbaikmu di sini
              </h1>
            </div>
            <div className="h-[63.11px] shadow-md rounded-md bg-white flex justify-center hover:bg-light-grey">
              <button className="font-bold text-base text-[#796EAF] m-5">
                Mulai Dari Sekarang
              </button>
            </div>
          </section>
        </section>
      </div>
      <Footer />
    </main>
  );
};

export default LandingPage;
