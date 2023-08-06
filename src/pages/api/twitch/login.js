export const get = async({request, cookies}) => {
  const {
    VITE_CLIENT_ID: clientid,
    VITE_CLIENT_SECRET: clientsct,
    VITE_TWITCH_OAUTH: oauth,
    VITE_HELIX: helix,
  } = import.meta.env;

  const getAuth = () => {
    return fetch(oauth, {
      method: "POST",
      headers: {
        ["Content-Type"]: "application/json",
      },
      body: JSON.stringify({
        client_id: `${clientid}`,
        client_secret: `${clientsct}`,
        grant_type: "client_credentials",
      }),
    })
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
  };
  const { access_token } = await getAuth();
  return fetch(`${helix}/streams?user_login=xduracel`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${access_token}`,
      ["Client-Id"]: `${clientid}`,
    },
  })
  .then((res) => res.json())
  .then((data) => {
    return new Response(data.data.length ? JSON.stringify(data.data[0]) : false);
  });
}