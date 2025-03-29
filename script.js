document.getElementById('changeFaviconBtn').addEventListener('click', function() {
    // Get the current favicon URL from the root (where it's stored)
    let faviconUrl = document.getElementById('favicon').href;

    // Open a new blank tab (about:blank)
    let newTab = window.open('about:blank', '_blank');

    // Add content to the new tab
    newTab.document.title = 'Lexa C0re 5'; // Title of the new tab

    // Create a favicon for the new tab
    let link = newTab.document.createElement('link');
    link.rel = 'icon';
    link.href = faviconUrl; // Set the favicon to the one from the current page (root)
    newTab.document.head.appendChild(link);

    // Add content to the new tab (e.g., a header or any other content)
    newTab.document.body.innerHTML = "<h1>Welcome to Lexa C0re 5</h1>";
});
