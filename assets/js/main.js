// 全ページ共通の小さな操作をまとめています。
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-current-year]').forEach((item) => { item.textContent = new Date().getFullYear(); });

  const menuButton = document.querySelector('.menu-button');
  const menu = document.querySelector('.global-nav');
  if (menuButton && menu) {
    menuButton.addEventListener('click', () => {
      const isOpen = menu.classList.toggle('open');
      menuButton.setAttribute('aria-expanded', String(isOpen));
    });
  }

  // ブログ一覧のカテゴリ絞り込み
  const filterButtons = document.querySelectorAll('[data-filter]');
  const posts = document.querySelectorAll('[data-category]');
  const applyFilter = (category) => {
    posts.forEach((post) => { post.hidden = category !== 'all' && post.dataset.category !== category; });
    filterButtons.forEach((button) => button.classList.toggle('active', button.dataset.filter === category));
  };
  filterButtons.forEach((button) => button.addEventListener('click', () => applyFilter(button.dataset.filter)));
  document.querySelectorAll('[data-filter-link]').forEach((link) => link.addEventListener('click', (event) => { event.preventDefault(); applyFilter(link.dataset.filterLink); window.scrollTo({ top: 220, behavior: 'smooth' }); }));

  // GitHub Pagesだけではフォーム送信先を持てないため、現在は確認メッセージを表示します。
  const form = document.querySelector('#contact-form');
  if (form) form.addEventListener('submit', (event) => {
    event.preventDefault();
    const status = form.querySelector('.form-status');
    status.textContent = '入力ありがとうございます。公開前にフォーム送信サービスの接続が必要です。';
  });
});
