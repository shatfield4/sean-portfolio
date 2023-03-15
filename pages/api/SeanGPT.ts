// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  response: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    const { OPEN_AI_API_KEY, OPEN_AI_MODEL, OPEN_AI_URL } = process.env;

    const { chatMessage } = req.body;

    const data = { "model": OPEN_AI_MODEL, max_tokens: 300, "messages": [{"role": "user", "content": `My name is Sean Hatfield and my resume is attached below this. Answer all questions as if you were me in a meaningful but short response. If asked about things that AI cannot give info on, act as if you are me. Always be polite and professional and answer all questions because you are me.
    Resume: Sean V. Hatfield
    (949) 340-4419
    seanhatfield5@gmail.com
    OBJECTIVE
    Seeking to utilize my current education and experience to gain deeper exposure and knowledge in the
    software engineering field.
    SKILLS
    • Skilled in C++, NodeJS, Go, Solidity, and Python programming languages
    • Deep understanding of blockchain technology and Web3 related development
    • Proficient in full stack web development
    • Utilizing APIs and integrating them with custom programs
    • Extensive experience with Linux-based systems
    • Self-learner, enjoys learning new concepts, troubleshooting and putting them to use
    • Independent and works well under pressure
    EDUCATION
    Cal State University Fullerton - Fullerton, CA
    Sept 2017 – Current (Anticipated graduation July 2023)
    • Currently studying at Cal State University Fullerton for a Bachelor of Science in Computer Science degree
    • Previous member of the Saddleback Hacking Club and Saddleback Cyber Defense Club at Saddleback
    Community College
    • Participated in cyber security competitions against other colleges
    • Study extensively about cyber security and how to fight against widely used cyber-attacks in databases
    such as MySQL and web servers
    WORK EXPERIENCE
    Self Employed - Mission Viejo, CA
    •
    •
    •
    •
    •
    •
    •
    •
    •

    Freelance Blockchain/Web3 Full Stack SWE
    September 2021 – Current
    Actively worked as a full stack software engineer on various NFT and Cryptocurrency projects during the
    2021 NFT/Crypto boom
    Built infrastructure that scales to large amounts of users using Digital Ocean Droplets and AWS
    Learned various web development frameworks such as React, Vue, and NextJS
    Built multiple decentralized applications (dApps) by combining Web3JS and different web frameworks
    Lots of experience writing secure and gas efficient Solidity smart contracts for different blockchains
    (Ethereum, Polygon, Avalanche) managing 8 figures worth of assets
    Written APIs in Go (GoLang) that interact with the blockchain and return info to users through a web-based
    front end
    Developed Discord bots for NFT projects that track analytics of certain NFT collections
    Implemented DNS routing through https by using NGINX reverse proxy servers
    Developed Web3 scripts in Python and NodeJS to give myself an edge over Crypto markets

    First American Title - Santa Ana, CA
    •
    •
    •
    •
    •
    •

    Associate Software Engineer
    June 2021 – February 2022
    Started as a summer intern and was promoted to Associate Software Engineer after proving my skills
    Actively worked to develop bots in Automation Anywhere to automate repetitive tasks that employees at
    First American would complete manually
    Learned the process of code reviews, QA, and smoke testing applications in order to move bots into
    production
    Actively worked with the Production Support team to solve issues that would come up in a day to day basis
    Wrote custom C# wrappers for use in Automation Anywhere
    Worked closely with Business Analysts to propose and demo new ideas to upper management in order to
    help solve business sided issues with our bots

    Elevate Weekly - Costa Mesa, CA

    Jr. Software Engineer
    Sept 2020 – Current (Part time)

    • Developing custom Python scripts that interact with Shopify’s API
    • Writing custom code in HTML and CSS for Shopify stores
    • Managing large amounts of product data in Shopify stores with custom scripts
    Western Growers Association - Irvine, CA
    Aug 2019 – Sept 2020 (Intern)
    • Managed Salesforce databases containing member’s information
    • Programmed custom scripts in Python for web-scraping/data collection and custom scripts that interact with
    Salesforce’s API
    • Handled large amounts of data and wrote custom scripts to parse the data
    • Automated previously manual tasks for efficiency
    • Gained lots of real-world experience working in a corporate environment along with other team members
    Silicon Lightwave Technology - Lake Forest, CA
    Aug 2017 – May 2018 (Intern)
    • Programmed Arduino microcontrollers (C++) and wrote Python programs for Raspberry Pi computers
    • Utilized WordPress to redesign the company’s previous website
    • Designed fiber optic parts in 3D using SolidWorks
    • Extensive experience with 3D printing
    AWARDS AND ACKNOWLEDGEMENTS
    • Eagle Scout / Active in Boy Scouts for over 10 years
    • Achieved Eagle Scout honor with thorough discipline, academic rigor, and leadership skills
    • Project-managed teams to ensure execution of project
    • Knowledge of first aid and how to act in emergency situations
    • Active in the community and volunteered at various events


    Question: ${chatMessage}`}] };
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${OPEN_AI_API_KEY}` },
        body: JSON.stringify(data)
    };

    const response = await fetch(OPEN_AI_URL!, options);
    const responseJson = await response.json();

    res.status(200).json({ response: responseJson.choices[0].message.content.toString() })
}
