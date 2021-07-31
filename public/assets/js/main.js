fetch('/api/getNews')
	.then(res => res.json())
	.then(news => {
		console.log(news);
		for (var i = 0; i < 10; i++) {
			const post = document.createElement('div');
			post.className = 'dahliaOS-tablet dahliaOS-screen'
			post.innerHTML = `
                                    <div class="demo-card-square mdl-card mdl-shadow--2dp">
                                        <div class="mdl-card__title" style="background:
                     #ff3d00;">
                                            <h2 class="mdl-card__title-text">${news.news[i].title}</h2> <br>
                                            </div>
                                        <div class="mdl-card__supporting-text mdl-card--expand">
                                            ${news.news[i].body.replace(/<[^>]*>?/gm, '')}
                                        </div>
                            <span class="time">Posted on <i>${new Date(news.news[i].postedAt).getDate()}/${new Date(news.news[i].postedAt).getMonth() + 1}/${new Date(news.news[i].postedAt).getFullYear()}</i></span>

                                        <div class="mdl-card__actions mdl-card--border">
                                            <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" href="${news.news[i].buttonURL}" target="_blank" data-upgraded=",MaterialButton,MaterialRipple">
                                                ${news.news[i].buttonName}
                                            <span class="mdl-button__ripple-container"><span class="mdl-ripple"></span></span></a>
                                        </div>
                                    </div>`
			document.querySelector('.scroll').appendChild(post);
		}
	}).then(() => {
		new ScrollBooster({
			viewport: document.querySelector('.dahliaOS-screens'),
			content: document.querySelector('.scroll'),
			scrollMode: 'native',
			direction: 'horizontal'
		});
	}).catch(err => {
		new ScrollBooster({
			viewport: document.querySelector('.dahliaOS-screens'),
			content: document.querySelector('.scroll'),
			scrollMode: 'native',
			direction: 'horizontal'
		});
	})

fetch('https://api.github.com/repos/dahliaOS/releases/releases')
	.then(res => res.json())
	.then(data => {
		document.getElementById('tooltipLatestVersion').innerHTML = `Version: ${data[0].tag_name}`;
		document.getElementById('latestLearnMore').href = data[0].html_url;
		document.querySelector('.latestVersionDetails').innerHTML = data[0].body.substring(data[0].body.indexOf('+ ')).replace(/(?:\r\n|\r|\n)/g, '<br>'); // That long REGEX basically splits the line breaks and adds a br
		document.getElementById('latestDownload').href = data[0].zipball_url
		if (data[0].assets.length >= 2) {
			data[0].assets.forEach(build => {
				if (build.name.includes('-efi')) {
					document.getElementById('latestDownload').innerHTML = 'Download (efi)'
					document.getElementById('latestDownload').href = build.browser_download_url;
					document.getElementById('latestDownload').setAttribute('onclick', 'downloadClicked()');
				} else if (build.name.includes('-legacy')) {
					document.getElementById('latestDownloadLegacy').style.display = 'inline-block';
					document.getElementById('latestDownloadLegacy').href = build.browser_download_url;
					document.getElementById('latestDownloadLegacy').setAttribute('onclick', 'downloadClicked()');
				}
			})
		}
	})
	.then(document.getElementById('loader').style.display = 'none')
	.catch(err => {
		console.log(err);
		document.querySelector('.errors').innerHTML = '<h4 class="error">An error occured while fetching the downloads!</h4>'
	})

const downloadClicked = () => {
	const dialog = document.querySelector('dialog');
	const backgroundElement = document.querySelector('.container-that-takes-up-the-entire-page-so-i-can-add-the-back-drop')
	dialog.showModal();
	backgroundElement.style.display = 'unset';
	dialog.querySelector('.close').addEventListener('click', () => {
		dialog.close();
		backgroundElement.style.display = 'none';
	});
	dialog.querySelector('.continue').addEventListener('click', () => location.href = '/donate');

	// Snack bar stuff that I was told to comment out because he wanted the modal instead of the snackbar :(
	/*       const notification = document.querySelector('.mdl-js-snackbar');
	      const data = {
	        message: 'Thanks for downloading! Consider donating to support the project!',
	        actionHandler: event => {
	          location.href = '/donate';
	        },
	        actionText: 'Donate',
	        timeout: 10000
	      };
	      notification.MaterialSnackbar.showSnackbar(data); */
}
var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
	loop: false,
	delay: 75,
});

typewriter
	.pauseFor(500)
	.typeString('Something new')
	.pauseFor(300)
	.deleteChars(3)
	.typeString('<span style="color: #e03b19;">new</span>')
	.pauseFor(1000)
	.start();