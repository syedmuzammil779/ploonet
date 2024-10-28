"use client"
import Image from 'next/image';
import React, { useState } from 'react'
import Navbar from './components/Navbar'
import imgsection2 from "../app/images/imgsection2.png";
import lineSeparator from "../app/images/lineSeparator.png";
import prevWork1 from "../app/images/prevWork1.png"
import prevWork2 from "../app/images/prevWork2.png"
import prevWork3 from "../app/images/prevWork3.png"
import prevWork4 from "../app/images/prevWork4.png"
import prevWork5 from "../app/images/prevWork5.png"
import prevWork6 from "../app/images/prevWork6.png"
import prevWork7 from "../app/images/prevWork7.png"
import prevWork8 from "../app/images/prevWork8.png"
import prevWork9 from "../app/images/prevWork9.png"
import prevWork10 from "../app/images/prevWork10.png"
import prevWork11 from "../app/images/prevWork11.png"
import prevWork12 from "../app/images/prevWork12.png"
import Vector from "../app/images/Vector.png"
import ploonetBg from "../app/images/ploonetBg.png"

import { ploonetSteps, steps } from './constants/data';

const page = () => {
  const [language, setLanguage] = useState('ko');
  const images = [
    prevWork1, prevWork2, prevWork3, prevWork4,
    prevWork5, prevWork6, prevWork7, prevWork8,
    prevWork9, prevWork10, prevWork11, prevWork12,
  ];
  const content = {
    en: {
      headingSection2: 'Video Production Studio',
      SubHeadingSection2: 'Receive ‘high-quality customized video’ right away tomorrow.',
      ContentHeadingSection2: 'AI VIDEO ON YOUR DEMAND',
      Content1Section2: "Half the price, double the speed, and A++ quality!",
      Content2Section2: "Corporate promotion, product introduction, training and events, information and guidance videos, etc.",
      Content2Section3: "Please entrust the ‘video’ you need to Plunit Video Production Center.",
    },
    ko: {
      headingSection2: '영상 제작소',
      SubHeadingSection2: '당장 내일  ‘고품질 맞춤 영상’을 받아보세요',
      ContentHeadingSection2: '귀하의 요구에 따른 AI 비디오',
      Content1Section2: "가격은 절반으로, 속도는 두배로, 품질은 A++!",
      Content2Section2: "기업 홍보, 제품 소개, 교육 및 행사, 정보 및 안내 영상 등",
      Content2Section3: "당신이 필요한 '그 영상'을 플루닛 영상제작소에 맡겨주세요.",
    },
  };
  return (
    <div className='flex flex-col justify-center bg-black'>
      <Navbar setLanguage={setLanguage} language={language} />
      <div className={`lg:h-[85vh] h-[70vh] flex justify-center items-center bg-cover text-center bg-center bg-[url('../app/images/home1.jpg')]`}>
        <p className='lg:text-7xl text-3xl text-center items-center '>{language === 'ko' ? (
          <>
            <span className="text-[#E96C4F]">저희</span>에게 맡기세<span className="text-[#E96C4F]">요</span>
          </>
        ) : (
          <>
            <span className="text-[#E96C4F]">Leave</span> it to us
          </>
        )}</p>
      </div>
      <div className="lg:p-16 px-16 pt-16 pb-9 flex-col justify-center items-center text-center bg-black">
        <p className='text-xl text-white lg:bg-[linear-gradient(96.34deg,#FF4E83_0.62%,#FFBB54_97.92%)] capitalize lg:text-transparent bg-clip-text'>
          {content[language].headingSection2}
        </p>
        <p className='lg:text-xl text-sm font-thin mt-3 text-[#ffffff] text-center items-center '>{language === 'ko' ? (
          <>
            당장 내일  <span className="font-semibold">‘고품질 맞춤 영상’</span> 을 받아보세요.
          </>
        ) : (
          <>
            Receive  <span className="font-semibold">‘high-quality customized video’ </span> right away tomorrow.
          </>
        )}</p>
        <div className='flex items-center justify-center lg:my-16 my-8'>
          <Image className='mx-auto my-auto' src={imgsection2} alt="logo" />
        </div>
        <div className=' items-center text-white justify-center'>
          {/* <p className='text-[32px] font-semibold'>{content[language].ContentHeadingSection2}</p> */}
          <p className='lg:text-[32px] text-[16px] font-semibold'>AI VIDEO ON YOUR DEMAND</p>
          <p className='lg:text-xl text-sm font-thin my-3 text-[#ffffff] text-center items-center '>{language === 'ko' ? (
            <>
              가상인간 뿐 아니라 배경 이미지와 음악 생성 등 국내 최고의 생성 AI 기술에<br className='xl:block hidden' />
              영상 전문가의 터치를 더해 비용 및 시간은 절감하고 퀄리티는 보장된 영상을 만듭니다
            </>
          ) : (
            <>
              Korea’s best generative AI technology, including creating not only virtual humans but also background images and music.<br className='xl:block hidden' />
              By adding the touch of a video expert, we save money and time and create videos with guaranteed quality.

            </>
          )}</p>
          <span className='lg:text-xl text-sm font-thin mt-12'>{content[language].Content1Section2}</span><br className='lg:block hidden' />
          <span className='lg:text-xl text-sm font-thin'>{content[language].Content2Section2}</span><br className='lg:block hidden' />
          <span className='lg:text-xl text-sm font-thin'>{content[language].Content2Section3}</span>
          <Image className='mx-auto lg:mt-16 mt-[38px]' src={lineSeparator} alt="logo" />
        </div>
      </div>
      <div className=" flex-col justify-center items-center text-center bg-black">
        <div className=' flex items-center justify-center'>
          <sup className='w-2'> <span className="absolute left-[50%] transform -translate-x-1/2 top-[-10px] h-2 w-2 rounded-full bg-gradient-to-r from-[#FF4E83] to-[#FFBB54]"></span></sup>
          <p className='lg:text-[32px] relative text-[16px] text-white font-semibold'>PREVIOUS WORKS</p>
        </div>
        <div className="grid lg:grid-cols-4 grid-cols-2 mt-8 text-white text-center bg-black">
          {images.map((image, index) => (
            <Image key={index} className="mx-auto" src={image} alt={`Previous Work ${index + 1}`} />
          ))}
        </div>
      </div>
      <div className=" flex-col justify-center items-center py-12  text-center bg-black">
        <div className=' flex items-center justify-center lg:mb-4 mt-16'>
          <sup className='w-2'> <span className="absolute left-[50%] transform -translate-x-1/2 top-[-10px] h-2 w-2 rounded-full bg-gradient-to-r from-[#FF4E83] to-[#FFBB54]"></span></sup>
          <p className='lg:text-[32px] relative text-[16px] text-white font-semibold'>MAKING PROCESS</p>
        </div>
        <div className=" grid lg:grid-cols-2 gap-12 lg:m-12 grid-cols-1">
          <div className=" flex rounded-lg w-full text-white flex-col justify-center ">
            <div className="lg:bg-[#141414] rounded-lg w-full lg:py-11 py-2 text-white">
              <h3 className="lg:text-2xl text-[22px] font-bold lg:mb-4 mb-1.5">일반 제작</h3>
              <p className="text-gray-500 mb-8">제작 시작 후 5영업일 이내</p>

              <div className="space-y-4 lg:mx-7 mx-5">
                {steps.map((stepData, index) => (
                  <div
                    key={index}
                    className="relative flex lg:flex-row gap-4 items-start py-3 lg:px-12 px-4 mx border border-[#353535] lg:rounded-full rounded-[15px] bg-[#101010]"
                  >
                    <div className="absolute inset-x-0 bottom-[-9px] h-full bg-[url('../app/images/polygon.png')] bg-no-repeat bg-bottom opacity-60 lg:opacity-100 lg:bg-none"></div>

                    <div className="relative z-10">
                      <span className="text-pink-500 text-nowrap text-[16px] font-semibold">
                        {stepData.step}
                      </span>
                      <p className="text-white text-nowrap lg:text-xl text-lg font-bold">{stepData.title}</p>
                    </div>

                    <div className="relative z-10 lg:ml-4">
                      <p className="text-gray-400 lg:text-[16px] text-sm text-wrap">{stepData.description}</p>
                    </div>
                  </div>

                ))}
              </div>
            </div>
          </div>
          <div className="lg:mx-auto mx-5 lg:w-full w-auto p-[2px] bg-gradient-to-br from-[#FF4E83] to-[#FFBB54] lg:rounded-lg rounded-xl shadow-lg">
            <div className="m-[0.3px] h-full rounded-lg lg:p-8 p-4 bg-[#141414]">
              <h3 className="text-2xl font-bold text-transparent bg-gradient-to-br from-[#FF4E83] to-[#FFBB54] bg-clip-text my-3 mb-4">Ploonet Quickserve™</h3>
              <p className="text-white mb-8">제작 시작 후 12~48시간 이내</p>
              <div className="lg:space-y-16 space-y-7">
                {ploonetSteps.map((step, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-5 rounded-lg"
                  >
                    <div className="flex flex-col !w-28 !h-28 bg-[url('../app/images/ploonetBg.png')] rounded-lg bg-no-repeat bg-center bg-cover justify-center items-center">
                      <p className="!text-white font-semibold">{step.step}</p>
                      <Image key={index} className="w-10 h-10" src={step.icon} alt="Step Icon" />
                    </div>

                    <div className="flex-1">
                      <p className="text-white text-left font-bold text-xl mt-1">{step.title}</p>
                      <p className="text-gray-300 text-left mt-1">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <p className='text-[#666666] mx-4 mt-3 lg:mt-0 text-sm text-center'>  * 2~3분, 표준 견적에 따르는 일반 영상편집에 한정되며,  모션그래픽 등 전문 작업이 필요할 경우 작업 기간은 조정될 수 있습니다.<br className='lg:block hidden' />
        <br className='block lg:hidden' /> <br className='block lg:hidden' />
          ** 영상의 길이, 영상 제작에 필요한 수준에 따라 빠른 작업이 불가할 수 있으며, 클라이언트와의 협의를 통해 작업 기간을 조정할 수 있습니다.</p>
      </div>
      <div className=" flex-col justify-center items-center py-12 text-center bg-black">
        <p className='text-2xl text-[22px] text-transparent my-3 bg-clip-text bg-gradient-to-r from-[#FF4E83] to-[#FFBB54]'>
          영상 제작 문의
        </p>
        <p className='text-2xl text-[22px] text-white font-thin mb-7'><span className='font-semibold'>영상 제작이 필요하다면,<br className='block lg:hidden' /></span> 지금 문의 주세요.</p>
        <p className='text-[#999999] text-[16px]'>
          여러분이 필요한 영상을 빠르게 제작하기 위해<br className='block lg:hidden' /> 플루닛 영상제작소가<br className='lg:block hidden' />
          즉시 연락 드리겠습니다.
        </p>
        <span className='lg:hidden block text-[#999999] mt-3'>E-MAIL</span>
        <p className='text-xs text-[#666666] lg:my-3 mb-4'>henry.lim@saltlux.com</p>
        <div className='w-full flex flex-col justify-center items-center space-y-4'>
          <div className='lg:w-1/2 w-[90%] flex bg-[#141414] border border-[#353535] justify-between items-center px-4 !h-[66px] rounded-[10px]'>
            <p className='text-[#666666]'>영상 유형 선택</p>
            <Image className="w-6 h-4" src={Vector} />
          </div>
          <div className='lg:w-1/2 w-[90%] flex bg-[#141414] border border-[#353535] justify-between items-center px-4 !h-[66px] rounded-[10px]'>
            <p className='text-[#666666]'>연락 받으실 담당자 성함</p>
          </div>
          <div className='lg:w-1/2 w-[90%] flex bg-[#141414] border border-[#353535] justify-between items-center px-4 !h-[66px] rounded-[10px]'>
            <p className='text-[#666666]'>이메일</p>
          </div>
          <div className='lg:w-1/2 w-[90%] flex bg-[#141414] border border-[#353535] justify-between items-center px-4 !h-[66px] rounded-[10px]'>
            <p className='text-[#666666]'>휴대폰 번호</p>
          </div>
          <div className='lg:w-1/2 w-[90%] flex bg-[#141414] border border-[#353535] items-left px-4 py-10 rounded-[10px]'>
            <p className='text-[#666666] text-left'>의뢰하실 영상내용<br className='lg:block hidden' /><br className='block lg:hidden' /><br className='block lg:hidden' />
              아래 예시를 참고하셔서 이 중 편하신 내용을 기재해주세요.<br className='block lg:hidden' /><br className='block lg:hidden' /><br className='lg:block hidden' /><br className='lg:block hidden' />

              고객님의 비즈니스 유형 : 관공서/일반기업/소상공인 등<br className='lg:block hidden' /><br className='block lg:hidden' /><br className='block lg:hidden' />
              영상 장르 : 홍보,프로모션/IR/프레젠테이션 등<br className='lg:block hidden' /><br className='block lg:hidden' /><br className='block lg:hidden' />
              내용 : 제작하시고자 하는 영상의 내용을 간단히 기재해주세요.</p>
          </div>
          <div className='lg:w-1/2 w-[90%] flex bg-[#141414] border border-[#353535] justify-between items-center px-4 !h-[66px] rounded-[10px]'>
            <p className='text-[#666666]'>참고 영상</p>
          </div>
          <p className='text-[#FF6D51]  lg:mx-0 mx-7 flex lg:text-[16px] text-[12px] lg:ml-[7.5rem] border-[#353535] lg:!mb-20 mb-12 items-center justify-center gap-2'><span className='text-4xl flex items-center '>&#x2a;</span> 참고할만한 영상이나 원하시는 영상과 유사한 영상의 링크 주소를 적어주시면 더 정확히 안내해드리겠습니다.</p>
          <div className='lg:w-1/2 w-[90%] flex flex-col lg:flex-row gap-3 justify-between mt-20 lg:items-center'>
            <label class="flex items-start lg:items-center space-x-3">
              <input type="checkbox" class="w-6 h-6 rounded-full bg-gray-200 checked:bg-blue-500 checked:border-transparent cursor-pointer" />
              <span class="text-[#666666]"><span className='underline'>개인정보처리방침에</span> 동의합니다.</span>
            </label>
            <button className='bg-[#FF6D51] text-white lg:w-auto my-8 lg:my-0 w-full p-2.5 rounded'>문의 보내기</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page