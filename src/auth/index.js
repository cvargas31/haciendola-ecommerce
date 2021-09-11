
export const signIn = (user) => {
  return fetch("https://staging.haciendola.dev/backend/test-front/api/users/login", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

export const authenticate = (data, callback) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("jwt", JSON.stringify(data));
    callback();
  }
};

export const signOut = (callback) => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("jwt");
    callback();
  }
};

export const isAuthenticated = () => {
  if (typeof window == "undefined") {
    return false;
  }
  if (localStorage.getItem("jwt")) {
    return true;
  } else {
    return false;
  }
};


