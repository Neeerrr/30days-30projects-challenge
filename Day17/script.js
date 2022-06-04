const newQuote = document.getElementById('newQuote');

async function fetchQuote() {
	const quote = await fetch('https://api.quotable.io/random').then((response) => response.json());
	return quote;
}

async function quote() {
	document.querySelector('.content').innerHTML = ``;
	const newQuote = await fetchQuote();
	const quote = document.createElement('div');
	quote.classList.add('quote');

	quote.innerHTML = `
    	<p>“${newQuote.content}“</p>
		<span>${newQuote.author}</span>
    `;

	document.querySelector('.content').append(quote);
}

newQuote.addEventListener('click', () => {
	quote();
});

quote();
