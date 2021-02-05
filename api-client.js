const sendHttpRequest = async (method, url) => {
  const response = await fetch(url, {
    method: method,
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZmMwNzY2OTRhZjkyYjdiZjg2YmRlMzY1NTc4ZmFkYiIsInN1YiI6IjYwMWFkODQzMWI3MGFlMDAzZDY1ODcwZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jzH5AqZhvpzNkM3GRi40gV4Y1-t7HIJySMTzE0bcc2s",
    },
  });
  return await response.json();
};
