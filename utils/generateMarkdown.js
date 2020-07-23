// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} 
  ## Description:
  ${data.description}

  ## Table of Contents:
  ${data.contents}

  ## Installation Instructions:
  ${data.installation}

  ## Usage Information:
  ${data.usage}

  ## Contribution Guidelines:
  ${data.contributing}

  ## Test Instructions:
  ${data.tests}
  
  ## License:
  ${data.license}

  ## Questions:
  Github Username: ${data.username}
  
  Email Address: ${data.emailAddress}`;
}

module.exports = generateMarkdown;
