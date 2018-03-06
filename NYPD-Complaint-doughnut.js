// this is the code for creating the doughnut Chart for the differnet boroughs in Network City//
// loading data and choosing the columns and counting the number of crimes reported in each of the 5 boroughs.//

			//Width and height

			var w = 400;
			var h = 400;
// this is calculated from matlab by normalizing the number of reported crimes in each borough.


			var outerRadius = w / 2;
			var innerRadius = w / 3;
			var arc = d3.arc()
						.innerRadius(innerRadius)
						.outerRadius(outerRadius);

			var pie = d3.pie();

			//Easy colors accessible via a 10-step ordinal scale
			var color = d3.scaleOrdinal(d3.schemeCategory10);

			//Create SVG element

			var svg = d3.select("#Donought-chart")
						.append("svg")
						.attr("width", w)
						.attr("height", h);

			//Set up groups
			d3.select("#doughnut")
        .on("click", function(){
/////////////////////////////////////////////////////////////////////////////////////
// these are the raw numbers from filtering the data
//Queens: 1,105,621
//Bryklen: 1,666,903
// Manhaten: 1,331,760
//Staten island: 265,641
//BRONX: 1,209,647
//Total: 5,580,035
// Note that there is also  463 with no values. We have deleted these records from the
// calculations.
/////////////////////////////////////////////////////////////////////////////////////
// these are the percentages from the data
/////////////////////////////////////////////////////////////////////////////////////

var dataset = [  19.8155,  29.8751 ,  23.8685  ,  4.7610 ,  21.6799 ];
			var arcs = svg.selectAll("g.arc")
						  .data(pie(dataset))
						  .enter()
						  .append("g")
						  .attr("class", "arc")
						  .attr("transform", "translate(" + outerRadius + "," + outerRadius + ")");

			//Draw arc paths
			arcs.append("path")
			    .attr("fill", function(d, i) {
			    	return color(i);
			    })
			    .attr("d", arc);

			// DRAW SLICE LABELS

			var labels = ['Queens', 'Brykklen', 'Manhaten', 'Staten island', 'the BRONX'];
			arcs.append("text")
			    .attr("transform", function(d) {
			    	return "translate(" + arc.centroid(d) + ")";
			    })
			    .attr("text-anchor", "middle")
			    .text(function(d) {
			    	return d.value;
			    });

				});
