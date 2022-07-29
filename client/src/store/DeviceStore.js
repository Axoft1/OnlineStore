import {makeAutoObservable} from "mobx"

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: 'Холодильники'},
            {id: 2, name: 'Смартфон'},
            {id: 3, name: 'Ноутбуки'},
            {id: 4, name: 'Телевизоры'},
        ]
        this._brands = [
            {id: 1, name: 'Samsung'},
            {id: 2, name: 'Apple'},
            {id: 3, name: 'Lenovo'},
            {id: 4, name: 'Asus'},
        ]
        this._devices = [
            {id: 1, name: 'Iphone 12 pro', price: 25000, rating: 5, img: 'https://img5.lalafo.com/i/posters/original/e3/35/d5/8b003b74c299624a509534d4af.jpeg'},
            {id: 2, name: 'Iphone 12 pro', price: 25000, rating: 5, img: 'https://img5.lalafo.com/i/posters/original/e3/35/d5/8b003b74c299624a509534d4af.jpeg'},
            {id: 3, name: 'Iphone 12 pro', price: 25000, rating: 5, img: 'https://img5.lalafo.com/i/posters/original/e3/35/d5/8b003b74c299624a509534d4af.jpeg'},
            {id: 4, name: 'Iphone 12 pro', price: 25000, rating: 5, img: 'https://img5.lalafo.com/i/posters/original/e3/35/d5/8b003b74c299624a509534d4af.jpeg'},

        ]
        this._selectedBrand = {}
        this._selectedType = {}
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }
    setBrands(brands) {
        this._brands = brands
    }
    setDevices(devices) {
        this._devices = devices
    }

    setSelectedType(type) {
        this._selectedType = type
    }

    setSelectedBrand(brand) {
        this._selectedBrand = brand
    }

    get types() {
        return this._types
    }
    get brands() {
        return this._brands
    }
    get devices() {
        return this._devices
    }
    get selectedType() {
        return this._selectedType
    }
    get selectedBrand() {
        return this._selectedBrand
    }
}

