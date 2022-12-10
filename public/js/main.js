function onSubmit(event) {
    event.preventDefault();
    document.querySelector('.msg').textContent = '';
    document.querySelector('#image').src = '';

    const prompt = document.querySelector('#prompt').value;
    const size = document.querySelector('#size').value;

    if(!prompt) {
        alert('Please enter image description you want to generate. Ex: "Man on moon"');
        return;
    }

    getGeneratedImage(prompt, size);
}

async function getGeneratedImage(prompt, size) {
    try {
        showSpinner();
        const response = await fetch('/openai/generateimage', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({prompt, size})
        });

        hideSpinner();
        if(!response.ok) {
            throw new Error('That image could not be generated');
        }

        const data = await response.json();
        document.querySelector('#image').src = data.imageUrl;
    } catch (error) {
        document.querySelector('.msg').textContent = error;
    }
}

function showSpinner() {
    document.querySelector('.spinner').classList.add('show');
}

function hideSpinner() {
    document.querySelector('.spinner').classList.remove('show');
}

document.querySelector('#image-form').addEventListener('submit', onSubmit);