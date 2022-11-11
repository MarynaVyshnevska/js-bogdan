export default class LoadMoreBtn {
    constructor({ selector, hidden = false }) {
        this.refs = this.getRefs(selector);

        hidden && this.hide();
    }

    getRefs(selector) {
        const refs = {};
        refs.button = document.querySelector(selector);
        refs.label = refs.button.querySelector('.label');
        refs.spinner = refs.button.querySelector('.spinner');

        return refs;
    }
// активная кнопка после загрузки
    enable() {
        this.refs.button.disabled = false;
        this.refs.label.textContent = 'Показать ещё';
        this.refs.spinner.classList.add('is-hidden');
    }
// неактивная кнопка при загрузке нового контента
     disable() {
    this.refs.button.disabled = true;
    this.refs.label.textContent = 'Загружаем...';
    this.refs.spinner.classList.remove('is-hidden');
  }
// просто активная кнопка
  show() {
    this.refs.button.classList.remove('is-hidden');
  }
// спрятать кнопку
  hide() {
    this.refs.button.classList.add('is-hidden');
  }
}