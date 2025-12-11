let Page ="cauterets";

let info = {
    cauterets : {
        qualiter_neige :0,
        hauteur_neige : 0,
        nombre_piste : 0,
        distance : 0,
        prix : 0,
        heure_de_soleil:0,
    },
    gourette : {
        qualiter_neige :0,
        hauteur_neige : 0,
        nombre_piste : 0,
        distance : 0,
        prix : 0,
        heure_de_soleil:0,
    },
    grand_tourmalet : {
        qualiter_neige :0,
        hauteur_neige : 0,
        nombre_piste : 0,
        distance : 0,
        prix : 0,
        heure_de_soleil:0,
    },
    pierre_st_martin : {
        qualiter_neige :0,
        hauteur_neige : 0,
        nombre_piste : 0,
        distance : 0,
        prix : 0,
        heure_de_soleil:0,
    },
    luz_ardiden : {
        qualiter_neige :0,
        hauteur_neige : 0,
        nombre_piste : 0,
        distance : 0,
        prix : 0,
        heure_de_soleil:0,
    },
    peyragudes : {
        qualiter_neige :0,
        hauteur_neige : 0,
        nombre_piste : 0,
        distance : 0,
        prix : 0,
        heure_de_soleil:0,
    },
    piau_engaly : {
        qualiter_neige :0,
        hauteur_neige : 0,
        nombre_piste : 0,
        distance : 0,
        prix : 0,
        heure_de_soleil:0,
    },

};let resulta = {
    global : {

        cauterets : 0,
        gourette : 0,

    },
};


