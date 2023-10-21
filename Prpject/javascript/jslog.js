document.getElementById("open-modal-btn").addEventListener("click",function(){
    document.getElementById("modal-window").classList.add("open")
})

document.getElementById("close-modul-window").addEventListener("click",function(){
    document.getElementById("modal-window").classList.remove("open")
})

document.getElementById("open-modal-btn2").addEventListener("click",function(){
    document.getElementById("modal-window2").classList.add("open")
})

document.getElementById("close-modul-window2").addEventListener("click",function(){
    document.getElementById("modal-window2").classList.remove("open")
})



// Закрыть модальное окно при нажатии на клавишу "Esc"
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        document.getElementById("modal-window2").classList.remove("open")
        document.getElementById("modal-window").classList.remove("open")
        
    }
});

// Закрыть модальное окно при клике вне элемента (за пределами модального окна)
document.addEventListener('click', (event) => {
    if (event.target === any ) {
        document.getElementById("modal-window2").classList.remove("open")
        document.getElementById("modal-window").classList.remove("open")
        
        
    }
});

function closeModal() {
    modal.classList.remove('open');
    // Удалить модальное окно из DOM
    modal.remove();
}


/* Google button */
function onSignIn(googleUser) {
    // Получите информацию о пользователе после входа.
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // ID пользователя
    console.log('Полное имя: ' + profile.getName()); // Полное имя пользователя
    console.log('Изображение: ' + profile.getImageUrl()); // URL изображения профиля
    console.log('Email: ' + profile.getEmail()); // Email пользователя

    // Дополнительный код для обработки входа здесь

    // Пример: отправка данных на сервер для аутентификации
    // fetch('/auth/google', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ id: profile.getId(), email: profile.getEmail() }),
    // })
    // .then(response => {
    //   if (response.status === 200) {
    //     // Успешная аутентификация
    //   } else {
    //     // Ошибка аутентификации
    //   }
    // });
  }

  // Инициализация Google API Client Library после загрузки страницы
  gapi.load('auth2', function() {
    gapi.auth2.init({
      client_id: 'ВАШ_ИДЕНТИФИКАТОР_КЛИЕНТА.apps.googleusercontent.com',
    });
  });