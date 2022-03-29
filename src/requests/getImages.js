import axios from "axios";

function getImages(query) {
  if (!query) {
    return Promise.resolve([]);
  }

  const ENDPOINT = `https://images-api.nasa.gov/search?q=${query}`;

  return axios
    .get(ENDPOINT)
    .then((res) => {
      const imageResults = res.data.collection.items;
      const parsedImages = imageResults.filter(
        (result) => result.data[0].media_type === "image"
      );
      const imageUrls = parsedImages.map((image) => image.links[0].href);

      return imageUrls;
    })
    .catch((err) => {
      console.error(err);
    });
}

export default getImages;
