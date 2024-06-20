NOTE: Pagination 
to enable the user for paginating trough the data is should :
Tansfrorm the data structure 
This Data = [{..},{..},{..}] 
To 
This Data = {
          results = [{..},{..},{..}],
          Page:1,
          total_docs:10
},
Explanation 
// result is the fetched data from Db 
// page is the current page (or step ) od user
//total_docs is the current data left in db