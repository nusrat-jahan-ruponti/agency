import clintreview from "../../../assets/clindreview.png";
import {
  FaQuoteLeft,
  FaChevronLeft,
  FaChevronRight,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import Container from "../../ui/Container";

const arrowBtn =
  "flex h-9 w-9 items-center justify-center rounded-full bg-white text-xs text-gray-900 shadow-md dark:bg-gray-800 dark:text-white";
const socialBtn =
  "flex h-9 w-9 items-center justify-center rounded bg-indigo-50 text-sm text-slate-800 dark:bg-gray-800 dark:text-white";

export default function ClientReviews() {
  return (
    <Container className="grid overflow-hidden lg:grid-cols-[526fr_746fr] items-center">
      <div className="flex items-center bg-gradient-to-br from-[#eef0ff] to-[#f9e9fb] px-8 py-12 dark:from-gray-900 dark:to-gray-900 lg:px-14 mt-[112px] mb-[112px] h-[441px]">
        <h2 className="max-w-[360px] text-[40px] font-bold leading-[1.3] text-gray-900 dark:text-white">
          What Our Clients Say About Silicon Studio
        </h2>
      </div>

  
      <div className="p-4 lg:p-0 lg:pl-6 h-[441px]">
        <div className="rounded-xl bg-white p-8 shadow-[0_4px_24px_rgba(60,60,120,0.12)] dark:bg-gray-900 lg:p-12">
          <div className="flex items-start justify-between">
            <span className="flex h-[52px] w-[52px] items-center justify-center rounded-lg bg-indigo-500 text-xl text-white shadow-lg shadow-indigo-500/30">
              <FaQuoteLeft />
            </span>
            <div className="flex gap-3">
              <button type="button" aria-label="Previous" className={arrowBtn}>
                <FaChevronLeft />
              </button>
              <button type="button" aria-label="Next" className={arrowBtn}>
                <FaChevronRight />
              </button>
            </div>
          </div>

          <p className="mt-8 text-lg leading-8 text-slate-600 dark:text-gray-300">
            Vestibulum nunc lectus auctor quis. Natoque lectus tortor lacus, eu. Nunc feugiat nisl
            maecenas nulla hac morbi. Vitae, donec facilisis sed nunc netus. Venenatis posuere
            faucibus enim est. Vel dignissim morbi blandit morbi tellus. Arcu ullamcorper quis enim.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="h-[60px] w-[60px] overflow-hidden rounded-full bg-indigo-200 dark:bg-gray-700">
                <img src={clintreview} alt="" className="h-full w-full object-cover" />
              </div>
              <div>
                <p className="font-bold text-gray-900 dark:text-white">Annette Black</p>
                <p className="text-sm text-slate-400">QA Engineer in Company Name</p>
              </div>
            </div>

            <div className="flex gap-3">
              <a href="#" aria-label="Facebook" className={socialBtn}><FaFacebookF /></a>
              <a href="#" aria-label="Twitter" className={socialBtn}><FaTwitter /></a>
              <a href="#" aria-label="Instagram" className={socialBtn}><FaInstagram /></a>
            </div>
          </div>
          <div className="mt-12 flex items-center justify-center gap-3">
            <span className="h-1.5 w-6 rounded-full bg-indigo-500" />
            <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
            <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
          </div>
        </div>
      </div>
    </Container>
  );
}