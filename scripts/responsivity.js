const projectsBorder = document.getElementById("projectsUL");
const projectsNames = document.querySelectorAll("#projectsUL a");

projectsNames.forEach(link =>{
    if(!link.dataset.fullName)
        link.dataset.fullName = link.textContent.trim();
})

export function remake(){

    if(window.innerWidth>1271 && !projectsBorder.classList.contains("v-border"))
        projectsBorder.classList.add("v-border");

    if (window.innerWidth <= 1271)
        projectsBorder.classList.remove("v-border");

    if(window.innerWidth <= 768){
        projectsNames.forEach(link =>{
            if(link.textContent.includes("–")){
                const parts = link.textContent.split("–");
                link.textContent = parts[0].trim();
            }
        })
    }
    else{
        projectsNames.forEach(link =>{
            link.textContent = link.dataset.fullName;
        })
    } 
}
