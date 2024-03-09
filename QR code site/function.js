var qrcode = new QRCode("qrcode", {
    colorDark : "#000000",
    colorLight : "#ffffff",
});

function makeCode() {
    
    if (opt == false) {
        document.getElementById("opt_button").style.width = "50px";
        document.getElementById("opt_button").innerHTML = "Opt";
        document.getElementById("opt_text").style.display= "none";
        document.getElementById("qr_button").style.width= "208px";
        document.getElementById("qr_button").innerHTML = "Générer";
        opt = true;
    }
    
    var DefaultText = document.getElementById("text"); 
    var opt1Text = document.getElementById("option1"); 
    var opt2Text = document.getElementById("option2"); 
    var opt3Text = document.getElementById("option3"); 
    var opt4Text = document.getElementById("option4"); 
    var opt5Text = document.getElementById("option5"); 
    var opt1 = "";
    var opt2 = "";
    var opt3 = "";
    var opt4 = "";
    var opt5 = "";

    if (document.getElementById("option1").value !== "") {
        opt1 = opt1Text.value;
    } else {opt1 = "No data"; }
    
    if (document.getElementById("option2").value !== "") {
        opt2 = opt2Text.value;
    } else {opt2 = "No data"; }
    
    if (document.getElementById("option3").value !== "") {
        opt3 = opt3Text.value;
    } else {opt3 = "No data"; }
    
    if (document.getElementById("option4").value !== "") {
        opt4 = opt4Text.value;
    } else {opt4 = "No data"; }
    
    if (document.getElementById("option5").value !== "") {
        opt5 = opt5Text.value;
    } else {opt5 = "No data"; }
    
    if (DefaultText.value != "") {
        qrcode.makeCode(DefaultText.value + "\n\n" + opt1 + "\n" + opt2 + "\n" + opt3 + "\n" + opt4 + "\n" + opt5);
        document.getElementById("qrcode").style.display = "flex";
    } else {
        qrcode.makeCode("");
        document.getElementById("qrcode").style.display = "flex";
    }

}

makeCode();

var opt = true;
function myFunction() {
    if (opt == true) {
        document.getElementById("opt_button").style.width = "208px";
        document.getElementById("opt_button").innerHTML = "Option";
        document.getElementById("opt_text").style.display = "inline-block";
        document.getElementById("qr_button").style.width = "50px";
        document.getElementById("qr_button").innerHTML = "Gén";
        opt = false;
        
        document.getElementById("qrcode").style.display = "none";
    }
}


function Download() {
    const qrCodeElement = document.getElementById("qrcode");
    const qrCodeDataURL = qrCodeElement.toDataURL('image/png');

    const downloadLink = document.createElement('a');
    downloadLink.download = 'qr_code.png';  // Nom du fichier à télécharger
    downloadLink.href = qrCodeDataURL;  // Données URL du code QR

    document.body.appendChild(downloadLink);  // Ajoute le lien à la page
    downloadLink.click();  // Déclenche le clic sur le lien pour démarrer le téléchargement
    document.body.removeChild(downloadLink);  // Supprime le lien après le téléchargement
}