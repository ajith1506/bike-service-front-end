import React from "react";
import "./Working.css";
import { styled } from "@mui/system";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
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

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
}));

const Working = () => {
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
            <StyledPaper elevation={3}>
              <Typography variant="h6" component="h1">
                Select Your Bike
              </Typography>
              <br />
              <Typography>We Service most makes and models</Typography>
            </StyledPaper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="primary">
              <SettingsIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <StyledPaper elevation={3}>
              <Typography variant="h6" component="h1">
                Select The Perfect Bike Service
              </Typography>
              <br />
              <Typography>From Yamaha's broad portfolio of Services</Typography>
            </StyledPaper>
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
            <StyledPaper elevation={3}>
              <Typography variant="h6" component="h1">
                Get A Reasonable Quote
              </Typography>
              <br />
              <Typography>
                Get a fair and reasonable quote from our website
              </Typography>
            </StyledPaper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="primary">
              <BookmarksIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <StyledPaper elevation={3}>
              <Typography variant="h6" component="h1">
                Book An Appointment
              </Typography>
              <br />
              <Typography>
                We offer Free pickup and drop for all services booked
              </Typography>
            </StyledPaper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="primary" variant="outlined">
              <WeekendIcon />
            </TimelineDot>
          </TimelineSeparator>
          <TimelineContent>
            <StyledPaper elevation={3}>
              <Typography variant="h6" component="h1">
                Relax
              </Typography>
              <br />
              <Typography>
                Relax and spend time on other things that matter
              </Typography>
            </StyledPaper>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
};

export default Working;
