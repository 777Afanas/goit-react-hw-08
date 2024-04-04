import { toast } from "react-hot-toast";

export default function ErrorToast(message) {
  return toast.error(message);
}