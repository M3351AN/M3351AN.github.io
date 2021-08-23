
	window.SetVolume = function(val)
	{
    var player = document.getElementById('bg');
    console.log('Before: ' + player.volume);
    player.volume = val / 100;
    console.log('After: ' + player.volume);
	}