document.body.children["head"].children["suivant"].addEventListener("click",()=>{

    if (Page === "piau engaly") {
        
        document.body.children["head"].children["titre"].innerHTML="Cauterets";
        document.body.children["head"].children["suivant"].innerHTML="gourette >";
        setTimeout(() => {Page = "cauterets";}, 100);

        info.piau_engaly.qualiter_neige=1;
        info.piau_engaly.hauteur_neige=2;
        info.piau_engaly.nombre_piste=3;
        info.piau_engaly.distance=4;
        info.piau_engaly.prix=5;
        info.piau_engaly.heure_de_soleil=6;


        //            Calcul            //
        alert(

            "\n"+
            "Résulta \n"+
            "\n"+
            "Global : \n"+
            "cauterets : "+resulta.global.cauterets


        )
    }if (Page === "peyragudes") {
        
        document.body.children["head"].children["titre"].innerHTML="Piau Engaly";
        document.body.children["head"].children["suivant"].innerHTML="Résulta >";
        Page = "piau engaly";

        info.peyragudes.qualiter_neige=1;
        info.peyragudes.hauteur_neige=2;
        info.peyragudes.nombre_piste=3;
        info.peyragudes.distance=4;
        info.peyragudes.prix=5;
        info.peyragudes.heure_de_soleil=6;

    }if (Page === "luz-ardiden") {
        
        document.body.children["head"].children["titre"].innerHTML="Peyragudes";
        document.body.children["head"].children["suivant"].innerHTML="Piau Engaly >";
        Page = "peyragudes";

        info.luz_ardiden.qualiter_neige=1;
        info.luz_ardiden.hauteur_neige=2;
        info.luz_ardiden.nombre_piste=3;
        info.luz_ardiden.distance=4;
        info.luz_ardiden.prix=5;
        info.luz_ardiden.heure_de_soleil=6;

    };if (Page === "pierre st martin") {
        
        document.body.children["head"].children["titre"].innerHTML="Luz-Ardiden";
        document.body.children["head"].children["suivant"].innerHTML="Peyragudes >";
        Page = "luz-ardiden";

        info.pierre_st_martin.qualiter_neige=1;
        info.pierre_st_martin.hauteur_neige=2;
        info.pierre_st_martin.nombre_piste=3;
        info.pierre_st_martin.distance=4;
        info.pierre_st_martin.prix=5;
        info.pierre_st_martin.heure_de_soleil=6;

    };if (Page === "grand tourmalet") {
        
        document.body.children["head"].children["titre"].innerHTML="Pierre ST Martin";
        document.body.children["head"].children["suivant"].innerHTML="Luz-Ardiden >";
        Page = "pierre st martin";

    };if (Page === "gourette") {
        
        document.body.children["head"].children["titre"].innerHTML="Grand Tourmalet";
        document.body.children["head"].children["suivant"].innerHTML="Pierre ST Martin >";
        Page = "grand tourmalet";


        info.gourette.qualiter_neige = document.body.children["body"].children[3].value;
        if (info.gourette.qualiter_neige) {

            if (info.gourette.qualiter_neige == "verglas") {
                
                info.gourette.qualiter_neige = 4;

            }if (info.gourette.qualiter_neige == "fondue") {
                
                info.gourette.qualiter_neige = 3;

            }if (info.gourette.qualiter_neige == "poudreuse" ) {
                
                info.gourette.qualiter_neige = 2;

            }if (info.gourette.qualiter_neige == "fraiche") {
                
                info.gourette.qualiter_neige = 1;

            }

        }info.gourette.hauteur_neige = document.body.children["body"].children[9].valueAsNumber;
        if (info.gourette.hauteur_neige) {
            
            if (info.gourette.hauteur_neige <= 30) {
                
                info.gourette.hauteur_neige = 4;

            }if (info.gourette.hauteur_neige > 30 && info.gourette.hauteur_neige < 60) {
                
                info.gourette.hauteur_neige = 3;

            }if (info.gourette.hauteur_neige >= 60 && info.gourette.hauteur_neige < 100 ) {
                
                info.gourette.hauteur_neige = 2;

            }if (info.gourette.hauteur_neige >= 100) {
                
                info.gourette.hauteur_neige = 1;

            }

        }info.gourette.nombre_piste = document.body.children["body"].children[15].valueAsNumber;
        if (info.gourette.nombre_piste) {
            
            if (info.gourette.nombre_piste <= 10) {
                
                info.gourette.nombre_piste = 4;

            }if (info.gourette.nombre_piste > 10 && info.gourette.nombre_piste < 18) {
                
                info.gourette.nombre_piste = 3;

            }if (info.gourette.nombre_piste >= 18 && info.gourette.nombre_piste < 25 ) {
                
                info.gourette.nombre_piste = 2;

            }if (info.gourette.nombre_piste >= 25) {
                
                info.gourette.nombre_piste = 1;

            }

        }info.gourette.prix = document.body.children["body"].children[21].valueAsNumber;
        if (info.gourette.prix) {
            
            if (info.gourette.prix <= 25) {
                
                info.gourette.prix = 1;

            }if (info.gourette.prix > 25 && info.cauterets.prix < 35) {
                
                info.gourette.prix = 2;

            }if (info.gourette.prix >= 35 && info.cauterets.prix < 45 ) {
                
                info.gourette.prix = 3;

            }if (info.gourette.prix >= 45) {
                
                info.gourette.prix = 4;

            }

        }info.gourette.heure_de_soleil = document.body.children["body"].children[27].valueAsNumber;
        if (info.gourette.heure_de_soleil) {
            
            if (info.gourette.heure_de_soleil == 0) {
                
                info.gourette.heure_de_soleil = 4;

            }if (info.gourette.heure_de_soleil > 0 && info.cauterets.heure_de_soleil < 5) {
                
                info.gourette.heure_de_soleil = 3;

            }if (info.gourette.heure_de_soleil >= 5 && info.cauterets.heure_de_soleil < 9 ) {
                
                info.gourette.heure_de_soleil = 2;

            }if (info.gourette.heure_de_soleil == 9) {
                
                info.gourette.heure_de_soleil = 1;

            }

        }


    }if (Page === "cauterets") {
        
        document.body.children["head"].children["titre"].innerHTML="Gourette";
        document.body.children["head"].children["suivant"].innerHTML="Grand Tourmalet >";
        Page = "gourette";

        info.cauterets.qualiter_neige = document.body.children["body"].children[3].value;
        if (info.cauterets.qualiter_neige) {

            if (info.cauterets.qualiter_neige == "verglas") {
                
                info.cauterets.qualiter_neige = 4;

            }if (info.cauterets.qualiter_neige == "fondue") {
                
                info.cauterets.qualiter_neige = 3;

            }if (info.cauterets.qualiter_neige == "poudreuse" ) {
                
                info.cauterets.qualiter_neige = 2;

            }if (info.cauterets.qualiter_neige == "fraiche") {
                
                info.cauterets.qualiter_neige = 1;

            }

        }info.cauterets.hauteur_neige = document.body.children["body"].children[9].valueAsNumber;
        if (info.cauterets.hauteur_neige) {
            
            if (info.cauterets.hauteur_neige <= 30) {
                
                info.cauterets.hauteur_neige = 4;

            }if (info.cauterets.hauteur_neige > 30 && info.cauterets.hauteur_neige < 60) {
                
                info.cauterets.hauteur_neige = 3;

            }if (info.cauterets.hauteur_neige >= 60 && info.cauterets.hauteur_neige < 100 ) {
                
                info.cauterets.hauteur_neige = 2;

            }if (info.cauterets.hauteur_neige >= 100) {
                
                info.cauterets.hauteur_neige = 1;

            }

        }info.cauterets.nombre_piste = document.body.children["body"].children[15].valueAsNumber;
        if (info.cauterets.nombre_piste) {
            
            if (info.cauterets.nombre_piste <= 10) {
                
                info.cauterets.nombre_piste = 4;

            }if (info.cauterets.nombre_piste > 10 && info.cauterets.nombre_piste < 18) {
                
                info.cauterets.nombre_piste = 3;

            }if (info.cauterets.nombre_piste >= 18 && info.cauterets.nombre_piste < 25 ) {
                
                info.cauterets.nombre_piste = 2;

            }if (info.cauterets.nombre_piste >= 25) {
                
                info.cauterets.nombre_piste = 1;

            }

        }info.cauterets.prix = document.body.children["body"].children[21].valueAsNumber;
        if (info.cauterets.prix) {
            
            if (info.cauterets.prix <= 25) {
                
                info.cauterets.prix = 1;

            }if (info.cauterets.prix > 25 && info.cauterets.prix < 35) {
                
                info.cauterets.prix = 2;

            }if (info.cauterets.prix >= 35 && info.cauterets.prix < 45 ) {
                
                info.cauterets.prix = 3;

            }if (info.cauterets.prix >= 45) {
                
                info.cauterets.prix = 4;

            }

        }info.cauterets.heure_de_soleil = document.body.children["body"].children[27].valueAsNumber;
        if (info.cauterets.heure_de_soleil) {
            
            if (info.cauterets.heure_de_soleil == 0) {
                
                info.cauterets.heure_de_soleil = 4;

            }if (info.cauterets.heure_de_soleil > 0 && info.cauterets.heure_de_soleil < 5) {
                
                info.cauterets.heure_de_soleil = 3;

            }if (info.cauterets.heure_de_soleil >= 5 && info.cauterets.heure_de_soleil < 9 ) {
                
                info.cauterets.heure_de_soleil = 2;

            }if (info.cauterets.heure_de_soleil == 9) {
                
                info.cauterets.heure_de_soleil = 1;

            }

        }
        
        resulta.global.cauterets = info.cauterets.qualiter_neige+info.cauterets.hauteur_neige+info.cauterets.nombre_piste+info.cauterets.prix+info.cauterets.heure_de_soleil;

    }

});
