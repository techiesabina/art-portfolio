import { Fragment } from "react";

const CONTACT_EMAIL = "mebashirova@gmail.com";

const SOCIAL_LINKS = [
  {
    name: "Behance",
    url: "https://www.behance.net/anzhelibashiro",
  },
  {
    name: "Dribbble",
    url: "https://dribbble.com/Bashirova",
  },
] as const satisfies { name: string; url: string }[];

export function Footer() {
  return (
    <footer className="mx-auto px-4 pb-12 sm:px-6 lg:px-8 max-w-3xl">
      <hr className="border-gray-200 my-10" />
      <section>
        <div className="space-y-2">
          <div className="flex flex-wrap gap-x-3 gap-y-2 text-base">
            {SOCIAL_LINKS.map((link) => {
              return (
                <Fragment key={link.name}>
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-800 hover:text-black underline"
                  >
                    {link.name}
                  </a>
                  <span className="text-gray-800">·</span>
                </Fragment>
              );
            })}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-gray-800 hover:text-black underline"
            >
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>
      </section>

      <small className="block mt-10">
        <time>{new Date().getFullYear()}</time> © Anzhelika Bashirova
      </small>
    </footer>
  );
}
