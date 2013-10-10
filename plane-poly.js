"use strict"

var findBasis = require("find-basis-3d")

module.exports = createPlanePolygon

function createPlanePolygon(plane, size) {
  size = size || 1e6
  var basis = findBasis(plane)
  var poly = [[0,0,0], [0,0,0], [0,0,0], [0,0,0]]
  for(var i=0; i<3; ++i) {
    var o = -basis[2][i] * plane[3]
    poly[0][i] = o - size * basis[0][i] - size * basis[1][i]
    poly[1][i] = o + size * basis[0][i] - size * basis[1][i]
    poly[2][i] = o + size * basis[0][i] + size * basis[1][i]
    poly[3][i] = o - size * basis[0][i] + size * basis[1][i]
  }
  return poly
}