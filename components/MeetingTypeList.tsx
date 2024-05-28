"use client";

import { useState } from "react";
import HomeCard from "./HomeCard";

const MeetingTypeList = () => {
  const [meetingState, setMeetingState] = useState<
    "isScheduleMeting" | "isJoiningMeeting" | "isInstantMeeting" | undefined
  >();

  return (
    <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
      <HomeCard
        img="/icons/add-meeting.svg"
        title="New Meeting"
        description="Start new meet"
        handleClick={() => {
          setMeetingState("isJoiningMeeting");
        }}
      />
      <HomeCard
        img="/icons/schedule.svg"
        title="Schedule Meeting"
        description="Plan new meet"
        handleClick={() => {
          setMeetingState("isScheduleMeeting");
        }}
      />
      <HomeCard
        img="/icons/add-meeting.svg"
        title="New Meeting"
        description="Start new meet"
        handleClick={() => {
          setMeetingState("isJoiningMeeting");
        }}
      />
      <HomeCard
        img="/icons/add-meeting.svg"
        title="New Meeting"
        description="Start new meet"
        handleClick={() => {
          setMeetingState("isJoiningMeeting");
        }}
      />
    </section>
  );
};

export default MeetingTypeList;
