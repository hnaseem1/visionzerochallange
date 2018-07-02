import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const parentNode = document.querySelector('.container')
const api_link = 'https://services.arcgis.com/S9th0jAJ7bqgIRjw/arcgis/rest/services/KSI/FeatureServer/0/query?where=1%3D1&outFields=YEAR,DATE,TIME,Hour,STREET1,STREET2,OFFSET,ROAD_CLASS,District,LATITUDE,LONGITUDE,LOCCOORD,ACCLOC,TRAFFCTL,VISIBILITY,LIGHT,RDSFCOND,ACCLASS,IMPACTYPE,INVTYPE,INVAGE,INJURY,FATAL_NO,INITDIR,VEHTYPE,MANOEUVER,DRIVACT,DRIVCOND,PEDTYPE,PEDACT,PEDCOND,CYCLISTYPE,CYCACT,CYCCOND,PEDESTRIAN,CYCLIST,SPEEDING,REDLIGHT,ALCOHOL,DISABILITY,Division,Ward_Name,Ward_ID,Hood_ID,Hood_Name,FID,ACCNUM,Index_,AG_DRIV&outSR=4326&f=json'

ReactDOM.render(<App/>, parentNode);
