interface ExperienceItem {
  title: string;
  company: string;
  duration: string;
  description: string[];
  latest?: boolean;
  resumeLink?: string;
}

const experienceData: ExperienceItem[] = [
  {
    title: "Software Engineer",
    company: "Mintplex Labs",
    duration: "July 2023 - Current",
    description: [
      "Actively developed the AnythingLLM open-source project",
      "Worked with customers to deliver features that they requested",
      "Worked on both the front end and back end of the project",
    ],
    latest: true,
    resumeLink: "/SHatfield-Resume.pdf",
  },
  {
    title: "Lead Engineer",
    company: "Kei Concepts",
    duration: "April 2023 - June 2023",
    description: [
      "Worked closely with the CEO to begin development of an AI scheduling system",
      "Worked on building an internal SOP chatbot for the company",
      "Demoed the chatbot to investors and potential investors of the company",
      "IT support for the company and restaurants",
      "Interviewed candidates for the engineering team",
    ],
    latest: false,
    resumeLink: "/SHatfield-Resume.pdf",
  },
  {
    title: "Full Stack Software Engineer",
    company: "Self Employed",
    duration: "September 2021 - April 2023",
    description: [
      "Actively worked as a full stack software engineer on various NFT and Cryptocurrency projects during the 2021 NFT/Crypto boom",
      "Built scalable infrastructure using Digital Ocean Droplets and AWS",
      "Experienced in React, Vue, and NextJS web development frameworks",
      "Built multiple dApps using Web3JS and different web frameworks",
      "Wrote secure and gas efficient Solidity smart contracts for different blockchains (Ethereum, Polygon, Avalanche) managing 8 figures worth of assets",
      "Written APIs in Go (GoLang) for blockchain interaction and web-based front-end display",
      "Developed Discord bots for NFT project analytics",
      "Implemented DNS routing through https using NGINX reverse proxy servers",
      "Developed Web3 scripts in Python and NodeJS for an edge in Crypto markets",
    ],
    latest: false,
    resumeLink: "/SHatfield-Resume.pdf",
  },
  {
    title: "Associate Software Engineer",
    company: "First American Title",
    duration: "June 2021 - February 2022",
    description: [
      "Started as a summer intern and was promoted to Associate Software Engineer after proving my skills",
      "Actively worked to develop bots in Automation Anywhere to automate repetitive tasks that employees at First American would complete manually",
      "Learned the process of code reviews, QA, and smoke testing applications in order to move bots into production",
      "Actively worked with the Production Support team to solve issues that would come up in a day to day basis",
      "Wrote custom C# wrappers for use in Automation Anywhere",
      "Worked closely with Business Analysts to propose and demo new ideas to upper management in order to help solve business sided issues with our bots",
    ],
  },
  {
    title: "Jr. Software Engineer",
    company: "Elevate Weekly",
    duration: "Sept 2020 - Current (Part time)",
    description: [
      "Developing custom Python scripts that interact with Shopify's API",
      "Writing custom code in HTML and CSS for Shopify stores",
      "Managing large amounts of product data in Shopify stores with custom scripts",
    ],
  },
];

export default function Experience() {
  return (
    <div className="bg-gray-900 flex justify-center">
      <div className="mx-10">
        <ol className="relative border-l border-gray-200 dark:border-gray-700">
          {experienceData.map((experience, index) => (
            <li key={index} className="mb-10 ml-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <svg
                  aria-hidden="true"
                  className="w-3 h-3 text-blue-800 dark:text-blue-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                {experience.company} - {experience.title}{" "}
                {experience.latest && (
                  <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3">
                    Latest
                  </span>
                )}
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                {experience.duration}
              </time>
              <ul className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                {experience.description.map((item, itemIndex) => (
                  <li key={itemIndex}>• {item}</li>
                ))}
              </ul>
              {experience.latest && experience.resumeLink && (
                <a
                  href={experience.resumeLink}
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-full hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z"
                      clipRule="evenodd"
                    />
                  </svg>{" "}
                  Download Resume
                </a>
              )}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
