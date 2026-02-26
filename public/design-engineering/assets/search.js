document.addEventListener('DOMContentLoaded', async () => {
    const params = new URLSearchParams(window.location.search);
    const q = params.get('q') || '';
    const input = document.getElementById('search-input');
    const resultsContainer = document.getElementById('search-results');

    if (input) input.value = q;

    try {
        const res = await fetch('assets/search-index.json');
        const index = await res.json();

        const performSearch = (query) => {
            if (!query.trim()) {
                if (resultsContainer) resultsContainer.innerHTML = '<p>Enter a search term above to begin.</p>';
                return;
            }
            const lowerQ = query.toLowerCase();
            const results = index.filter(item =>
                item.title.toLowerCase().includes(lowerQ) ||
                item.content.toLowerCase().includes(lowerQ)
            );

            if (resultsContainer) {
                if (results.length === 0) {
                    resultsContainer.innerHTML = '<p>No results found for "' + query + '".</p>';
                } else {
                    resultsContainer.innerHTML = results.map(r => `
              <div class="search-result glass-panel reveal visible" style="margin-bottom: 1rem; padding: 1.5rem;">
                <h4><a href="${r.url}">${r.title}</a></h4>
                <p>${r.content.substring(0, 200)}...</p>
              </div>
            `).join('');
                }
            }
        };

        if (q) performSearch(q);

        if (input) {
            input.addEventListener('input', (e) => {
                performSearch(e.target.value);
                // Update URL w/o reloading
                const url = new URL(window.location);
                url.searchParams.set('q', e.target.value);
                window.history.pushState({}, '', url);
            });
        }

    } catch (e) {
        if (resultsContainer) resultsContainer.innerHTML = '<p>Error loading search index. Please ensure you are running this through a local server or browser allows local fetch.</p>';
    }
});
