/* DIV PRINCIPAL (CONTAINER) */
const body = document.querySelector("body");
const newDiv = document.createElement("div");

body.appendChild(newDiv);

body.style.background = "#e3c510";
body.style.height = "100vh"
body.style.display = "flex";
body.style.justifyContent = "center";
body.style.alignItems = "center";

/* FORMULARIO */
const newForm = document.createElement("form");
newForm.style.border = "15px solid #285eb2";
newForm.style.borderRadius = "25px";
newForm.style.padding = "50px";
newForm.style.textAlign = "center";

/* FORMULARIO POKEMON NAME*/
const div1 = document.createElement("div");
const label1 = document.createElement("label");
const input1 = document.createElement("input");
label1.innerHTML = "Pokemon Name: ";

newForm.appendChild(div1)
div1.append(label1, input1);

newDiv.appendChild(newForm);


/* FORMULARIO POKEMON MASTER */
const div2 = document.createElement("div");
const label2 = document.createElement("label");
const input2 = document.createElement("input");

label2.innerHTML = "Pokemon Master: ";

div2.append(label2, input2);
newForm.appendChild(div2);

/* FORMULARIO HEIGHT */ 
const div3 = document.createElement("div");
const label3 = document.createElement("label");
const input3 = document.createElement("input");

label3.innerHTML = "Height "
input3.type = "number";

div3.append(label3, input3);
newForm.appendChild(div3);

/* FORMULARIO WEIGHT */
const div4 = document.createElement("div");
const label4 = document.createElement("label");
const input4 = document.createElement("input");

label4.innerHTML = "Weight ";
input4.type = "number";

div4.append(label4, input4);
newForm.appendChild(div4);

/* FORMULARIO TYPES */
const div5 = document.createElement("div");
const label5 = document.createElement("label");
const selec = document.createElement("select");
const option1 = document.createElement("option");
const option2 = document.createElement("option");
const option3 = document.createElement("option");
const option4 = document.createElement("option");

label5.innerHTML = "Type: ";
option1.innerHTML = "Fire";
option2.innerHTML = "Whater";
option3.innerHTML = "Grass";
option4.innerHTML = "Dark";

selec.append(option1, option2, option3, option4);
div5.append(label5, selec);
newForm.appendChild(div5);

/* FORMULARIO WEAKNESS */
const div6 = document.createElement("div");
const label6 = document.createElement("label");
const weak1 = document.createElement("label");
const weak1Radio = document.createElement("input");
const weak2 = document.createElement("label");
const weak2Radio = document.createElement("input");
const weak3 = document.createElement("label");
const weak3Radio = document.createElement("input");

label6.innerHTML = "Weakness: ";
weak1.innerHTML = "Fire";
weak2.innerHTML = "Whater";
weak3.innerHTML = "Grass";
weak1Radio.type = "radio";
weak2Radio.type = "radio";
weak3Radio.type = "radio";
weak1Radio.name = "weakness";
weak2Radio.name = "weakness";
weak3Radio.name = "weakness";

div6.append(label6, weak1, weak1Radio, weak2,  weak2Radio, weak3, weak3Radio);
newForm.appendChild(div6);

/* FORMULARIO BUTTON */
const btn = document.createElement("button");
btn.innerHTML = "Submit";
newForm.appendChild(btn);

/* GERAL */

const divS = document.querySelectorAll("div");
divS.forEach((div) => {
  div.style.padding = "10px";
})

const label = document.querySelectorAll("label");
label.forEach((label, index) => {
  index < 5 ? label.style.display = "block" : label.style.display = "inline";
})