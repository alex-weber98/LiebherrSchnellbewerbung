
function createCheckbox(parentElement, cbxName){
    element.innerHTML += `
    <input type="checkbox" id="cbx_${cbxName}" name="${cbxName}" value="${cbxName}">
    <label for="cbx_${cbxName}">${cbxName}</label><br>
    `;    
}



const cbxBereich = ["Administration",
"Buchhaltung / Finanzen /Controlling",
"Einkauf",
"Forschung / Entwicklung",
"Gastronomie / Service",
"Informationstechnologie / Software",
"Ingenieurwesen ",
"Kundendienst",
"Logistik",
"Marketing / PR / Kommunikation",
"Personal",
"Produktion",
"Produktionsplanung /-steuerung",
"Prozess- / Projektmanagement",
"Qualitätsmanagement",
"Recht",
"Sicherheitswesen",
"Vertrieb"];


var cbxName = "Administration";
var element = document.getElementById("bereich");

for(let i = 0; i < cbxBereich.length; i++)
{
    let item = cbxBereich[i];
    createCheckbox(element, item);
}


function save(filename, data) {
    const blob = new Blob([data], {type: 'text/csv'});
    if(window.navigator.msSaveOrOpenBlob) {
        window.navigator.msSaveBlob(blob, filename);
    }
    else{
        const elem = window.document.createElement('a');
        elem.href = window.URL.createObjectURL(blob);
        elem.download = filename;        
        document.body.appendChild(elem);
        elem.click();        
        document.body.removeChild(elem);
    }
}


function submit(){

    let bereiche = [];
    let erfahrung;

    console.log("i was clicked")

    // ----------- Bereiche ------------------
    var element = document.getElementById("bereich");

    let children = element.children;

    for(let i = 0; i < children.length; i++)
    {
        let item = children[i];
        if(item.type == "checkbox" && item.checked)
        {
            console.log(item.value);
            bereiche.push(item.value);
        }
    }

    // ----------- Berufserfahrung
    let be_ids = ["be_0", "be_1", "be_2"]
    
    for(let i = 0; i < be_ids.length; i++)
    {
        let element = document.getElementById(be_ids[i]);

        if(element.checked == true){
            erfahrung = element.value;
            break;
        }
    }


    console.log(bereiche);

    bereicheLi = "";

    for(let i = 0; i < bereiche.length; i++)
    {
        bereicheLi += `- ${bereiche[i]}\r\n`;
    }

    console.log(bereicheLi);


    body=`
Bereiche:
${bereicheLi}

Berufserfahrung: ${erfahrung}

Vorname: ${document.getElementById("Vorname").value}
Nachname: ${document.getElementById("Nachname").value}
Telefonnummer: ${document.getElementById("Telefonnummer").value}
Email: ${document.getElementById("E-Mail").value}
LinkedIn: ${document.getElementById("LinkedIn").value}
`;

 
    save(`${document.getElementById("Vorname").value}_${document.getElementById("Nachname").value}.txt`, body);

    location.reload();

}

