document.addEventListener("DOMContentLoaded", () => {

    /* ----------- ARTICLES ----------- */

    fetch("assets/JS/articles.json")
        .then(response => response.json())
        .then(data => {
            const container = document.querySelector(".articles");

            data.forEach(item => {
                const div = document.createElement("div");
                div.innerHTML = `
                    <a href="${item.link}" class="article">
                        <h4>${item.title}</h4>
                        <p class="text-large">${item.text}</p>
                        <div class="read-more">
                            <span>Читати більше</span>
                            <svg class="arrow-icon">
                                <use href="#icon_arrow"></use>
                            </svg>
                        </div>
                    </a>
                `;
                container.appendChild(div);
            });
        });

    /* ----------- JOIN-US SECTION ----------- */

    fetch("assets/JS/join-us.json")
        .then(response => response.json())
        .then(data => {
            const container = document.querySelector(".join-us");

            container.innerHTML = `
                <div class="join-us-wrap">
                    <h2>${data.title}</h2>
                    <span class="text-large">${data.text}</span>

                    <a href="${data.buttonLink}" class="button btn-second">
                        <div class="button-wrap">
                            ${data.buttonText}
                            <svg class="arrow-icon">
                                <use href="#icon_arrow_second"></use>
                            </svg>
                        </div>
                    </a>
                </div>
            `;
        });

});
