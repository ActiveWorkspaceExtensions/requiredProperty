import app from 'app';
'use strict';

	//
	// debug variable 1=write to console. 0=do not
	//
	var debug = 0; // 1 = YES, write to console!

var exports = {};
export let batchModifyProp = function (ctx, props, widgetProp, value)
{
    if (debug == 1)
    console.log(ctx, props, widgetProp, value);
    for (let i = 0; i < props.length; i++) {
        ctx.xrtSummaryContextObject.props[props[i]][widgetProp] = value;
    }
}
export let moduleServiceNameToInject = "editstate";
export default exports = {
    batchModifyProp
}

app.factory('editstate', () => exports );