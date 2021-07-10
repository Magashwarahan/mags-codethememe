const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000
const fetch = require('node-fetch');

app.use(express.static('public'));


  
app.get('/dinoname', async (request, response) => {
	const fetchApi = await fetch(
		'https://alexnormand-dino-ipsum.p.rapidapi.com/?paragraphs=1&words=1&format=json',
		{
			method: 'GET',
			headers: {
				'x-rapidapi-key': "bb05dd8f16mshf414baba5bde4cbp1a2937jsn149f8068bba5",
				'x-rapidapi-host': 'alexnormand-dino-ipsum.p.rapidapi.com',
			},
		}
	);
	const dinoNameResponse = await fetchApi.json();
	console.log(dinoNameResponse);
	response.json(dinoNameResponse);
});

app.get('/dinoimage', async (request, response) => {
	const fetchApi = await fetch(
		'https://bing-image-search1.p.rapidapi.com/images/search?q=Programming memes&count=500',
		{
			method: 'GET',
			headers: {
				'x-rapidapi-key': "bb05dd8f16mshf414baba5bde4cbp1a2937jsn149f8068bba5",
				'x-rapidapi-host': 'bing-image-search1.p.rapidapi.com',
			},
		}
	);
	const dinoImageResponse = await fetchApi.json();
	console.log(dinoImageResponse);
	response.json(dinoImageResponse);
});