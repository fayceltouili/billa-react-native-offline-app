import axios from 'axios'

/**
 * Requests a URL, returning a promise
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @param  {object} data      The date to pass with request
 * @return {object}           The response data
 */
export default request = (url, data, type) => {

  const options = {
    url,
    method: type,
    data,
    headers: {
      'Content-Type': 'application/json',
    }
  }

  if (!data) delete options.data
  return axios(options)
    .catch((error) => {
      const err = new Error(error.response.data.message || error)
      throw(err)
    })
}
