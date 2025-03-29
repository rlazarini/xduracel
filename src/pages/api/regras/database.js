export const get = async({request, cookies}) => {
  const {
    VITE_RESTDB_XDURACEL_API_KEY: restapi,
  } = import.meta.env;

  return fetch('https://xduracel-f360.restdb.io/rest/regras-copinha', {
    method: 'GET',
    headers: new Headers({
      'Content-Type': 'application/json',
      'x-apikey': restapi,
      'cache-control': 'no-cache'
    })
  })
  .then(response => response.json())
  .then(data => {
    return new Response(data.length ? JSON.stringify(data) : false);
  })
}