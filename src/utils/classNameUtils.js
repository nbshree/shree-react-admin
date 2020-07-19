import PropTypes from "prop-types";

const classNameUtils = (props)=>{
    let result = [];
    Object.keys(props).filter(item=>props[item]).forEach(item=>{
        if(!result.includes(item)){
            result.push(item)
        }
    })
    return result.join(" ")
}
classNameUtils.propTypes = PropTypes.func.isRequired;
export default classNameUtils;
