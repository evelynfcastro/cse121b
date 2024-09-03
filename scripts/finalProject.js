//"https://www.googleapis.com/books/v1/volumes?q=subject:Romance&key=AIzaSyDYLVGfBNDQx1kTgj1XMWQPbInFkF6Ht94"

document.getElementById("searchForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    const author = document.getElementById("authorInput").value.trim();
    const title = document.getElementById("titleInput").value.trim();

    if (!author && !title) {
        alert("Please enter either author name or book title.");
        return;
    }

    const query = [];
    if (author) {
        query.push(`inauthor:${author}`);
    }
    if (title) {
        query.push(`intitle:${title}`);
    }

    const queryString = query.join("+");
    const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=subject:Romance&key=AIzaSyDYLVGfBNDQx1kTgj1XMWQPbInFkF6Ht94`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayResults(data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});

function displayResults(data) {
    const resultsContainer = document.getElementById("results");
    resultsContainer.innerHTML = ""; // Clear previous results

    if (data.items && data.items.length > 0) {
        data.items.forEach(item => {
            const volumeInfo = item.volumeInfo;
            const title = volumeInfo.title;
            const authors = volumeInfo.authors ? volumeInfo.authors.join(", ") : "Unknown";
            const dataPublished = volumeInfo.publishedDate;
            const descriptions = volumeInfo.description;
            const pages = volumeInfo.pageCount;
            const image = volumeInfo.imageLinks.thumbnail;
          

            const bookInfo = `<div>
                <h3>${title}</h3>
                <p><strong>Authors:</strong> ${authors}</p>
                <p> <strong>Published Data:</strong> ${dataPublished};</p>
                <p><strong> Number of Pages:</strong> ${pages}</p>
                <P>${descriptions}</p>
                <img src="${image}" alt="book image" >
            </div>`;

            resultsContainer.insertAdjacentHTML("beforeend", bookInfo);
        });
    } else {
        resultsContainer.innerHTML = "<p>No results found.</p>";
    }
}