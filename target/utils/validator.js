define(["jquery","utils/constants"],function(e,t){var n,r,i;return n={},r=function(t){return Math.floor(t)===t&&e.isNumeric(t)},i=function(e,t,n){return e<=n&&n<=t},n.validEmail=function(e){var n=/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;return typeof e=="string"&&e.length>t.get("minEmailLen")?n.test(e):!1},n.validPassword=function(e){return typeof e=="string"&&e.length>t.get("minPasswordLen")?!0:!1},n.validTitle=function(e){return typeof e!="string"?!1:e.length<t.get("minTitleLen")||e.length>t.get("maxTitleLen")?!1:!0},n.validDescription=function(e){return typeof e!="string"?!1:e.length<t.get("minDescrLen")||e.length>t.get("maxDescrLen")?!1:!0},n.validZoom=function(e){return r(e)?i(t.get("minZoomLevel"),t.get("maxZoomLevel"),e)?!0:!1:!1},n.validSupport=function(e){return r(e)?i(0,1,e)?!0:!1:!1},n.validComment=function(e){return n.validDescription(e)},n.validMongoID=function(e){if(typeof e!="string")return!1;if(e.length!==t.get("mongoIDLen"))return!1;var n=new RegExp(/^[a-f0-9]*$/);return n.test(e)},n.validCountry=function(e){return r(e)?i(t.get("minCountryID"),t.get("maxCountryID"),e)?!0:!1:!1},n.validCity=function(e){return r(e)?i(t.get("minCityID"),t.get("maxCityID"),e)?!0:!1:!1},n.validLat=function(e){return typeof e!="number"?!1:i(t.get("minLat"),t.get("maxLat"),e)?!0:!1},n.validLng=function(e){return typeof e!="number"?!1:i(t.get("minLng"),t.get("maxLng"),e)?!0:!1},n.validType=function(t){var n=["claimCreate","crisisCreate","evidenceCreate","commentAdd","login","claimEdit","crisisEdit","evidenceEdit"];return e.inArray(t,n)===-1?!1:!0},n.validLatLng=function(e,t){return typeof e!="number"||typeof t!="number"?!1:n.validLat(e)&&n.validLng(t)?!0:!1},n.validMarkers=function(e){var r;if(e.length<t.get("minMarkerNumber"))return!1;for(r=0;r<e.length;r+=1)if(!n.validLatLng(e[r][0],e[r][1]))return!1;return!0},n.validStreet=function(e){return typeof e!="string"?!1:e.length<t.get("minStreetLen")||e.length>t.get("maxStreetLen")?!1:!0},n.validSeverity=function(e){return r(e)?i(t.get("minSeverityLevel"),t.get("maxSeverityLevel"),e)?!0:!1:!1},n.validTags=function(e){return!0},n.validImage=function(){return!0},n});