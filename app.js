let clique1 = "rien";
let clique2 = "rien";


document.body.addEventListener("click",()=>{

    if (clique1 === "menu" ) {
        
    setTimeout(() => {
        document.body.children["head"].children["menu"].children["Entrainement"].children["Sous_menu"].style.transform="translate(-50%,-200%)";
        clique1 = "rien"
        
    }, 100);
    }if (clique2 === "menu" ) {
        
    setTimeout(() => {
        document.body.children["head"].children["menu"].children["Exercice"].children["Sous_menu"].style.transform="translate(-50%,-200%)";
        clique2 = "rien"
        
    }, 100);
    }

});document.body.children["head"].children["menu"].children["Entrainement"].children["titre"].addEventListener("click",()=>{
    
    document.body.children["head"].children["menu"].children["Entrainement"].children["Sous_menu"].style.transform="translate(-50%,0%)";
    
    setTimeout(() => {

        clique1 = "menu";
        
    }, 100);
    

});document.body.children["head"].children["menu"].children["Exercice"].children["titre"].addEventListener("click",()=>{
   
    document.body.children["head"].children["menu"].children["Exercice"].children["Sous_menu"].style.transform="translate(-50%,0%)";
    setTimeout(() => {

        clique2 = "menu";
        
    }, 100);

});

document.body.children["head"].children["menu"].children["Entrainement"].children["Sous_menu"].children["Psoas"].addEventListener("click",()=>{
    
    document.body.children["head"].children["menu"].children["Entrainement"].children["Sous_menu"].style.transform="translate(-50%,-200%)";
    document.body.children["contenue"].children["Psoas"].style.transform="translate(0%,0%)";
    document.body.children["contenue"].children["Dos"].style.transform="translate(0%,-200%)";
    
});document.body.children["head"].children["menu"].children["Entrainement"].children["Sous_menu"].children["Dos"].addEventListener("click",()=>{
    
    document.body.children["head"].children["menu"].children["Entrainement"].children["Sous_menu"].style.transform="translate(-50%,-200%)";
    document.body.children["contenue"].children["Psoas"].style.transform="translate(0%,-200%)";
    document.body.children["contenue"].children["Dos"].style.transform="translate(0%,0%)";
    
});



