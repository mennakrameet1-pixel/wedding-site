import { WeddingConfigType } from "@/interfaces/config"

const weddingConfig: WeddingConfigType = {
    people: {
        bride: { firstName: 'Jane', lastName: 'Doe' },
        groom: { firstName: 'John', lastName: 'Smith' }
    },
    date: {
        date: '2026-01-31',
        time: '16:30' // Optional
    },
    location: {
        title: 'Teahouse in Stanley Park',
        address: '7501 Stanley Park Dr, Vancouver, BC V6G 1Z4',
        link: 'https://www.vancouverdine.com/teahouse/',
        latLng: '49.3016707,-123.1597673'
    }
}

export default weddingConfig