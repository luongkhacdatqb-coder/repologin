const articles = [
    {
        id: 0,
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit nesciunt autem totam",
        category: "Lorem · Ipsum",
        time: "2 min ago",
        img: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=900&q=80",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus fuga error hic sapiente soluta eveniet expedita earum recusandae quis nobis delectus harum voluptatibus vitae sapiente aspernatur."
    },
    {
        id: 1,
        title: "Nesciunt autem totam voluptate beatae iure exercitationem doloremque eaque rerum",
        category: "Dolor · Amet",
        time: "18 min ago",
        img: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=900&q=80",
        desc: "Harum voluptatibus vitae sapiente aspernatur obcaecati deserunt fugit enim possimus adipisci eaque doloribus blanditiis aut recusandae quis nobis delectus expedita earum soluta eveniet."
    },
    {
        id: 2,
        title: "Aspernatur molestias quae aperiam facere quos mollitia dignissimos eum ducimus",
        category: "Consectetur · Elit",
        time: "45 min ago",
        img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=900&q=80",
        desc: "Earum recusandae quis nobis delectus harum voluptatibus vitae sapiente aspernatur obcaecati deserunt fugit enim possimus adipisci eaque doloribus blanditiis aut recusandae."
    },
    {
        id: 3,
        title: "Possimus adipisci eaque doloribus blanditiis aut reiciendis totam nemo quos",
        category: "Adipisci · Eaque",
        time: "1 hr ago",
        img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=900&q=80",
        desc: "Ducimus ipsam possimus adipisci eaque doloribus blanditiis aut recusandae quis nobis delectus harum voluptatibus vitae sapiente aspernatur obcaecati deserunt fugit enim."
    },
    {
        id: 4,
        title: "Reiciendis totam nemo quos mollitia dignissimos eum ducimus ipsam possimus",
        category: "Voluptas · Dolor",
        time: "2 hr ago",
        img: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=900&q=80",
        desc: "Obcaecati deserunt fugit enim possimus adipisci eaque doloribus blanditiis aut recusandae quis nobis delectus harum voluptatibus vitae sapiente aspernatur obcaecati."
    },
    {
        id: 5,
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit rerum laborum necessitatibus",
        category: "Lorem",
        time: "2 hr ago",
        img: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=900&q=80",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus fuga error hic sapiente soluta eveniet expedita earum recusandae quis nobis delectus vitae sapiente aspernatur."
    },
    {
        id: 6,
        title: "Nesciunt autem totam voluptate beatae iure exercitationem doloremque eaque rerum maiores",
        category: "Dolor",
        time: "3 hr ago",
        img: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=900&q=80",
        desc: "Harum voluptatibus vitae sapiente aspernatur obcaecati deserunt fugit enim possimus adipisci eaque doloribus blanditiis aut recusandae nobis delectus."
    },
    {
        id: 7,
        title: "Aspernatur molestias quae aperiam facere quos mollitia dignissimos eum ducimus ipsam",
        category: "Ipsum",
        time: "3 hr ago",
        img: "https://images.unsplash.com/photo-1539667462829-7ad8bef24df3?w=900&q=80",
        desc: "Earum recusandae quis nobis delectus harum voluptatibus vitae sapiente aspernatur obcaecati deserunt fugit enim possimus adipisci eaque doloribus blanditiis."
    },
    {
        id: 8,
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit rerum laborum necessitatibus consequuntur",
        category: "Lorem",
        time: "3 hr ago",
        img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=900&q=80",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus fuga error hic sapiente soluta eveniet expedita earum recusandae quis nobis delectus vitae."
    },
    {
        id: 9,
        title: "Nesciunt autem totam voluptate beatae iure exercitationem doloremque eaque rerum maiores vel",
        category: "Ipsum",
        time: "4 hr ago",
        img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=900&q=80",
        desc: "Harum voluptatibus vitae sapiente aspernatur obcaecati deserunt fugit enim possimus adipisci eaque doloribus blanditiis aut recusandae nobis delectus."
    },
    {
        id: 10,
        title: "Aspernatur molestias quae aperiam facere quos mollitia dignissimos eum ducimus ipsam possimus",
        category: "Dolor",
        time: "5 hr ago",
        img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80",
        desc: "Earum recusandae quis nobis delectus harum voluptatibus vitae sapiente aspernatur obcaecati deserunt fugit enim possimus adipisci eaque doloribus blanditiis."
    },
    {
        id: 11,
        title: "Possimus adipisci eaque doloribus blanditiis aut reiciendis totam nemo quos mollitia dignissimos",
        category: "Amet",
        time: "6 hr ago",
        img: "https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?w=900&q=80",
        desc: "Ducimus ipsam possimus adipisci eaque doloribus blanditiis aut recusandae quis nobis delectus harum voluptatibus vitae sapiente aspernatur obcaecati deserunt."
    },
    {
        id: 12,
        title: "Reiciendis totam nemo quos mollitia dignissimos eum ducimus ipsam possimus adipisci eaque",
        category: "Consectetur",
        time: "7 hr ago",
        img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&q=80",
        desc: "Obcaecati deserunt fugit enim possimus adipisci eaque doloribus blanditiis aut recusandae quis nobis delectus harum voluptatibus vitae sapiente aspernatur."
    },
    {
        id: 13,
        title: "Voluptatibus vitae sapiente aspernatur obcaecati deserunt fugit enim possimus adipisci eaque",
        category: "Adipisci",
        time: "8 hr ago",
        img: "https://images.unsplash.com/photo-1474552226712-ac0f0961a954?w=900&q=80",
        desc: "Blanditiis aut recusandae quis nobis delectus harum voluptatibus vitae sapiente aspernatur obcaecati deserunt fugit enim possimus adipisci eaque doloribus."
    }
];

function openArticle(id) {
    const a = articles[id];
    if (!a) return;
    sessionStorage.setItem('article', JSON.stringify(a));
    window.location.href = 'article.html';
}


let current = 0;
const TOTAL = 5;

const track   = document.getElementById('slidesTrack');
const counter = document.getElementById('slideCounter');
const dots    = document.querySelectorAll('.dot');

function goToSlide(n) {
    current = (n + TOTAL) % TOTAL;
    track.style.transform = `translateX(-${current * 100}%)`;
    counter.textContent   = `${current + 1} / ${TOTAL}`;
    dots.forEach((d, i) => d.classList.toggle('active', i === current));
}

document.getElementById('prevBtn').addEventListener('click', () => goToSlide(current - 1));
document.getElementById('nextBtn').addEventListener('click', () => goToSlide(current + 1));


let autoTimer = setInterval(() => goToSlide(current + 1), 6000);

document.querySelector('.breaking-card').addEventListener('mouseenter', () => clearInterval(autoTimer));
document.querySelector('.breaking-card').addEventListener('mouseleave', () => {
    autoTimer = setInterval(() => goToSlide(current + 1), 6000);
});


document.addEventListener('keydown', e => {
    if (e.key === 'ArrowLeft')  goToSlide(current - 1);
    if (e.key === 'ArrowRight') goToSlide(current + 1);
});
