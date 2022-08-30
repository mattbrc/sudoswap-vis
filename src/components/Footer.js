import "../App.css";
import githubLogo from "../assets/github-logo.png";
import { GITHUB_HANDLE, GITHUB_LINK } from "../constants.js";

function HomeContent() {
  return (
    <div className="footer-container">
      <img alt="Github Logo" className="github-logo" src={githubLogo} />
      <a
        className="footer-text"
        href={GITHUB_LINK}
        target="_blank"
        rel="noreferrer"
      >{`built by @${GITHUB_HANDLE}`}</a>
    </div>
  );
}

export default HomeContent;
