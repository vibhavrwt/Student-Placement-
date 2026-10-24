const students = [
 {name:"Vibhav Rawat",email:"vibhav@example.com",course:"B.Tech CSE - Cybersecurity",skills:["Python","SQL","Cybersecurity"],role:"Cybersecurity Analyst",opportunity:"Internship",location:"Noida",initials:"VR"},
 {name:"Prachi Raghav",email:"prachi@example.com",course:"B.Tech CSE",skills:["Python","HTML","CSS","Communication"],role:"Web Developer",opportunity:"Either",location:"Noida",initials:"PR"},
 {name:"Ridhima Sinha",email:"ridhima@example.com",course:"B.Tech CSE",skills:["Java","DSA","SQL"],role:"Software Developer",opportunity:"Placement",location:"Delhi NCR",initials:"RS"},
 {name:"Sumit Kumar",email:"sumit@example.com",course:"B.Tech CSE",skills:["Python","Data Analysis","Excel"],role:"Data Analyst",opportunity:"Internship",location:"Remote",initials:"SK"},
 {name:"Abhas Rawat",email:"abhas@example.com",course:"B.Tech CSE",skills:["JavaScript","HTML","CSS","UI Design"],role:"Frontend Developer",opportunity:"Either",location:"Delhi NCR",initials:"AR"}
];
const skillLabels=["Python","SQL","JavaScript","HTML","CSS","Cybersecurity","DSA","Data Analysis","Excel","Communication","UI Design","Java"];
let extraAdded=false;
const rows=document.getElementById("studentRows"), searchInput=document.getElementById("searchInput");
function renderStudents(query=""){
 const q=query.trim().toLowerCase();
 const filtered=students.filter(s=>[s.name,s.email,s.course,s.role,s.opportunity,s.location,...s.skills].join(" ").toLowerCase().includes(q));
 rows.innerHTML=filtered.map(s=>`<tr><td><div class="student-cell"><div class="student-avatar">${s.initials}</div><div><div class="student-name">${s.name}</div><div class="student-email">${s.course}</div></div></div></td><td>${s.skills.map(x=>`<span class="skill-chip">${x}</span>`).join("")}</td><td class="interest">${s.role}<br><small>${s.location}</small></td><td><span class="opportunity-pill">${s.opportunity}</span></td></tr>`).join("");
 document.getElementById("resultCount").textContent=`Showing ${filtered.length} of ${students.length} profiles`;
 document.getElementById("studentCount").textContent=students.length;
 document.getElementById("skillCount").textContent=new Set(students.flatMap(s=>s.skills)).size;
}
renderStudents(); searchInput.addEventListener("input",e=>renderStudents(e.target.value));
document.getElementById("addSampleBtn").addEventListener("click",()=>{if(extraAdded){alert("Demo profile already added. Refresh to reset.");return;}students.push({name:"Demo Student",email:"demo@example.com",course:"B.Tech CSE",skills:["Python","Communication"],role:"Internship Candidate",opportunity:"Internship",location:"Remote",initials:"DS"});extraAdded=true;renderStudents(searchInput.value);});
if(window.Chart){Chart.defaults.font.family="'DM Sans', sans-serif";Chart.defaults.color="#9b98ad";
 const skillCounts=skillLabels.map(skill=>students.reduce((n,s)=>n+s.skills.filter(x=>x.toLowerCase()===skill.toLowerCase()).length,0));
 new Chart(document.getElementById("skillsChart"),{type:"bar",data:{labels:skillLabels,datasets:[{label:"Student mentions",data:skillCounts,backgroundColor:["#7767e8","#a69af4","#7dcebd","#b9e9de","#f0b27c","#9bbcf2","#c5b9ff","#f2d0ac"],borderRadius:5,borderSkipped:false,maxBarThickness:25}]},options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false},tooltip:{backgroundColor:"#292642",padding:10,displayColors:false}},scales:{x:{grid:{display:false},border:{display:false},ticks:{font:{size:9},maxRotation:35,minRotation:0}},y:{beginAtZero:true,ticks:{stepSize:1,font:{size:9}},grid:{color:"#f1eff8"},border:{display:false}}}}});
 const c={Internship:0,Placement:0,Either:0};students.forEach(s=>c[s.opportunity]++);
 new Chart(document.getElementById("opportunityChart"),{type:"doughnut",data:{labels:["Internship","Placement","Either"],datasets:[{data:[c.Internship,c.Placement,c.Either],backgroundColor:["#7767e8","#46b9aa","#f0a66a"],borderWidth:0,hoverOffset:4}]},options:{responsive:true,maintainAspectRatio:false,cutout:"76%",plugins:{legend:{display:false},tooltip:{backgroundColor:"#292642",padding:10}}}});
}
const out=document.getElementById("traversalOutput");
document.getElementById("bfsBtn").addEventListener("click",()=>out.textContent="BFS sample: Vibhav Rawat → Python → SQL → Prachi Raghav → HTML → CSS. BFS visits neighbours level by level.");
document.getElementById("dfsBtn").addEventListener("click",()=>out.textContent="DFS sample: Vibhav Rawat → Python → SQL → Ridhima Sinha → Java → DSA. DFS follows a path before backtracking.");
