import React from "react";
import "./Working.css";
import { styled } from "@mui/system";
import { makeStyles } from "@mui/styles"; // Import makeStyles
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import DriveEtaIcon from "@mui/icons-material/DriveEta";
import SettingsIcon from "@mui/icons-material/Settings";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import WeekendIcon from "@mui/icons-material/Weekend";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const useStyles = makeStyles((theme) => ({
  // Define your styles here
  paper: {
    padding: theme.spacing(2),
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

const StyledPaper = styled(Paper)({
  padding: "6px 16px",
});

const Working = () => {
  const classes = useStyles(); // Use makeStyles to get the classes

  return (
    <div className="container">
      <h1>How YAMAHA Works?</h1>

      <Timeline align="alternate">
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="primary" variant="outlined">
              <DriveEtaIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" component="h1">
                Select Your Bike
              </Typography>
              <br />
              <Typography>We Service most makes and models</Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="primary">
              <SettingsIcon />
            </TimelineDot>
            <TimelineConnector className={classes.secondaryTail} />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" component="h1">
                Select The Perfect Bike Service
              </Typography>
              <br />
              <Typography>From Yamaha's broad portfolio of Services</Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="primary" variant="outlined">
              <AttachMoneyIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" component="h1">
                Get A Reasonable Quote
              </Typography>
              <br />
              <Typography>
                Get a fair and reasonable quote from our website
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="primary">
              <BookmarksIcon />
            </TimelineDot>
            <TimelineConnector className={classes.secondaryTail} />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" component="h1">
                Book An Appointment
              </Typography>
              <br />
              <Typography>
                We offer Free pickup and drop for all services booked
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="primary" variant="outlined">
              <WeekendIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" component="h1">
                Relax
              </Typography>
              <br />
              <Typography>
                Relax and spent time on other things that matter
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
};

export default Working;
