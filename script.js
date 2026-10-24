const students = [
  {name:"Vibhav Rawat",email:"vibhav@example.com",skills:["Python","SQL","Cybersecurity"],interest:"Cybersecurity",readiness:82,initials:"VR"},
  {name:"Prachi Raghav",email:"prachi@example.com",skills:["Python","Data Analysis","SQL"],interest:"Data analytics",readiness:76,initials:"PR"},
  {name:"Ridhima Sinha",email:"ridhima@example.com",skills:["JavaScript","HTML/CSS","UI Design"],interest:"Web development",readiness:88,initials:"RS"},
  {name:"Sumit Kumar",email:"sumit@example.com",skills:["Python","Machine Learning","SQL"],interest:"AI / ML",readiness:71,initials:"SK"},
  {name:"Abhas Rawat",email:"abhas@example.com",skills:["JavaScript","Python","HTML/CSS"],interest:"Software development",readiness:79,initials:"AR"}
];
const skillLabels = ["Python","SQL","JavaScript","HTML/CSS","Data Analysis","Cybersecurity","Machine Learning","UI Design"];
let extraAdded = false;
const rows = document.getElementById("studentRows");
const searchInput = document.getElementById("searchInput");
function renderStudents(query=""){
  const q = query.trim().toLowerCase();
  const filtered = students.filter(s => [s.name,s.email,s.interest,...s.skills].join(" ").toLowerCase().includes(q));
  rows.innerHTML = filtered.map(s => `<tr><td><div class="student-cell"><div class="student-avatar">${s.initials}</div><div><div class="student-name">${s.name}</div><div class="student-email">${s.email}</div></div></div></td><td>${s.skills.map(skill=>`<span class="skill-chip">${skill}</span>`).join("")}</td><td class="interest">${s.interest}</td><td><div class="readiness"><div class="readiness-bar"><i style="width:${s.readiness}%"></i></div><span>${s.readiness}%</span></div></td></tr>`).join("");
  document.getElementById("resultCount").textContent = `Showing ${filtered.length} of ${students.length} profiles`;
  document.getElementById("studentCount").textContent = students.length;
  const allSkills = new Set(students.flatMap(s=>s.skills));
  document.getElementById("skillCount").textContent = allSkills.size;
}
renderStudents();
searchInput.addEventListener("input", e=>renderStudents(e.target.value));
document.getElementById("addSampleBtn").addEventListener("click",()=>{
  if(extraAdded){alert("Demo profile already added. Refresh the page to reset the sample data.");return;}
  students.push({name:"Demo Student",email:"demo@example.com",skills:["Python","Communication"],interest:"Internship",readiness:65,initials:"DS"});
  extraAdded=true;renderStudents(searchInput.value);
});
if(window.Chart){
  Chart.defaults.font.family="'DM Sans', sans-serif";
  Chart.defaults.color="#9b98ad";
  const skillCounts = skillLabels.map(skill=>students.filter(s=>s.skills.includes(skill)).length);
  new Chart(document.getElementById("skillsChart"),{type:"bar",data:{labels:skillLabels,datasets:[{label:"Student mentions",data:skillCounts,backgroundColor:["#7767e8","#a69af4","#7dcebd","#b9e9de","#f0b27c","#9bbcf2","#c5b9ff","#f2d0ac"],borderRadius:5,borderSkipped:false,maxBarThickness:25}]},options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false},tooltip:{backgroundColor:"#292642",padding:10,displayColors:false}},scales:{x:{grid:{display:false},border:{display:false},ticks:{font:{size:9},maxRotation:35,minRotation:0}},y:{beginAtZero:true,ticks:{stepSize:1,font:{size:9}},grid:{color:"#f1eff8"},border:{display:false}}}}});
  new Chart(document.getElementById("opportunityChart"),{type:"doughnut",data:{labels:["Internship","Full-time","Project","Training"],datasets:[{data:[35,30,20,15],backgroundColor:["#7767e8","#46b9aa","#f0a66a","#6da9ed"],borderWidth:0,hoverOffset:4}]},options:{responsive:true,maintainAspectRatio:false,cutout:"76%",plugins:{legend:{display:false},tooltip:{backgroundColor:"#292642",padding:10}}}});
}
const traversalOutput=document.getElementById("traversalOutput");
document.getElementById("bfsBtn").addEventListener("click",()=>{traversalOutput.textContent="BFS sample order: Student → Python → SQL → JavaScript → Data → Web. BFS visits nearby connected nodes level by level.";});
document.getElementById("dfsBtn").addEventListener("click",()=>{traversalOutput.textContent="DFS sample order: Student → Python → Data → JavaScript → Web → SQL. DFS follows a path deeply before backtracking.";});
