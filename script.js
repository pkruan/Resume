 function generateProfile() {

  let name = document.getElementById("name").value;
  let job = document.getElementById("job").value;
  let skills = document.getElementById("skills").value;
  let exp = document.getElementById("experience").value;
  let goal = document.getElementById("goal").value;

  if(name == "" || job == "") {
    alert("กรอกชื่อและอาชีพก่อน");
    return;
  }

  let profile = `
${name} is a motivated ${job}.

Skills:
${skills}

Experience:
${exp}

Future Goal:
${goal}

This profile was generated using AI Resume Generator.
`;

  document.getElementById("result").innerText = profile;
}
