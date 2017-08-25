var string1
var string2
var string3
var string4
var string5
var string6
var string7

function evaluateConditions() {
	checkCondition1()
	checkCondition2()
	checkCondition3()
	checkCondition4()
	checkCondition5()
	checkCondition6()
	checkCondition7()
	document.getElementById('results').innerHTML = string1 + "<br>"
	document.getElementById('results').innerHTML += string2 + "<br>"
	document.getElementById('results').innerHTML += string3 + "<br>"
	document.getElementById('results').innerHTML += string4 + "<br>"
	document.getElementById('results').innerHTML += string5 + "<br>"
	document.getElementById('results').innerHTML += string6 + "<br>"
	document.getElementById('results').innerHTML += string7 + "<br>"
}

function checkCondition1(){
	var pAlpha = eval(document.getElementById("Palpha").value)
	var pBeta = eval(document.getElementById("Pbeta").value)
	if (pAlpha > pBeta){
		var string1="Condition I fulfilled!"
		} else {
			var string1="Condition I <b>not</b> fulfilled!"}
}

function checkCondition2(){
	var pAlpha = eval(document.getElementById("Palpha").value)
	var pGamma = eval(document.getElementById("Pgamma").value)
	if (pAlpha > pGamma){
		string2="Condition II fulfilled!"} else {
		string2="Condition II <b>not</b> fulfilled!"}
}

function checkCondition3(){
	var pEpsilon = eval(document.getElementById("Pepsilon").value)
	var pDelta = eval(document.getElementById("Pdelta").value)
	if (pEpsilon > pDelta){
		string3="Condition III fulfilled!"} else {
		string3="Condition III <b>not</b> fulfilled!"}
}

function checkCondition4(){
	var tEpsilon = eval(document.getElementById("Tepsilon").value)
	var tAlpha = eval(document.getElementById("Talpha").value)
	var tGamma = eval(document.getElementById("Tgamma").value)
	if (tAlpha<tBeta&&tGamma<tEpsilon){
		string4="Condition IV fulfilled!"} else {
		string4="Condition IV <b>not</b> fulfilled!"}
}

function checkCondition5(){
	var tEpsilon = eval(document.getElementById("Tepsilon").value)
	var tAlpha = eval(document.getElementById("Talpha").value)
	var tDelta = eval(document.getElementById("Tdelta").value)
	if (tAlpha<tDelta&&tDelta<tEpsilon){
		string5="Condition V fulfilled!"} else {
		string5="Condition V <b>not</b> fulfilled!"}
}

function checkCondition6(){
	var pAlpha = eval(document.getElementById("Palpha").value)
	var pBeta = eval(document.getElementById("Pbeta").value)
	var pGamma = eval(document.getElementById("Pgamma").value)
	if (0.5>(pAlpha-pBeta)&&0.5>(pAlpha-pGamma)){
		var string6="Condition VI fulfilled!"
		} else {
			var string6="Condition VI <b>not</b> fulfilled!"}
}

function checkCondition7(){
	var pEpsilon = eval(document.getElementById("Pepsilon").value)
	var pDelta = eval(document.getElementById("Pdelta").value)
	if (0.5>(pEpsilon-pDelta)){
		var string7="Condition VII fulfilled!"
		} else {
			var string7="Condition VII <b>not</b> fulfilled!"}
}


