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
		string1="<span style='color:#00ff7f'>Condition I fulfilled!</span>"
		} else {
			string1="Condition I <b>not</b> fulfilled!"}
	string1= "<span title='Pressure of evaporator feed inlet > pressure of evaporator feed top outlet'>" + string1 + "</span>"
}

function checkCondition2(){
	var pAlpha = eval(document.getElementById("Palpha").value)
	var pGamma = eval(document.getElementById("Pgamma").value)
	if (pAlpha > pGamma){
		string2="<span style='color:#00ff7f'>Condition II fulfilled!</span>"} else {
		string2="Condition II <b>not</b> fulfilled!"}
	string2 = "<span title='Pressure of evaporator feed inlet > pressure of evaporator feed bottom outlet'>" + string2 + "</span>"
}

function checkCondition3(){
	var pEpsilon = eval(document.getElementById("Pepsilon").value)
	var pDelta = eval(document.getElementById("Pdelta").value)
	if (pEpsilon > pDelta){
		string3="<span style='color:#00ff7f'>Condition III fulfilled!</span>"} else {
		string3="Condition III <b>not</b> fulfilled!"}
	string3 = "<span title='Pressure of steam inlet > pressure of steam outlet'>" + string3 + "</span>"
}

function checkCondition4(){
	var tEpsilon = eval(document.getElementById("Tepsilon").value)
	var tAlpha = eval(document.getElementById("Talpha").value)
	var tGamma = eval(document.getElementById("Tgamma").value)
	var tBeta = eval(document.getElementById("Tbeta").value)
	if (tAlpha<tBeta&&tGamma<tEpsilon){
		string4="<span style='color:#00ff7f'>Condition IV fulfilled!</span>"} else {
		string4="Condition IV <b>not</b> fulfilled!"}
	string4 = "<span title='Temperature of steam inlet > temperature of evaporator top/bottom outlet > temperature of evaporator feed inlet'>" + string4 + "</span>"
}

function checkCondition5(){
	var tEpsilon = eval(document.getElementById("Tepsilon").value)
	var tAlpha = eval(document.getElementById("Talpha").value)
	var tDelta = eval(document.getElementById("Tdelta").value)
	if (tAlpha<tDelta&&tDelta<tEpsilon){
		string5="<span style='color:#00ff7f'>Condition V fulfilled!</span>"} else {
		string5="Condition V <b>not</b> fulfilled!"}
	string5 = "<span title='Temperature of steam inlet > temperature of steam outlet > temperature of evaporator feed inlet'>" + string5 + "</span>"
}

function checkCondition6(){
	var pAlpha = eval(document.getElementById("Palpha").value)
	var pBeta = eval(document.getElementById("Pbeta").value)
	var pGamma = eval(document.getElementById("Pgamma").value)
	if (0.5>(pAlpha-pBeta)&&0.5>(pAlpha-pGamma)){
		string6="<span style='color:#00ff7f'>Condition VI fulfilled!</span>"
		} else {
			string6="Condition VI <b>not</b> fulfilled!"}
	string6 = "<span title='Pressure drop of evaporator feed < 0.5 bar'>" + string6 + "</span>"
}

function checkCondition7(){
	var pEpsilon = eval(document.getElementById("Pepsilon").value)
	var pDelta = eval(document.getElementById("Pdelta").value)
	if (0.5>(pEpsilon-pDelta)){
		string7="<span style='color:#00ff7f'>Condition VII fulfilled!</span>"
		} else {
			string7="Condition VII <b>not</b> fulfilled!"}
	string7 = "<span title='Pressure drop of steam feed < 0.5 bar'>" + string7 + "</span>"
}


