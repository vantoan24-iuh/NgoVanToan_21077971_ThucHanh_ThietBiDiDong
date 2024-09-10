import React from 'react';
import { Text, View, Button, Image } from 'react-native';

const YourApp = () => {
    return ( <
        View style = {
            { flex: 1, backgroundColor: '#00ccf9', width: 360, height: 640 } } >
        <
        View style = {
            { flex: 2, justifyContent: 'center', alignItems: 'center' } } >
        <
        Image source = { require('./img/Ellipse8.png') }
        style = {
            { width: 140, height: 140 } }
        /> <
        /View> <
        View style = {
            { flex: 1, justifyContent: 'center', alignItems: 'center' } } >
        <
        Text style = {
            { fontSize: 25, fontWeight: 'bold', textTransform: 'uppercase', width: 189, height: 58, textAlign: 'center' } } > grow your business < /Text> <
        /View> <
        View style = {
            { flex: 1, justifyContent: 'center', alignItems: 'center' } } >
        <
        Text style = {
            { fontSize: 15, fontWeight: 'bold', textAlign: 'center', width: 302, height: 36 } } > we will help you to grow your business using online servers < /Text> <
        /View> <
        View style = {
            { flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' } } >
        <
        button style = {
            { backgroundColor: '#e3c000', fontSize: 24, textTransform: 'uppercase', borderRadius: 8, width: 119, height: 48 } } > Login < /button> <
        button style = {
            { backgroundColor: '#e3c000', fontSize: 24, textTransform: 'uppercase', borderRadius: 8, width: 119, height: 48 } } > Sign up < /button>

        <
        /View> <
        /View>
    );
};


export default YourApp;