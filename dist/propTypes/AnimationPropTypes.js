var _propTypes=require('prop-types');

var AnimationPropTypes={
animationDelay:_propTypes.string,
animationDirection:(0,_propTypes.oneOf)(['alternate','alternate-reverse','normal','reverse']),
animationDuration:_propTypes.string,
animationFillMode:(0,_propTypes.oneOf)(['none','forwards','backwards','both']),
animationIterationCount:(0,_propTypes.oneOfType)([_propTypes.number,(0,_propTypes.oneOf)(['infinite'])]),
animationName:_propTypes.string,
animationPlayState:(0,_propTypes.oneOf)(['paused','running']),
animationTimingFunction:_propTypes.string};


module.exports=AnimationPropTypes;