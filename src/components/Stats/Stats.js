import React from "react";

const axios = require("axios");

const options = {
	method: "GET",
	url: "https://api-football-v1.p.rapidapi.com/v3/timezone",
	headers: {},
};

axios
	.request(options)
	.then(function (response) {
		console.log(response.data);
	})
	.catch(function (error) {
		console.error(error);
	});

const Stats = () => {
	return <div>Stats</div>;
};

export default Stats;
