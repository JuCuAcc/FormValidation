function Validation(){
   with(document.form1){

	var nm, db, gn, em, pn, crs;
		nm= uName.value;
		db= dob.value;
		gn= radio.value;
		em= uMail.value;
		pn= uPhone.value;
		crs= course.value;
		
	l = preferences.length;
	var p = new Array();
	for(i= 0; i< l; i++){
	   if(preferences[i].checked){
		p.push(preferences[i].value);
	   }
	}
	p1 = p.join("\n")

	var err= "";
	if(nm == "") err += "\nPlease, Provide your name ";
	if( db== "") err += "\nPlease, Provide your Birthdate ";
	if( gn== "") err +="\nPlease, Choose your Gender";
	if( em== "") err += "\nPlease, Provide your Email ";
	if( pn== "") err += "\nPlease, Provide your Phone Number ";
	if( crs== "Choose Your Course") err += "\nPlease, Choose your course ";
	if( p1=="") err += "\nPlease, Select your  Preferences ";
	   err += "";

	var all = "";
	all += "\nName: " +nm;
	all += "\nBirth Date: " +db;
	all += "\nGender: " +gn;
	all += "\nEmail: " +em;
	all += "\nPhone Number: " +pn;
	all += "\nCourse: " +crs;	
	all += "\nPreferences:  " +p1;
	//all += "' ;

	if( nm != "" && db!= "" && gn!= "" && em != "" && pn != "" && crs != "Choose Your Course" && p1 != "" ){
		confirm("Do you really want to submit the form? ");
		document.getElementById("output").innerHTML = all;
	}
	else{
		alert("Please, Fill up necessary information to submit the form.");
		document.getElementById("output").innerHTML = err;
	}


   }
}
