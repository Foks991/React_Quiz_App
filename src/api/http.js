class Http {
  constructor(props) {
    this.defaults = {
      headers: {},
      interceptors: {}, // 404: (response) => {}
      options: {},
    };
  }


  get(url, options) {
    return this.request(url, 'GET', undefined, options);
  }

  post(url, body, options) {
    return this.request(url, 'POST', JSON.stringify(body), options);
  }

  put(url, body, options) {
    return this.request(url, 'PUT', JSON.stringify(body), options);
  }

  patch(url, body, options) {
    return this.request(url, 'PATCH', JSON.stringify(body), options);
  }

  delete(url, body, options) {
    return this.request(url, 'DELETE', JSON.stringify(body), options);
  }

  request(url, method, body, options) {

    options = {
      ...this.defaults.options,
      ...options,
      method,
      body
    };

    options.headers = {
      ...this.defaults.headers,
      ...options.headers
    };

    return new Promise((resolve, reject) => {
      fetch(url, options)
        .then(response => {
          const interceptor = this.defaults.interceptors[response.status];
          if (interceptor) {
            interceptor(response);
          }
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  }
}

export default new Http();