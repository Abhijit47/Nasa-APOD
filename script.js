import { URL } from "./config.js";
const card = document.querySelector('.section');

const errorMsg = document.querySelector('.error-msg');

const response = fetch(URL);

// console.log(response);
try {
  response.then(res => res.json()).then(res => {
    const data = res;
    console.log(data);

    const template =
      `
      <div class="picture">
        <p class="img-title">${data.title} | ${data.date}</p>
        <img src="${data.hdurl}" class="image" alt="Nasa APOD Image" />
      </div>
      <details class="details-section">
        <summary class="summary-text">
          ${data.explanation.substr(0, 50) + '...'}
        </summary>
        <h3 class="heading-tertiary">Explanation :</h3>
        <p class="summary-para">
          ${data.explanation}
        </p>
      </details>
      `

    card.insertAdjacentHTML('afterend', template);


  })
}
catch (err) {
  console.error(err.message)
  errorMsg.innerHTML = err.message;
}