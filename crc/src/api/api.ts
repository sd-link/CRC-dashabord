import axios from 'axios'

let baseUrl = 'https://go.wrench.ai/';

let convertObjectToFormData = (items) => {
  const formData = new FormData()
  for (let key in items) {
    formData.append(key, items[key])
  }
  return formData
}

let convertObjectToUrlData = (items) => {
  const params = new URLSearchParams()
  for (let key in items) {
    if (items[key]) {
      params.append(key, items[key])
    }
  }
  return params
}

let config = {
  address: baseUrl,
  port: '',
  basePath: '',
  axiosConfig: {
    baseURL: baseUrl,
    headers: {},
    withCredentials: false,
    crossDomain: true,
  },
  getEndpointUrl () {
    return this.address + (this.basePath ? this.basePath : '')
  }
}

if (localStorage.getItem('access_token') || sessionStorage.getItem('access_token')) {
  config.axiosConfig.headers['authorization'] = 'Bearer ' + (localStorage.getItem('access_token') || sessionStorage.getItem('access_token'))
}

let $http = axios.create(config.axiosConfig)

if (localStorage.getItem('access_token') || sessionStorage.getItem('access_token')) {
  $http.defaults.headers.common['authorization'] = 'Bearer ' + (localStorage.getItem('access_token') || sessionStorage.getItem('access_token'))
}

let sendPostForm = (url, payload, headers = null) => {
  return new Promise((resolve, reject) => {
    $http.post(url, convertObjectToFormData(payload))
      .then((handleSuccess) => {
        resolve(handleSuccess)
      })
      .catch((handleError) => {
        reject(handleError)
      })
  })
}

let sendPost = (url, payload, headers = null) => {
  return new Promise((resolve, reject) => {
    $http.post(url, payload)
      .then((handleSuccess) => {
        resolve(handleSuccess)
      })
      .catch((handleError) => {
        reject(handleError)
      })
  })
}

let sendPatchForm = (url, payload, headers = null) => {
  return new Promise((resolve, reject) => {
    $http.patch(url, convertObjectToUrlData(payload), headers)
      .then((handleSuccess) => {
        resolve(handleSuccess.data)
      })
      .catch((handleError) => {
        reject(handleError)
      })
  })
}

let sendPatch = (url, payload, headers = null) => {
  return new Promise((resolve, reject) => {
    $http.patch(url, payload, headers)
      .then((handleSuccess) => {
        resolve(handleSuccess)
      })
      .catch((handleError) => {
        reject(handleError)
      })
  })
}

let sendPut = (url, payload, headers = null) => {
  return new Promise((resolve, reject) => {
    $http.put(url, payload, headers)
      .then((handleSuccess) => {
        resolve(handleSuccess)
      })
      .catch((handleError) => {
        reject(handleError)
      })
  })
}

let sendGet = (url, config = null) => {
  let pageCount = null
  return new Promise((resolve, reject) => {
    $http.get(url, config)
      .then((handleSuccess) => {
        resolve(handleSuccess)
      })
      .catch((handleError) => {
        reject(handleError)
      })
  })
}

// let sendDelete = (url, payload, headers = null) => {
//   return new Promise((resolve, reject) => {
//     $http.delete(url, payload, headers)
//       .then((handleSuccess) => {
//         resolve(handleSuccess)
//       })
//       .catch((handleError) => {
//         reject(handleError)
//       })
//   })
// }

export default config

export { config }

export { sendPost }

export { sendPostForm }

export { sendGet }

export { sendPatch }

export { sendPut }

export { sendPatchForm }

// export { sendDelete }
