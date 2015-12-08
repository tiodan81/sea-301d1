$.get('tiobe.html', scraper);

function scraper(data) {
  var htmlString = data;
  var table = htmlString
      .split('<tr>') //split string into rows
      .slice(1) //remove first empty result
      .map(function(row) {
        //loop through the rows using 'map'
        return row
          .slice(0, -5) //remove the closing </tr>
          .split('<td>') //split row string into columns
          .slice(1) //remove first empty column
          .map(function(col) {
          //loop through the columns using 'map'
          //remove the closing </td>
            return col.slice(0, -5);
          });
      })
      .reduce(function(acc, obj) {
        var rank = obj.rank;
        var prevRank = obj.prevRank;
        var name = obj.name;
        if (rank < prevRank) {
          acc.push({
            rank: rank,
            prevRank: prevRank,
            name: name
          });
        }
        return acc;
      });
  console.log(table);
}
