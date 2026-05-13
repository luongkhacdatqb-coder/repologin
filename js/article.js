const bodyParagraphs = [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt autem totam voluptate beatae iure exercitationem doloremque eaque rerum maiores vel nihil deleniti animi quaerat reiciendis aspernatur molestias quae aperiam facere ducimus fuga error hic sapiente soluta eveniet expedita.",
    "Harum voluptatibus vitae sapiente aspernatur obcaecati deserunt fugit enim possimus adipisci eaque doloribus blanditiis aut recusandae quis nobis delectus. Rerum laborum consectetur necessitatibus consequuntur dolor autem reiciendis totam nemo quos mollitia dignissimos eum ducimus ipsam.",
    "Earum recusandae quis nobis delectus harum voluptatibus vitae sapiente aspernatur obcaecati deserunt fugit enim possimus adipisci eaque doloribus blanditiis aut. Ducimus fuga error hic sapiente soluta eveniet expedita earum recusandae quis nobis delectus harum voluptatibus vitae.",
    "Possimus adipisci eaque doloribus blanditiis aut reiciendis totam nemo quos mollitia dignissimos eum ducimus ipsam. Aspernatur molestias quae aperiam facere ducimus fuga error hic sapiente soluta eveniet expedita earum recusandae quis nobis delectus harum voluptatibus.",
    "Nesciunt autem totam voluptate beatae iure exercitationem doloremque eaque rerum maiores vel nihil deleniti animi quaerat reiciendis. Obcaecati deserunt fugit enim possimus adipisci eaque doloribus blanditiis aut recusandae quis nobis delectus harum voluptatibus vitae sapiente aspernatur."
];


const relatedData = [
    {
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit rerum laborum",
        cat: "Lorem",
        img: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&q=60"
    },
    {
        title: "Nesciunt autem totam voluptate beatae iure exercitationem doloremque",
        cat: "Ipsum",
        img: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&q=60"
    },
    {
        title: "Aspernatur molestias quae aperiam facere quos mollitia dignissimos eum",
        cat: "Dolor",
        img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&q=60"
    }
];


const authors = [
    { initials: "LD", name: "LuongDat",   role: "Senior Correspondent, World Desk" },
    { initials: "LD", name: "LuongDat",    role: "Business & Finance Editor" },
    { initials: "LD", name: "LuongDat",   role: "Technology Analyst" },
    { initials: "LD", name: "LuongDat",  role: "Asia-Pacific Bureau Chief" },
    { initials: "LD", name: "LuongDat", role: "Health & Science Reporter" }
];

const defaultTags = ["Lorem", "Ipsum", "Dolor", "Amet", "Consectetur"];


function render() {
    let article = null;
    try { article = JSON.parse(sessionStorage.getItem('article')); } catch (e) {}

    if (!article) {
        article = {
            id: 0,
            title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
            category: "Lorem · Ipsum",
            time: "Just now",
            img: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=900&q=80",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus fuga error hic sapiente soluta eveniet expedita earum recusandae quis nobis delectus."
        };
    }

    const author = authors[article.id % authors.length];
    document.title = article.title + " — WorldNews";

    document.getElementById('articlePage').innerHTML = `
        <button class="back-btn" onclick="history.back()">
            <i class="fa fa-arrow-left"></i> Back to News
        </button>

        <div class="article-breadcrumb">
            <span class="article-category">${article.category}</span>
            <span class="article-time">${article.time}</span>
        </div>

        <h1 class="article-title">${article.title}</h1>

        <p class="article-lead">${article.desc}</p>

        <div class="article-hero">
            <img src="${article.img}" alt="${article.title}" onerror="this.style.display='none'">
            <div class="article-hero-caption">WorldNews Photography / ${article.category}</div>
        </div>

        <div class="article-byline">
            <div class="author-avatar">${author.initials}</div>
            <div class="author-info">
                <span class="author-name">${author.name}</span>
                <span class="author-role">${author.role}</span>
            </div>
            <div class="share-btns">
                <button class="share-btn" title="Share on Facebook"><i class="fa-brands fa-facebook-f"></i></button>
                <button class="share-btn" title="Share on Twitter"><i class="fa-brands fa-twitter"></i></button>
                <button class="share-btn" title="Copy link"><i class="fa fa-link"></i></button>
            </div>
        </div>

        <div class="article-body">
            ${bodyParagraphs.map((p, i) =>
                i === 2
                    ? `<blockquote><p>${article.desc}</p></blockquote><p>${p}</p>`
                    : `<p>${p}</p>`
            ).join('')}
        </div>

        <div class="article-tags">
            ${defaultTags.map(t => `<span class="tag">${t}</span>`).join('')}
            <span class="tag">${article.category.split('·')[0].trim()}</span>
        </div>
    `;

    document.getElementById('relatedSection').innerHTML = `
        <div class="related-header">
            <h2>Related Stories</h2>
            <div class="related-line"></div>
        </div>
        <div class="related-grid">
            ${relatedData.map(r => `
                <a class="related-card" href="News.html">
                    <div class="related-img">
                        <img src="${r.img}" alt="${r.title}" onerror="this.style.display='none'">
                    </div>
                    <div class="related-cat">${r.cat}</div>
                    <div class="related-title">${r.title}</div>
                </a>
            `).join('')}
        </div>
    `;
}

render();
