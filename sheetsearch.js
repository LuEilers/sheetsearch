var googleIDArray = ["012835365471535021232:maxqgebnsam", "012835365471535021232:foutaswj8to", "012835365471535021232:lufb9jbuxba", "012835365471535021232:yjbanjxbrig"];
        var suchnummer;
        if ((localStorage.getItem('speicher') == googleIDArray[0]) || (localStorage.getItem('speicher') == googleIDArray[1]) || (localStorage.getItem('speicher') == googleIDArray[2]) || (localStorage.getItem('speicher') == googleIDArray[3])) {
            suchnummer = localStorage.getItem('speicher');
        }
        else {
            suchnummer = googleIDArray[0];
        }
        var cx;
        (function () {
            cx = suchnummer;
            var gcse = document.createElement('script'); gcse.type = 'text/javascript'; gcse.async = true;
            gcse.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') + '//www.google.com/cse/cse.js?cx=' + cx;
            var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(gcse, s);
            gcse.async = true;
        })();
        
        var intMin = 16; // Min. Höhe des DIVs in vw
        var intMax   = 60; // Max. Höhe des DIVs in vw
        var intStep  = 3;   // Schrittweite, um die das DIV in seiner Grösse geändert wird
        var intDelay = 5;   // Verzögerung in Millisekunden

        var blnBig   = false;
        var hTimer   = null;
        var giveID;
        var givescrollID
        var actualID;

        var bool = false;
        var bool1 = false;
        var bool2 = false;
        var bool3 = false;
        var bool4 = false;
        var bool5 = false;

        var objDiv2;
        var objDiv3;
        var objDiv4;

        var boolArray = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
        var divIDArray = ["divID1", "divID2", "divID3", "divID4", "divID5", "divID6", "divID7", "divID8", "divID9", "divID10", "divID11", "divID12", "divID13", "divID14", "divID15", "divID16"];
        var scrollIDArray = ["scrollbutton1", "scrollbutton2", "scrollbutton3", "scrollbutton4", "scrollbutton5", "scrollbutton6", "scrollbutton7", "scrollbutton8", "scrollbutton9", "scrollbutton10", "scrollbutton11", "scrollbutton12", "scrollbutton13", "scrollbutton14", "scrollbutton15", "scrollbutton16", "scrollbutton17", "scrollbutton18", "scrollbutton19", "scrollbutton20", "scrollbutton21", "scrollbutton22", "scrollbutton23", "scrollbutton24", "scrollbutton25", "scrollbutton26", "scrollbutton27", "scrollbutton28", "scrollbutton29", "scrollbutton30", "scrollbutton31", "scrollbutton32"];

        function initResize(giveID, givescrollID, givescrollID2) {
            actualID = giveID;
            for (i = 0; i < 16; i++) {
                if (giveID == divIDArray[i]) {
                    boolArray[i] = (boolArray[i]) ? false : true;
                    bool = boolArray[i];
                }
            }
            objDiv2 = document.getElementById(giveID);
            objDiv3 = document.getElementById(givescrollID);
            objDiv4 = document.getElementById(givescrollID2);
            if (bool) {
                objDiv2.style.overflow = "scroll";
                objDiv3.src = "buttons/scrollupshadow.png";
                objDiv4.src = "buttons/scrollupshadow.png";
            }
            else if (!bool) {
                objDiv2.scrollTop = 0;
                objDiv2.style.overflow = "hidden";
                objDiv3.src = "buttons/scrolldownshadow.png";
                objDiv4.src = "buttons/scrolldownshadow.png";
            }
            // Falls noch ein Timer läuft -> beenden
            if(hTimer != null) window.clearTimeout(hTimer);
            // Resize-Funktion verzögert aufrufen
            hTimer = window.setTimeout("resizeDiv()", intDelay);
        }

        function resizeDiv(divID){
            // Vorzeichen zum Vergrössern (1)/Verkleinern (-1) bestimmen
            var intSgn = (bool)? 1 : -1;

            // Element ermitteln, das in der Grösser verändert werden soll
            var objDiv = document.getElementById(actualID);
            // Neue Grösse zuweisen
            objDiv.style.height = (parseFloat(objDiv.style.height) + intSgn*intStep) + "vw";
            // Falls die neue Grösse noch innerhalb der Grenzen liegt -> Resize-Funktion erneut aufrufen
            if((parseFloat(objDiv.style.height) >= intMin) && (parseFloat(objDiv.style.height) <= intMax)){
                hTimer = window.setTimeout("resizeDiv()", intDelay);
            }
        }
        var instrument;
