'use strict'

function validateData(props, data) {
  return props.every(key => data[key])
}

function validateEmail(value) {
  const regExpPassword = new RegExp(
    /^(([^<>()*#$`~'"=+!¡¿?%^&{}/äáàëéèíìöóòúùñ|ºª·ç¨\[\]\.,;:\s@\"]+(\.[^<>()*#$`~'"=+!¡¿?%^&{}/äáàëéèíìöóòúùñ|ºª·ç¨\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  )
  return regExpPassword.test(value)
}

function validateNumber(value) {
  const regExpPassword = new RegExp(/^([0-9])*$/)
  return regExpPassword.test(value)
}

function validateTexto(value) {
  const regExpPassword = new RegExp(/^([a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+)*$/)
  return regExpPassword.test(value)
}

module.exports = {
  validateData,
  validateEmail,
  validateNumber,
  validateTexto
}
