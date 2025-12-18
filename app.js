
        
    
        
        document.body.children[0].children[0].children[1].children[1].innerHTML=localStorage.getItem("qualité_neige_cauterets");
        document.body.children[0].children[0].children[2].children[1].innerHTML=localStorage.getItem("qualité_neige_gourette");
        document.body.children[0].children[0].children[3].children[1].innerHTML=localStorage.getItem("qualité_neige_grand_tourmalet");
        document.body.children[0].children[0].children[4].children[1].innerHTML=localStorage.getItem("qualité_neige_pierre_st_martin");
        document.body.children[0].children[0].children[5].children[1].innerHTML=localStorage.getItem("qualité_neige_luz_ardiden");
        document.body.children[0].children[0].children[6].children[1].innerHTML=localStorage.getItem("qualité_neige_peyragude");
        document.body.children[0].children[0].children[7].children[1].innerHTML=localStorage.getItem("qualité_neige_piau_engaly");


           document.body.children[0].children[0].children[1].children[1].addEventListener("click",()=>{

            window.location.href = "http://127.0.0.1:5500/SKI/G%C3%A9neration_2/index.html?/qualiter_neige/cauteret";

        });document.body.children[0].children[0].children[2].children[1].addEventListener("click",()=>{

            window.location.href = "http://127.0.0.1:5500/SKI/G%C3%A9neration_2/index.html?/qualiter_neige/gourette";

        });document.body.children[0].children[0].children[3].children[1].addEventListener("click",()=>{

            window.location.href = "http://127.0.0.1:5500/SKI/G%C3%A9neration_2/index.html?/qualiter_neige/grand_tourmalet";

        });document.body.children[0].children[0].children[4].children[1].addEventListener("click",()=>{

            window.location.href = "http://127.0.0.1:5500/SKI/G%C3%A9neration_2/index.html?/qualiter_neige/pierre_st_martin";

        });document.body.children[0].children[0].children[5].children[1].addEventListener("click",()=>{

            window.location.href = "http://127.0.0.1:5500/SKI/G%C3%A9neration_2/index.html?/qualiter_neige/luz_ardiden";

        });document.body.children[0].children[0].children[6].children[1].addEventListener("click",()=>{

            window.location.href = "http://127.0.0.1:5500/SKI/G%C3%A9neration_2/index.html?/qualiter_neige/peyragude";

        });document.body.children[0].children[0].children[7].children[1].addEventListener("click",()=>{

            window.location.href = "http://127.0.0.1:5500/SKI/G%C3%A9neration_2/index.html?/qualiter_neige/piau_engaly";

        });

        document.body.children[1].children["Validation"].addEventListener("click",()=>{
            let resulta_01;let resulta_02;let resulta_03;let resulta_04;let resulta_05;
            let Température_Max = document.body.children[1].children[3].valueAsNumber;
            let Température_Min = document.body.children[1].children[9].valueAsNumber;
            let vitesse_vent = document.body.children[1].children[15].valueAsNumber;
            let precipitation = document.body.children[1].children[21].valueAsNumber;
            let ensoleillement = document.body.children[1].children[27].valueAsNumber;
            let chute_neige = document.body.children[1].children[33].valueAsNumber;
            
            
            if (Température_Max <= -3) {
                resulta_01 = 3;
            };if (Température_Max > -3) {
                resulta_01 = 2;
            };if (Température_Max > 0) {
                resulta_01 = 1;
            };
            
            if (Température_Min <= -6) {
                resulta_01 = resulta_01 + 3;
            };if (Température_Min > -6 && Température_Min <= -2) {
                resulta_01 = resulta_01 + 2;
            };if (Température_Min > -2) {
                resulta_01 = resulta_01 + 1;
            };
            
            if (vitesse_vent <= 15) {
                resulta_02 = 3;
            }if (vitesse_vent > 15 && vitesse_vent < 30) {
                resulta_02 = 2;
            }if (vitesse_vent >= 30) {
                resulta_02 = 1;
            }

            if (precipitation < 5) {
                resulta_03 = 3;
            }if (precipitation >= 5 && precipitation <= 10) {
                resulta_03 = 2;
            }if (precipitation > 10) {
                resulta_03 = 1;
            }
            
            if (ensoleillement < 2) {
                resulta_04 = 3;
            }if (ensoleillement >= 2 && ensoleillement <= 4) {
                resulta_04 = 2;
            }if (ensoleillement > 4) {
                resulta_04 = 1;
            }

            if (chute_neige > 10) {
                resulta_05 = 3;
            }if (chute_neige >= 3 && chute_neige <= 10) {
                resulta_05 = 2;
            }if (chute_neige < 3) {
                resulta_05 = 1;
            }

                let resulta_06 = resulta_01 + resulta_02 + resulta_03 + resulta_04 + resulta_05;
             if (window.location.href == "http://127.0.0.1:5500/SKI/G%C3%A9neration_2/index.html?/qualiter_neige/cauteret") {
                localStorage.setItem("qualité_neige_cauterets",resulta_06)
                
            }if (window.location.href == "http://127.0.0.1:5500/SKI/G%C3%A9neration_2/index.html?/qualiter_neige/gourette") {
                localStorage.setItem("qualité_neige_gourette",resulta_06)
                
            }if (window.location.href == "http://127.0.0.1:5500/SKI/G%C3%A9neration_2/index.html?/qualiter_neige/grand_tourmalet") {
                localStorage.setItem("qualité_neige_grand_tourmalet",resulta_06)
                
            }if (window.location.href == "http://127.0.0.1:5500/SKI/G%C3%A9neration_2/index.html?/qualiter_neige/pierre_st_martin") {
                localStorage.setItem("qualité_neige_pierre_st_martin",resulta_06)
                
            }if (window.location.href == "http://127.0.0.1:5500/SKI/G%C3%A9neration_2/index.html?/qualiter_neige/luz_ardiden") {
                localStorage.setItem("qualité_neige_luz_ardiden",resulta_06)
                
            }if (window.location.href == "http://127.0.0.1:5500/SKI/G%C3%A9neration_2/index.html?/qualiter_neige/peyragude") {
                localStorage.setItem("qualité_neige_peyragude",resulta_06)
                
            }if (window.location.href == "http://127.0.0.1:5500/SKI/G%C3%A9neration_2/index.html?/qualiter_neige/piau_engaly") {
                localStorage.setItem("qualité_neige_piau_engaly",resulta_06)
                
            }
            window.location.href = "http://127.0.0.1:5500/SKI/G%C3%A9neration_2/index.html?/calcul";

        });

        window.addEventListener("load",()=>{
            if (window.location.href == "http://127.0.0.1:5500/SKI/G%C3%A9neration_2/index.html?/qualiter_neige/cauteret") {
                
                document.body.children[0].style.position="fixed";
                document.body.children[0].style.left="500%";

                
                document.body.children[1].style.position="absolute";
                document.body.children[1].style.left="50%";

                document.body.children["qualiter_neige"].children["meteo"].href = "https://www.meteoblue.com/fr/meteo/semaine/cauterets_france_3028152";

            }if (window.location.href == "http://127.0.0.1:5500/SKI/G%C3%A9neration_2/index.html?/qualiter_neige/gourette") {
                
                document.body.children[0].style.position="fixed";
                document.body.children[0].style.left="500%";

                
                document.body.children[1].style.position="absolute";
                document.body.children[1].style.left="50%";

                document.body.children["qualiter_neige"].children["meteo"].href = "https://www.meteoblue.com/fr/meteo/semaine/gourette_france_3015533";

            }if (window.location.href == "http://127.0.0.1:5500/SKI/G%C3%A9neration_2/index.html?/qualiter_neige/grand_tourmalet") {
                
                document.body.children[0].style.position="fixed";
                document.body.children[0].style.left="500%";

                
                document.body.children[1].style.position="absolute";
                document.body.children[1].style.left="50%";

                document.body.children["qualiter_neige"].children["meteo"].href = "https://www.meteoblue.com/fr/meteo/semaine/col-du-tourmalet_france_2972267";

            }if (window.location.href == "http://127.0.0.1:5500/SKI/G%C3%A9neration_2/index.html?/qualiter_neige/pierre_st_martin") {
                
                document.body.children[0].style.position="fixed";
                document.body.children[0].style.left="500%";

                
                document.body.children[1].style.position="absolute";
                document.body.children[1].style.left="50%";

                document.body.children["qualiter_neige"].children["meteo"].href = "https://www.meteoblue.com/fr/meteo/semaine/arette-pierre-saint-martin_france_6698342";

            }if (window.location.href == "http://127.0.0.1:5500/SKI/G%C3%A9neration_2/index.html?/qualiter_neige/luz_ardiden") {
                
                document.body.children[0].style.position="fixed";
                document.body.children[0].style.left="500%";

                
                document.body.children[1].style.position="absolute";
                document.body.children[1].style.left="50%";

                document.body.children["qualiter_neige"].children["meteo"].href = "https://www.meteoblue.com/fr/meteo/semaine/station-de-ski-de-luz---ardiden_france_11467715";

            }if (window.location.href == "http://127.0.0.1:5500/SKI/G%C3%A9neration_2/index.html?/qualiter_neige/peyragude") {
                
                document.body.children[0].style.position="fixed";
                document.body.children[0].style.left="500%";

                
                document.body.children[1].style.position="absolute";
                document.body.children[1].style.left="50%";

                document.body.children["qualiter_neige"].children["meteo"].href = "https://www.meteoblue.com/fr/meteo/semaine/peyragudes_france_6559668";

            }if (window.location.href == "http://127.0.0.1:5500/SKI/G%C3%A9neration_2/index.html?/qualiter_neige/piau_engaly") {
                
                document.body.children[0].style.position="fixed";
                document.body.children[0].style.left="500%";

                
                document.body.children[1].style.position="absolute";
                document.body.children[1].style.left="50%";

                document.body.children["qualiter_neige"].children["meteo"].href = "https://www.meteoblue.com/fr/meteo/semaine/piau-engaly_france_8426488";

            }
            if (window.location.href == "http://127.0.0.1:5500/SKI/G%C3%A9neration_2/index.html") {
                
                window.location.href = "http://127.0.0.1:5500/SKI/G%C3%A9neration_2/index.html?/calcul";

            }
        });
        