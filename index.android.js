/**
 * @providesModule JitsiMeet
 */

import { NativeModules, requireNativeComponent } from "react-native";

export const JitsiMeetView = requireNativeComponent("RNJitsiMeetView");
export const JitsiMeetModule = NativeModules.RNJitsiMeetModule;
const call = JitsiMeetModule.call;
const audioCall = JitsiMeetModule.audioCall;
JitsiMeetModule.call = (
  url,
  userInfo,
  subject,
  videoMuted,
  audioOnly,
  nativeCall
) => {
  userInfo = userInfo || {};
  call(url, userInfo, subject, videoMuted, audioOnly, nativeCall);
};
JitsiMeetModule.audioCall = (url, userInfo) => {
  userInfo = userInfo || {};
  audioCall(url, userInfo);
};
export default JitsiMeetModule;
