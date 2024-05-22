// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {

	"productsList": [
		{
		  "id": 5,
		  "quantity": 2
		}
	  ]
}

test('Status code should be 200', async () => {
	let actualStatusCode;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/2`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json',
			'Authorization': 'Bearer ac47000a-dc2c-4b83-b28a-26c72e710a32'
			},
			body: JSON.stringify(requestBody)
		});
		actualStatusCode = response.status
	} catch (error) {
		console.error(error);
	}
	expect(actualStatusCode).toBe(200);
});


test('Response body should contain Ok True', async () => {
    let actualResponseBody;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/2`, {
			method: 'PUT',
			headers: {
			  'Content-Type': 'application/json'
			},
			body: JSON.stringify(this.requestBody)
		  });
        actualresponseBody = await response.json();
    } catch (error) {
        console.error(error);
    }
    expect(actualresponseBody["ok"]).toBe(true);
});