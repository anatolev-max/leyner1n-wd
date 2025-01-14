const articleFormModal = document.getElementById('article-form-modal');
const articleFormOpenElement = document.getElementById('create-card');
const articleFormCloseBtn = document.getElementById('close-btn');


const homeBtn = document.getElementById('home-btn');
const createBtn = document.getElementById('create-card');
const notifnotificationsBtn = document.getElementById('notifications-btn');
const messageBtn = document.getElementById('message-btn');

const btnsArray = [
    homeBtn,
    createBtn,
    notifnotificationsBtn,
    messageBtn
]

const openArticleFormModal = () => {
    articleFormModal.classList.add('open');
    document.body.classList.add('modal-open');

    homeBtn.addEventListener('click', onCloseBtnClick)
    articleFormCloseBtn.addEventListener('click', onCloseBtnClick)
    document.addEventListener('keydown', onEscKeyDown);
}

const closeArticleFormModal = () => {
    articleFormModal.classList.remove('open');
    document.body.classList.remove('modal-open');

    document.removeEventListener('keydown', onEscKeyDown);
}

const onCloseBtnClick = () => {
    articleFormModal.classList.remove('open');
    document.body.classList.remove('modal-open');
}

const onEscKeyDown = (evt) => {
    if (evt.code === 'Escape') {
        closeArticleFormModal()
    }
}

if (articleFormOpenElement) {
    articleFormOpenElement.addEventListener('click', openArticleFormModal);
}
