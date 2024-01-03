window.onload = function () {
    fetch("/api/articles")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((articles) => {
        const articlesContainer =
          document.getElementById("articlesContainer");
        articles.forEach((article) => {
          const articleCard = `
              <div class="bg-white shadow-lg rounded p-6 mb-10">
                  <a href="#">
                      <h3 class="text-2xl font-bold mb-4">${
                        article.title
                      }</h3>
                  </a>
                  <p class="mb-4">${article.body}</p>
                  <div class="mt-4 flex items-center">
                      <img src="/images/profile.png" alt="${
                        article.author
                      }" class="w-10 h-10 rounded-full mr-4">
                      <!-- Placeholder for author image, replace with actual path -->
                      <div>
                          <p class="text-gray-500">By: ${article.author}</p>
                          <p class="mt-1 text-gray-500">Published at: ${
                            article.publishedAt
                          }</p>
                      </div>
                  </div>
                  <div class="mt-4 flex flex-wrap">
                      ${article.tags
                        .map(
                          (tag) =>
                            `<span class="inline-block text-white px-3 py-1 rounded m-2 tag">${tag}</span>`
                        )
                        .join("")}
                  </div>
                  <div class="mt-4 text-gray-500">
                      <i class="fas fa-eye mr-2"></i> Views: ${
                        article.views
                      }
                  </div>
                  <div class="mt-4">
                      <a href="https://twitter.com/intent/tweet?text=${
                        article.title
                      } - ${
            window.location.href
          }" class="mr-4 text-blue-400 hover:text-blue-600" target="_blank"><i class="fab fa-twitter"></i> Share on Twitter</a>
                      <a href="https://www.linkedin.com/shareArticle?url=${
                        window.location.href
                      }&title=${
            article.title
          }" class="text-blue-700 hover:text-blue-900" target="_blank"><i class="fab fa-linkedin"></i> Share on LinkedIn</a>
                  </div>
              </div>
          `;
          articlesContainer.innerHTML += articleCard;
        });
      })
      .catch((error) => {
        console.error("Failed to load articles:", error);
        const articlesContainer =
          document.getElementById("articlesContainer");
        articlesContainer.innerHTML = `
          <div class="text-center py-4 lg:px-4">
              <div class="p-2 bg-indigo-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex" role="alert">
                  <span class="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3">Error</span>
                  <span class="font-semibold mr-2 text-left flex-auto">Failed to load articles, please try reloading the page.</span>
              </div>
          </div>
      `;
    });
};