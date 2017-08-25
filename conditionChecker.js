var string1
var string2
var string3
var string4
var string5
var string6

function evaluateConditions() {
	checkCondition1()
	checkCondition2()
	checkCondition3()
	checkCondition4()
	checkCondition5()
	checkCondition6()
}

function checkCondition1(){
	var pAlpha = eval(document.getElementById("Palpha").value)
	var pBeta = eval(document.getElementById("Pbeta").value)
	var truth1 = pAlpha > pBeta
	if (pAlpha > pBeta){var string1="Condition I fulfilled!} else {var string1="Condition I <b>not</b> fulfilled!"}
}

function checkCondition2(){
	var pAlpha = eval(document.getElementById("Palpha").value)
	var pGamma = eval(document.getElementById("Pgamma").value)
	var truth1 = pAlpha > pGamma
	if (pAlpha > pGamma){string1="Condition II fulfilled!} else {string1="Condition II <b>not</b> fulfilled!"}
}


