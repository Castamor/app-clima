export const fetchAPI = async url => {
    try {
        return fetch(url)
            .then(res => res.json())
            .then(data => data)
    } catch (error) {
        console.log(error)
    }
}
