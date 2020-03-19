// @<COPYRIGHT>@
// ==================================================
// Copyright 2020.
// Siemens Product Lifecycle Management Software Inc.
// All Rights Reserved.
// ==================================================
// @<COPYRIGHT>@

/*global
 define
 */

/**
 * @module js/demoService
 */
import app from 'app';


var exports = {};


export let makePartRequired = function( data ) {
    data.LinkOneEquipmentPart.isRequired = !data.LinkOneEquipmentPart.isRequired;
};

export default exports = {
    makePartRequired
};
app.factory( 'demoService', () => exports );
