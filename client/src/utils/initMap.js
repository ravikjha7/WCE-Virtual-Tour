import { Map } from 'mapbox-gl';

export const initMap = (container, coords) => {
    return new Map({
        container,
        style: 'mapbox://styles/mapbox/dark-v10',
        pitchWithRotate: false,
        center: coords,
        zoom: 16,
        accessToken: 'pk.eyJ1IjoicmF2aWtqaGE3IiwiYSI6ImNsNWt4emJlNzBlcG8zY214bjR5ZmUwd3MifQ.TBieL_SxJt8NQ21IFGzTKg',
        doubleClickZoom: false,
        interactive: false
    });
}