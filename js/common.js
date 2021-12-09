var t, diff;

document.addEventListener('DOMContentLoaded', function() {

	var now = new Date();
	var year = now.getFullYear() + 1;
	var to = Date.parse('01 Jan ' + year + ' 00:00:00');
	
	diff = Math.floor(to - now);
	// alert(diff / 1000);
	t = diff/1000;
	if (t < 0) {
		$('.timer-container').addClass('has_come');
		t = Math.abs(t);
	}
	setInterval(timer, 1000);

});

function timer() {
	var d = Math.floor(t / (3600*24));
	var h = Math.floor(t % (3600*24) / 3600);
	var m = Math.floor(t % 3600 / 60);
	var s = Math.floor(t % 60);

	$('.days').html(d);
	$('.hours').html(h);
	$('.minutes').html(m);
	$('.seconds').html(s);
 
	if (diff > 0) {
		t--;
	} else {
		t++;
	}
	
}
