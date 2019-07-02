function loadImage(url) {
  return new Promise((resolve, reject) => {
    let image = new Image();

    image.onload = function () {
      resolve(image);
    }

    image.onerror = function () {
      const message = `Could not load image at ${url}`;
      reject(new Error(message));
    }
    image.src = url;
  })
}

const addImg = (src) => {
  let imgElement = document.createElement('img');
  imgElement.src = src;
  document.body.appendChild(imgElement);
}

Promise.all([
  loadImage('images/cat1.jpg'),
  loadImage('images/cat2.jpg'),
  loadImage('images/cat3.jpg'),
]).then((images) => {
  console.log(images);
  images.foreach(img => addImg(img.src));
}).catch((error) => {
  // handle error
});
