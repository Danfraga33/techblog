// import PopularArticles from "./PopularArticles";

// import magazineCover from "@/public/images/homepage/magazine-cover.jpg";
import { Button } from "../ui/button";
import NewsletterSignUp from "./NewsletterSignup";

export default function Sidebar() {
  return (
    <aside>
      <h3 className="mb-2 font-semibold uppercase">Printmagazine</h3>
      <p className="text-5xl font-semibold">03/2022</p>
      <img
        className="w-[20rem] pb-4 pt-8"
        src="/chip.png"
        alt="A rust-colored magazine cover, showing a sculpture of a man, the words 'FYRRE MAGAZINE' on the top left and '03/2022' on the bottom right, a gold badge just above with 'EXCLUSIVE JAKOB GRONBERG INTERVIEW' printed on it, and an arrow pointing in the bottom right corner"
      />
      <Button>Order</Button>
      {/* <PopularArticles /> */}
      <div className="mt-16 bg-[#f8f8f8] p-[1.88rem]">
        <h3 className="mb-2 font-semibold uppercase">Newsletter</h3>
        <p className="heading3-title mb-4">Design News to your Inbox</p>
        <NewsletterSignUp />
      </div>
    </aside>
  );
}
