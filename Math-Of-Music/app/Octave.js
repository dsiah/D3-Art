var c_2_scale = [65.41, 73.42, 82.41, 87.32, 98.00, 110.00, 123.47, 130.81],
    c_2_labels =['c2',  'd2',  'e2',  'f2',  'g2',  'a2',   'b2',   'C3'];

var svg = d3.select('svg')
    .attr({
      height: 500,
      width: 500
    });

var piano_keys = svg.selectAll('rect')
    .data(c_2_scale)
    .enter()
    .append('rect')
    .attr({
      x: 30,
      y: function (x, y, z) {
        return 25 * y;
      },
      height: 20,
      width: 70
    })
    .style('fill', 'black');

var labels = svg.selectAll('text')
    .data(c_2_labels)
    .enter()
    .append('text')
    .text(function (x, y, z) {
      return x;
    })
    .attr({
      x: 2,
      y: function (x, y, z) {
        return y * 25 + 15;
      },
      height: 20,
      width: 20
    })
    .style('font-family', 'Helvetica');
