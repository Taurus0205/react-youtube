import React from "react";

// import ChannelIntro from "../../Components/ChannelIntro/ChannelIntro";
import ChannelUser from "../../Components/ChannelUser/ChannelUser";
import ChannelNav from "../../Components/ChannelNav/ChannelNav";
import ChannelMain from "../../Components/ChannelMain/ChannelMain";
import ChannelRecommend from "../../Components/ChannelRecommend/ChannelRecommend";
import ChannelVideo from "../../Components/ChannelVideo/ChannelVideo";

function Channel() {
  return (
    <>
      <div className="channel-wrapper">
        <ChannelUser />
        <div className="channel-user-component-wrapper">
          <div>
            <ChannelNav />
            <ChannelMain />
          </div>
          <ChannelRecommend />
        </div>
        <ChannelVideo />
      </div>
    </>
  );
}

export default Channel;
