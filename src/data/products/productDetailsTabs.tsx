import { Info, FileText, List, MessageCircle, HelpCircle } from "lucide-react";
import Overview from "../../components/productTabs/Overview";
import ExpertReview from "../../components/productTabs/ExpertReview";
import Specs from "../../components/productTabs/Specs";
import Comments from "../../components/productTabs/Comments";
import Questions from "../../components/productTabs/Questions";



export const productDetailsTabs = [
  { id: 1, render: () => <Overview />, displayName: "معرفی", name: "overview", icon: <Info className="text-gray-500" /> },
  { id: 2, render: () => <ExpertReview />, displayName: "بررسی تخصصی", name: "expertReview", icon: <FileText className="text-gray-500" /> },
  { id: 3, render: () => <Specs />, displayName: "مشخصات", name: "specs", icon: <List className="text-gray-500" /> },
  { id: 4, render: () => <Comments />, displayName: "دیدگاه‌ها", name: "comments", icon: <MessageCircle className="text-gray-500" /> },
  { id: 5, render: () => <Questions />, displayName: "پرسش‌ها", name: "questions", icon: <HelpCircle className="text-gray-500" /> },
];
