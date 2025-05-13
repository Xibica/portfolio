export function remake(){
    const projectsBorder = document.getElementById("projectsUL");

    if(window.innerWidth>768 && !projectsBorder.classList.contains("v-border"))
        projectsBorder.classList.add("v-border");

    if (window.innerWidth <= 768) {
    projectsBorder.classList.remove("v-border");

    const projectsNames = document.querySelectorAll("#projectsUL a");
    projectsNames.forEach(link =>{
        if(link.textContent.includes("–")){
            const parts = link.textContent.split("–");
            link.textContent = parts[0].trim();
        }
    })
    }
}
