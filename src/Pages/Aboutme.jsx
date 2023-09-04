import React from 'react';

const Aboutme = () => {
  return (
    <div className=''>
      <div className=" text-white w-28 h-12 mx-auto">
        <h1 className="text-2xl">AboutMe</h1>
      </div>
      <div className="flex text-zinc-400 h-max md:justify-between grid grid-cols-1 md:grid-cols-2">
        <div className="Image md:w-auto  md:h-[calc(100vh-6rem)]">
          <img className="md:w-[30rem] w-[90%] md:rounded-3xl rounded-3xl mx-auto" src="./img/about.jpg" alt="" />
        </div>
        <div className="Content md:w-[95%] w-[90%] md:h-max mx-auto md:mb-12 ">
            <div className=" mx-auto text-center text-lg mt:8 pt-8  md:pt-0 pb-8  ">
            <p>
            As a Performance Marketing Manager, I have extensive experience in
            developing and executing effective digital marketing campaigns that
            drive conversions and increase ROI. I possess a strong understanding
            of various online marketing channels, such as PPC, SMO, Social
            Media, and Display advertising. I am highly analytical and use
            data-driven insights to optimize campaigns, identify new
            opportunities, and achieve maximum ROI. I am a strong communicator
            and collaborator, able to work cross-functionally with internal
            teams and external vendors to deliver successful campaigns that meet
            business objectives.</p>
            <br/>
            <p>I have also worked as a Social Media Manager
            by building brand awareness and engaging with audiences through
            various social media platforms. I possess a deep understanding of
            social media algorithms and trends, and use this knowledge to create
            effective social media strategies that meet business objectives. I
            am skilled in crafting engaging content, managing social media
            communities, and leveraging social media advertising to drive
            conversions.</p>
            <br/>
            <p> I have created few designs in Canva too for my
            clients. As a creative designer with expertise in Canva, I have a
            passion for creating visually stunning and effective graphics for
            various digital and print media. I am proficient in using Canva's
            design tools and features to create engaging social media posts,
            banners, flyers, and other marketing collaterals that align with the
            brand's identity and message.</p>
            <br/>
            <p> Currently I'm working as a Web
            Developer, I have a passion for creating beautiful and functional
            websites that deliver exceptional user experiences. I have expertise
            in designing websites on Shopify and WordPress!
          </p>
            </div>

        </div>
      </div>
    </div>
  );
};

export default Aboutme;
