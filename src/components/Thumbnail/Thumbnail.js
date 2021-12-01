import React from 'react';
import './Thumbnail.css';
import ordo from './2717.png';
import reno from './2716.png';
import masses from './2715.png';
import card from './2714.png';
import fatima from './2712.png';
import firstthings from './2711.png';
import broken from './2710.png';
import musicschudule from './2708.png';

export default function Thumbnail({ invoice_number, project }) {
    
    let imgThumb = "";
    if (invoice_number === 2717) {imgThumb = ordo;}
    if (invoice_number === 2716) {imgThumb = reno;}
    if (invoice_number === 2715) {imgThumb = masses;}
    if (invoice_number === 2714) {imgThumb = card;}
    if (invoice_number === 2712) {imgThumb = fatima;}
    if (invoice_number === 2711) {imgThumb = firstthings;}
    if (invoice_number === 2710) {imgThumb = broken;}
    if (invoice_number === 2708) {imgThumb = musicschudule;}
    
    return (
        <img src={imgThumb} alt={project} height="300px" />
    )
}