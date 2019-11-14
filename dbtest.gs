// MySQL to Google Spreadsheet By Pradeep Bheron
// Support and contact at pradeepbheron.com
// If you like my content, please consider buying me a coffee. Thank you for your support! https://www.buymeacoffee.com/yoursupport


// Find detailed tutorial with screenshots here: https://medium.com/@ipradeep/pull-and-sync-data-between-google-doc-spreadsheet-and-mysql-1d5a09d787a4
function myMySQLFetchData() { 
  
  var conn = Jdbc.getConnection('jdbc:mysql://10.1.32.221:3306/woi_prod', 'tableau_philip', 'NjbOupd2tpOIYoIY'); // Change it as per your database credentials

  var stmt = conn.createStatement();
  var start = new Date(); // Get script starting time
  
  var rs = stmt.executeQuery('SELECT * FROM `client_wish_lists`'); // It sets the limit of the maximum nuber of rows in a ResultSet object
  
  // Find detailed tutorial with screenshots here: https://medium.com/@ipradeep/pull-and-sync-data-between-google-doc-spreadsheet-and-mysql-1d5a09d787a4
  
  //change table name as per your database structure
  // If you like my content, please consider buying me a coffee. Thank you for your support! https://www.buymeacoffee.com/yoursupport 
  var doc = SpreadsheetApp.getActiveSpreadsheet(); // Returns the currently active spreadsheet
  var cell = doc.getRange('a1');
  var row = 0;
  var getCount = rs.getMetaData().getColumnCount(); // Mysql table column name count.
  
  for (var i = 0; i < getCount; i++){  
     cell.offset(row, i).setValue(rs.getMetaData().getColumnName(i+1)); // Mysql table column name will be fetch and added in spreadsheet.
  }  
  
  var row = 1; 
  while (rs.next()) {
    for (var col = 0; col < rs.getMetaData().getColumnCount(); col++) { 
      cell.offset(row, col).setValue(rs.getString(col + 1)); // Mysql table column data will be fetch and added in spreadsheet.
    }
    row++;
  }
  
  rs.close();
  stmt.close();
  conn.close();
  var end = new Date(); // Get script ending time
  Logger.log('Time elapsed: ' + (end.getTime() - start.getTime())); // To generate script log. To view log click on View -> Logs.
}
// Find detailed tutorial with screenshots here: https://medium.com/@ipradeep/pull-and-sync-data-between-google-doc-spreadsheet-and-mysql-1d5a09d787a4
// If you like my content, please consider buying me a coffee. Thank you for your support! https://www.buymeacoffee.com/yoursupport
