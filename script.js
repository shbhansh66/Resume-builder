


const form = document.getElementById('resume-form');
const resumeOutput = document.getElementById('resume-output');
const downloadBtn = document.getElementById('download-btn');
const resumePreview = document.querySelector('.resume-preview');
let selectedTemplate = 'template1';


form.addEventListener('submit', function (e) {
  e.preventDefault();


  const name = document.getElementById('name').value;
  const contact = document.getElementById('contact').value;
  const education = document.getElementById('education').value;
  const work = document.getElementById('work').value;
  const skills = document.getElementById('skills').value;

  generateResume(name, contact, education, work, skills);

  
  resumePreview.style.display = 'block';
});


function generateResume(name, contact, education, work, skills) {
  resumeOutput.innerHTML = `
    <div class="resume-header">
      <h3>${name}</h3>
      <p><strong>Contact:</strong> ${contact}</p>
    </div>
    <div class="resume-section">
      <h4>Education</h4>
      <p>${education}</p>
    </div>
    <div class="resume-section">
      <h4>Work Experience</h4>
      <p>${work}</p>
    </div>
    <div class="resume-section">
      <h4>Skills</h4>
      <p>${skills}</p>
    </div>
  `;

  applyTemplateStyles();
}


document.getElementById('template1').addEventListener('click', function() {
  selectedTemplate = 'template1';
  applyTemplateStyles();
});

document.getElementById('template2').addEventListener('click', function() {
  selectedTemplate = 'template2';
  applyTemplateStyles();
});

function applyTemplateStyles() {
  if (selectedTemplate === 'template1') {
    resumeOutput.style.fontFamily = 'Arial, sans-serif';
    resumeOutput.style.fontSize = '16px';
  } else if (selectedTemplate === 'template2') {
    resumeOutput.style.fontFamily = 'Georgia, serif';
    resumeOutput.style.fontSize = '18px';
  }
}

downloadBtn.addEventListener('click', function () {
  const { jsPDF } = window.jspdf;  

  const doc = new jsPDF();
  let resumeContent = resumeOutput.innerHTML;

  
  const resumeText = `
    ${resumeContent}
  `;
  
  doc.text(resumeText, 10, 10); 


  doc.save('resume.pdf');
});
