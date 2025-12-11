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
        grand_tourmalet : 0,
        pierre_st_martin : 0,
        luz_ardiden : 0,
        peyragudes : 0,
        piau_engaly : 0,

    },
};


document.body.children["head"].children["suivant"].addEventListener("click",()=>{

    if (Page === "piau engaly") {
        
        document.body.children["head"].children["titre"].innerHTML="Cauterets";
        document.body.children["head"].children["suivant"].innerHTML="gourette >";
        setTimeout(() => {Page = "cauterets";}, 100);
        
        info.piau_engaly.qualiter_neige = document.body.children["body"].children[3].value;
        if (info.piau_engaly.qualiter_neige) {

            if (info.piau_engaly.qualiter_neige == "verglas") {
                
                info.piau_engaly.qualiter_neige = 4;

            }if (info.piau_engaly.qualiter_neige == "fondue") {
                
                info.piau_engaly.qualiter_neige = 3;

            }if (info.piau_engaly.qualiter_neige == "poudreuse" ) {
                
                info.piau_engaly.qualiter_neige = 2;

            }if (info.piau_engaly.qualiter_neige == "fraiche") {
                
                info.piau_engaly.qualiter_neige = 1;

            }

        }info.piau_engaly.hauteur_neige = document.body.children["body"].children[9].valueAsNumber;
        if (info.piau_engaly.hauteur_neige) {
            
            if (info.piau_engaly.hauteur_neige <= 30) {
                
                info.piau_engaly.hauteur_neige = 4;

            }if (info.piau_engaly.hauteur_neige > 30 && info.piau_engaly.hauteur_neige < 60) {
                
                info.piau_engaly.hauteur_neige = 3;

            }if (info.piau_engaly.hauteur_neige >= 60 && info.piau_engaly.hauteur_neige < 100 ) {
                
                info.piau_engaly.hauteur_neige = 2;

            }if (info.piau_engaly.hauteur_neige >= 100) {
                
                info.piau_engaly.hauteur_neige = 1;

            }

        }info.piau_engaly.nombre_piste = document.body.children["body"].children[15].valueAsNumber;
        if (info.piau_engaly.nombre_piste) {
            
            if (info.piau_engaly.nombre_piste <= 10) {
                
                info.piau_engaly.nombre_piste = 4;

            }if (info.piau_engaly.nombre_piste > 10 && info.peyragudes.nombre_piste < 18) {
                
                info.piau_engaly.nombre_piste = 3;

            }if (info.piau_engaly.nombre_piste >= 18 && info.piau_engaly.nombre_piste < 25 ) {
                
                info.piau_engaly.nombre_piste = 2;

            }if (info.piau_engaly.nombre_piste >= 25) {
                
                info.piau_engaly.nombre_piste = 1;

            }

        }info.piau_engaly.prix = document.body.children["body"].children[21].valueAsNumber;
        if (info.piau_engaly.prix) {
            
            if (info.piau_engaly.prix <= 25) {
                
                info.piau_engaly.prix = 1;

            }if (info.piau_engaly.prix > 25 && info.piau_engaly.prix < 35) {
                
                info.piau_engaly.prix = 2;

            }if (info.piau_engaly.prix >= 35 && info.piau_engaly.prix < 45 ) {
                
                info.piau_engaly.prix = 3;

            }if (info.piau_engaly.prix >= 45) {
                
                info.piau_engaly.prix = 4;

            }

        }info.piau_engaly.heure_de_soleil = document.body.children["body"].children[27].valueAsNumber;
        if (info.piau_engaly.heure_de_soleil) {
            
            if (info.piau_engaly.heure_de_soleil == 0) {
                
                info.piau_engaly.heure_de_soleil = 4;

            }if (info.piau_engaly.heure_de_soleil > 0 && info.piau_engaly.heure_de_soleil < 5) {
                
                info.piau_engaly.heure_de_soleil = 3;

            }if (info.piau_engaly.heure_de_soleil >= 5 && info.piau_engaly.heure_de_soleil < 9 ) {
                
                info.piau_engaly.heure_de_soleil = 2;

            }if (info.piau_engaly.heure_de_soleil == 9) {
                
                info.piau_engaly.heure_de_soleil = 1;

            }

        }

        resulta.global.piau_engaly = info.piau_engaly.qualiter_neige+info.piau_engaly.hauteur_neige+info.piau_engaly.nombre_piste+info.piau_engaly.prix+info.piau_engaly.heure_de_soleil;


        //            Calcul            //
        alert(

            "\n"+
            "Résulta \n"+
            "\n"+
            "Global : \n"+
            "\n"+
            "Cauterets : "+resulta.global.cauterets+"\n"+
            "Gourette : "+resulta.global.gourette+"\n"+
            "Grand Tourmalet : "+resulta.global.grand_tourmalet+"\n"+
            "Pierre ST Martin : "+resulta.global.pierre_st_martin+"\n"+
            "Luz-Ardiden : "+resulta.global.luz_ardiden+"\n"+
            "Peyragudes : "+resulta.global.peyragudes+"\n"+
            "Piau_engaly : "+resulta.global.piau_engaly


        );

    }if (Page === "peyragudes") {
        
        document.body.children["head"].children["titre"].innerHTML="Piau Engaly";
        document.body.children["head"].children["suivant"].innerHTML="Résulta >";
        Page = "piau engaly";
        
        info.peyragudes.qualiter_neige = document.body.children["body"].children[3].value;
        if (info.peyragudes.qualiter_neige) {

            if (info.peyragudes.qualiter_neige == "verglas") {
                
                info.peyragudes.qualiter_neige = 4;

            }if (info.peyragudes.qualiter_neige == "fondue") {
                
                info.peyragudes.qualiter_neige = 3;

            }if (info.peyragudes.qualiter_neige == "poudreuse" ) {
                
                info.peyragudes.qualiter_neige = 2;

            }if (info.peyragudes.qualiter_neige == "fraiche") {
                
                info.peyragudes.qualiter_neige = 1;

            }

        }info.peyragudes.hauteur_neige = document.body.children["body"].children[9].valueAsNumber;
        if (info.peyragudes.hauteur_neige) {
            
            if (info.peyragudes.hauteur_neige <= 30) {
                
                info.peyragudes.hauteur_neige = 4;

            }if (info.peyragudes.hauteur_neige > 30 && info.peyragudes.hauteur_neige < 60) {
                
                info.peyragudes.hauteur_neige = 3;

            }if (info.peyragudes.hauteur_neige >= 60 && info.peyragudes.hauteur_neige < 100 ) {
                
                info.peyragudes.hauteur_neige = 2;

            }if (info.peyragudes.hauteur_neige >= 100) {
                
                info.peyragudes.hauteur_neige = 1;

            }

        }info.peyragudes.nombre_piste = document.body.children["body"].children[15].valueAsNumber;
        if (info.peyragudes.nombre_piste) {
            
            if (info.peyragudes.nombre_piste <= 10) {
                
                info.peyragudes.nombre_piste = 4;

            }if (info.peyragudes.nombre_piste > 10 && info.peyragudes.nombre_piste < 18) {
                
                info.peyragudes.nombre_piste = 3;

            }if (info.peyragudes.nombre_piste >= 18 && info.peyragudes.nombre_piste < 25 ) {
                
                info.peyragudes.nombre_piste = 2;

            }if (info.peyragudes.nombre_piste >= 25) {
                
                info.peyragudes.nombre_piste = 1;

            }

        }info.peyragudes.prix = document.body.children["body"].children[21].valueAsNumber;
        if (info.peyragudes.prix) {
            
            if (info.peyragudes.prix <= 25) {
                
                info.peyragudes.prix = 1;

            }if (info.peyragudes.prix > 25 && info.peyragudes.prix < 35) {
                
                info.peyragudes.prix = 2;

            }if (info.peyragudes.prix >= 35 && info.peyragudes.prix < 45 ) {
                
                info.peyragudes.prix = 3;

            }if (info.peyragudes.prix >= 45) {
                
                info.peyragudes.prix = 4;

            }

        }info.peyragudes.heure_de_soleil = document.body.children["body"].children[27].valueAsNumber;
        if (info.peyragudes.heure_de_soleil) {
            
            if (info.peyragudes.heure_de_soleil == 0) {
                
                info.peyragudes.heure_de_soleil = 4;

            }if (info.peyragudes.heure_de_soleil > 0 && info.peyragudes.heure_de_soleil < 5) {
                
                info.peyragudes.heure_de_soleil = 3;

            }if (info.peyragudes.heure_de_soleil >= 5 && info.peyragudes.heure_de_soleil < 9 ) {
                
                info.peyragudes.heure_de_soleil = 2;

            }if (info.peyragudes.heure_de_soleil == 9) {
                
                info.peyragudes.heure_de_soleil = 1;

            }

        }

        resulta.global.peyragudes = info.peyragudes.qualiter_neige+info.peyragudes.hauteur_neige+info.peyragudes.nombre_piste+info.peyragudes.prix+info.peyragudes.heure_de_soleil;

    }if (Page === "luz-ardiden") {
        
        document.body.children["head"].children["titre"].innerHTML="Peyragudes";
        document.body.children["head"].children["suivant"].innerHTML="Piau Engaly >";
        Page = "peyragudes";
        
        info.luz_ardiden.qualiter_neige = document.body.children["body"].children[3].value;
        if (info.luz_ardiden.qualiter_neige) {

            if (info.luz_ardiden.qualiter_neige == "verglas") {
                
                info.luz_ardiden.qualiter_neige = 4;

            }if (info.luz_ardiden.qualiter_neige == "fondue") {
                
                info.luz_ardiden.qualiter_neige = 3;

            }if (info.luz_ardiden.qualiter_neige == "poudreuse" ) {
                
                info.luz_ardiden.qualiter_neige = 2;

            }if (info.luz_ardiden.qualiter_neige == "fraiche") {
                
                info.luz_ardiden.qualiter_neige = 1;

            }

        }info.luz_ardiden.hauteur_neige = document.body.children["body"].children[9].valueAsNumber;
        if (info.luz_ardiden.hauteur_neige) {
            
            if (info.luz_ardiden.hauteur_neige <= 30) {
                
                info.luz_ardiden.hauteur_neige = 4;

            }if (info.luz_ardiden.hauteur_neige > 30 && info.luz_ardiden.hauteur_neige < 60) {
                
                info.luz_ardiden.hauteur_neige = 3;

            }if (info.luz_ardiden.hauteur_neige >= 60 && info.luz_ardiden.hauteur_neige < 100 ) {
                
                info.luz_ardiden.hauteur_neige = 2;

            }if (info.luz_ardiden.hauteur_neige >= 100) {
                
                info.luz_ardiden.hauteur_neige = 1;

            }

        }info.luz_ardiden.nombre_piste = document.body.children["body"].children[15].valueAsNumber;
        if (info.luz_ardiden.nombre_piste) {
            
            if (info.luz_ardiden.nombre_piste <= 10) {
                
                info.luz_ardiden.nombre_piste = 4;

            }if (info.luz_ardiden.nombre_piste > 10 && info.luz_ardiden.nombre_piste < 18) {
                
                info.luz_ardiden.nombre_piste = 3;

            }if (info.luz_ardiden.nombre_piste >= 18 && info.luz_ardiden.nombre_piste < 25 ) {
                
                info.luz_ardiden.nombre_piste = 2;

            }if (info.luz_ardiden.nombre_piste >= 25) {
                
                info.luz_ardiden.nombre_piste = 1;

            }

        }info.luz_ardiden.prix = document.body.children["body"].children[21].valueAsNumber;
        if (info.luz_ardiden.prix) {
            
            if (info.luz_ardiden.prix <= 25) {
                
                info.luz_ardiden.prix = 1;

            }if (info.luz_ardiden.prix > 25 && info.luz_ardiden.prix < 35) {
                
                info.luz_ardiden.prix = 2;

            }if (info.luz_ardiden.prix >= 35 && info.luz_ardiden.prix < 45 ) {
                
                info.luz_ardiden.prix = 3;

            }if (info.luz_ardiden.prix >= 45) {
                
                info.luz_ardiden.prix = 4;

            }

        }info.luz_ardiden.heure_de_soleil = document.body.children["body"].children[27].valueAsNumber;
        if (info.luz_ardiden.heure_de_soleil) {
            
            if (info.luz_ardiden.heure_de_soleil == 0) {
                
                info.luz_ardiden.heure_de_soleil = 4;

            }if (info.luz_ardiden.heure_de_soleil > 0 && info.luz_ardiden.heure_de_soleil < 5) {
                
                info.luz_ardiden.heure_de_soleil = 3;

            }if (info.luz_ardiden.heure_de_soleil >= 5 && info.luz_ardiden.heure_de_soleil < 9 ) {
                
                info.luz_ardiden.heure_de_soleil = 2;

            }if (info.luz_ardiden.heure_de_soleil == 9) {
                
                info.luz_ardiden.heure_de_soleil = 1;

            }

        }

        resulta.global.luz_ardiden = info.luz_ardiden.qualiter_neige+info.luz_ardiden.hauteur_neige+info.luz_ardiden.nombre_piste+info.luz_ardiden.prix+info.luz_ardiden.heure_de_soleil;

    };if (Page === "pierre st martin") {
        
        document.body.children["head"].children["titre"].innerHTML="Luz-Ardiden";
        document.body.children["head"].children["suivant"].innerHTML="Peyragudes >";
        Page = "luz-ardiden";
        
        info.pierre_st_martin.qualiter_neige = document.body.children["body"].children[3].value;
        if (info.pierre_st_martin.qualiter_neige) {

            if (info.pierre_st_martin.qualiter_neige == "verglas") {
                
                info.pierre_st_martin.qualiter_neige = 4;

            }if (info.pierre_st_martin.qualiter_neige == "fondue") {
                
                info.pierre_st_martin.qualiter_neige = 3;

            }if (info.pierre_st_martin.qualiter_neige == "poudreuse" ) {
                
                info.pierre_st_martin.qualiter_neige = 2;

            }if (info.pierre_st_martin.qualiter_neige == "fraiche") {
                
                info.pierre_st_martin.qualiter_neige = 1;

            }

        }info.pierre_st_martin.hauteur_neige = document.body.children["body"].children[9].valueAsNumber;
        if (info.pierre_st_martin.hauteur_neige) {
            
            if (info.pierre_st_martin.hauteur_neige <= 30) {
                
                info.pierre_st_martin.hauteur_neige = 4;

            }if (info.pierre_st_martin.hauteur_neige > 30 && info.pierre_st_martin.hauteur_neige < 60) {
                
                info.pierre_st_martin.hauteur_neige = 3;

            }if (info.pierre_st_martin.hauteur_neige >= 60 && info.pierre_st_martin.hauteur_neige < 100 ) {
                
                info.pierre_st_martin.hauteur_neige = 2;

            }if (info.pierre_st_martin.hauteur_neige >= 100) {
                
                info.pierre_st_martin.hauteur_neige = 1;

            }

        }info.pierre_st_martin.nombre_piste = document.body.children["body"].children[15].valueAsNumber;
        if (info.pierre_st_martin.nombre_piste) {
            
            if (info.pierre_st_martin.nombre_piste <= 10) {
                
                info.pierre_st_martin.nombre_piste = 4;

            }if (info.pierre_st_martin.nombre_piste > 10 && info.pierre_st_martin.nombre_piste < 18) {
                
                info.pierre_st_martin.nombre_piste = 3;

            }if (info.pierre_st_martin.nombre_piste >= 18 && info.pierre_st_martin.nombre_piste < 25 ) {
                
                info.pierre_st_martin.nombre_piste = 2;

            }if (info.pierre_st_martin.nombre_piste >= 25) {
                
                info.pierre_st_martin.nombre_piste = 1;

            }

        }info.pierre_st_martin.prix = document.body.children["body"].children[21].valueAsNumber;
        if (info.pierre_st_martin.prix) {
            
            if (info.pierre_st_martin.prix <= 25) {
                
                info.pierre_st_martin.prix = 1;

            }if (info.pierre_st_martin.prix > 25 && info.pierre_st_martin.prix < 35) {
                
                info.pierre_st_martin.prix = 2;

            }if (info.pierre_st_martin.prix >= 35 && info.pierre_st_martin.prix < 45 ) {
                
                info.pierre_st_martin.prix = 3;

            }if (info.pierre_st_martin.prix >= 45) {
                
                info.pierre_st_martin.prix = 4;

            }

        }info.pierre_st_martin.heure_de_soleil = document.body.children["body"].children[27].valueAsNumber;
        if (info.pierre_st_martin.heure_de_soleil) {
            
            if (info.pierre_st_martin.heure_de_soleil == 0) {
                
                info.pierre_st_martin.heure_de_soleil = 4;

            }if (info.pierre_st_martin.heure_de_soleil > 0 && info.pierre_st_martin.heure_de_soleil < 5) {
                
                info.pierre_st_martin.heure_de_soleil = 3;

            }if (info.pierre_st_martin.heure_de_soleil >= 5 && info.pierre_st_martin.heure_de_soleil < 9 ) {
                
                info.pierre_st_martin.heure_de_soleil = 2;

            }if (info.pierre_st_martin.heure_de_soleil == 9) {
                
                info.pierre_st_martin.heure_de_soleil = 1;

            }

        }

        resulta.global.pierre_st_martin = info.pierre_st_martin.qualiter_neige+info.pierre_st_martin.hauteur_neige+info.pierre_st_martin.nombre_piste+info.pierre_st_martin.prix+info.pierre_st_martin.heure_de_soleil;

    };if (Page === "grand tourmalet") {
        
        document.body.children["head"].children["titre"].innerHTML="Pierre ST Martin";
        document.body.children["head"].children["suivant"].innerHTML="Luz-Ardiden >";
        Page = "pierre st martin";
        
        info.grand_tourmalet.qualiter_neige = document.body.children["body"].children[3].value;
        if (info.grand_tourmalet.qualiter_neige) {

            if (info.grand_tourmalet.qualiter_neige == "verglas") {
                
                info.grand_tourmalet.qualiter_neige = 4;

            }if (info.grand_tourmalet.qualiter_neige == "fondue") {
                
                info.grand_tourmalet.qualiter_neige = 3;

            }if (info.grand_tourmalet.qualiter_neige == "poudreuse" ) {
                
                info.grand_tourmalet.qualiter_neige = 2;

            }if (info.grand_tourmalet.qualiter_neige == "fraiche") {
                
                info.grand_tourmalet.qualiter_neige = 1;

            }

        }info.grand_tourmalet.hauteur_neige = document.body.children["body"].children[9].valueAsNumber;
        if (info.grand_tourmalet.hauteur_neige) {
            
            if (info.grand_tourmalet.hauteur_neige <= 30) {
                
                info.grand_tourmalet.hauteur_neige = 4;

            }if (info.grand_tourmalet.hauteur_neige > 30 && info.grand_tourmalet.hauteur_neige < 60) {
                
                info.grand_tourmalet.hauteur_neige = 3;

            }if (info.grand_tourmalet.hauteur_neige >= 60 && info.grand_tourmalet.hauteur_neige < 100 ) {
                
                info.grand_tourmalet.hauteur_neige = 2;

            }if (info.grand_tourmalet.hauteur_neige >= 100) {
                
                info.grand_tourmalet.hauteur_neige = 1;

            }

        }info.grand_tourmalet.nombre_piste = document.body.children["body"].children[15].valueAsNumber;
        if (info.grand_tourmalet.nombre_piste) {
            
            if (info.grand_tourmalet.nombre_piste <= 10) {
                
                info.grand_tourmalet.nombre_piste = 4;

            }if (info.grand_tourmalet.nombre_piste > 10 && info.grand_tourmalet.nombre_piste < 18) {
                
                info.grand_tourmalet.nombre_piste = 3;

            }if (info.grand_tourmalet.nombre_piste >= 18 && info.grand_tourmalet.nombre_piste < 25 ) {
                
                info.grand_tourmalet.nombre_piste = 2;

            }if (info.grand_tourmalet.nombre_piste >= 25) {
                
                info.grand_tourmalet.nombre_piste = 1;

            }

        }info.grand_tourmalet.prix = document.body.children["body"].children[21].valueAsNumber;
        if (info.grand_tourmalet.prix) {
            
            if (info.grand_tourmalet.prix <= 25) {
                
                info.grand_tourmalet.prix = 1;

            }if (info.grand_tourmalet.prix > 25 && info.cauterets.prix < 35) {
                
                info.grand_tourmalet.prix = 2;

            }if (info.grand_tourmalet.prix >= 35 && info.cauterets.prix < 45 ) {
                
                info.grand_tourmalet.prix = 3;

            }if (info.grand_tourmalet.prix >= 45) {
                
                info.grand_tourmalet.prix = 4;

            }

        }info.grand_tourmalet.heure_de_soleil = document.body.children["body"].children[27].valueAsNumber;
        if (info.grand_tourmalet.heure_de_soleil) {
            
            if (info.grand_tourmalet.heure_de_soleil == 0) {
                
                info.grand_tourmalet.heure_de_soleil = 4;

            }if (info.grand_tourmalet.heure_de_soleil > 0 && info.grand_tourmalet.heure_de_soleil < 5) {
                
                info.grand_tourmalet.heure_de_soleil = 3;

            }if (info.grand_tourmalet.heure_de_soleil >= 5 && info.grand_tourmalet.heure_de_soleil < 9 ) {
                
                info.grand_tourmalet.heure_de_soleil = 2;

            }if (info.grand_tourmalet.heure_de_soleil == 9) {
                
                info.grand_tourmalet.heure_de_soleil = 1;

            }

        }

        resulta.global.grand_tourmalet = info.grand_tourmalet.qualiter_neige+info.grand_tourmalet.hauteur_neige+info.grand_tourmalet.nombre_piste+info.grand_tourmalet.prix+info.grand_tourmalet.heure_de_soleil;

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

            }if (info.gourette.prix > 25 && info.gourette.prix < 35) {
                
                info.gourette.prix = 2;

            }if (info.gourette.prix >= 35 && info.gourette.prix < 45 ) {
                
                info.gourette.prix = 3;

            }if (info.gourette.prix >= 45) {
                
                info.gourette.prix = 4;

            }

        }info.gourette.heure_de_soleil = document.body.children["body"].children[27].valueAsNumber;
        if (info.gourette.heure_de_soleil) {
            
            if (info.gourette.heure_de_soleil == 0) {
                
                info.gourette.heure_de_soleil = 4;

            }if (info.gourette.heure_de_soleil > 0 && info.gourette.heure_de_soleil < 5) {
                
                info.gourette.heure_de_soleil = 3;

            }if (info.gourette.heure_de_soleil >= 5 && info.gourette.heure_de_soleil < 9 ) {
                
                info.gourette.heure_de_soleil = 2;

            }if (info.gourette.heure_de_soleil == 9) {
                
                info.gourette.heure_de_soleil = 1;

            }

        }

        resulta.global.gourette = info.gourette.qualiter_neige+info.gourette.hauteur_neige+info.gourette.nombre_piste+info.gourette.prix+info.gourette.heure_de_soleil;


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
