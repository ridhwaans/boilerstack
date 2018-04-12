'use strict';
const rqs = require("./request");
/**
 * Extend Request class for a new Endpoint
 */
class Endpoint extends rqs.Request {
  /**
   * Construct the request
   * @param {string} id - ID of the item properties of which are to be obtained.
   */
  constructor(id) {
    super('GET', `/endpoint/${id}`, 10000, false);
    this.id = id;
  }

  /**
   * Get body parameters
   * @return {Object} The values of body parameters (name of parameter: value of the parameter)
   */
  bodyParameters() {
    let params = {};

    params.id = this.id;

    return params;
  }

  /**
   * Get query parameters
   * @return {Object} The values of query parameters (name of parameter: value of the parameter)
   */
  queryParameters() {
    let params = {};
    return params;
  }
}

exports.Endpoint = Endpoint