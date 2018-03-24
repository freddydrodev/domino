import { Meteor } from 'meteor/meteor'
import React from 'react'
import { compose, withProps, withStateHandlers } from 'recompose'
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker
} from 'react-google-maps'
import { InfoBox } from 'react-google-maps/lib/components/addons/InfoBox'
import demoFancyMapStyles from './style.json'

const APIKEY = 'AIzaSyDLsTLxcH2OR0E4daWgUdoHb1uVjNYdMg8' //Meteor.settings.public.GM_API_KEY

const StyledMapWithAnInfoBox = compose(
    withProps({
        googleMapURL:
            'https://maps.googleapis.com/maps/api/js?key=' +
            APIKEY +
            '&v=3.exp&libraries=geometry,drawing,places',
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `500px` }} />,
        mapElement: <div style={{ height: `100%` }} />,
        center: { lat: 5.336276, lng: -3.983778 }
    }),
    withStateHandlers(
        () => ({
            isOpen: false
        }),
        {
            onToggleOpen: ({ isOpen }) => () => ({
                isOpen: !isOpen
            })
        }
    ),
    withScriptjs,
    withGoogleMap
)(props => (
    <GoogleMap
        defaultZoom={12}
        defaultCenter={props.center}
        defaultOptions={{ styles: demoFancyMapStyles }}
    >
        <InfoBox
            defaultPosition={
                new google.maps.LatLng(props.center.lat, props.center.lng)
            }
            options={{ closeBoxURL: ``, enableEventPropagation: true }}
        >
            <div
                style={{
                    backgroundColor: `yellow`,
                    opacity: 0.75,
                    padding: `12px`
                }}
            >
                <div style={{ fontSize: `16px`, fontColor: `#08233B` }}>
                    Hello, Taipei!
                </div>
            </div>
        </InfoBox>
        <Marker
            position={{ lat: 22.6273, lng: 120.3014 }}
            onClick={props.onToggleOpen}
        >
            {props.isOpen && (
                <InfoBox
                    onCloseClick={props.onToggleOpen}
                    options={{ closeBoxURL: ``, enableEventPropagation: true }}
                >
                    <div
                        style={{
                            backgroundColor: `yellow`,
                            opacity: 0.75,
                            padding: `12px`
                        }}
                    >
                        <div style={{ fontSize: `16px`, fontColor: `#08233B` }}>
                            Hello, Kaohsiung!
                        </div>
                    </div>
                </InfoBox>
            )}
        </Marker>
    </GoogleMap>
))

export default StyledMapWithAnInfoBox
