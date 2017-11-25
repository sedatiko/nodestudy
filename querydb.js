// typical approach
var conn = getDbConnection(connstr);
var stmt = conn.createStatement();
var results = stmt.executeQuery(sqlQuery);
for(var i=0; i<results.length; i++){
    // print results[i];
}



// Asynch Node Approach
getDbConnection(connstr, function(err, conn){
    conn.createStatement(function(err, stmt){
        var results = stmt.executeQuery(sqlQuery);
        results.on('row',function(result){
            // print result 
        });
    });
});