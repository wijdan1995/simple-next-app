let apiUrl
const expressPort = 1234
const apiUrls = {
    production: 'https://enigmatic-inlet-49505.herokuapp.com',
    development: `http://localhost:${expressPort}`
}

if (window.location.hostname === 'localhost') {
    apiUrl = apiUrls.development
} else {
    apiUrl = apiUrls.production
}

export default apiUrl