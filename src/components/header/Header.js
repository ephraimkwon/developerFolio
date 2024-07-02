import React, {useEffect, useState, useContext} from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import emoji from "react-easy-emoji";
import {
  greeting,
  workExperiences,
  skillsSection,
  openSource,
  achievementSection,
  resumeSection
} from "../../portfolio";

function Header() {
  const {isDark} = useContext(StyleContext);
  const [loading, setLoading] = useState(false);
  const [views, setViews] = useState([]);
  const viewExperience = workExperiences.display;
  const viewOpenSource = openSource.display;
  const viewSkills = skillsSection.display;
  const viewAchievement = achievementSection.display;
  const viewResume = resumeSection.display;
  useEffect(() => {
    const loadViewCount = async () => {
      // Show a loading icon until fetch completes
      setLoading(true);
      // Fetch response from Lambda
      const response = await fetch("https://p3qm5i7wqxn2cc3dffe7oi5vwu0ckili.lambda-url.us-east-2.on.aws/");
      // Store data form response into views
      const views = await response.json()
      setViews(views);
      setLoading(false);
    }
    loadViewCount();
  }, [])
  // TODO: Add spinner animation for when page is fetching view count
  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"}>
        <a href="/" className="logo">
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">{greeting.username}</span>
          <span className="grey-color">/&gt;</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{color: "white"}}
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>
        <ul className={isDark ? "dark-menu menu" : "menu"}>
          {viewSkills && (
            <li>
              <a href="#skills">Skills</a>
            </li>
          )}
          {viewExperience && (
            <li>
              <a href="#experience">Work Experiences</a>
            </li>
          )}
          {viewOpenSource && (
            <li>
              <a href="#opensource">Open Source</a>
            </li>
          )}
          {viewAchievement && (
            <li>
              <a href="#achievements">Achievements</a>
            </li>
          )}
          {viewResume && (
            <li>
              <a href="#resume">Resume</a>
            </li>
          )}
          <li>
            <a href="#contact">Contact Me</a>
          </li>
          <li>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a>
              <ToggleSwitch />
            </a>
          </li>
          <li>
              <a>
                View Count: 
                {
                  loading ? ("...") : (" " + views)
                }
                {emoji("👀")}
              </a>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;
