// Asynchronous function simulating data fetching
async function fetchData() {
    // Simulate fetching data from an API
    let data = await fetch('https://www.example.com');
    
    // Simulate parsing JSON response
    
    return data;
}

// Asynchronous function to display fetched data
async function displayData() {
    try {
        // Fetch data asynchronously
        let data = await fetchData();
        
        // Display the fetched data
        console.log("Fetched Data:", data);
    } catch (error) {
        // Handle errors gracefully
        console.error("Error fetching data:", error);
    }
}

// Call the asynchronous function to display data
displayData();
