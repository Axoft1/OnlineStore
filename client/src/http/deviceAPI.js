import { $authHost, $host } from ".";


export const createType = async (type) => { //запрос на создание типа
    const {data} = await $authHost.post('api/type', type)
    return data
}

export const fetchTypes = async () => { //Запрос на получения типа
    const {data} = await $host.get('api/type')
    return data
}

export const createBrand = async (brand) => { //запрос на создание брэнда
    const {data} = await $authHost.post('api/brand', brand)
    return data
}

export const fetchBrands = async () => { //Запрос на получения брэнда
    const {data} = await $host.get('api/brand')
    return data
}

export const createDevice = async (device) => { //запрос на создание брэндd
    const {data} = await $authHost.post('api/device', device)
    return data
}

export const fetchDevices = async () => { //Запрос на получения брэнда
    const {data} = await $host.get('api/device')
    return data
}

export const fetchOneDevice = async (id) => { //Запрос на получения брэнда
    const {data} = await $host.get('api/device' + id)
    return data
}

