/**
 * Created by trentyou on 3/11/17.
 */
import React, { Component } from 'react';
import { Map, InfoWindow, Marker } from 'google-maps-react'
import Container from './Container';
import axios from 'axios';

import './Search.css';

export class Search extends React.Component {
    constructor(props) {
        super(props);
        this.searchDot = this.searchDot.bind(this);
    }


    geocodingaddress = "https://maps.googleapis.com/maps/api/geocode/json?address=";
    var
    apikey = "&key=AIzaSyC5KE-_OtO3zG2J0kAw_0fcVVGj_dVEG_o";

    var
    data2 = {
        "Counselling": [
            {
                "name": "Vancouver Association for Survivors of Torture",
                "address": "2610 Victoria Dr, Vancouver, BC V5N 4L2",
                "location": [49.261214, -123.065483],
                "website": "http://vast-vancouver.ca/",
                "phone": "(604) 255-1881"
            },

            {
                "name": "Vancouver & Lower Mainland Multicultural Family Support Services Society",
                "address": "4980 Kingsway,Ste 306, Burnaby, BC V5H 4K7",
                "location": [49.225835, -122.992391],
                "website": "http://vvlmfss.ca/",
                "phone": "(604) 436-1025"
            },

            {
                "name": "DIVERSEcity Community Resources Society",
                "address": "13455 76 Ave, Surrey, BC V3W 2W3",
                "location": [49.141238, -122.849290],
                "website": "http://www.dcrs.ca/",
                "phone": "(604) 597-0205"
            },

            {
                "name": "Battered Women's Support Services",
                "address": "1092 Seymour St, Vancouver, BC V6B 1B4",
                "location": [49.141238, -122.849290],
                "website": "http://bwss.org/",
                "phone": "(604) 687-0770"
            },


            {
                "name": "Immigrant Services Society of BC",
                "address": "2610 Victoria Dr, Vancouver, BC V5N 4L2",
                "location": [49.141238, -122.849290],
                "website": "http://issbc.org/",
                "phone": "(604) 684-2561"

            }

        ]
    };


    searchDot(e, coords) {
        e.preventDefault();
        console.log('before Corrds' + Map.defaultProps.initialCenter.lat);
        console.log('in searchDot' + coords);
        Map.defaultProps.initialCenter = {lat: 1, lng: 1};
        console.log('after Coords' + Map.defaultProps.initialCenter.lat);
        parent.constructor.forceUpdate();
    }

    getResults() {
        document.getElementById('output').innerHTML = 'dksla;fjks;la';
        this.forceUpdate();
    }

    saveSearch(address) {

        console.log('address is ' + address);
        console.log('geocoding is ' + this.geocodingaddress);
        console.log('apikey is ' + this.apikey);
        var searchaddress = this.geocodingaddress + address + this.apikey;
        document.getElementById('output').innerHTML = searchaddress;
        axios.get(searchaddress).then( function( data) {
            console.log(Object.keys(data));
            var lat = data['data']['results'];
            //var lon = data['results'][0]['geometry']['location']['lng'];
            console.log('lat is ' + lat);
            //console.log('lon is ' + lon);
            /*
            var locations = this.data2.Counselling;
            for (var i = 0; i < locations.length; i++) {
                var objlat = locations[i].location[0];
                var objlon = locations[i].location[1];
                var distance = this.getDistanceFromLatLonInKm(objlat, objlon, lat, lon);
                if (distance < 10) {
                    var innerHTML = document.getElementById('results').innerHTML;
                    innerHTML += "<li class=\"list-group-item\"><p>" + locations[i].name + "</p><p>" + locations[i].address + "</p></li>";
                    document.getElementById('output').innerHTML = innerHTML;
                }
            } */
        }).catch( function( err) {
            console.log(err);
        })
/*
        axios.get(searchaddress).then(function (data) {
            console.log("called");
            console.log(data);

            var lat = data.results[0].geometry.location.lat;
            var lon = data.results[0].geometry.location.lng;
            var locations = this.data2.Counselling;
            for (var i = 0; i < locations.length; i++) {
                var objlat = locations[i].location[0];
                var objlon = locations[i].location[1];
                var distance = this.getDistanceFromLatLonInKm(objlat, objlon, lat, lon);
                if (distance < 10) {
                    var innerHTML = document.getElementById('results').innerHTML;
                    innerHTML += "<li class=\"list-group-item\"><p>" + locations[i].name + "</p><p>" + locations[i].address + "</p></li>";
                    document.getElementById('output').innerHTML = innerHTML;
                }
            }
        });
*/
    }

    getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
        var R = 6371; // Radius of the earth in km
        var dLat = this.deg2rad(lat2 - lat1);  // deg2rad below
        var dLon = this.deg2rad(lon2 - lon1);
        var a =
                Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) *
                Math.sin(dLon / 2) * Math.sin(dLon / 2)
            ;
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c; // Distance in km
        return d;
    }

    deg2rad(deg) {
        return deg * (Math.PI / 180)
    }




    render(){
        return (
            <div className="SearchContainer">
                <div><label>Search location</label>
                <input id="input"
                    type='text'
                    name='location' />
                <button onClick={() => this.saveSearch(document.getElementById('input').value)}>Search
                </button></div>
                <div>
                    <p id = "output"></p>
                </div>


                <Container /></div>
        )
    }




}

export default Search

