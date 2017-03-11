/**
 * Created by trentyou on 3/11/17.
 */
import React from 'react';
import GoogleApiComponent from './GoogleApiComponent';
import { Map, Marker } from 'google-maps-react';

export class Container extends React.Component {
    onMouseoverMarker(props, marker, e) {
        console.log(props, marker);
    }

    onClickMap(props) {
        console.log(props);
    }
    render() {
        const style = {
            width: '100vw',
            height: '100vh'
        }

        if (!this.props.loaded) {
            return <div>Loading...</div>
        }
        return (
            <Map google={this.props.google} onclick={this.onClickMap}>
                <Marker onMouseover={this.onMouseoverMarker}
                        name={'Current location'} />

            </Map>
        )
    }
}

export default GoogleApiComponent({
    apiKey: 'AIzaSyBTWq46_1W3nBJ4JxGAZbHrgeyiu1J_GRc'
})(Container)