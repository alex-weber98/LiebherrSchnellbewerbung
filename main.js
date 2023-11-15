
// function sendMail(body)
// {
//     var transporter = nodemailer.createTransport(smtpTransport({
//         host: "smtpanon.liebherr.i", // hostname
//         secure: false, // use SSL
//         port: 25, // port for secure SMTP
//         tls: {
//            rejectUnauthorized: false
//         }
//     }));

//  var mailOptions = {
//         from: 'client.lbh@liebherr.com', // sender address
//         to: 'alexander.weber@liebherr.com', // list of receivers
//         cc: '', // Comma separated list or an array
//         subject: 'Schnellbewerbung', // Subject line
//         html: body // html body
//     };

// transporter.sendMail(mailOptions, function(error, info){
//         if(error){
//             console.log("/sendmail error");
//             console.log(error);
//             res.sendStatus(500);
//             return;
//         }else{
//             console.log("Message sent: " + info.response);
//             // if you don't want to use this transport object anymore, uncomment following line
//             socketTimeout: 30 * 1000 // 0.5 min: Time of inactivity until the connection is closed
//             transporter.close(); // shut down the connection pool, no more messages
//             res.sendStatus(200);
//         }

//         // if you don't want to use this transport object anymore, uncomment following line
//         transporter.close(); // shut down the connection pool, no more messages
//     });
// }


function createCheckbox(parentElement, cbxName){
    element.innerHTML += `
    <input type="checkbox" id="cbx_${cbxName}" name="${cbxName}" value="${cbxName}">
    <label for="cbx_${cbxName}">${cbxName}</label><br>
    `;    
}

function sendMail(body){
    const credentials = {
        host: 'smtpanon.liebherr.i',
        port: 25,
        secure: false,
        // auth: {
        //   user: 'username',
        //   pass: 'password'    
        // }
      }
      smtp.connect(credentials)
        .then(info => {
          // connected, credentials OK 
        })

    const email = {
        from: 'client.lbh@liebherr.com',
        to: 'alexander.weber@liebherr.com',
        subject: 'Schnellbewerbung',
        html: body
    }

    smtp.addMailToQueue(email);

    // connect and send entire queue
    smtp.connect(credentials)
        .then(() => smtp.flushQueue())
        .catch(err => console.error(err));

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

    // sendMail(body);

    
    // Email.send({
    //     Host : "smtpanon.liebherr.i",
    //     To : "alexander.weber@liebherr.com",
    //     From : "client.lbh@liebherr.com",
    //     Username: "",
    //     Password: "",
    //     Subject : "Schnellbewerbung",
    //     Body : body
    // }).then(
    //   message => alert(message)
    // );

    // Email.send({
    //     Host : "smtp.elasticemail.com",
    //     Username : "liebherr@bewerbungsformular.com",
    //     Password : "95AB8BD9262CBAE0C0C7419E84B757E8130D",
    //     // To : 'alex_-_weber@hotmail.com',
    //     To : "alexander.weber@liebherr.com",
    //     From : "alex_-_weber@hotmail.com",
    //     Subject : "Schnellbewerbung",
    //     Body : body
    // }).then(
    //   message => alert(message)
    // );

    // var blob = new Blob(["Welcome to Websparrow.org."],
    //     { type: "text/plain;charset=utf-8" });
    
    // saveAs(blob, "static.txt");

    save("test.txt", body);
    // location.reload();

}



// function sendEmail() { 
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


// } 
