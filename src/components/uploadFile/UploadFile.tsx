import { Check, CloudUpload, Trash2 } from "lucide-react";
import React, { useState } from "react";
import { toast } from "react-toastify";
import supabase from "../../api/supabaseClient";
import Loading from "../loading/Loading";

interface IUploadFile {
  onUploadComplete: (url: string) => void;
}


// type uploadStatus="idle"|"uploading"|"success"|"error"


const UploadFile = ({ onUploadComplete }: IUploadFile) => {
  const [file, setFile] = useState<File | null>(null);
  const [fileURL, setFileURL] = useState<string>("");
  const [progress, setProgress] = useState(false);

  const [hover, setHover] = useState<null | "green" | "red">(null);
  const MAX_SIZE = 2 * 1024 * 1024;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (!selected) return;
    console.log(selected);

    if (!selected?.type.startsWith("image/")) {
      toast.error("فرمت وارد شده معتبر نیست  فقط png,jpeg معتبر است");
      return;
    }
    if (selected?.size >= MAX_SIZE) {
      toast.error("سایز عکس از 2 مگابایت بیشتر است");
      return;
    }
    const url = URL.createObjectURL(selected);
    setFile(selected);
    setFileURL(url);
  };

  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); // ← پرانتز اضافه شد
    if (fileURL) URL.revokeObjectURL(fileURL);
    setFile(null);
    setFileURL("");
  };


  const handleConfirm = async () => {
    if (!file) return;
    const path = `product-images/${Date.now()}_${file.name}`;
    setProgress(true);
    const { data, error } = await supabase.storage
      .from("product-images")
      .upload(path, file);
console.log(data);

    if (error) {
      console.error(error);
      toast.error("آپلود فایل با خطا مواجه شد");
      setProgress(false);
      return;
    }

    const { data: publicData } = supabase.storage
      .from("product-images")
      .getPublicUrl(path);

    setFile(null); // فایل محلی پاک میشه
    setFileURL(publicData.publicUrl); // ولی URL آپلود شده باقی میمونه
    setProgress(false);
    onUploadComplete(publicData.publicUrl);
  };

  return (
    <div className=" w-full h-24    mt-3 shadow-inner  rounded-xl   ">
      {progress ? (
        <div className="h-full w-full">
          <Loading />
        </div>
      ) : file ? (
        <div
          className={`w-full  h-full relative flex text-xs text-center space-y-1 flex-col items-center justify-center  gap-2 border-2   rounded-lg ${
            hover === "green"
              ? "border-emerald-500 duration-200 border-dashed"
              : hover === "red"
              ? " border-red-400 duration-200 border-dashed"
              : "border-gray-200  "
          } `}
        >
          <img
            className=" p-2 roundec-xl  object-center rounded-2xl  w-full h-full object-cover"
            src={fileURL}
            alt=""
          />
          <div className="flex absolute -left-4 top-7 flex-col rounded-full overflow-hidden py-1">
            <button
              type="button"
              onMouseEnter={() => setHover("red")}
              onMouseLeave={() => setHover(null)}
              onClick={handleDelete}
              className=" group-hover:border-red-400/50 cursor-pointer duration-200 group-hover: text-red-400 hover:text-red-500    bg-white p-1    "
            >
              <Trash2 size={22} className=" hoverscale-105 duration-200" />
            </button>
            <button
              type="button"
              onMouseEnter={() => setHover("green")}
              onMouseLeave={() => setHover(null)}
              onClick={handleConfirm}
              className=" group-hover:border-emerald-400/50 cursor-pointer duration-200 group-hover: text-emerald-400 hover:text-emerald-500    bg-white p-1    "
            >
              <Check size={22} className=" hoverscale-105 duration-200" />
            </button>
          </div>
          <div className="absolute w-full justify-between gap-4 text-indigo-500   rounded-xl   -top-6  flex">
            <p className="flex"> نام فایل: {file.name.length > 20 ? file.name.slice(0,14) + "…" + file.type : file.name + " - " +file.type}</p>
            <p> حجم فایل: {(file.size/1024).toFixed(2)}<span className="ml-1">KB</span> </p>
          </div>
        </div>
      ) : (
        <label
          htmlFor="uploadFile"
          onMouseEnter={() => setHover("red")}
          onMouseLeave={() => setHover(null)}
          className={`${
            hover ? "border-indigo-400 border-dashed  " : "border-gray-200"
          }  duration-200 group rounded-xl  border  flex-col overflow-hidden boreder-2 bg-indigo-50/50 h-full w-full flex items-center justify-center cursor-pointer `}
        >
          <CloudUpload className="text-indigo-500 group-hover:scale-120 mb-2" />
          <p className="text-xs text-indigo-700">
            {" "}
            حجم فایل نباید بیشتر از 2‌مگابایت باشد{" "}
          </p>
        </label>
      )}

      <input
        id="uploadFile"
        className="hidden"
        type="file"
        accept="image/*"
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
};

export default UploadFile;
