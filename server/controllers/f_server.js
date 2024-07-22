const userData = await fetch('https://clicker-721d6-default-rtdb.firebaseio.com/api/users.json',{
    method: 'GET'
}).then(response => response.json())


export const getPoints = async (req, res) => {
    const fd = await userData
    res.json(fd)
}                                                                                                                       