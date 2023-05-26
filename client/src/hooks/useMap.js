import { useEffect, useRef, useState } from 'react';
import { Map } from 'mapbox-gl';
import { initMap } from '../utils/initMap';
import { generateNewMarker } from './../utils/generateNewMarker';
import axios from 'axios';

export const useMap = (container) => {

    const mapInitRef = useRef(null);

    const tours = [
        {
            name: 'WCE Boys Hostel',
            lat: '16.842800',
            lng: '74.603436'
        },
        {
            name: 'IIE Cell',
            lat: '16.843706',
            lng: '74.602001'
        }, 
        {
            name: 'Ground',
            lat: '16.842980',
            lng: '74.601095'
        },
        {
            name: 'Open Gym',
            lat: '16.843932',
            lng: '74.601294'
        },
        {
            name: 'Saraswati Idol',
            lat: '16.844168',
            lng: '74.601855'
        },
        {
            name: 'Library',
            lat: '16.844437',
            lng: '74.601878'
        },
        {
            name: 'Lipton',
            lat: '16.844557',
            lng: '74.602351'
        },
        {
            name: 'Study Room',
            lat: '16.844915',
            lng: '74.602021'
        }
    ]

    useEffect(() => {
        if (container.current) {

            mapInitRef.current = initMap(
                container.current,
                [74.601855, 16.844168]
            );

        }
    }, []);

    // useEffect(() => {
    //     mapInitRef.current && mapInitRef.current.on('dblclick', ({ lngLat }) => generateNewMarker({ map: mapInitRef.current, ...lngLat }))

    //     return () => { mapInitRef.current?.off('dblclick', generateNewMarker) }
    // }, [])

    useEffect(() => {

        mapInitRef.current && mapInitRef.current.on('load', () => {
            console.log(tours);
            for(var tour of tours) {
                generateNewMarker({ ...tour ,map: mapInitRef.current })
            }
        })


        return () => { mapInitRef.current?.off('load', generateNewMarker) }
    }, [])

}