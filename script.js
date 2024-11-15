function toggleMenu() {

    const hiddenItems = document.querySelectorAll('.menu .hidden');

    hiddenItems.forEach(item => {
      item.style.display = item.style.display === 'none' || item.style.display === '' ? 'block' : 'none';
    });

    const button = document.querySelector('button');
    button.textContent = button.textContent === 'Показать все' ? 'Скрыть' : 'Показать все';
  }