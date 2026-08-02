import { uploadDocument } from "../../services/uploadService";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { useUpload } from "../../context/UploadContext";
import { STATUS } from "../../utils/status";
import toast from "react-hot-toast";
import { RiUploadCloud2Line } from "react-icons/ri";
import Card from "../common/Card";

const UploadBox = () => {
  const {
    setStatus,
    setCurrentDocument,
    setConversationId,
    documents,
    setDocuments,
  } = useUpload();
  const handleUpload = async (file) => {
    try {
      setStatus(STATUS.UPLOADING);

      const response = await uploadDocument(file);

      if (response.success) {
        toast.success("PDF uploaded successfully!");

        setCurrentDocument(file.name);

        setConversationId(response.conversation._id);

        setDocuments((prev) => [response.conversation, ...prev]);

        setStatus(STATUS.READY);
      } else {
        setStatus(STATUS.ERROR);
        toast.error(response.message);
      }
    } catch (error) {
      console.error(error);

      setStatus(STATUS.ERROR);

      toast.error("Upload Failed");
    }
  };
  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      handleUpload(acceptedFiles[0]);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      "application/pdf": [".pdf"],
    },
    multiple: false,
    onDrop,
  });

  return (
  <Card
    className={`
      p-6
      md:p-8
      lg:p-10
      border-2
      border-dashed
      rounded-2xl
      transition-all
      duration-300
      cursor-pointer

      ${
        isDragActive
          ? "border-violet-500 bg-violet-950/20 scale-[1.02]"
          : "border-violet-900 hover:border-violet-600 hover:bg-slate-800/40"
      }
    `}
  >
    <div
      {...getRootProps()}
      className="flex flex-col items-center justify-center text-center"
    >
      <input {...getInputProps()} />

      <RiUploadCloud2Line
        className="
          text-5xl
          md:text-6xl
          text-violet-500
          mb-5
        "
      />

      <h2
        className="
          text-xl
          md:text-2xl
          font-bold
          text-white
        "
      >
        Drag & Drop your PDF
      </h2>

      <p
        className="
          mt-3
          text-sm
          md:text-base
          text-slate-400
        "
      >
        or click anywhere to browse
      </p>

      <div className="mt-6 space-y-2 text-sm text-slate-500">
        <p>📄 PDF files only</p>
        <p>📦 Maximum size: 10 MB</p>
        <p>🤖 AI-powered document understanding</p>
      </div>
    </div>
  </Card>
);
};

export default UploadBox;
