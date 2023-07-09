window.addEventListener("DOMContentLoaded" , function() {
    const btn = this.document.querySelector("button")
    const apiKeyInput = document.getElementById('api-key');
    const userInput = document.getElementById('user-input');
    const submitButton = document.getElementById('submit');
    const responseContainer = document.getElementById('response-container');

    console.log("Got the elements.");

    // Add this line to parse markdown
    const renderer = new marked.Renderer();

    btn.addEventListener("click", async () => {
        await navigator.clipboard.writeText("https://chimeragpt.adventblocks.cc/");
        console.log("Success.");
        window.alert("Successfully copied to clipboard! Now, paste it anywhere with a key too!");
    });
    
    submitButton.addEventListener('click', async () => {
        const apiKey = apiKeyInput.value;
        const userMessage = userInput.value;
    
        if (!apiKey || !userMessage) {
            alert('Please fill in both API key and user input fields.');
            responseContainer.innerHTML = `Assistant: Please fill in both API key and user input fields.`;
            console.log("KEY or INPUT is not entered");
            return;
        }

        responseContainer.innerHTML = `Assistant: Please wait, preparing your response...`;
    
        console.log("Fetching the API...");

        const response = await fetch("https://chimeragpt.adventblocks.cc/v1/chat/completions/", {
            mode: "cors",
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${apiKey}`,
                "Access-Control-Allow-Origin": `*`,
            },
            body: JSON.stringify({
                model: 'gpt-4',
                messages: [
                    {'role': 'user', 'content': userMessage},
                ]
            })
        });

        console.log("Fetched");
    
        try {
            if (!response.ok) {
                throw new Error(`HTTP error occured. Error Code: ${response.status} (${response.statusText})`);
            }
    
            const jsonResponse = await response.json();
            const assistantMessage = jsonResponse.choices[0].message.content;
            // Use marked() to parse markdown, convert Newlines to <br> for HTML rendering
            const html = marked(assistantMessage.replace(/\n/g, "<br>"), { renderer });
            responseContainer.innerHTML = `Assistant: ${html}`;
            console.log(`Responded with ${html}`);
        } catch (error) {
            responseContainer.innerHTML = `Assistant: Failed to get the response, due to ${error.message}. Make sure you entered a valid API key or entered an appropriate input. You can try refreshing the page or contacting support for further help. Thank you.`;
            console.log(error.message);
            alert(`An ${error.message}`);
        }
    });
});
