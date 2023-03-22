import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-gray-900">
      <div className="container mx-auto py-6 px-4">
        <div className="flex justify-center">
          <div className="flex items-center">
            <a
              href="https://twitter.com/shatfield_dev"
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white mx-3"
            >
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a
              href="https://github.com/shatfield4"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white mx-3"
            >
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a
              href="https://www.linkedin.com/in/sean-hatfield/"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white mx-3"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
