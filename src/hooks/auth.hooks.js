import {useState, useCallback, useEffect} from 'react'

const storageName = 'userData'

export const useAuth = () => {
    const [token, setToken] = useState(null)
    const [ready, setReady] = useState(false)
    const [userId, setUserId] = useState(null)
    const [loginUser, setLoginUser] = useState(null)
    const [password, setPassword] =useState(null
    const jwt = require("jsonwebtoken");
    const login = useCallback((loginUser, id) => {
        setLoginUser(loginUser)
        setPassword(password)
        const jwtToken=jwt.sign(
             {
                 data: loginUser,
             },
             "secret",
             { expiresIn: "24h" }
         );
        setToken(jwtToken)
        setUserId(id)

        localStorage.setItem(storageName, JSON.stringify({
            userId: id, token: jwtToken
        }))
    }, [])


    const logout = useCallback(() => {
        setToken(null)
        setUserId(null)
        localStorage.removeItem(storageName)
    }, [])

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem(storageName))

        if (data && data.token) {
            login(data.token, data.userId)
        }
        setReady(true)
    }, [login])


    return { login, logout, token, userId, ready }
}