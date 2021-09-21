import React from "react";

// import ChannelIntro from "../../Components/ChannelIntro/ChannelIntro";
import ChannelUser from "../../Components/ChannelUser/ChannelUser";
import ChannelNav from "../../Components/ChannelNav/ChannelNav";
import ChannelMain from "../../Components/ChannelMain/ChannelMain";

function Channel() {
  return (
    <>
      <div className="channel-wrapper">
        <ChannelUser />
        <ChannelNav />
        <ChannelMain />
      </div>
    </>
  );
}

export default Channel;
