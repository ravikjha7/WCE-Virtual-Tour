import { Popup, Marker, Map } from 'mapbox-gl';

export const generateNewMarker = ({ name, lat, lng, map }) => {

    const popUp = new Popup({ closeButton: false, anchor: 'left', })
        .setHTML(`<div class="popup">${name}</div>`)

    new Marker({ color: '#63df29', scale: 1.5 })
        .setLngLat([lng, lat])
        .setPopup(popUp)
        .addTo(map)
}

export const generateCurrMarker = ({ name, lat, lng, map }) => {

    const popUp = new Popup({ closeButton: false, anchor: 'left', })
        .setHTML(`<div class="popup">${name}</div>`)

    new Marker({ color: '#FF0000', scale: 1.5 })
        .setLngLat([lng, lat])
        .setPopup(popUp)
        .addTo(map)
}