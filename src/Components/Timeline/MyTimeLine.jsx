import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';

export default function CustomizedTimeline() {
    return (
        <Timeline
            sx={{
                [`& .${timelineItemClasses.root}:before`]: {
                    flex: 0,
                    padding: 0,
                },
            }}
        >
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot color="primary">
                        <LaptopMacIcon />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }} className='text-white'>
                    <Typography variant="h6" component="span">
                        FREELANCER
                    </Typography>
                    <Typography>I WORK FOR ME</Typography>
                    <Typography>2018 - NOW</Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot color="primary">
                        <LaptopMacIcon />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }} className='text-white'>
                    <Typography variant="h6" component="span">
                        Vice President of Technology
                    </Typography>
                    <Typography>Koushyar High School</Typography>
                    <Typography>2018 - NOW</Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot color="primary">
                        <EditIcon />
                    </TimelineDot>
                    {/*<TimelineConnector />*/}
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }} className='text-white'>
                    <Typography variant="h6" component="span">
                        WORK & IT TEACHER
                    </Typography>
                    <Typography>Koushyar High School</Typography>
                    <Typography>2018 - 2019</Typography>
                </TimelineContent>
            </TimelineItem>
        </Timeline>
    );
}
