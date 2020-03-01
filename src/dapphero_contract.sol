pragma solidity ^0.6.0;


contract C {

    string case_id;
    string city;
    string date;

    event Event(string case_id, string city, string date);

    function recordCase(string memory _case_id, string memory _city, string memory _date) public {
    case_id = _case_id;
    city = _city;
    date = _date;
    emit Event(case_id, city, date);
   }
}