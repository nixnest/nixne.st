// Take in Discord ID from html tag and fetch user profile picture from Discord
// BACKUP! Not currently used.
fetch(`https://smol.nixne.st/avatar/${document.querySelector(".avatar").getAttribute("data-user-id")}`).then(r => r.text()).then(url => document.querySelector(".avatar").src = url)