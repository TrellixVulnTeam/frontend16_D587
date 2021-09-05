import React from "react";
import Calendar from "node_modules/@ericz1803/react-google-calendar";
import { css } from "node_modules/@emotion/react";
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import DatePageHeader from "components/Headers/DatePageHeader.js";
import DarkFooter from "components/Footers/DarkFooter.js";

const API_KEY = "YOUR_API_KEY";
let calendars = [
  {calendarId: "09opmkrjova8h5k5k46fedmo88@group.calendar.google.com", color: "#B241D1"}, //add a color field to specify the color of a calendar
  {calendarId: "hkr1dj9k6v6pa79gvpv03eapeg@group.calendar.google.com"}, //without a specified color, it defaults to blue (#4786ff)
  {calendarId: "rg4m0k607609r2jmdr97sjvjus@group.calendar.google.com", color: "rgb(63, 191, 63)"} //accepts hex and rgb strings (doesn't work with color names)
];

let styles = {
  //you can use object styles (no import required)
  calendar: {
    borderWidth: "3px", //make outer edge of calendar thicker
  },
  
  //you can also use emotion's string styles
  today: css`
   /* highlight today by making the text red and giving it a red border */
    color: red;
    border: 1px solid red;
  `
}

const language = 'KR';

class Calendars extends React.Component {
  render() {
    return (
      
      <div>
        <ExamplesNavbar />
        <DatePageHeader />
        <Calendar 
        apiKey={API_KEY} 
        calendars={calendars} 
        styles={styles} 
        language={language}
        />
        <DarkFooter />
      </div>
    )
  }
}
export default Calendars;