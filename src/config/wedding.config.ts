import { WeddingConfigType } from "@/interfaces/config"

const weddingConfig: WeddingConfigType = {
    people: {
        bride: { firstName:'سماسيمو', lastName: 'Doe' },
        groom: { firstName: 'ميدو', lastName: 'Smith' }
    },
    date: {
        date: '2026-06-15',
        time: '9:30' // Optional
    },
    location: {
        title: 'قاعة السرايا ',
        address: 'دمياط الجديدة',
        link: 'https://www.vancouverdine.com/teahouse/',
        latLng: '49.3016707,-123.1597673'
    }
}

export default weddingConfig
