(function () {
  'use strict';

  function Polygon (n) {
    var degree = n;
    
    function calculate (scale) {
      // Returns a group object with array of points
      // and a transform by scale if specified.
      var vertices = [];
      
      for (var i = 0; i < n; i++)
        vertices.append("" + i);
      
      return {
        points: vertices
      };
    }

    // Note: by returning a public object you cannot prototype (apparently)
    return {
      sides: degree,
      calculate: calculate
    };
  }

  var shapes = [ 3, 4, 5, 6, 7, 8, 9, 10, 12, 25, 50, 100 ];
  
  var svg = d3.select('svg')
      .attr({
        height: 700,
        width: 500
      });
  
  var groups = svg.selectAll('g')
      .data(shapes)
      .enter()
      .append('g')
      .attr({ // change to official transform
        x: function (d, i) {
          return i % 4 * 70;
        },
        y: function (d, i) {
          return Math.floor(i / 4) * 75;
        },
        transform: function (d, i) {
          var ex = (i % 4) * 50;
          var why = Math.floor(i / 4) * 75 + 10;
          
          return 'translate(' + ex + ',' + why + ')';
        }
      });
  
  var rects = groups.append('circle')
      .attr({
        r: 20,
        cx: 22,
        cy: 30
      });
  
  var text = groups.append('text')
      .attr({
        width: 45,
        height: 45,
        y: 5,
        x: 5
      })
      .text(function (d, i) {
        return "N = " + d;
      })
      .style('font-family', 'Arial')
      .style('font-size', 12);

  var centers = groups.append('circle')
      .attr({
        r: 1,
        cx: function () {
          var parentX = Number(this.parentNode.attributes[0].nodeValue);
          return 25;
        },
        cy: function () {
          return 30;
        }
      })
      .style('fill', "red");

  // GOALS:
  // Eventually will create mapping objects to put in the shapes array
  // which will dictate the groups and the svg shapes drawn.
  
  // Now Drive!
  var triangle = Polygon(3);
  console.log(triangle);
} ());
