async function fetchData(url, numRequests = 10, delayMilliseconds = 1000) {
    for (let i = 0; i < numRequests; i++) {
        try {
            const response = await fetch(url);

            if (response.ok) {
                const data = await response.text();
                console.log("Data fetched successfully:");
                console.log(data);
            } else {
                console.log(`Failed to fetch data. Status code: ${response.status}`);
            }
        } catch (error) {
            console.error(`An error occurred: ${error}`);
        }

        await new Promise(resolve => setTimeout(resolve, delayMilliseconds));
    }
}
const url = 'https://8257-103-119-242-115.ngrok-free.app/';   


const numRequests = 50;
const delayMilliseconds = 100;

fetchData(url, numRequests, delayMilliseconds);
