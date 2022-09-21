let downloadCV = ()=>{
    window.location.href = "https://drive.google.com/file/d/1P6pBiwhCvsFblDUZJe91InkEcrR2RETK/view?usp=sharing";
}

let aboutMe = ()=>{
    window.location.href = "#aboutme";
}

if(window.matchMedia('(max-width: 400px)').matches) {
    document.querySelector("#sidebar").innerHTML="";
}

if(window.matchMedia('(min-width: 400px) and (max-width: 767px)').matches) {
    document.querySelector("#sidebar").innerHTML="";
}


if(window.matchMedia('(min-width: 768px) and (max-width: 1024px)').matches){
    document.querySelector("#sidebar").innerHTML=
    `   <h1>SHIBSHANKAR</h1>
        <h1>PADHY</h1>
        <a href="#introduction"><div>Home</div></a>
        <a href="#aboutme"><div>About</div></a>
        <a href="#myskills"><div>Skills</div></a>
        <a href="#education"><div>Education</div></a>
        <a href="#projects"><div>Projects</div></a>
        <a href="#contactme"><div>Contact</div></a>
        <a href="https://www.linkedin.com/in/shibshankar-padhy-98952b1b7/" target="_blank" class="fab fa-linkedin"></a>
        <a href="https://github.com/Shibshankar01" target="_blank" class="fab fa-github"></a>`;
}