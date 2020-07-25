// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} 
  ## License:
  ${data.license}

  ## Description:
  ${data.description}

  ## Table of Contents:
  [License](#license) <br />
  [Description](#description) <br />
  [Table of Contents](#table-of-contents) <br />
  [Installation Instructions](#installation-instructions) <br />
  [Usage Information](#usage-information) <br />
  [Contribution Guidelines](#contribution-guidelines) <br />
  [Test Instructions](#test-instructions) <br />
  [Questions](#questions) <br />

  ## Installation Instructions:
  ${data.installation}

  ## Usage Information:
  ${data.usage}

  ## Contribution Guidelines:
  ${data.contributing}

  ## Test Instructions:
  ${data.tests}
  
  

  ## Questions:
  Github Username: ${data.username}
  
  Email Address: ${data.emailAddress}`;
}

module.exports = generateMarkdown;
