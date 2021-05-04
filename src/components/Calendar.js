import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import { date } from 'yup/lib/locale';
import TrackDetailsScreen from '../screens/TrackDetailsScreen';

const TrackingCalendar = (props) => {
    return (
        <Calendar
        theme={{
            backgroundColor: '#F6F9FF',
            calendarBackground: '#F6F9FF',
            textSectionTitleColor: '#b6c1cd',
            textSectionTitleDisabledColor: '#d9e1e8',
            selectedDayBackgroundColor: '#00adf5',
            selectedDayTextColor: '#6C63FF',
            todayTextColor: '#FF5A5F',
            dayTextColor: '#484848',
            textDisabledColor: '#d9e1e8',
            dotColor: '#00adf5',
            selectedDotColor: '#ffffff',
            arrowColor: '#FF5A5F',
            disabledArrowColor: '#c1c1c1',
            monthTextColor: '#FF5A5F',
            indicatorColor: 'blue',
            textDayFontWeight: '300',
            textMonthFontWeight: 'bold',
            textDayHeaderFontWeight: '300',
            textDayFontSize: 12,
            textMonthFontSize: 18,
            textDayHeaderFontSize: 14
          }}
          onDayPress={(day) => {
            const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];

            const dateString = month[day.month - 1] + ", " + day.day + " " + daysOfWeek[new Date().getDay()];
            props.navigation.navigate('TrackDetails', {
                dateString
            });
              
          }}

            // // Initially visible month. Default = Date()
            // current={'2012-03-01'}
            // // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
            // minDate={'2012-05-10'}
            // // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
            // maxDate={'2012-05-30'}
            // // Handler which gets executed on day press. Default = undefined
            // onDayPress={(day) => {console.log('selected day', day)}}
            // // Handler which gets executed on day long press. Default = undefined
            // onDayLongPress={(day) => {console.log('selected day', day)}}
            // // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
            // monthFormat={'yyyy MM'}
            // // Handler which gets executed when visible month changes in calendar. Default = undefined
            // onMonthChange={(month) => {console.log('month changed', month)}}
            // // Hide month navigation arrows. Default = false
            // hideArrows={true}
            // // Replace default arrows with custom ones (direction can be 'left' or 'right')
            // renderArrow={(direction) => (<Arrow/>)}
            // // Do not show days of other months in month page. Default = false
            // hideExtraDays={true}
            // // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
            // // day from another month that is visible in calendar page. Default = false
            // disableMonthChange={true}
            // // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
            // firstDay={1}
            // // Hide day names. Default = false
            // hideDayNames={true}
            // // Show week numbers to the left. Default = false
            // showWeekNumbers={true}
            // // Handler which gets executed when press arrow icon left. It receive a callback can go back month
            // onPressArrowLeft={subtractMonth => subtractMonth()}
            // // Handler which gets executed when press arrow icon right. It receive a callback can go next month
            // onPressArrowRight={addMonth => addMonth()}
            // // Disable left arrow. Default = false
            // disableArrowLeft={true}
            // // Disable right arrow. Default = false
            // disableArrowRight={true}
            // // Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates
            // disableAllTouchEventsForDisabledDays={true}
            // // Replace default month and year title with custom one. the function receive a date as parameter.
            // renderHeader={(date) => {/*Return JSX*/}}
            // // Enable the option to swipe between months. Default = false
            // enableSwipeMonths={true}
            // markedDates={{
            //     '2021-04-14': {selected: true, marked: true, selectedColor: 'blue'},
                
            //   }}
        />
    )
}

export default TrackingCalendar;