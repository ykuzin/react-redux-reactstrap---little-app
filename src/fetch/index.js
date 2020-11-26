export function loadData(page) {
  return fetch(
    `https://api.unsplash.com/photos/?client_id=kG4ora3IE7OyU9dQzBG2XVCiK9yD36pE7lNAnpOusYQ&page=${page}`,
    {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      if (!data) return [];
      const items = [];
      // eslint-disable-next-line camelcase
      data.map(({ id, user, urls, likes, alt_description }) =>
        items.push({
          id,
          author: user.name,
          description: alt_description,
          likes,
          small: urls.small,
          uri: urls.regular,
        })
      );
      return items;
    });
}
