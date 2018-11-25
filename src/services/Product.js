
const URL = 'http://localhost:8181'

// wrap the fetch API
function getJson(url) {
    return fetch(url)
        .then(response => response.json()).catch(e => {
          console.log(e)
        })
}

// warp the post request
function postJson(url, data) {
    return fetch(url, {
        method: "POST", 
        // body data type must match "Content-Type" header
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify(data),
    })
     // get json
    // .then(response => response.json())
}

// return objects
export function getColours() {
    return getJson(`${URL}/colours`)
}

export function getMaterials() {
    return getJson(`${URL}/materials`)
}

export function getSuburbs() {
    return getJson(`${URL}/suburbs`)
}

// get orders infomation
export function getData() {
    return getJson(`${URL}/data`)
}

export function postData(data) {
    return postJson(`${URL}/data`, data)
}

export function getOrders() {
    return getJson
} 
