document.getElementById('changeFaviconBtn').addEventListener('click', function() {
    // Get the current favicon URL from the current page
    let faviconUrl = document.getElementById('favicon').href;

    // Open a new blank tab (about:blank)
    let newTab = window.open('about:blank', '_blank');

    // Add content to the new tab (title)
    newTab.document.title = 'Lexa C0re 5'; // Title of the new tab

    // Set the favicon for the new tab
    let link = newTab.document.createElement('link');
    link.rel = 'icon';
    link.href = faviconUrl; // Use the same favicon as the current page
    newTab.document.head.appendChild(link);

    // Embed a site in the new tab
    let iframe = newTab.document.createElement('iframe');
    iframe.src = 'https://www.you.com'; // Change this URL to any website you want to embed
    iframe.style.width = '100%';
    iframe.style.height = '100vh';
    iframe.style.border = 'none';
    
    // Append the iframe to the body of the new tab
    newTab.document.body.appendChild(iframe);

    // Optionally, add a message or other content to the new tab
    newTab.document.body.innerHTML += "<h1>Welcome to Lexa C0re 5</h1>";
});
