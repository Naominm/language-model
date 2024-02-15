"use client"
import React, { useState } from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import { AiFillThunderbolt, AiOutlineSend  } from 'react-icons/ai';

import { FaPaperPlane } from 'react-icons/fa';

function MainSection() {
  const [inputText, setInputText] = useState('');
  const [translatedText, setTranslatedText] = useState('');

  const handleTranslate = () => {
    console.log("click")
    // Your translation logic here
    let text = `Comrades in arms, through trials we stride,
    Bound by a purpose, with hearts open wide.
    Shoulder to shoulder, we stand side by side,
    In unity and courage, together we ride.
    
    Through the darkest of nights and the fiercest of fights,
    Comrades in arms, we scale towering heights.
    With unwavering loyalty, our spirits take flight,
    In the face of adversity, we shine ever bright.
    
    In the trenches of life, where challenges loom,
    Comrades in arms, we dispel the gloom.
    With laughter and tears, we chase away the gloom,
    In friendship's embrace, there's no fear of doom.
    
    Hand in hand, we face each new day,
    Comrades in arms, come what may.
    In the tapestry of life, we're woven to stay,
    Forever together, in our own special way.
    
    So here's to the comrades, the friendships we've found,
    In the battles we've faced, and on common ground.
    With bonds unbreakable, together we're bound,
    In the love and support that forever surrounds.
    Comrades in arms, through trials we stride,
    Bound by a purpose, with hearts open wide.
    Shoulder to shoulder, we stand side by side,
    In unity and courage, together we ride.
    
    Through the darkest of nights and the fiercest of fights,
    Comrades in arms, we scale towering heights.
    With unwavering loyalty, our spirits take flight,
    In the face of adversity, we shine ever bright.
    
    In the trenches of life, where challenges loom,
    Comrades in arms, we dispel the gloom.
    With laughter and tears, we chase away the gloom,
    In friendship's embrace, there's no fear of doom.
    
    Hand in hand, we face each new day,
    Comrades in arms, come what may.
    In the tapestry of life, we're woven to stay,
    Forever together, in our own special way.
    
    So here's to the comrades, the friendships we've found,
    In the battles we've faced, and on common ground.
    With bonds unbreakable, together we're bound,
    In the love and support that forever surrounds.`
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= text.length) {
        setTranslatedText(text.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 20); 

  };


  return (
    <div className="rigth-0 p-0 text-[#767878] mainSection">
      {/* <p className='relative font-bold text-4xl py-3 pt-5 pl-20'>The Future is AI</p> */}
      <div className="relative mt-5 rounded-lg mainSectionContent">
        <div className=" font-bold text-3xl text-customGrayText">Translated Result</div>
        {/* <div className='textReponseHider'>

        </div>   */}
        <div className='relative mt-5 h-[30vh] bg-[#0000000] overflow-y-scroll textResponse'>
          {translatedText ? translatedText : "Text generated will appear here"}

        </div>

        <div className="flex mt-20 items-center selectOptions">
          <div className="flex items-center mr-2">
            Translate From:
          </div>
          <div className="flex space-x-10 items-center  ">
          <select name="from" className='text-xs py-2 px-6 '>
            <option value="volvo" defaultChecked>English</option>
          </select>
            {/* <p className='bg-[#d8ecec] px-4 py-1 rounded'>English</p> */}
            <p >to</p>
            {/* <p  className='bg-[#1389A3] text-white px-4 py-1 rounded' >Kikuyu</p> */}
            <select name="from" className='text-xs py-2 px-6 '>
              <option value="volvo" defaultChecked>Kikuyu</option>
            </select>
           
          </div>
        </div>
        <div className="mt-3 relative flex items-start">

    <div className=" relative w-[100%] py-2 mt-4 flex items-center text-neutral-500 text-opacity-75 text-base font-normal font-['Inter']">
    <AiFillThunderbolt className=" absolute text-blue-500 text-lg ml-4 mt-1" />
      <input
        type="text"
        className="outline-none w-[100%] bg-white rounded-[8px] shadow-lg inline-flex gap-[18.36px] pr-0 py-[23px]"
        placeholder="Type anything you want"
        value={inputText}
        onKeyDown={(event) =>{
          if(event.key === 'Enter') { 
            handleTranslate()
          }
        }}  
        onChange={(e) => setInputText(e.target.value)}

      />

          <div className="ml-3 w-[40px] h-[40px] bg-blue-500 rounded-[10px] sendButton cursor-pointer shadow-lg inline-flex gap-[18.36px] pl-[10px] pr-0 py-[10px] items-center">
            <AiOutlineSend className="text-white text-xl" onClick={handleTranslate}/>
          </div>
            </div>

        </div>
        <div className="footerText w-[100%] flex items-center justify-center">
          <div className=" text-center">
            <span className="font-inter text-xs font-normal">
              Powered by <span className="text-blue-500">code challenge</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainSection;
