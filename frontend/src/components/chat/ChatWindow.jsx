import { useUpload } from "../../context/UploadContext";
import { STATUS } from "../../utils/status";

import Welcome from "./Welcome";
import Processing from "./Processing";
import ChatScreen from "./ChatScreen";

const ChatWindow = () => {
  const { status } = useUpload();

  return (
    <div className="w-full h-full rounded-2xl bg-slate-900 border border-violet-900 overflow-hidden flex">
      {status === STATUS.IDLE && <Welcome />}
      {status === STATUS.UPLOADING && <Processing />}
      {status === STATUS.READY && <ChatScreen />}
    </div>
  );
};

export default ChatWindow;