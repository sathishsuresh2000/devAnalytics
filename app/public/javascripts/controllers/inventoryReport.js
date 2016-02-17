'use strict';

var reviewApp = angular.module('app');

reviewApp.controller('reportController', ['$scope', 'GetReport', function ($scope, GetReport) {
  $scope.reportFilterType = 'DAY';

  $scope.updateReport = function () {
    GetReport.get($scope.reportFilterType)
      .then(function (result) {
        $scope.generateChart(result.data);
      })
  };

  $scope.generateChart = function (barData) {
    $('#visualisation').html('');
    var vis = d3.select('#visualisation'),
      WIDTH = 1000,
      HEIGHT = 500,
      MARGINS = {
        top: 20,
        right: 20,
        bottom: 20,
        left: 100
      },
      xRange = d3.scale.ordinal().rangeRoundBands([MARGINS.left, WIDTH - MARGINS.right], 0.1).domain(barData.map(function (d) {
        return d.date;
      })),


      yRange = d3.scale.linear().range([HEIGHT - MARGINS.top, MARGINS.bottom]).domain([0,
        d3.max(barData, function (d) {
          return d.sum;
        })
      ]),
      xAxis = d3.svg.axis()
        .scale(xRange)
        .tickSize(5)
        .tickSubdivide(true),

      yAxis = d3.svg.axis()
        .scale(yRange)
        .tickSize(5)
        .orient("left")
        .tickSubdivide(true);

    vis.append('svg:g')
      .attr('class', 'x axis')
      .attr('transform', 'translate(0,' + (HEIGHT - MARGINS.bottom) + ')')
      .call(xAxis);

    vis.append('svg:g')
      .attr('class', 'y axis')
      .attr('transform', 'translate(' + (MARGINS.left) + ',0)')
      .call(yAxis);

    vis.selectAll('rect')
      .data(barData)
      .enter()
      .append('rect')
      .attr('x', function (d) {
        return xRange(d.date);
      })
      .attr('y', function (d) {
        return yRange(d.sum);
      })
      .attr('width', xRange.rangeBand())
      .attr('height', function (d) {
        return ((HEIGHT - MARGINS.bottom) - yRange(d.sum));
      })
      .attr('fill', 'grey')
      .on('mouseover', function (d) {
        d3.select(this)
          .attr('fill', 'blue');
      })
      .on('mouseout', function (d) {
        d3.select(this)
          .attr('fill', 'grey');
      });


  };
  $scope.updateReport();
}]);