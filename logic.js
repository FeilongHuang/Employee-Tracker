var config = {
    apiKey: "AIzaSyDSOf4Kt0j-9FmJnUphzhD6JE87ACD1p0o",
    authDomain: "employee-7eba9.firebaseapp.com",
    databaseURL: "https://employee-7eba9.firebaseio.com",
    projectId: "employee-7eba9",
    storageBucket: "employee-7eba9.appspot.com",
    messagingSenderId: "438878127587"
  };
  firebase.initializeApp(config);
  var database=firebase.database();
  $("#submit").on('click',function(event){
    event.preventDefault();
    var employeename=$('#EmployeeName').val().trim();
    var role =$('#role').val().trim();
    var startdate=$('#startDate').val().trim();
    var monthlyrate=$('#MonthlyR').val().trim();
    database.ref(employeename).push().set({
    employeename:employeename,
    role:role,
    startdate:startdate,
    monthlyrate:monthlyrate
    });
  })