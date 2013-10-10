plane-to-polygon
================
Finds a random quadrilateral polygon parallel to a given plane.

## Install

    npm install plane-to-polygon

## Example

```javascript
var planeToPolygon = require("plane-to-polygon")

console.log(planeToPolygon([0, 1, 0, 1]))
```

### `require("plane-to-polygon")(plane)`
Constructs a polygon which passes through the plane

* `plane` is a plane

**Returns** A quadrilateral polygon passing through `plane`

## Credits
(c) 2013 Mikola Lysenko. MIT License