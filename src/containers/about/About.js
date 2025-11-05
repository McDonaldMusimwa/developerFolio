import React, { useContext, useState } from "react";
import "./About.scss";
//import TalkCard from "../../components/talkCard/TalkCard";
import { talkSection } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import awscommunity from "../../assets/images/awscommunity.jpeg"
import profilePic from "../../assets/images/profilepicture.jpeg"
export default function About() {
  const [isProfileVisible, setProfileVisibility] = useState(false)
  const { isDark } = useContext(StyleContext);
  if (!talkSection.display) {
    return null;
  }
  function profilePicVisibilityHandler() {
    setProfileVisibility(!isProfileVisible)
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="about">
        <div className="talk-header">
          <h3><strong>About Me</strong></h3>
          <p
            className={
              isDark
                ? "dark-mode talk-header-subtitle"
                : "subTitle talk-header-subtitle"
            }
          >
            Get to know me deeper
          </p>
          <div className="">

            <hr />
            <p className="p-1 text-left p-4 text-black">
              Hi there, <strong>McDonald</strong> here. My journey into software
              programming has been both interesting and untraditional. If
              someone had told me four years ago that I’d be tinkering with
              computers, I would have laughed it off. My interest in computer
              programming was sparked by boredom with routine. I was saving up
              funds to take accounting exams, but after three years of
              struggling to save enough and spending my evenings watching TV, I
              needed a change.As the world started the lock down the bitcoin
              frenzy was at its pick,just like everybofy i was looking for ways
              to capitalise on this new gold rush.
              <br></br>I have always been a curious cat,this trait got me
              reading about bitcoins, and although I didn't dive into Bitcoin
              itself, learning about blockchain technology ignited my curiosity
              and led me to web development. Finding out about the low to no
              cost of studying tech was my “aha” moment,later on a friend
              introduced me to freeCodeCamp which was a game changer. Fate
              stepped in when I enrolled in a full-time Bachelor’s degree in
              Software Development at Brigham Young University, all while
              maintaining my job as a financial accountant. Through teamwork and
              collaboration with other students from different parts of the
              world, I’m proud to say that I’m graduating in December 2024. I'm
              excited to see where my curiosity takes me next. I have immense
              respect for the friends and colleagues who have shaped me into the
              diverse programmer I am today.
            </p>
          </div>

          <div className="md:w-full p-4  bg-white rounded-lg w-1/2">
            <h3 className="text-center">
              <strong>Community</strong>
              <hr />
            </h3>
            <p className="p-1 text-black">
              Since beginning my journey in software development, I have spent a lot of time learning solo and collaborating with other students in the USA. After the lockdown, I discovered developer meetups around Cape Town. I've taken an interest in different communities and building social coding networks. For example, during my learning of <strong>AWS </strong>, I joined the <strong>AWS Capetown Community </strong>group, where we share new features and advancements in AWS and other AWS products. I am also a big fan of <strong>React </strong>and i foresee a time where I contribute to the local React group.

            </p>
            <div className="aboutme-img-area">

              <div className="profile-img-container"> <img
                src={isProfileVisible ? profilePic : awscommunity}
                alt="AWS community center"

                className="awscommunityimg" /></div>




              <div className="flex flex-col gap-4 p-4 rounded-2xl border border-gray-200 shadow-sm bg-white max-w-sm m-2">
                <h2>{isProfileVisible ? "Hide face" : "Show face"}</h2>
<div className="toggle-container">
                <label className="switch">
                  <input onClick={profilePicVisibilityHandler} type="checkbox" />
                  <span className="slider round"></span>
                </label>
                </div>
              </div>


            </div>
          </div>



        </div>





      </div>

    </Fade>
  );
}