/*
        function auswahlInstr() {

            for (var i = 0; i < document.myForm.length; i++) {

                if (document.myForm.elements[i].checked == true) {

                    document.myForm.myField.value = document.myForm.elements[i].value;
                    instrument = document.myForm.elements[i].value;
                }
                switch (instrument) {
                    case "Piano":
                        localStorage.removeItem('speicher');
                        localStorage.setItem('speicher', '012835365471535021232:maxqgebnsam');
                        document.myForm.myField.value = localStorage.getItem('speicher');
                        break;
                    case "Guitar":
                        localStorage.removeItem('speicher');
                        localStorage.setItem('speicher', '012835365471535021232:foutaswj8to');
                        document.myForm.myField.value = localStorage.getItem('speicher');
                        break;
                    case "Flute":
                        localStorage.removeItem('speicher');
                        localStorage.setItem('speicher', '012835365471535021232:lufb9jbuxba');
                        document.myForm.myField.value = localStorage.getItem('speicher');
                        break;
                }
                
            }
            window.location.reload();
        }
        */
        function changeColour() {
            var divArray = new Array(10);
            var j;
            for (i = 0; i < 16; i++) {
                j = i * 2;
                divArray[j] = document.getElementById(scrollIDArray[j]);
                divArray[j+1] = document.getElementById(scrollIDArray[j+1]);
                if (boolArray[i]) {
                    divArray[j].src = "buttons/scrollupwhite.png";
                    divArray[j+1].src = "buttons/scrollupwhite.png";
                }
                else if (!boolArray[i]) {
                    divArray[j].src = "buttons/scrolldownwhite.png";
                    divArray[j+1].src = "buttons/scrolldownwhite.png";
                }
            }
            
        }
        
        function selectInst(auswahlID) {
            switch (auswahlID) {
                case "auswahlpiano":
                    localStorage.removeItem('speicher');
                    localStorage.setItem('speicher', googleIDArray[0]);
                    localStorage.removeItem('speicherChange');
                    localStorage.setItem('speicherChange', 'Piano');
                    //document.myForm.myField.value = localStorage.getItem('speicher');
                    break;
                case "auswahlguitar":
                    localStorage.removeItem('speicher');
                    localStorage.setItem('speicher', googleIDArray[1]);
                    localStorage.removeItem('speicherChange');
                    localStorage.setItem('speicherChange', 'Guitar');
                    //document.myForm.myField.value = localStorage.getItem('speicher');
                    break;
                case "auswahlflute":
                    localStorage.removeItem('speicher');
                    localStorage.setItem('speicher', googleIDArray[2]);
                    localStorage.removeItem('speicherChange');
                    localStorage.setItem('speicherChange', 'Flute');
                    //document.myForm.myField.value = localStorage.getItem('speicher');
                    break;
                case "auswahlvoice":
                    localStorage.removeItem('speicher');
                    localStorage.setItem('speicher', googleIDArray[3]);
                    localStorage.removeItem('speicherChange');
                    localStorage.setItem('speicherChange', 'Voice');
                    //document.myForm.myField.value = localStorage.getItem('speicher');
                    break;
            }
            window.location.reload();
        }
        $(document).ready(function () {
            $("#bildlos").click(function () {
                $('html, body').delay(1500).animate({
                    scrollTop: $("#divID2").offset().top
                }, 1000);
                
            });
        });

        /**
         * Get the value of a querystring
         * @param  {String} field The field to get the value of
         * @param  {String} url   The URL to get the value from (optional)
         * @return {String}       The field value
         */
        var getQueryString = function (field, url) {
            var href = url ? url : window.location.href;
            var reg = new RegExp('[?&]' + field + '=([^&#]*)', 'i');
            var string = reg.exec(href);
            return string ? string[1] : null;
        };
       
        $(document).ready(function () {
            $("#hoch").click(function () {
                $('html, body').animate({
                    scrollTop: $("#auswahlpiano").offset().top
                }, 1000);
            });
        });
     