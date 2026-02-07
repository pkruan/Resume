 let currentStyle = "pro";
let darkMode = true;

// เลือกสไตล์
function setStyle(style) {
  currentStyle = style;
  alert("เลือก Style: " + style);
}

// Generate Resume
function generateProfile() {

  let name = document.getElementById("name").value;
  let job = document.getElementById("job").value;
  let skills = document.getElementById("skills").value;
  let exp = document.getElementById("experience").value;
  let goal = document.getElementById("goal").value;

  if(name === "" || job === "") {
    alert("กรอกชื่อและอาชีพก่อน");
    return;
  }

  let intro = "";

  if(currentStyle == "pro") {
    intro = `${name} is a professional ${job} with strong skills in ${skills}.`;
  }
  if(currentStyle == "creative") {
    intro = `${name} is a creative ${job} passionate about innovation and ${skills}.`;
  }
  if(currentStyle == "startup") {
    intro = `${name} is a startup-driven ${job} focused on building scalable solutions.`;
  }

  let profile = `
${intro}

Experience:
${exp}

Future Goal:
${goal}
`;

  document.getElementById("result").innerText = profile;
}

// Copy Resume
function copyResume() {
  let text = document.getElementById("result").innerText;
  navigator.clipboard.writeText(text);
  alert("Copied to clipboard!");
}

// Download Resume
function downloadResume() {
  let text = document.getElementById("result").innerText;
  let blob = new Blob([text], { type: "text/plain" });
  let a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "resume.txt";
  a.click();
}

// Dark / Light Mode
function toggleMode() {
  darkMode = !darkMode;

  if(darkMode) {
    document.body.style.background = "#0f172a";
    document.body.style.color = "white";
  } else {
    document.body.style.background = "white";
    document.body.style.color = "black";
  }
}
