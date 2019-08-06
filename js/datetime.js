function currentDate()
{
	var d;
	d=new Date();
	yr=d.getFullYear();  // return 9999
	mt=d.getMonth(); //retrun 0-11
	dat=d.getDate(); //return 1-31
	day=d.getDay(); //return 0-6
	if(day==0) day="Sunday";
	else if(day==1) day="Monday";
	else if(day==2) day="Tuesday";
	else if(day==3) day="Wednesday";
	else if(day==4) day="Thursday";
	else if(day==5) day="Friday";
	else day="Saturday";

	if(mt==0) mt="January";
	else if(mt==1) mt="February";
	else if(mt==2) mt="March";
	else if(mt==3) mt="April";
	else if(mt==4) mt="May";
	else if(mt==5) mt="June";
	else if(mt==6) mt="July";
	else if(mt==7) mt="August";
	else if(mt==8) mt="September";
	else if(mt==9) mt="October";
	else if(mt==10) mt="Novermber";
	else  mt="December";

	document.getElementById('date').innerHTML=day+ " , "+dat+ " " +mt+ " "+ yr;
refTime();
}

function currentTime()
{
	t=new Date();
	hh=t.getHours() // 0-23
	mm=t.getMinutes() // 0-59
	ss=t.getSeconds() //0-59

	ampm=hh<12?"AM":"PM";
	document.getElementById('hh').innerHTML=hh;
	document.getElementById('mm').innerHTML=mm;
	document.getElementById('ss').innerHTML=ss +" " + ampm;
}
function refTime()
{
	setInterval(currentTime, 1000);
}

function validate()
{

	var username, password;

	//Getting the values from form
	username=document.login.username.value;
	password=document.login.password.value;

	if(username=='' && password=='')
	{
		document.getElementById('error').innerHTML=" All Fields are Required ";
		return false;
	}
	else if(username=='')
	{
		document.getElementById('error').innerHTML="UserName is Required ";
		return false;
	}

	else if(password=='')
	{
		document.getElementById('error').innerHTML="Password is Required ";
		return false;
	}
	else if(username.length<5 && password.length<5)
	{
		document.getElementById('error').innerHTML="Username and Password shoudl be min 5 character ";
		return false;
	}
	else if(username=="admin" && password=="admin")
	{
		window.open('http://www.google.com');
	}
	else
	{
		document.getElementById('error').innerHTML="Can't process Right Now ";
			return false;
	}
	return true;
}