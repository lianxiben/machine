var aud = $('.aud').get(0);
ud.pos = -1;
$('#music .play').bind('click', function(evt) {
	evt.preventDefault();
	if (aud.pos < 0) {
		$('#music .next').trigger('click');
			} else {
			aud.play();
		}
});
$('#music .pause').bind('click', function(evt) {
	evt.preventDefault();
	aud.pause();
	});
$('#music .next').bind('click', function(evt) {
	evt.preventDefault();
	aud.pause();
	aud.pos++;
	if (aud.pos == playlist.length) aud.pos = 0;
	aud.setAttribute('src', playlist[aud.pos].url);
        $('.info').html(playlist[aud.pos].title);
	aud.load();
	});
$('#music .prev').bind('click', function(evt) {
	evt.preventDefault();
	aud.pause();
	aud.pos--;
	if (aud.pos < 0) aud.pos = playlist.length - 1;
	aud.setAttribute('src', playlist[aud.pos].url);
        $('.info').html(playlist[aud.pos].title);
	aud.load();
	});
aud.addEventListener('canplay', function(evt) {
	$('#music .play').trigger('click');
	});
aud.addEventListener('ended', function(evt) {
	$('#music .next').trigger('click');
		});
$('.info').html(playlist[0].title);
var playlist=[
	{ url : "http://bcs.duapp.com/sanyblog/blog%2Fmusic%2Fmlkg.mp3",
	title : "没离开过-林志炫"
	}
];