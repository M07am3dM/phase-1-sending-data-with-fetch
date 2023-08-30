// Add your code here
function submitData(userName, userEmail) {
    const users = {
        name: userName,
        email: userEmail
    };

    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(users)
        //     name: 'Steve',
        //     email: 'steve@steve.com'
        // }),
    })
    .then(resp => resp.json())
    .then(data => appendIdToDOM(data.id))
    .catch(error => appendErrorToDOM(error.message))

    function appendIdToDOM(id) {
        const newId = document.createElement('span');
        newId.textContent = `Newly Assigned ID: ${id}`;
        document.body.appendChild(newId);
    }

    function appendErrorToDOM(message) {
        const errorAlert = document.createElement('span');
        errorAlert.textContent = `Error: ${message}`;
        document.body.appendChild(errorAlert);
    } 
}

submitData('Mohamed Matassi', 'mohamed@matassi.com');

