var nameDeposit = document.getElementById('final-name');
var name2;
var name1;

function nameGen(form) {
	name1 = form.name1.value;
	name2 = form.name2.value;

	var name1Break1;
	var name1Break2;
	var name1Break3;
	var name1Break4;
	var name1Break5;

	var name2Break1;
	var name2Break2;
	var name2Break3;
	var name2Break4;
	var name2Break5;

	var name1Length = name1.length;
	var name2Length = name2.length;

	var shipNames;

	name1Break1 = name1.substr(0, 1);
	name1Break2 = name1.substr(0, name1Length / 2);
	name1Break3 = name1.substr(name1Length / 2, name1Length / 2);
	name1Break4 = name1.substr(name1Length - 1, 1);
	name1Break5 = name1.substr(-3, 3);
	name1Break6 = name1.substr(0,3);

	name2Break1 = name2.substr(0, 1);
	name2Break2 = name2.substr(0, name2Length / 2);
	name2Break3 = name2.substr(name2Length / 2, name2Length / 2);
	name2Break4 = name2.substr(name2Length - 1, 1);
	name2Break5 = name2.substr(-3, 3);
	name2Break6 = name2.substr(0,3);

	shipNames = name1Break1 + name2Break3 + "<br>" + name1Break1 + name2Break5 + "<br>" + name1Break2 + name2Break3 + "<br>" + name1Break2 + name2Break4 + "<br>" + name1Break2 + name2Break5 + "<br>" + name2Break1 + name1Break3 + "<br>" + name2Break1 + name1Break3 + "<br>" + name2Break1 + name1Break5 + "<br>" + name2Break2 + name1Break3 + "<br>" + name2Break2 + name1Break4 + "<br>" + name2Break2 + name1Break5 + "<br>";

	nameDeposit.innerHTML = shipNames;
}