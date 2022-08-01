import { $authHost, $host } from ".";

export const registration = async (email, password) => {
    const response =  $host.post('api/auth/registration', {email, password, role: 'ADMIN'})
    return response
}
export const login = async (email, password) => {
    const response =  $host.post('api/auth/login', {email, password})
    return response
}
export const check = async () => {
    const response =  $host.post('api/auth/registration', {email, password, role: 'ADMIN'})
    return response
}