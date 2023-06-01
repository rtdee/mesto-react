class Api {
  constructor(options) {
    this.baseUrl = options.baseUrl;
    this.headers = options.headers;
  }

  _checkStatus(res) {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(`Ошибка: ${res.status}`);
      }
  }

  getInitialCards() {
    return fetch(`${this.baseUrl}/cards`, {
        headers: this.headers
      })
      .then(this._checkStatus)
  }

  postNewCard(data) {
    return fetch(`${this.baseUrl}/cards`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({
        name: data.name,
        link: data.link
      })
    })
    .then(this._checkStatus)
  }

  deleteCard(cardId) {
    return fetch(`${this.baseUrl}/cards/${cardId}`, {
      method: 'DELETE',
      headers: this.headers
    })
    .then(this._checkStatus)
  }

  getUserInfo() {
    return fetch(`${this.baseUrl}/users/me`, {
      headers: this.headers
    })
    .then(this._checkStatus)
  }

  patchUserInfo(data) {
    return fetch(`${this.baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify({
        name: data.name,
        about: data.about
      })
    })
    .then(this._checkStatus)
  }

  putLike(cardId) {
    return fetch(`${this.baseUrl}/cards/${cardId}/likes`, {
      method: 'PUT',
      headers: this.headers
    })
    .then(this._checkStatus)
  }

  deleteLike(cardId) {
    return fetch(`${this.baseUrl}/cards/${cardId}/likes`, {
      method: 'DELETE',
      headers: this.headers
    })
    .then(this._checkStatus)
  }

  patchAvatar(data) {
    return fetch(`${this.baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify({
        avatar: data.avatar
      })
    })
    .then(this._checkStatus)
  }
}

export const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-65',
  headers: {
    authorization: '7946e21b-f2ed-4c59-bfb7-0f52e5cb3fd4',
    'Content-Type': 'application/json'
  }
});