import moment from "moment";
const toggleBtn: HTMLElement | null = document.querySelector(".btn");
const articlesContainer: HTMLElement | null =
  document.querySelector(".articles");

if (toggleBtn && articlesContainer) {
  toggleBtn.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark-theme");
  });

  const articlesData: string = articles
    .map((article) => {
      const { title, date, length, snippet } = article;
      const formatDate: string = moment(date).format("MMMM Do, YYYY");
      return `<article class="post">
          <h2>${title}</h2>
          <div class="post-info">
            <span>${formatDate}</span>
            <span>${length} min read</span>
          </div>
          <p>
            ${snippet}
          </p>
        </article>`;
    })
    .join("");

  if (articlesContainer) {
    articlesContainer.innerHTML = articlesData;
  }
}
