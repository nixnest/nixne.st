// Take in Discord ID from html tag and fetch user profile picture from Discord

document.querySelectorAll(".avatar").forEach(avatar => fetch(`https://nixne.st/avatar/${avatar.getAttribute("data-user-id")}`).then(r => r.text()).then(url => avatar.src = `${url}?size=256`));

// vib chonk