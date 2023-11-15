
function createCheckbox(parentElement, cbxName){
    element.innerHTML += `
    <input type="checkbox" id="cbx_${cbxName}" name="${cbxName}" value="${cbxName}">
    <label for="cbx_${cbxName}">${cbxName}</label><br>
    `;    
}



// console.log("Hello world!");



// var x = document.createElement("INPUT");
// x.setAttribute("type", "checkbox");
// element.appendChild(x);

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


function submit(){

    // let doc = document.;

    // window.location.href = "mailto:?subject=" + document.title + "&body=" + doc;

    // window.open('mailto:alexander.weber@liebherr.com?subject=subject&body=body');
    // window.location.href = "mailto:?subject=" + document.title + "&body=" + encodeURI(document.location);


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

    // console.log(erfahrung);


    //let body = "";

    // let body = document.getElementsByTagName("body")
    // body = JSON.stringify(body);
    
    
    // let body = document.body.outerHTML;
    // console.log(body);

    console.log(bereiche);

    bereicheLi = "";

    for(let i = 0; i < bereiche.length; i++)
    {
        bereicheLi += `<li> ${bereiche[i]}</li>`;
    }

    console.log(bereicheLi);


    body=`
        <p>Bereiche:</p>
        <ul>
            ${bereicheLi}
        </ul>

        <p>Berufserfahrung: ${erfahrung}</p>

        <p>Vorname: ${document.getElementById("Vorname").value}</p>
        <p>Nachname: ${document.getElementById("Nachname").value}</p>
        <p>Telefonnummer: ${document.getElementById("Telefonnummer").value}</p>
        <p>Email: ${document.getElementById("E-Mail").value}</p>
        <p>LinkedIn: ${document.getElementById("LinkedIn").value}</p>
    
    `;


    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "liebherr@bewerbungsformular.com",
        Password : "95AB8BD9262CBAE0C0C7419E84B757E8130D",
        // To : 'alex_-_weber@hotmail.com',
        To : "alexander.weber@liebherr.com",
        From : "alex_-_weber@hotmail.com",
        Subject : "Schnellbewerbung",
        Body : body
    }).then(
      message => alert(message)
    );

    location.reload();

}

function sendEmail() { 
    // Email.send({ 
    //   Host: "smtpanon.liebherr.i", 
    //   //Username: "client.lbh@liebherr.com",
        
    //   //From: "client.lbh@liebherr.com", 
    //   To: 'alexander.weber@liebherr.com', 
    //   Subject: "Sending Email using javascript", 
    //   Body: "Test", 
    // }) 
    //   .then(function (message) { 
    //     alert("mail sent successfully") 
    //   }); 


    //   Email.send({ 
    //     Host: "smtp.elasticemail.com", 
    //     Username: "liebherr@bewerbungsformular.com",
    //     Passwort: "95AB8BD9262CBAE0C0C7419E84B757E8130D",
          
    //     From: "liebherr@bewerbungsformular.com", 
    //     To: 'alexander.weber@liebherr.com', 
    //     Subject: "Sending Email using javascript", 
    //     Body: "Test", 
    //   }) 
    //     .then(function (message) { 
    //       alert("mail sent successfully") 
    //     }); 


} 
