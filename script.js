document.getElementById('changeFaviconBtn').addEventListener('click', function() {
    // Get the current favicon URL from the page
    let faviconUrl = document.getElementById('favicon').href;

    // Open a new blank tab (about:blank)
    let newTab = window.open('about:blank', '_blank');

    // Add content to the new tab (title)
    newTab.document.title = 'Lexa C0re 5'; // Set the title of the new tab

    // Set the favicon for the new tab
    let link = newTab.document.createElement('link');
    link.rel = 'icon';
    link.href = faviconUrl; // Use the same favicon as the current page
    newTab.document.head.appendChild(link);

    // Optionally, add a message or content to the new tab
    newTab.document.body.innerHTML = "<h1>Welcome to Lexa C0re 5</h1>";
});
