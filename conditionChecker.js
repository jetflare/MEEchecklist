var string1
var string2
var string3
var string4
var string5
var string6
var string7

var massH2O
var massMEG
var massDEG
var massTEG

var line1
var line2
var line3
var line4
var lineEnd

var MWH2O = 18.01528
var MWMEG = 62.07
var MWDEG = 106.12
var MWTEG = 150.17

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

function calculateMassFraction() {
	calculateMassH2O()
	calculateMassMEG()
	calculateMassDEG()
	calculateMassTEG()
	calculateMassFrac()
	document.getElementById('results2').innerHTML = line1 + "<br>"
	document.getElementById('results2').innerHTML += line2 + "<br>"
	document.getElementById('results2').innerHTML += line3 + "<br>"
	document.getElementById('results2').innerHTML += line4 + "<br>"
	document.getElementById('results2').innerHTML += lineEnd + "<br>"
}

function calculateMassH2O(){
	var molesH2O = eval(document.getElementById("moleH2O").value)
	massH2O = molesH2O * MWH2O
	line1 = "Mass of water: " + massH2O.toPrecision(7) + " kg"
}

function calculateMassMEG(){
	var molesMEG = eval(document.getElementById("moleMEG").value)
	massMEG = molesMEG * MWMEG
	line2 = "Mass of MEG: " + massMEG.toPrecision(7) + " kg"
}

function calculateMassDEG(){
	var molesDEG = eval(document.getElementById("moleDEG").value)
	massDEG = molesDEG * MWDEG
	line3 = "Mass of DEG: " + massDEG.toPrecision(7) + " kg"
}

function calculateMassTEG(){
	var molesTEG = eval(document.getElementById("moleTEG").value)
	massTEG = molesTEG * MWTEG
	line4 = "Mass of TEG: " + massTEG.toPrecision(7) + " kg"
}

//

function calculateMassFrac(){
	var sumMass= massH2O + massMEG + massDEG + massTEG
	line1 += " (" + (massH2O/sumMass*100).toPrecision(4) + "%)"
	line2 += " (" + (massMEG/sumMass*100).toPrecision(4) + "%)"
	line3 += " (" + (massDEG/sumMass*100).toPrecision(4) + "%)"
	line4 += " (" + (massTEG/sumMass*100).toPrecision(4) + "%)"
	lineEnd = "Mass of glycols: " + (sumMass-massH2O).toPrecision(7) + " kg"
	lineEnd += " (" + ((sumMass-massH2O)/sumMass*100).toPrecision(4) + "%)"
}

function checkCondition1(){
	var pAlpha = eval(document.getElementById("Palpha").value)
	var pBeta = eval(document.getElementById("Pbeta").value)
	if (pAlpha > pBeta){
		string1="<span style='color:#00ff7f'>Condition I OK!</span>"
		} else {
			string1="Condition I <b>not</b> OK..."}
	string1= "<span title='I: Pressure of evaporator feed inlet > pressure of evaporator feed top outlet'>" + string1 + "</span>"
}

function checkCondition2(){
	var pAlpha = eval(document.getElementById("Palpha").value)
	var pGamma = eval(document.getElementById("Pgamma").value)
	if (pAlpha > pGamma){
		string2="<span style='color:#00ff7f'>Condition II OK!</span>"} else {
		string2="Condition II <b>not</b> OK..."}
	string2 = "<span title='II: Pressure of evaporator feed inlet > pressure of evaporator feed bottom outlet'>" + string2 + "</span>"
}

function checkCondition3(){
	var pEpsilon = eval(document.getElementById("Pepsilon").value)
	var pDelta = eval(document.getElementById("Pdelta").value)
	if (pEpsilon > pDelta){
		string3="<span style='color:#00ff7f'>Condition III OK!</span>"} else {
		string3="Condition III <b>not</b> OK..."}
	string3 = "<span title='III: Pressure of steam inlet > pressure of steam outlet'>" + string3 + "</span>"
}

function checkCondition4(){
	var tEpsilon = eval(document.getElementById("Tepsilon").value)
	var tAlpha = eval(document.getElementById("Talpha").value)
	var tGamma = eval(document.getElementById("Tgamma").value)
	var tBeta = eval(document.getElementById("Tbeta").value)
	if (tAlpha<tBeta&&tGamma<tEpsilon){
		string4="<span style='color:#00ff7f'>Condition IV OK!</span>"} else {
		string4="Condition IV <b>not</b> OK..."}
	string4 = "<span title='IV: Temperature of steam inlet > temperature of evaporator top/bottom outlet > temperature of evaporator feed inlet'>" + string4 + "</span>"
}

function checkCondition5(){
	var tEpsilon = eval(document.getElementById("Tepsilon").value)
	var tAlpha = eval(document.getElementById("Talpha").value)
	var tDelta = eval(document.getElementById("Tdelta").value)
	if (tAlpha<tDelta&&tDelta<tEpsilon){
		string5="<span style='color:#00ff7f'>Condition V OK!</span>"} else {
		string5="Condition V <b>not</b> OK..."}
	string5 = "<span title='V: Temperature of steam inlet > temperature of steam outlet > temperature of evaporator feed inlet'>" + string5 + "</span>"
}

function checkCondition6(){
	var pAlpha = eval(document.getElementById("Palpha").value)
	var pBeta = eval(document.getElementById("Pbeta").value)
	var pGamma = eval(document.getElementById("Pgamma").value)
	if (0.5>(pAlpha-pBeta)&&0.5>(pAlpha-pGamma)){
		string6="<span style='color:#00ff7f'>Condition VI OK!</span>"
		} else {
			string6="Condition VI <b>not</b> OK..."}
	string6 = "<span title='VI: Pressure drop of evaporator feed < 0.5 bar'>" + string6 + "</span>"
}

function checkCondition7(){
	var pEpsilon = eval(document.getElementById("Pepsilon").value)
	var pDelta = eval(document.getElementById("Pdelta").value)
	if (0.5>(pEpsilon-pDelta)){
		string7="<span style='color:#00ff7f'>Condition VII OK!</span>"
		} else {
			string7="Condition VII <b>not</b> OK..."}
	string7 = "<span title='VII: Pressure drop of steam feed < 0.5 bar'>" + string7 + "</span>"
}


