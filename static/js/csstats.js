    const steamId = "76561197993837151";
    const url = "https://api.wmpvp.com/api/csgo/home/official/detailStats";
    const payload = {
      "toSteamId": steamId,
      "mySteamId": steamId,
      "accessToken": "" // In principle, a valid accessToken should be filled in here, but actually even leaving it blank will not affect the return value (obtain by listening perfectworld app)
    };
    const headers = {
      'User-Agent': "okhttp/4.11.0",
      'Content-Type': "application/json",
      'gameType': "1,2",
      'gameTypeStr': "1,2",
      't': Math.floor(Date.now() / 1000)
    };
	var nickName;
        var avatar;
	var hours;
	var friendCode;
	var recRating;
	var kd;
	var rws;
	var adr;
	var rating;
	var kast;
	var hsRatio;
	var entKillRatio;
	var awpKillRatio;
	var flaSuccessRatio;

function getCS(){
    fetch(url, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(payload)
    })
    .then(response => response.json())
    .then(data => {
      const historyRatings = data.data.historyRatings;
      const averageRating = historyRatings.reduce((acc, val) => acc + val, 0) / historyRatings.length;

      const avatarPW = data.data.avatar || 'https://avatars.akamai.steamstatic.com/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb_full.jpg';
      avatar = avatarPW.replace('cdn.wmpvp.com/avatars', 'avatars.akamai.steamstatic.com');
      

      nickName = data.data.nickName;
      hours = data.data.hours;
      friendCode = data.data.friendCode;
      recRating = averageRating.toFixed(2);
      kd = data.data.kd;
      rws = data.data.rws;
      adr = data.data.adr;
      rating = data.data.rating;
      kast = data.data.kast;
      hsRatio = data.data.headShotRatio;
      entKillRatio = data.data.entryKillRatio;
      awpKillRatio = data.data.awpKillRatio;
      flaSuccessRatio = data.data.flashSuccessRatio;
    })
	console.log(nickName);
}
