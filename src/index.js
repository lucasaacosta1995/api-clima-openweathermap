require('dotenv').config();
const express = require('express');
const weatherService = require('./services/weatherService');

const app = express();

app.get('/weather', async (req, res) => {
    const city = req.query.city || 'Buenos Aires';
    try {
        const data = await weatherService.getWeather(city);
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener datos del clima'+error });
    }
});

app.listen(3000, () => console.log('API de Clima corriendo en http://localhost:3000/weather?city=BuenosAires'));
