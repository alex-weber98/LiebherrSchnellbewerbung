
function createCheckbox(parentElement, cbxName){
    element.innerHTML += `
    <div>
    <input type="checkbox" id="cbx_${cbxName}" name="${cbxName}" value="${cbxName}">
    <label for="cbx_${cbxName}">${cbxName}</label><br>
    </div>
    `;    
}


// // font size of textboxes
// $(".bigTextbox").css('fontSize', '40px');


const cbxBereich = ["Administration",
"Buchhaltung / Finanzen / Controlling",
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

const cbxBewerbungfür =["Praktikum",
"Bachelor-/Master-/Diplomarbeit",
"Direkteinstieg",
"Trainee"]


// var cbxName = "Administration";
var element = document.getElementById("bereich");

for(let i = 0; i < cbxBereich.length; i++)
{
    let item = cbxBereich[i];
    createCheckbox(element, item);
}


var element = document.getElementById("bewerbungfür");
for(let i = 0; i< cbxBewerbungfür.length; i++){
    let item = cbxBewerbungfür[i];
    createCheckbox(element, item);
}


function save(filename, data) {
    const blob = new Blob([data], {type: 'plain/text'});
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

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}


function submit(){

    let bereiche = [];
    let bewerbungfür = [];
    let erfahrung;

    console.log("i was clicked")

    // ----------- Bewerbung für ------------------
    for(let i = 0; i < cbxBewerbungfür.length; i++)
    {
        let item = document.getElementById(`cbx_${cbxBewerbungfür[i]}`);
        if(item.type == "checkbox" && item.checked)
        {
            console.log(item.value);
            bewerbungfür.push(item.value);
        }
    }



    // ----------- Bereiche ------------------
    for(let i = 0; i < cbxBereich.length; i++)
    {
        let item = document.getElementById(`cbx_${cbxBereich[i]}`);
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

    var bereicheLi = "";
    for(let i = 0; i < bereiche.length; i++)
    {
        bereicheLi += `- ${bereiche[i]}\r\n`;
    }
    console.log(bereicheLi);

    var beewerbungFürLi = "";
    for(let i = 0; i < bewerbungfür.length; i++)
    {
        beewerbungFürLi += `- ${bewerbungfür[i]}\r\n`;
    }

    console.log(beewerbungFürLi);


    var body=`
Bewerbung für:
${beewerbungFürLi}

Bereiche als:
${bereicheLi}

Berufserfahrung: ${erfahrung}

Abgeschlossene Ausbildung: ${document.getElementById("AusbildungAbgeschlossen").value}

Aktuelle Ausbildung: ${document.getElementById("AusbildungAktuell").value}

Vorname: ${document.getElementById("Vorname").value}
Nachname: ${document.getElementById("Nachname").value}
Telefonnummer: ${document.getElementById("Telefonnummer").value}
Email: ${document.getElementById("E-Mail").value}
LinkedIn: ${document.getElementById("LinkedIn").value}
`;

 
    save(`${document.getElementById("Vorname").value}_${document.getElementById("Nachname").value}.txt`, body);

    // delay(1000).then(() => location.reload());


}

