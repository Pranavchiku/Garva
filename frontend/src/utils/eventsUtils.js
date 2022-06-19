const baseURL = process.env.REACT_APP_API_URL;

export async function getEvents() {
  const url = baseURL + "events/get/";

  try {
    const response = await fetch(url, {
      mode: "cors",
    });
    return response.json();
  } catch (err) {
    console.log(err);
  }
}

export async function registerEvent(userDetails) {
  const url = baseURL + "events/register/";

  try {
    const response = await fetch(url, {
      mode: "cors",
      method: "POST",
      body: JSON.stringify(userDetails),
    });
    return response.json();
  } catch (err) {
    console.log(err);
  }
}
